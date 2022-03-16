import Grades from './Grades'

function Student({student, key}) {

    // calculates grade average
    const average = (gradesArray) => {
        var foo = gradesArray.map((item) => {
          return parseInt(item, 10)
        })
        return foo.reduce((a, b) => a + b) / gradesArray.length
      }

      return (
        <div className='student' key={key}>
         <img src={student.pic} alt='headshot' />
           <div className='info'>
             <div>
               <h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
             </div>
             <div className='details'>
               <p>Email: {student.email}</p>
               <p>Company: {student.company}</p>
               <p>Skill: {student.skill}</p>
               <p>Average: {average(student.grades)}%</p>
             </div>
             <Grades student={student} />
           </div>
       </div>
      )
  }

  export default Student
