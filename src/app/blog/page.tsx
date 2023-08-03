import Link from 'next/link';
import cls from './page.module.css'
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={cls.mainContainer}>
      <Link href='blog/test1' className={cls.container} key='1'>
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
          <h1 className={cls.title}>Title</h1>
          <p className={cls.desc}>Desc</p>
        </div>
      </Link>
      <Link href='blog/test2' className={cls.container} key='2'>
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
          <h1 className={cls.title}>Title</h1>
          <p className={cls.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;