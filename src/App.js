import React from 'react';
import AddTodo from './addTodo';
import './App.css';
import Todos from './Todos';
class App extends React.Component{
  state = {
    todo : [
      {id:1,content:'i want to do something'},
      {id:2,content:'I dont want to hear your voice'}
    ]
  }

  handleAdd = (text) =>{
    let new_id = Math.random()
    this.setState({
      todo : this.state.todo.concat({id:new_id,content:text})
    })
  }

  handleDelete = (id) =>{
    var result;
    for(let i =0 ;i < this.state.todo.length;i++){
      if(this.state.todo[i].id === id){
        result = i
        break
      }else{
        continue
      }
    }
    this.state.todo.splice(result,1)
    this.setState({
      todo : this.state.todo
    })
  }
  render(){
    return (
      <div className='App container'>
        <h1 className='center blue-text'>Todo list</h1>
        <Todos handleDelete={this.handleDelete} todo={this.state.todo} />
        <AddTodo handleAdd={this.handleAdd}/>
      </div>
    )
  }
}

export default App;
