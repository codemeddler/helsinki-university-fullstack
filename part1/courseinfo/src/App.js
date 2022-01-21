import React from "react"

const Content=( props ) =>
  {
    return ( <>
      <Part content={ props.parts[ 0 ] } />
      <Part content={ props.parts[ 1 ] } />
      <Part content={ props.parts[ 2 ] } />
    </> )
  }
const Header=( props ) =>
  {
    return ( <header>
      <h1>{ props.title }</h1>
    </header> )
  }
const Part=( props ) =>
  {
    return ( <p>
      { props.content.name } { props.content.exercises }
    </p> )
  }
const Total=( props ) =>
  {
    let sum=0
    props.parts.forEach ( part => sum+=part.exercises )
    return ( <p>
      Number of exercises { sum }
    </p> )
  }
const App=() =>
  {
    const course={
      name: "Half Stack application development",
      parts: [{
        name: "Fundamentals of React",
        exercises: 10
      }, {
        name: "Using props to pass data",
        exercises: 7
      }, {
        name: "State of a component",
        exercises: 14
      }]
    }
    return ( <main>
      <Header title={ course.name } />
      <Content parts={ course.parts } />
      <Total parts={ course.parts } />
    </main> )
  }
export default App