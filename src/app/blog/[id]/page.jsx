import Image from 'next/image'
import cls from './page.module.css'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BlogId = async ({ params }) => {
  const data = await getData(params.id)

  return (
    <div className={cls.container}>
      <div className={cls.top}>
        <div className={cls.info}>
          <h1 className={cls.title}>{data.title}</h1>
          <p className={cls.desc}>
            {data.body}
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