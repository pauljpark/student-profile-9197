import { useEffect, useState } from 'react';
import Student from './components/Student'
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [ filteredList, setFilteredList ] = useState([])
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(res => res.json())
    .then(json => setList(json.students))
    .catch(err => console.log(err));

    if (searchName === '') {
      setFilteredList(list)
    } else {
      setFilteredList(
        list.filter((student) =>
          (student.firstName + student.lastName).toLowerCase().includes(searchName)
        )
      );
    }
  }, [list, searchName])

  const handleOnChange = (e) => {
    setSearchName(e.target.value)
  }

  function List() {
    return filteredList.map((student, i) => (
      <Student student={student} key={i} />
    ))
  }

  return (
    <div className='container'>
      <div className="list">
        <div className='input-container'>
          <input placeholder='Search by name' onChange={handleOnChange}/>
        </div>
          <List />
        </div>
    </div>
  );
}

export default App;
