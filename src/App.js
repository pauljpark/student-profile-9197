import { useEffect, useState } from 'react';
import List from './components/List'
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(res => res.json())
    .then(data => setList(data.students))
  })

  const handleOnChange = (e) => {
    setSearchName(e.target.value)
  }

  return (
    <div className='container'>
      <div className="list">
        <div className='input-container'>
          <input placeholder='Search by name' onChange={handleOnChange}/>
        </div>
        <List list={list} searchName={searchName} />
    </div>
    </div>
  );
}

export default App;
