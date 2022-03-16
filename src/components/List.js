function List({list, searchName}) {

    // calculates grade average
    const average = (gradesArray) => {
        var foo = gradesArray.map((item) => {
          return parseInt(item, 10)
        })
        return foo.reduce((a, b) => a + b) / gradesArray.length
      }

    // if search input is blank, map the list itself
    if (searchName === '') {
      return list.map((student, i) => (
      <div className='student' key={i}>
        <img src={student.pic} alt='headshot' />
          <div className='info'>
            <h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {average(student.grades)}%</p>
          </div>
      </div>
    // if not, map out according to search terms
    ))} else {
      return list.map((student, i) => {
        if ((student.firstName + student.lastName).toLowerCase().includes(searchName.toLowerCase())) {
          return (
            <div className='student' key={i}>
              <img src={student.pic} alt='headshot' />
              <div className='info'>
                <h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {average(student.grades)}%</p>
              </div>
            </div>
          )
        }
      })
      }
  }

  export default List
