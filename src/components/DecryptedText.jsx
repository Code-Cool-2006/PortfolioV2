import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const DecryptedText = ({ text, className = "", speed = 50, maxIterations = 10 }) => {
  const [displayText, setDisplayText] = useState(text)
  const [isHovered, setIsHovered] = useState(false)
  const iterations = useRef(0)
  const intervalRef = useRef(null)
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

  const scramble = () => {
    let iteration = 0
    
    clearInterval(intervalRef.current)
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(intervalRef.current)
      }

      iteration += 1 / 3
    }, speed)
  }

  useEffect(() => {
    scramble()
    return () => clearInterval(intervalRef.current)
  }, []) // Remove 'text' dependency to prevent infinite loop if text changes rapidly, though text prop usually stable

  return (
    <motion.span
      className={`inline-block font-mono ${className}`}
      onMouseEnter={scramble}
    >
      {displayText}
    </motion.span>
  )
}

export default DecryptedText
