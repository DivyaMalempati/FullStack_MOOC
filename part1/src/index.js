import React from 'react';
import ReactDOM from 'react-dom';

const Header = (header) =>{
  console.log(header)
  return(
  <h1>{header.course}</h1>      
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
  const course = {
    name: 'Half Stack Application Development :',
    parts :[
      { 
      name : 'Fundamentals of React :',
      exercise : 10,
      },
      {
      name : 'Using props to pass Idea :',
      exercise : 7,
      },
      {
      name : 'State of a Component :',
      exercise : 14,
      } 
    ]
  } 
  return(
    <div>
    <h1>
      {course.name}
    </h1>
    <p>
      {course.parts[0].name} {course.parts[0].exercise}
    </p>
    <p>
      {course.parts[1].name} {course.parts[1].exercise}
    </p>
    <p>
      {course.parts[2].name} {course.parts[2].exercise}
    </p>
    <p>
     Total : {course.parts[0].exercise+course.parts[1].exercise+course.parts[2].exercise}
    </p>


     {/* <Header course={course} />
     <p> {part1.name} {part1.exercise1}</p>
     <p> {part2.name} {part2.exercise2}</p>
     <p> {part3.name} {part3.exercise3}</p>
     <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} /> 
     <Total sum={exercise1+exercise2+exercise3} />
     {/* <Total1 ex1={exercise1} ex2={exercise2} ex3={exercise3} /> */}
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))