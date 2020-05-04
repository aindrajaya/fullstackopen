import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return(
    <div>
      <Header course={course}/>
      <Content part={part1} exercise={exercise1}/>
      <Content part={part2} exercise={exercise2}/>
      <Content part={part3} exercise={exercise3}/>
      <Total exerciseTot={exercise1+exercise2+exercise3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))