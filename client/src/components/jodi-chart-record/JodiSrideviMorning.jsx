import React, { useState, useEffect } from 'react';
import { sendRequest } from '../../utils/Axios';

const JodiSrideviMorning = () => {
    const [htmlData, setHtmlData] = useState('');

    useEffect(() => {
      async function fetchData() {
        const response = await sendRequest('GET', '/JodiSrideviMorning')
          .catch((error) => {
            console.error('Error:', error.message);
          });
        // console.log('Api Call');
        setHtmlData(response.JodiSrideviMorning)
        console.log('got response');
      }
      fetchData();
    }, []);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlData }} />
    );
  }

export default JodiSrideviMorning