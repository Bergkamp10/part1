import React from 'react';

import Header from './Header.component';
import Content from './Content.component';
import Total from './Total.component';


const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content
        part1={parts[0]}
        part2={parts[1]}      
        part3={parts[2]}
       />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises} />
    </div>
  )
}

export default App