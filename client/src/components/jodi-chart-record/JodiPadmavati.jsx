import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';

const JodiPadmavati = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', 'JodiPadmavati')
      console.log('Response:', response);
      setHtmlData(response.JodiPadmavati);
      console.log('htmlData:', response.JodiPadmavati);
    }
    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlData }} />
  );
}

export default JodiPadmavati;