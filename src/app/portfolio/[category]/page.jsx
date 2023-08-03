import Image from 'next/image'
import Button from '../../../components/Button/Button'
import cls from './page.module.css'

const Category = ({ params }) => {
  // console.log(params);
  return (
    <div className={cls.container}>
      <h1 className={cls.catTitle}>{params.category}</h1>
      <div className={cls.item} key='1'>
        <div className={cls.content}>
          <h1 className={cls.title}>test</h1>
          <p className={cls.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={cls.imgContainer}>
          <Image
            className={cls.img}
            fill={true}
            src='https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b'
            alt=''
           />
        </div>
      </div>
      <div className={cls.item} key='2'>
        <div className={cls.content}>
          <h1 className={cls.title}>test</h1>
          <p className={cls.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={cls.imgContainer}>
          <Image
            className={cls.img}
            fill={true}
            src='https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b'
            alt=''
           />
        </div>
      </div>
      <div className={cls.item} key='3'>
        <div className={cls.content}>
          <h1 className={cls.title}>test</h1>
          <p className={cls.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={cls.imgContainer}>
          <Image
            className={cls.img}
            fill={true}
            src='https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b'
            alt=''
           />
        </div>
      </div>
    </div>
  )
}

export default Category