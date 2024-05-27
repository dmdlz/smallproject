
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:3001/web')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('webData', JSON.stringify(data));
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };
  return (
    <div>
      <button onClick={fetchData}>INU</button>
      <div id="output">
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}



export default App;
