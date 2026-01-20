import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle(){
  const { theme, toggle } = useTheme()
  return (
    <motion.button
      aria-label="Toggle theme"
      onClick={toggle}
      whileTap={{ scale: 0.95, rotate: 8 }}
      style={{display:'inline-flex',alignItems:'center',gap:8,padding:8,borderRadius:8,border:'none',background:'transparent',cursor:'pointer'}}
    >
      <motion.span animate={{ rotate: theme==='dark' ? 40 : 0 }} style={{display:'inline-block'}}>
        {theme==='dark' ? '🌙' : '☀️'}
      </motion.span>
    </motion.button>
  )
}
