import Image from 'next/image'
import Button from '../../../components/Button/Button'
import cls from './page.module.css'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (category) => {
  const data = items[category]

  if (data) {
    return data;
  }

  return notFound()
}

const Category = ({ params }) => {
  // console.log(params);
  const data = getData(params.category)
  return (
    <div className={cls.container}>
      <h1 className={cls.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={cls.item} key={item.id}>
          <div className={cls.content}>
            <h1 className={cls.title}>{item.title}</h1>
            <p className={cls.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={cls.imgContainer}>
            <Image
              className={cls.img}
              fill={true}
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
      ))}

    </div>
  )
}

export default Category