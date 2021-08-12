
import './App.css';
import React from 'react';
import Items from './items'
import Test from './Test'

class App extends React.Component {

  constructor(){
    super()
    console.log("constructor")
  }

  state = {
    items: [
      {id:1, name: "James", age:23, count:2}, 
      {id:2, name: "Ramsey", age:24, count:1}, 
      {id:3, name: "Davos", age:27, count:3}, 
    ]
  }

  //constructor
  //render
  //componentdidMount
  //componentDidUpdate

  handleClick=(e)=> {
     let items = this.state.items; 
     items.push({id:4, name: "Sansa", age: 23, count:4})
     this.setState({
       items: items
     })

  }

  handleDelete=(e)=> {
    let rand = Math.random(); 
    this.setState({
      items: [{id:rand,  name: "Sansa", age: 24, count:1}]
    })

 }

  componentDidMount(){
    //posts
    console.log("componentDidMount")
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdated", prevProps, prevState) // this will triger when we do some changes 
  }

  componentDidCatch(error, info){
    console.log("componentDidCAtch")
    this.setState({
      error:error, 
      info:info 
    })
  }

  

  render(){ 
    console.log("render")
    return(
      <div>
   < Items item = {this.state.items} />
   <Test />
   <button onClick = {this.handleClick}>Add</button>
   <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default App;
