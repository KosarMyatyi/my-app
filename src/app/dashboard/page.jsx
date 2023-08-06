"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";
import cls from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const data = await res.json()

  //     setData(data)
  //     setIsLoading(false)
  //   };
  //   getData()
  // },[]);

  // console.log(data);

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status == "loading") {
    return <p>Loading...</p>;
  }
  if (session.status == "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`api/posts/${id}`, {
        method: "DELETE"
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  }
  
  if (session.status == "authenticated") {
    return (
      <div className={cls.container}>
        <div className={cls.posts}>
          {isLoading
            ? "Loading"
            : data?.map((post) => (
                <div className={cls.post} key={post._id}>
                  <div className={cls.imgContainer}>
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={cls.postTitle}>{post.title}</h2>
                  <span
                    className={cls.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>

        <form className={cls.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={cls.input} />
          <input type="text" placeholder="Desc" className={cls.input} />
          <input type="text" placeholder="Image" className={cls.input} />
          <textarea cols="30" rows="10" className={cls.textArea} />
          <button className={cls.button}> Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;