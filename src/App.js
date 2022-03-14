import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(res => res.json())
    .then(data => setState(data.students))
  })

  const average = (gradesArray) => {
    var foo = gradesArray.map((item) => {
      return parseInt(item, 10)
    })
    return foo.reduce((a, b) => a + b) / gradesArray.length
  }

  return (
    <div className="App">
      {state.map((student, i) => (
        <div key={i}>
          <img src={student.pic} alt='headshot' />
          <h3>{`${student.firstName} ${student.lastName}`}</h3>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {average(student.grades)}%</p>
        </div>
      ))}
    </div>
  );
}

export default App;
