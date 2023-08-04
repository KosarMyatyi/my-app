'use client'

import { signIn } from 'next-auth/react'
import cls from './page.module.css'

const Login = () => {
  return (
    <div className={cls.container}>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login