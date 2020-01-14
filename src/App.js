import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TaskList from './components/TodoComponents/TodoList';

const taskList = [
  {
    name: 'clean',
    id: 123,
    completed: false
  },
  {
    name: 'cook',
    id: 124,
    completed: false
  },
  {
    name: 'code',
    id: 1235,
    completed: false
  },
  {
    name: 'debug',
    id: 1246,
    completed: false
  },
  {
    name: 'gym',
    id: 1237,
    completed: false
  },
  {
    name: 'chill',
    id: 1248,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: taskList,

      }
    }
    
  clearCompleted = () => {
    const updated = this.state.taskList.filter(task =>
       task.completed === false
    )
    console.log(updated, "updated")
  this.setState({
    taskList: updated
  })
  console.log(this.state.taskList)
}
  

  toggleTask = id => {
    const newTaskList = this.state.taskList.map(task => {
      console.log(task)
      if (task.id === id) {
        
        return {
          ...task,
          completed: !task.completed
        };
      }else {
        return task;
      }
  });

    this.setState({
      taskList: newTaskList
    });
  }

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTask]
     
    });
  };
  render() {
    console.log("rendering...");
    console.log(taskList);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
        <TaskList
          taskList={this.state.taskList}
          toggleTask={this.toggleTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}
export default App;
