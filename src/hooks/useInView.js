import { useEffect, useRef, useState } from 'react'

export default function useInView(options = {}){
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(()=>{
    if(!ref.current) return
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) setInView(true)
      })
    }, options)
    observer.observe(ref.current)
    return ()=> observer.disconnect()
  },[ref.current])

  return [ref, inView]
}
