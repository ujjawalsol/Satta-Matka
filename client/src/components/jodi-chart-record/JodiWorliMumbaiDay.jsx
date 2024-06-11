import { useEffect, useState } from 'react';
import { sendRequest } from '../../utils/Axios';

const JodiWorliMumbaiDay = () => {
  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await sendRequest('GET', '/JodiWorliMumbaiDay')
        .catch((error) => {
          console.error('Error:', error.message);
        });
      // console.log('Api Call');
      setHtmlData(response.JodiWorliMumbaiDay)
      console.log('got response');
    }
    fetchData();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlData }} />
  );
}

export default JodiWorliMumbaiDay;