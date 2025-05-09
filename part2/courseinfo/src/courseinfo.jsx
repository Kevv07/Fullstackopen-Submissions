const Courseinfo = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
      const Header = ({ course }) => {
        return (
          <h1>{course}</h1>
        )
      }
    
      const Part = ({ part }) => {
        return (
          <p>
            {part.name} {part.exercises}
          </p>
        )
      }
    
      const Content = ({ parts }) => {
        return (
          <>
            {parts.map(part => <Part key={part.id} part={part} />)}
          </>
        )
      }
    
      const Total = ({ parts }) => {
        const total = parts.reduce((acc, part) => acc + part.exercises, 0)
        return (
          <p><strong>Total of {total} exercises</strong></p>
        )
      }
    
      const Course = ({ course }) => {
        return (
          <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        )
      }
    return (
        <div>
          {courses.map(course => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      )
}

export default Courseinfo;