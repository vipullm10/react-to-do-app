import React,{Component} from 'react';
import './App.css';
import {Header} from './components/header/header.component';
import TaskForm from './components/task-form/task-form.component';
import TasksContainer from './components/tasks-container/tasks-container.component';


class App extends Component{
  constructor(){
    super();
    this.state = {
      "currentVal":"",
      tasks:[],
      "currentKey":"0",
    };
    this.uid = 0;
  };


  render(){
    return(
      <div className='App'>
        <Header/>
        <TaskForm 
          getTask={(e)=>{
            this.setState({currentVal:e.target.value})
          }}
          handleClick={(e)=>{
            this.setState(prevState=>({
              tasks:[...prevState.tasks,{"title":`${this.state.currentVal}`,"key":`${this.uid+1}`}]
            }),()=>{
              this.uid = this.uid+1});
          }}
        />
        <h2 className="section-heading">Your Tasks</h2>
        <TasksContainer 
          tasks={this.state.tasks}
          handleDelete={(e)=>{
            var uniqueKey = e.target.dataset.key
            this.setState(prevState=>({
              tasks:prevState.tasks.filter(task=>{
                return task.key!==uniqueKey
              })
            }))
          }}
        />
      </div>
    )
  }
}

export default App;
