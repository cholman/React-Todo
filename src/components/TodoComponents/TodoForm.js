import React from 'react';
import { render } from 'react-dom';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }


    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.todoText);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        )
    }
}
export default TodoForm;

// import React from 'react';

// class ListForm extends React.Component {
//   // Constructor with state
//   constructor() {
//     super();
//     this.state = {
//       groceryText: ''
//     };
//   }

//   handleChanges = e => {
//     // update state with each keystroke
//     this.setState({
//       groceryText: e.target.value
//     });
//   };

//   // class property to submit form
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addItem(this.state.groceryText);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
//         <input
//           type="text"
//           name="item"
//           value={this.state.groceryText}
//           onChange={this.handleChanges}
//         />
//         <button>Add</button>
//       </form>
//     );
//   }
// }

// export default ListForm;
