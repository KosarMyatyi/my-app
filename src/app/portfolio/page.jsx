import Link from 'next/link';
import cls from './page.module.css'

const Portfolio = () => {
  return (
    <div className={cls.container}>
      <h1 className={cls.selectTitle}>Choose a gallery</h1>
      <div className={cls.items}>
        <Link href='portfolio/illusrations' className={cls.item}>
          <span className={cls.title}>Illustrarions</span>
        </Link>
        <Link href='portfolio/websites' className={cls.item}>
          <span className={cls.title}>Websites</span>
        </Link>
        <Link href='portfolio/application' className={cls.item}>
          <span className={cls.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;