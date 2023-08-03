import Image from 'next/image'
import cls from './page.module.css'
import Button from '../components/Button/Button'
import Hero from '../../public/hero.png'

export default function Home() {
  return (
    <main className={cls.container}>
      <div className={cls.item}>
        <h1 className={cls.title}>
          The Future of AI in the next few years
        </h1>
        <p className={cls.desc}>
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url='/portfolio' text='See Our Works' />
      </div>
      <div className={cls.item}>
        <Image src={Hero} alt='main photo' className={cls.img}/>
      </div>
    </main>
  )
}
