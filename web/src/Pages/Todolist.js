import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import "../Todo.css"
const URL = 'http://jsonplaceholder.typicode.com/todos'

const Todolist = () => {
    const [todolists, setTodolist] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get("http://jsonplaceholder.typicode.com/todos")
        setTodolist(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = todolists.filter(todolist => id !== todolist.id)
            setTodolist(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ["id", "title", "completed"]

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return todolists && todolists.map(({ id, title, completed }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{completed}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div>
            <h1 id='title'>React Table</h1>
            <table id='todolist'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    );
}


export default Todolist;