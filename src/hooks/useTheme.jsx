import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }){
  const themeHook = useProvideTheme()
  return <ThemeContext.Provider value={themeHook}>{children}</ThemeContext.Provider>
}

export function useTheme(){
  return useContext(ThemeContext)
}

function useProvideTheme(){
  const [theme, setTheme] = useState(() => {
    try{
      const saved = localStorage.getItem('theme')
      if(saved) return saved
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    }catch(e){}
    return 'light'
  })

  useEffect(()=>{
    try{localStorage.setItem('theme', theme)}catch(e){}
    document.documentElement.setAttribute('data-theme', theme)
  },[theme])

  const toggle = ()=> setTheme(t=> t === 'dark' ? 'light' : 'dark')

  return { theme, setTheme, toggle }
}
