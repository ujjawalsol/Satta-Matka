import { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';

const JodiSatyamMumbaiEvening = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/JodiSatyamMumbaiEvening')
        .catch((error) => {
          console.error('Error:', error.message);
        });
      // console.log('Api Call');
      setHtmlData(response.JodiSatyamMumbaiEvening)
      console.log('got response');
    }
    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlData }} />
  );
}

export default JodiSatyamMumbaiEvening;