import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const links = [
    {href:'#home',label:'Home'},
    {href:'#projects',label:'Projects'},
    {href:'#about',label:'About'},
    {href:'#contact',label:'Contact'}
  ]

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="brand">My Profile</div>
        </div>

        <div className="nav-links" role="navigation">
          {links.map(l=> <a key={l.href} href={l.href}>{l.label}</a>)}
          <ThemeToggle />
        </div>

        <button className="hamburger" aria-label="Open menu" onClick={()=>setOpen(s=>!s)}>
          ☰
        </button>
      </div>

      {open && (
        <div style={{marginTop:8,display:'flex',gap:8,flexDirection:'column',padding:'8px 12px',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12}}>
          {links.map(l=> <a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>)}
          <ThemeToggle />
        </div>
      )}
    </nav>
  )
}
