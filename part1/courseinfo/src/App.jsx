const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

const Header = () => {
  return (
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.excersises}
    </p>
  )
}

const Content = () => {
  return (
    <>
    <Part part={part1} excersises={exercises1} />
    <Part part={part2} excersises={exercises2} />
    <Part part={part3} excersises={exercises3} />
    </>
  )
}

const Total = () => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App
