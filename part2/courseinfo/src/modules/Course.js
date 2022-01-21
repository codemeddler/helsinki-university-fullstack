import React from "react"

const Content=( props ) =>
  {
    return ( <>
      { props.parts.map ( part => ( <Part content={ part } /> ) ) }
    </> )
  }
const Course=( props ) =>
  {
    return ( <section>
      <Header title={ props.course.name } />
      <Content parts={ props.course.parts } />
    </section> )
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
export default Course