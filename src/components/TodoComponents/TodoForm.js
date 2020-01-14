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