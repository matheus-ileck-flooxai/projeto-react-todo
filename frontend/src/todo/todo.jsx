import React, { Component } from "react";
import Axios from "axios";


import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {description: '', list:[] }
    }

    handleChange(e) {

        this.setState({...this.state, description: e.target.value})

    }

    handleAdd(){
        const description = this.state.description
        Axios.post(URL, {description})
            .then(resp => console.log("funcionou"))
    }

    render() {

        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange}></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}