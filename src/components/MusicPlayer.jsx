import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Standard copyright-free soft ambient/lo-fi track
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.25

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Audio autoplay blocked, click again to play:', err))
    }
  }

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.muted = false
      setIsMuted(false)
    } else {
      audioRef.current.muted = true
      setIsMuted(true)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex items-center gap-3 bg-slate-950/80 border border-slate-800/80 backdrop-blur-md px-4 py-2.5 rounded-full shadow-2xl shadow-indigo-950/20 hover:border-indigo-500/40 transition-all duration-300 group">
      
      {/* Audio details indicator */}
      <div className="flex items-center gap-2">
        <Music className={`w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors ${isPlaying ? 'animate-bounce' : ''}`} />
        <div className="hidden lg:flex flex-col text-[10px] select-none pointer-events-none">
          <span className="font-extrabold text-slate-300 leading-none mb-0.5">Lo-Fi Ambient</span>
          <span className="text-slate-500 font-light leading-none">Background Loops</span>
        </div>
      </div>

      {/* Visualizer bars */}
      {isPlaying && (
        <div className="flex items-end gap-0.5 h-3">
          <div className="w-[2px] bg-indigo-400 animate-[pulse_1s_infinite_alternate]" style={{ height: '60%' }} />
          <div className="w-[2px] bg-indigo-400 animate-[pulse_0.7s_infinite_alternate_0.2s]" style={{ height: '90%' }} />
          <div className="w-[2px] bg-indigo-400 animate-[pulse_1.2s_infinite_alternate_0.1s]" style={{ height: '40%' }} />
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-2 pl-1.5 border-l border-slate-900">
        <button
          onClick={togglePlay}
          className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
          title={isPlaying ? 'Pause' : 'Play Background Music'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={toggleMute}
          disabled={!isPlaying}
          className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 disabled:text-slate-700 disabled:bg-transparent transition-colors cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
