import React from "react"
import Course from "./modules/Course.js"

const Total=( props ) =>
  {
    let sum=props.parts.reduce ( ( accumulator, currentValue ) =>
    {
      return accumulator + currentValue.exercises
    }, 0 )
    return ( <p>
      Total number of exercises { sum }
    </p> )
  }
const App=() =>
  {
    const courses=[{
      name: "Half Stack application development",
      id: 1,
      parts: [{
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      }, {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      }, {
        name: "State of a component",
        exercises: 14,
        id: 3
      }, {
        name: "Redux",
        exercises: 11,
        id: 4
      }]
    }, {
      name: "Node.js",
      id: 2,
      parts: [{
        name: "Routing",
        exercises: 3,
        id: 1
      }, {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }]
    }]
    return ( <main>
      { courses.map ( course => ( <section>
        <Course course={ course } />
        <Total parts={ course.parts } />
      </section> ) ) }
    </main> )
  }
export default App