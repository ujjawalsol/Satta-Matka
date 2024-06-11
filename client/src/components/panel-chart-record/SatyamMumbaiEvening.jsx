import { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';

const SatyamMumbaiEvening = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/SatyamMumbaiEvening')
        .catch((error) => {
          console.error('Error:', error.message);
        });
      // console.log('Api Call');
      setHtmlData(response.SatyamMumbaiEvening)
      console.log('got response');
    }
    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlData }} />
  );
}

export default SatyamMumbaiEvening;