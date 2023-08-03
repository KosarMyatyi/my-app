import Image from 'next/image'
import cls from './page.module.css'

const BlogId = () => {
  return (
    <div className={cls.container}>
      <div className={cls.top}>
        <div className={cls.info}>
          <h1 className={cls.title}>Title</h1>
          <p className={cls.desc}>
            desc
          </p>
          <div className={cls.author}>
            <Image
              src=''
              alt=""
              width={40}
              height={40}
              className={cls.avatar}
            />
            <span className={cls.username}>username</span>
          </div>
        </div>
        <div className={cls.imageContainer}>
          <Image
            src=''
            alt=""
            fill={true}
            className={cls.image}
          />
        </div>
      </div>
      <div className={cls.content}>
        <p className={cls.text}>
          desc
        </p>
      </div>
    </div>
  )
}

export default BlogId