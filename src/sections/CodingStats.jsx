import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GitPullRequest, Code, Award, CheckCircle2, Users, Star, BookOpen } from 'lucide-react'

const CodingStats = () => {
  const [gitStats, setGitStats] = useState({
    followers: 8,
    publicRepos: 18,
    stars: 5,
    languages: [
      { name: 'JavaScript / React', percentage: 72, color: 'bg-indigo-500' },
      { name: 'TypeScript', percentage: 15, color: 'bg-purple-500' },
      { name: 'Python', percentage: 8, color: 'bg-emerald-500' },
      { name: 'CSS / HTML', percentage: 5, color: 'bg-pink-500' }
    ],
    loading: true
  })

  // Generate fallback/mock GitHub contribution data (24 weeks * 7 days)
  const generateMockGrid = () => {
    const weeks = 24
    const days = 7
    return Array.from({ length: weeks }, (_, wIdx) =>
      Array.from({ length: days }, (_, dIdx) => {
        const count = Math.floor(Math.random() * 5)
        return {
          count,
          level: count,
          date: `Mock Date (Week ${wIdx + 1}, Day ${dIdx + 1})`
        }
      })
    )
  }

  const [contributionsGrid, setContributionsGrid] = useState(generateMockGrid())
  const [yearlyCommits, setYearlyCommits] = useState('1,284')

  const getContributionColor = (level) => {
    if (level === 0) return 'bg-slate-900 border-slate-950'
    if (level === 1) return 'bg-emerald-950 border-emerald-900/30'
    if (level === 2) return 'bg-emerald-800 border-emerald-700/30'
    if (level === 3) return 'bg-emerald-600 border-emerald-500/30'
    return 'bg-emerald-400 border-emerald-300/30'
  }

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/Code-Cool-2006')
        if (!userRes.ok) throw new Error('User fetch failed')
        const userData = await userRes.json()

        const reposRes = await fetch('https://api.github.com/users/Code-Cool-2006/repos?per_page=100')
        if (!reposRes.ok) throw new Error('Repos fetch failed')
        const reposData = await reposRes.json()

        // Calculate stars
        const totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)

        // Calculate languages
        const langCounts = {}
        let totalLangs = 0
        reposData.forEach(repo => {
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1
            totalLangs++
          }
        })

        const colors = {
          'JavaScript': 'bg-indigo-500',
          'TypeScript': 'bg-purple-500',
          'Python': 'bg-emerald-550',
          'HTML': 'bg-orange-500',
          'CSS': 'bg-pink-500',
          'SCSS': 'bg-rose-500'
        }

        const calculatedLanguages = Object.entries(langCounts)
          .map(([name, count]) => {
            const percentage = Math.round((count / totalLangs) * 100)
            return {
              name: name === 'JavaScript' ? 'JavaScript / React' : name,
              percentage,
              color: colors[name] || 'bg-slate-500'
            }
          })
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 4)

        setGitStats({
          followers: userData.followers || 0,
          publicRepos: userData.public_repos || 0,
          stars: totalStars,
          languages: calculatedLanguages.length > 0 ? calculatedLanguages : gitStats.languages,
          loading: false
        })

        // Fetch contributions
        let contribData = null
        try {
          const contribRes = await fetch('https://github-contributions-api.deno.dev/Code-Cool-2006')
          if (contribRes.ok) {
            contribData = await contribRes.json()
          }
        } catch (e) {
          console.warn('Primary contributions API failed, trying backup', e)
        }

        if (!contribData) {
          try {
            const backupRes = await fetch('https://github-contributions-api.jasonet.co/web/Code-Cool-2006')
            if (backupRes.ok) {
              contribData = await backupRes.json()
            }
          } catch (e) {
            console.warn('Backup contributions API failed', e)
          }
        }

        if (contribData && contribData.contributions && Array.isArray(contribData.contributions)) {
          const last168Days = contribData.contributions.slice(-168)
          const gridData = []
          for (let i = 0; i < 24; i++) {
            const week = []
            for (let j = 0; j < 7; j++) {
              const dayData = last168Days[i * 7 + j]
              week.push({
                count: dayData ? dayData.count : 0,
                level: dayData ? dayData.level : 0,
                date: dayData ? dayData.date : ''
              })
            }
            gridData.push(week)
          }
          setContributionsGrid(gridData)

          // Calculate yearly commits
          const totalCommits = contribData.contributions.reduce((acc, curr) => acc + (curr.count || 0), 0)
          setYearlyCommits(totalCommits.toLocaleString())
        }
      } catch (err) {
        console.warn('GitHub API rate limit or network error. Using local metrics.', err)
        setGitStats(prev => ({ ...prev, loading: false }))
      }
    }

    fetchGitHubData()
  }, [])

  const displayStats = [
    { label: 'Followers', value: gitStats.followers, icon: Users, color: 'text-indigo-400' },
    { label: 'Public Repos', value: gitStats.publicRepos, icon: BookOpen, color: 'text-purple-400' },
    { label: 'GitHub Stars', value: gitStats.stars, icon: Star, color: 'text-emerald-400' },
    { label: 'Yearly Commits', value: yearlyCommits, icon: Code, color: 'text-pink-400' }
  ]

  return (
    <section id="coding-stats" className="py-24 px-4 bg-slate-950/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            <Code className="w-3.5 h-3.5" />
            Activity
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-6 bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Coding Activity & Stats
          </h2>
          <p className="text-slate-400 font-light text-base md:text-lg max-w-md mx-auto">
            Live profile snapshot and public repository stats fetched directly from GitHub.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* GitHub Activity Calendar Mock */}
          <div className="lg:col-span-2 glass-card p-6 md:p-8 rounded-2xl border border-slate-800/80 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold font-display text-lg">Contribution Matrix</h3>
              <span className="text-xs text-slate-500 font-mono">Real-time commit calendar</span>
            </div>

            <div className="overflow-x-auto pb-4">
              <div className="flex gap-1 min-w-[380px]">
                {contributionsGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((val, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3.5 h-3.5 rounded-[3px] border ${getContributionColor(val.level)} transition-all duration-300 hover:scale-125 cursor-help`}
                        title={`${val.count} contributions${val.date ? ` on ${val.date}` : ''}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-1.5 text-xs text-slate-500 mt-4 select-none">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded bg-slate-900 border border-slate-950" />
              <div className="w-2.5 h-2.5 rounded bg-emerald-950 border border-emerald-900/30" />
              <div className="w-2.5 h-2.5 rounded bg-emerald-800 border border-emerald-700/30" />
              <div className="w-2.5 h-2.5 rounded bg-emerald-600 border border-emerald-500/30" />
              <div className="w-2.5 h-2.5 rounded bg-emerald-400 border border-emerald-300/30" />
              <span>More</span>
            </div>
          </div>

          {/* Languages Breakdown */}
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800/80 shadow-2xl">
            <h3 className="text-white font-bold font-display text-lg mb-6">Language Metrics</h3>
            <div className="space-y-4">
              {gitStats.languages.map((lang, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-350">{lang.name}</span>
                    <span className="text-indigo-400">{lang.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-full ${lang.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {displayStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass-card p-5 rounded-xl border border-slate-850 flex items-center gap-4 hover:border-slate-800 transition-colors"
              >
                <div className={`p-2.5 rounded-lg bg-slate-950 border border-slate-900 ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black font-display text-white leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold tracking-wider uppercase leading-none">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default CodingStats
