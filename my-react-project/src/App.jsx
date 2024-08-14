import React, { useState } from 'react'
import "./App.css"
import { Toggle } from './components/Toggle';
import useLocalStorage from "use-local-storage"



export const App = () => {
  const preference = window.matchMedia("(prefers-color-schema: dark)").matches;
  const[isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <Toggle
      isChecked={isDark}
      handleChange={() => setIsDark(!isDark)}
      />
      <h1 className='title'>Hello World!!</h1>
      <div className='box'>
        <h2>This is a box</h2>

      </div>
    </div>
  )
}
