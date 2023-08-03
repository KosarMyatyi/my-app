import cls from './Button.module.css'
import Link from 'next/link'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
      <button className={cls.container}>{text}</button>
    </Link>
  )
}

export default Button