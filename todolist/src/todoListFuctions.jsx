import React, { Component } from 'react';
import Input from './input';

class TodoListFunctions extends Component {
    state = {
        data: [],
        newTodo: {},
        updateTodo: {},
        updateKey: false,

    }

    handleSubmit = e => {
        e.preventDefault();
        this.doSubmit()
    };

    handleChange = ({ currentTarget: input }) => {
        const item = {
            name: [input.value],
            id: this.state.data.length === 0 ? 1 : this.state.data.length + 1
        }
        this.setState({ newTodo: item })
    };

    handleDelete = (item) => {
        const data = this.state.data
        const newdata = {}
        newdata = data.filter(p => item.id !== p.id)
        this.setState({ data: newdata })
    }

    handleUpdate = (item) => {
        const data = this.state.data
        const newdata = data.filter(p => item.id == p.id)
        // console.log(newdata)
        this.setState({ updateTodo: newdata, updateKey: true })

    }

    renderInput(name, label, type = "text") {
        const { data } = this.state;

        return (
            <Input
                type={type}
                name={name}
                value={label === "Updating List" ? updateTodo.name : data[name]}
                label={label}
                onChange={this.handleChange}
            />
        );
    }

    renderButton(label) {
        return <button onClick={this.handleSubmit}>{label}</button>
    }



    render() {
        return null;
    }
}

export default TodoListFunctions;