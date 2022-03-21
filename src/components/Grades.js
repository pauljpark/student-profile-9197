function Grades({student}) {
    return (
        <div className='grades'>
            {student.grades.map((grade, i) => (
                <p key={i}>{`Test ${i + 1}: ${grade}%`}</p>
            ))}
        </div>
    )
}

export default Grades
