import React, { useState, useRef, useEffect } from 'react'
import useInView from '../hooks/useInView'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const [ref, inView] = useInView({rootMargin:'-80px'})
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)

  function handleChange(e){
    setForm(f=>({...f,[e.target.name]:e.target.value}))
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.message){
      setStatus({type:'error',message:'Please complete all fields.'})
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if(!serviceId || !templateId || !publicKey){
      setStatus({type:'error',message:'Email service not configured. Please set env variables.'})
      return
    }

    setSending(true)
    setStatus(null)

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    }

    try{
      // send after init (more explicit and sometimes avoids 400 errors)
      await emailjs.send(serviceId, templateId, templateParams)
      setStatus({type:'success',message:'Message sent. Thank you!'})
      setForm({name:'',email:'',message:''})
      if(formRef.current) formRef.current.reset()
    }catch(err){
      // Try to extract useful info from the EmailJS error
      console.error('Email send error', err)
      const statusMsg = err && (err.text || err.message || JSON.stringify(err))
      setStatus({type:'error',message:`Failed to send message (${statusMsg}).`})
    }finally{
      setSending(false)
    }
  }

  // Initialize EmailJS with the public key for clearer behavior
  useEffect(()=>{
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if(publicKey){
      try{ emailjs.init(publicKey) }catch(e){ console.warn('EmailJS init warning', e) }
    }
  },[])

  return (
    <section id="contact" className="section" ref={ref} aria-labelledby="contact-title">
      <motion.h2 id="contact-title" initial={{opacity:0,y:8}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.45}}>Contact</motion.h2>
      <form className="form" onSubmit={handleSubmit} noValidate ref={formRef}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} aria-label="Name" />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} aria-label="Email" />
        <textarea name="message" placeholder="Message" rows="6" value={form.message} onChange={handleChange} aria-label="Message"></textarea>
        <button type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send'}</button>
        {status && <div style={{color: status.type==='error' ? '#ef4444':'#10b981'}} role="status">{status.message}</div>}
      </form>
    </section>
  )
}
