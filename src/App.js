import React from 'react';
import './App.css';
import HomeLite from './components/Home/HomeLite';
import HomePro from './components/Home/HomePro';

function App() {
  const [page, setPage] = React.useState(0);
  console.log(page);
  return (
    <div className="App">
      {
        page === 0 ? 
        <React.Fragment>
          <button onClick={() => setPage(1)}>Lite Mode</button>
          <button onClick={() => setPage(2)}>Pro Mode</button>
        </React.Fragment>
        :
        page === 1?
        <HomeLite/>:
        <HomePro/>
      }
    </div>
  );
}

export default App;
