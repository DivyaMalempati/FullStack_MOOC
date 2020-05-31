import React from 'react';
import ReactDOM from 'react-dom';

const Header = (header) =>{
  return(
    <div>
      <p>
       {header.course}
      </p>
    </div>
    
  )
}

const Part = (constPart) => {
  return(
    <div>
      <p>
      {constPart.part} {constPart.exercise}
      </p>
    </div>
  )
}

const Content = (content) =>{
  return(
    <div>
        <Part part={content.part1} exercise={content.exercise1} />
        <Part part={content.part2} exercise={content.exercise2} />
        <Part part={content.part3} exercise={content.exercise3} />
    </div>
  )
}

const Total = (total) =>{
  return(
    <div>
      <p>
       Number of Exercises {total.sum}
      </p>
    </div>
  )
}
const Total1 = (total1) =>{
  return(
    <div>
      <p>
       Number of Exercises {total1.ex1+total1.ex2+total1.ex3}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack Application Development :'
  const part1 = 'Fundamentals of React :'
  const exercise1 = 10
  const part2 = 'Using props to pass Idea :'
  const exercise2 = 7
  const part3 = 'State of a Component :'
  const exercise3 = 14

  return(
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
      <Total sum={exercise1+exercise2+exercise3} />
     {/* <Total1 ex1={exercise1} ex2={exercise2} ex3={exercise3} /> */}
     
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))