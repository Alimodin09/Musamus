import React, { useState } from 'react'
import useInView from '../hooks/useInView'
import { motion } from 'framer-motion'

export default function Contact(){
  const [ref, inView] = useInView({rootMargin:'-80px'})
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState(null)

  function handleChange(e){
    setForm(f=>({...f,[e.target.name]:e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error',message:'Please complete all fields.'})
      return
    }
    setStatus({type:'success',message:'Message sent (demo). Thank you!'})
    setForm({name:'',email:'',message:''})
  }

  return (
    <section id="contact" className="section" ref={ref} aria-labelledby="contact-title">
      <motion.h2 id="contact-title" initial={{opacity:0,y:8}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.45}}>Contact</motion.h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} aria-label="Name" />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} aria-label="Email" />
        <textarea name="message" placeholder="Message" rows="6" value={form.message} onChange={handleChange} aria-label="Message"></textarea>
        <button type="submit">Send</button>
        {status && <div style={{color: status.type==='error' ? '#ef4444':'#10b981'}} role="status">{status.message}</div>}
      </form>
    </section>
  )
}
