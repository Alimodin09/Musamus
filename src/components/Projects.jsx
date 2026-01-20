import React from 'react'
import projects from '../data/projects'
import useInView from '../hooks/useInView'
import { motion } from 'framer-motion'

export default function Projects(){
  const [ref, inView] = useInView({rootMargin: '-80px'})

  return (
    <section id="projects" className="section" ref={ref} aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <div className={`grid projects-grid`}>
        {projects.map(p=> (
          <motion.article key={p.id} className="card" whileHover={{ y:-6, boxShadow:'0 18px 28px rgba(16,24,40,0.12)' }} initial={{opacity:0, y:10}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.45}}>
            <h3>{p.title}</h3>
            <p style={{color:'var(--muted)'}}>{p.description}</p>
            <div className="tags">
              {p.tech.map(t=> <span className="tag" key={t}>{t}</span>)}
            </div>
            <div style={{marginTop:6}}>
              <a href={p.live}>Live</a> · <a href={p.repo}>Repo</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
