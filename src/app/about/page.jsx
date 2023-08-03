import Button from '../../components/Button/Button';
import cls from './page.module.css'
import Image from 'next/image';

const About = () => {
  return (
    <div className={cls.container}>
      <div className={cls.imgContainer}>
        <Image src='https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?w=996&t=st=1691055815~exp=1691056415~hmac=00670733a5b2efc5b076b6f8c711aa871cc758ff62be3cf294f15ac23fc93d79'
          fill={true}
          alt='about us'
          className={cls.img}
        />
        <div className={cls.imgText}>
          <h1 className={cls.imgTitle}>
            Lorem ipsum dolor sit
          </h1>
          <h2 className={cls.imgDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h2>
        </div>
      </div>

      <div className={cls.textContainer}>
        <div className={cls.item}>
          <h1 className={cls.title}>
            Who Are We?
          </h1>
          <p className={cls.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className={cls.item}>
          <h1 className={cls.title}>What We Do?</h1>
          <p className={cls.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>

      </div>
    </div>
  );
};

export default About;