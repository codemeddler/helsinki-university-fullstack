import React, { useState } from "react"

const getRandomInt=( min, max ) =>
  {
    min=Math.ceil ( min )
    max=Math.floor ( max )
    return Math.floor ( Math.random () * ( max - min ) + min )
  }
const updateVotes=( votes, selectedValue ) =>
  {
    const copy=[...votes]
    copy[ selectedValue ]+=1
    return copy
  }
const mostVoted=( anecdotes, votes ) =>
  {
    var highestIndex=0
    for ( var i=0; i < votes.length; i++ )
      {
        if ( votes[ i ] <= votes[ highestIndex ] )
          {
            continue
          }
        highestIndex=i
      }
    return ( <section>
      <header>
        <h1>Most voted anecdote</h1>
      </header>
      <p>{ anecdotes[ highestIndex ] }</p>
      <p>with { votes[ highestIndex ] } votes</p>
    </section> )
  }
const App=() =>
  {
    const anecdotes=["If it hurts, do it more often", "Adding manpower to a late software project makes it later!",
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "Premature optimization is the root of all evil.",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients"]
    const [selected, setSelected]=useState ( getRandomInt ( 0, anecdotes.length ) )
    const [votes, setVotes]=useState ( new Uint8Array ( anecdotes.length ) )
    const handleClick=() => setSelected ( getRandomInt ( 0, anecdotes.length ) )
    const handleVote=() => setVotes ( updateVotes ( votes, selected ) )
    return ( <main>
      <header>
        <h1>The Anecdote Machine</h1>
      </header>
      <section>
        <header>
          <h1>Anecdote of the day</h1>
        </header>
        <p>
          { anecdotes[ selected ] }
        </p>
        <button onClick={ handleClick }>{ "Pick a different one" }</button>
        <p>
          Votes: { votes[ selected ] }
        </p>
        <button onClick={ handleVote }>{ "Upvote this anecdote" }</button>
      </section>
      { mostVoted ( anecdotes, votes ) }
      } </main> )
  }
export default App