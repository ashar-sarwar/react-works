import React, { Component } from 'react';
import TodoListFuctions from './todoListFuctions';

class TodoList extends TodoListFuctions {
    state = {
        data: [
            { name: "pata nai", id: 1 },
            { name: "bilkul pata nai", id: 2 },
            { name: "kasam se pata nai", id: 3 }
        ],
        newTodo: {},
        updateTodo: {},
        updateKey: false
    }


    doSubmit = () => {
        const data = [...this.state.data]
        data.push(this.state.newTodo)
        this.setState({ data, newTodo: {}, updateTodo: {}, updateKey: false })
    }


    render() {
        const { length: count } = this.state.data
        const { data, updateKey, updateTodo } = this.state
        if (count === 0) return (<div><p>Nothing to show......</p>
            {this.renderInput("name", "Adding to the List")}
            {this.renderButton("ADD")}
        </div>
        )

        return (
            <div>

                <br />
                {
                    !updateKey &&
                    <React.Fragment>
                        {this.renderInput("name", "Adding to the List")}
                        {this.renderButton("ADD")}
                    </React.Fragment>

                }

                {
                    updateKey &&
                    <React.Fragment>
                        {this.renderInput("name", "Updating List")}
                        {this.renderButton("Update")}
                    </React.Fragment>

                }
                <br />
                <br />
                <br />
                <table className="table">

                    {data.map(item => (
                        <tr key={item.id}>
                            <td> {item.name}</td>

                            <td>
                                <button
                                    onClick={() => this.handleDelete(item)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Delete
                                 </button>
                            </td>

                            <td>
                                <button
                                    onClick={() => this.handleUpdate(item)}
                                    className="btn btn-primary btn-sm"
                                >
                                    Update
                                  </button>
                            </td>
                        </tr>
                    ))}
                </table>



            </div>
        );
    }
}

export default TodoList;