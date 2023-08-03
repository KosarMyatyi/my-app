import cls from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={cls.container}>
      <div>2023 myApp. All rights reserved</div>
      <div className={cls.social}>
        <Image src='/vk.png' width={15} height={15} className={cls.icon} alt='vk'/>
        <Image src='/inst.png' width={15} height={15} className={cls.icon} alt='instagram'/>
        <Image src='/twitter.png' width={15} height={15} className={cls.icon} alt='twitter'/>
        <Image src='/yt.png' width={15} height={15} className={cls.icon} alt='youtube'/>
      </div>
    </footer>
  )
}

export default Footer
