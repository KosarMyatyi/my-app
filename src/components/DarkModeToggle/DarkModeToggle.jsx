import { useContext } from 'react'
import cls from './DarkModeToggle.module.css'
import { ThemeContext } from '../../context/ThemeContext'

const DarkModeToggle = () => {
  const {toggle, mode} = useContext(ThemeContext)
  
  return (
    <div className={cls.container} onClick={toggle}>
      <div className={cls.icon}>🌙</div>
      <div className={cls.icon}>🔆</div>
      <div className={cls.ball} style={mode === 'light' ? {left: '2px'} : {right: '2px'}}></div>
    </div>
  )
}

export default DarkModeToggle