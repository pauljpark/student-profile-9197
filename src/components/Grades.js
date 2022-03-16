function Grades({student}) {
    return (
        student.grades.map((grade, i) => (
            <p key={i}>{`Test ${i + 1}: ${grade}%`}</p>
        ))
    )
}

export default Grades
