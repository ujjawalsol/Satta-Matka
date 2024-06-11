import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';

const JodiMilanMorning = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/JodiMilanMorning');
      // console.log('Response:', response);
      setHtmlData(response.JodiMilanMorning);
      // console.log('htmlData:', response.Home);
    }
    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlData }} />
  );
}

export default JodiMilanMorning;