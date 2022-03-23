import { useState } from 'react'
import Grades from './Grades'

function Student({student, studentKey}) {
    const [click, setClick] = useState(false)
    const [tag, setTag] = useState('')
    const [ tagArray, setTagArray ] = useState([])

    // calculates grade average
    const average = (gradesArray) => {
        var foo = gradesArray.map((item) => {
          return parseInt(item, 10)
        })
        return foo.reduce((a, b) => a + b) / gradesArray.length
      }

    const handleClick = () => {
      setClick(!click);
    }

    const handleInputChange = (e) => {
      setTag(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      tagArray.push(tag)
      console.log(tagArray)
      setTag('')
    }

      return (
        <div className='student' key={studentKey}>
         <img src={student.pic} alt='headshot' />
           <div className='info'>
             <div className='student-header'>
               <h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
               <button onClick={handleClick}>{click ? '-' : '+'}</button>
             </div>
             <div className='details'>
               <p>Email: {student.email}</p>
               <p>Company: {student.company}</p>
               <p>Skill: {student.skill}</p>
               <p>Average: {average(student.grades)}%</p>
               {click ? <Grades student={student} /> : null}
               <div className='tag-container'>{tagArray.map((tag, i) => <p className='tag' key={i}>{tag}</p>)}</div>
               <form className='tag-input-container' onSubmit={handleSubmit}>
                <input  id='tag-input' 
                        placeholder='Add a tag' 
                        onChange={handleInputChange}
                        value={tag}
                />
              </form>
             </div>
           </div>
       </div>
      )
  }

  export default Student
