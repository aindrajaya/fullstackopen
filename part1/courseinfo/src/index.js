import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14
  
  const Part1 = () => {
    return(
      <div>
        <p>{part1} {exercise1}</p>
      </div>
    )
  }

  const Part2 = () => {
    return(
      <div>
        <p>{part2} {exercise2}</p>
      </div>
    )
  }

  const Part3 = () => {
    return(
      <div>
        <p>{part3} {exercise3}</p>
      </div>
    )
  }

  const Content = () => {
    return(
      <div>
        <Part1 />
        <Part2 />
        <Part3 />
      </div>
    )
  }

  return(
    <div>
      <Header course={course}/>
      <Content />
      <Total exerciseTot={exercise1+exercise2+exercise3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))