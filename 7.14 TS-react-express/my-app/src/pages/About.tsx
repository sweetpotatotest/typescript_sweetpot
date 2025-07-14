import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface UserResponse {
  message: string;
}

const About = () => {
  const [data, setData] = useState<UserResponse|null>(null);

  useEffect(() => {
    const postUser = async () => {
      try {
        const responce = await axios.post<UserResponse>("http://localhost:4000/users", {
          name: "홀길동"
        })
        console.log(responce.data);
        setData(responce.data);
      } catch (e) {
        console.log(e)
        throw new Error();
      }
    }
    postUser()
  },[])


  return (
    <div>
      {data?.message}
    </div>
  )
}

export default About
