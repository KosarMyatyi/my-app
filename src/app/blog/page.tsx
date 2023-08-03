import Link from 'next/link';
import cls from './page.module.css'
import Image from 'next/image';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store'})

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
        <Link href={`blog/${item.id}`} className={cls.container} key={item.id}>
          <div className={cls.imageContainer}>
            <Image
              src='https://img.freepik.com/premium-vector/visionary-look-to-see-future-or-search-for-opportunity-finding-way-to-success-or-discover-new-job-or-career-challenge-or-mission-concept-businessman-look-through-telescope-to-see-business-vision_212586-2120.jpg?w=996'
              alt=''
              width={400}
              height={250}
              className={cls.image}
            />
          </div>
          <div className={cls.content}>
            <h1 className={cls.title}>{item.title}</h1>
            <p className={cls.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;