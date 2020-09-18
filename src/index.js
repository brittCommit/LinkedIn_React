import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App () {
  const [year, setYear] = useState(2020);
  const [manager, setManager] = useState("Britt");
  const [status, setStatus] = useState("Open");
  return (
    <>
    <div>
      <h1>{year}</h1>
      <button onClick={() => setYear(year+ 1)}>New Year!</button>
    </div>
    <div>
      <h1>Manager on duty: {manager}</h1>
      <button onClick={() => setManager("Gypsy")}>New Manager</button>
    </div>
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Closed")}>Closed</button>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Back in 5")}>Break</button>
    </div>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

