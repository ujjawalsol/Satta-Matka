import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';

const MilanMorning = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/MilanMorning');
      // console.log('Response:', response);
      setHtmlData(response.MilanMorning);
      // console.log('htmlData:', response.Home);
    }
    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlData }} />
  );
}

export default MilanMorning;