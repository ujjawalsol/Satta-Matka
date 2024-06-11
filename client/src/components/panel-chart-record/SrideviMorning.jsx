import React, { useState, useEffect } from 'react';
import { sendRequest } from '../../utils/Axios';

const SrideviMorning = () => {
    const [htmlData, setHtmlData] = useState('');

    useEffect(() => {
      async function fetchData() {
        const response = await sendRequest('GET', '/SrideviMorning')
          .catch((error) => {
            console.error('Error:', error.message);
          });
        // console.log('Api Call');
        setHtmlData(response.SrideviMorning)
        console.log('got response');
      }
      fetchData();
    }, []);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlData }} />
    );
  }

export default SrideviMorning