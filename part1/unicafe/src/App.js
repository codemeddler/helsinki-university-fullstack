import React, { useState } from "react"

const average=( values ) =>
  {
    if ( values.length <= 0 )
      {
        return "N/A"
      }
    // Slightly hacky, but whatever
    let average=( values[ 0 ] - values[ 2 ] ) / values.length
    return average
  }
const percentage=( first, second ) =>
  {
    if ( second === 0 )
      {
        return "N/A"
      }
    return ( first / second ) * 100 + "%"
  }
const total=( values ) =>
  {
    let sum=0
    values.forEach ( value => sum+=value )
    return sum
  }
const Button=( props ) =>
  {
    return ( <button onClick={ props.handleClick }>{ props.title }</button> )
  }
const FeedbackStatistics=( props ) =>
  {
    let hasFeedback=false
    props.values.forEach ( number => hasFeedback=hasFeedback || number !== 0 )
    if ( !hasFeedback )
      {
        return ( <section>
          <Header title={ "Feedback statistics" } />
          <p>No feedback yet</p>
        </section> )
      }
    let totalValue=total ( props.values )
    let averageValue=average ( props.values )
    let positive=percentage ( props.values[ 0 ], totalValue )
    return ( <section>
      <Header title={ "Feedback statistics" } />
      <table>
        <tbody>
          <Statistic title={ "Good" }
                     value={ props.values[ 0 ] }
          />
          <Statistic title={ "Neutral" }
                     value={ props.values[ 1 ] }
          />
          <Statistic title={ "Bad" }
                     value={ props.values[ 2 ] }
          />
          <Statistic title={ "All" }
                     value={ totalValue }
          />
          <Statistic title={ "Average" }
                     value={ averageValue }
          />
          <Statistic title={ "Positive" }
                     value={ positive }
          />
        </tbody>
      </table>
    </section> )
  }
const Header=( props ) =>
  {
    return ( <header>
      <h1>{ props.title }</h1>
    </header> )
  }
const Statistic=( props ) =>
  {
    return ( <tr>
      <td>{ props.title }</td>
      <td>{ props.value }</td>
    </tr> )
  }
const App=() =>
  {
    const [good, setGood]=useState ( 0 )
    const [neutral, setNeutral]=useState ( 0 )
    const [bad, setBad]=useState ( 0 )
    return ( <main>
      <Header title={ "Give feedback" } />
      <Button title={ "Good" }
              handleClick={ () => setGood ( good + 1 ) }
      />
      <Button title={ "Neutral" }
              handleClick={ () => setNeutral ( neutral + 1 ) }
      />
      <Button title={ "Bad" }
              handleClick={ () => setBad ( bad + 1 ) }
      />
      <FeedbackStatistics values={ [good, neutral, bad] } />
    </main> )
  }
export default App