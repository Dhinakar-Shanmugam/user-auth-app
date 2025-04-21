import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/user/${id}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
    <div className='flex justify-center items-center h-screen font-bold text-7xl 
         max-sm:text-2xl'>
      Welcome&nbsp;
      <span style={{ color: "#4B53F2" }}>
        &nbsp;{name}&nbsp;!
      </span>
    </div>
    </div>
  );
};

export default Home;
