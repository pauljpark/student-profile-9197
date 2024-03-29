import { useEffect, useState } from 'react';
import Student from './components/Student'
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [ searchName, setSearchName ] = useState('')
  const [ tagName, setTagName ] = useState('')

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(res => res.json())
    .then(json => {
      setList(json.students)
    })
    .catch(err => console.log(err));
  }, [])

  const handleOnChange = (e) => {
    setSearchName(e.target.value)
  }

  const handleTagOnChange = (e) => {
    setTagName(e.target.value)
  }

  const List = () => {
      return list.filter((student) =>
        (student.firstName + ' ' + student.lastName).toLowerCase().includes(searchName))
        .map((student, i) => (
          <Student student={student} key={i} />
        ))
  }

  return (
    <div className='container'>
      <div className="list">
        <div className='input-container'>
          <input placeholder='Search by name' onChange={handleOnChange}/>
          <input placeholder='Search by tag' onChange={handleTagOnChange}/>
        </div>
          <List />
        </div>
    </div>
  );
}

export default App;
