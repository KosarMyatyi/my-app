'use client'

import { signIn, useSession } from 'next-auth/react'
import cls from './page.module.css'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading</p>
  }

  if (session.status === "authenticated") {
    router?.push('dashboard')
  }

  const handleSubmit = (e) => {
    e.preventDafault()
    const email = e.targer[0].value;
    const password = e.targer[1].value;
    signIn('credentials', {email, password})
  }

  return (
    <div className={cls.container}>

      <form onSubmit={handleSubmit} className={cls.form}>
        <input type='email' placeholder='Email' className={cls.input} />
        <input type='password' placeholder='Password' className={cls.input} />
        <button className={cls.button}>Login</button>
      </form>

      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login