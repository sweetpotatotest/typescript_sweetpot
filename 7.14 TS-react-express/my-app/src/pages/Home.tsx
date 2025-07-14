import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/")
        console.log(res);
        setData(res.data as string)
      } catch (e) {
        console.log(e);
        throw new Error();
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <div>
        Home
      </div>
      <p>{data}</p>
    </>

  )
}

export default Home
