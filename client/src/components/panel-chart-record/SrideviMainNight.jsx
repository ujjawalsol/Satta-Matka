import { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';

const SrideviMainNight = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/SrideviMainNight')
        .catch((error) => {
          console.error('Error:', error.message);
        });
      // console.log('Api Call');
      setHtmlData(response.SrideviMainNight)
      console.log('got response');
    }
    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlData }} />
  );
}

export default SrideviMainNight;