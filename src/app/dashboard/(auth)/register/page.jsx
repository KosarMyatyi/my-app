'use client'
import Link from 'next/link'
import cls from './page.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };


  return (
    <div className={cls.container}>
      <h1 className={cls.title}>Create an Account</h1>
      <h2 className={cls.subtitle}>Please sign up to see dashboard</h2>
      <form className={cls.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' className={cls.input} required />
        <input type='email' placeholder='E-mail' className={cls.input} required />
        <input type='password' placeholder='Password' className={cls.input} required />
        <button className={cls.button}>
          Register
        </button>
        {error && "Something went wrong!"}
      </form>
      <span className={cls.or}> - OR - </span>
      <Link className={cls.link} href='/dashboard/login'>Login with an existing Account</Link>
    </div>
  )
}

export default Register