import React from 'react'
import useInView from '../hooks/useInView'
import { motion } from 'framer-motion'

export default function About(){
  const [ref, inView] = useInView({rootMargin:'-80px'})
  const skills = ['React','Accessibility','UX','Design Systems','Animation']

  return (
    <section id="about" className="section" ref={ref} aria-labelledby="about-title">
      <motion.h2 id="about-title" initial={{opacity:0,y:8}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.45}}>About</motion.h2>
      <div className="bio">
        <p style={{color:'var(--muted)'}}>I'm a maker who enjoys crafting polished, accessible interfaces. I collaborate across product and engineering to ship delightful experiences.</p>
        <div className="skills">
          {skills.map(s=> <span className="tag" key={s}>{s}</span>)}
        </div>
      </div>
    </section>
  )
}
