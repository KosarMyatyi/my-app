import Link from 'next/link';
import cls from './page.module.css'
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData()

  return (
    <div className={cls.mainContainer}>
      {data.map((item) => (
        <Link href={`blog/${item._id}`} className={cls.container} key={item._id}>
          <div className={cls.imageContainer}>
            <Image
              src={item.img}
              alt=''
              width={400}
              height={250}
              className={cls.image}
            />
          </div>
          <div className={cls.content}>
            <h1 className={cls.title}>{item.title}</h1>
            <p className={cls.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;