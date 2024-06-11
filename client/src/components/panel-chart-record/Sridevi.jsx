import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';

const Sridevi = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET');
      console.log('Response:', response);
      setHtmlData(response.Sridevi);
      console.log('htmlData:', response.Sridevi);
    }
    fetchData();
  }, []);

  return (
    // <div dangerouslySetInnerHTML={{ __html: htmlData }} />

    <>
    <h1>Welcome to WOLF244</h1>
    </>
  );
}

export default Sridevi;