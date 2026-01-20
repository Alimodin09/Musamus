import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div style={{display:'flex',gap:12,justifyContent:'center',marginBottom:8}}>
        <a href="#" aria-label="GitHub">GitHub</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="Twitter">Twitter</a>
      </div>
      <div style={{fontSize:13}}>© {new Date().getFullYear()} Musa — All rights reserved.</div>
    </footer>
  )
}
