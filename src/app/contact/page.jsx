import cls from './page.module.css'
import Image from 'next/image';
import Button from '../../components/Button/Button';

const Contact = () => {
  return (
    <div className={cls.container}>
      <h1 className={cls.title}>Let's Keep in Touch</h1>
      <div className={cls.content}>
        <div className={cls.imgContainer}>
          <Image 
          src='/contact.png' 
          alt='contact' 
          fill={true} 
          className={cls.image} 
          />
        </div>
        <form className={cls.form}>
          <input type='text' placeholder='name' className={cls.input} />
          <input type='text' placeholder='email' className={cls.input} />
          <textarea 
            className={cls.textArea}
            placeholder='message'
            cols='30' 
            rows='10'
          ></textarea>
          <Button url='#'  text='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;