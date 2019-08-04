console.log('GOOD LUCK 👩‍💻 👨‍💻')
// Please focus

/* Q1:
Convert ES5 to ES6:
1) 
function sum(x,y){
  return x+y
}


2) 
function consoleReturn(x,y){
  console.log(x)
  return y
}


3) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age

4)
var food="Fried Chicken"
var color="Blue"
var object={
  food:food,
  color:color
}

5)
var object2={
  multi:function(a,b){
    return a * b
  }
}
*/

//1) WRITE YOUR CODE UNDER THIS LINE    
sum = (x,y) => {
  return x+y
}     

//2) WRITE YOUR CODE UNDER THIS LINE 
consoleReturn = (x,y) => {
  console.log(x)
  return y
}        

//3) WRITE YOUR CODE UNDER THIS LINE   
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age      

//4) WRITE YOUR CODE UNDER THIS LINE   

var food="Fried Chicken"
var color="Blue"
 object() ={
  food:food,
  color:color
}     

//5) WRITE YOUR CODE UNDER THIS LINE         

object2 ()={
  multi:func=(a,b) =>{
    return a * b
  }
}





/* Q2:
Using OOP
Create a class called Computer
that takes three parameter (OS,RAM,CPU)
and a method called doubleRAM the ram to double and return the new ram
and make three instantiations from it
computer1 => Windows,16,I7
computer2 => Linux,8,I5
computer3 => Mac,4,I3

Example: 
computer1
Output =>
{
  OS:'Windows',
  RAM:16,
  CPU:'I7',
  doubleRAM:f(){}
}
*/

// WRITE YOUR CODE UNDER THIS LINE
// I didn't study OOP at all, I just remember that it has name and we can use constructor. 
class Computer {
  constructor(OS,RAM,CPU) {
  let computer1 = OS,RAM,CPU
  }

// I didn't study OOP at all, I just remember that it has name and we can use constructor. 

}
doubleRam =>{
  let computer1= {
    OS: OS,
    ram : RAM*2,
    CPU: CPU,
  }
return  computer1
}







/* Q3:
You have this two react components
please fix the errors inside them
*/

// App Component
import React, { Component } from 'react';
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eact again']
  };
  changeTitle = ()=> {
    state.title = 'AGGREGOR ZOLDYCK'
  }
  render() {
    return (
      <>
      <h1>App Component = {this.state.title}</h1>
      <button onClick={this.changeTitle}>Change Title</button>
      <Tasks tasks={this.Tasks} changeTitleFromChild={this.props.changeTitle} />
      </>
    );
  }
}

// Tasks Component
import React, { Component } from 'react';

class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay = () => {
    day = 'Sun'
  }
  render() {
    return (
      <div>
        <h1>Tasks Component = {this.state.day}</h1>
        <button onClick={this.changeDay}>Change Tasks State</button>
        <button onClick={this.props.changeTitle}>Change App State</button>
      </div>
    );
  }
}
//IMPORTANT
//line 166 am not sure of the answer but i know that we need to change on the parent from the child, so i think we should use props connected to function in the parent