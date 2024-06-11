import React, {useState, useEffect } from 'react'
import { sendRequest } from '../../utils/Axios';

const DhanashreeNight = () => {
    const [htmlData, setHtmlData] = useState('');

    useEffect(() => {
      async function fetchData() {
        const response = await sendRequest('GET', '/DhanaShreeNight')
          .catch((error) => {
            console.error('Error:', error.message);
          });
        // console.log('Api Call');
        setHtmlData(response.DhanaShreeNight)
        console.log('got response');
      }
      fetchData();
    }, []);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlData }} />
    );
  }

export default DhanashreeNight