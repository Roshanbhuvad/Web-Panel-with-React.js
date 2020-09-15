import React, {Component} from "react";
import axios from "axios";

class Todolist extends Component () {
	state = {todos: [] };
	async coomponentDidMount() {
		let result = await axios.get("http://jsonplaceholder.typicode.com/todos");
		this.setState({todos:result.data})

	}
	render() {
	return (
		<div className="container">
		{this.state.todos.length > 0 ? <div>
			<ul className="list-group">
			{this.state.todos.map((todo) => 
			
  		<li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
   		 {todo.title}
    		<span className="">
    		<button type="submit" checked={todo.completed}>DELETE</button>
    		</span>
  		</li>
			))}
			</ul>
			</div> ) : (
		<div className="spinner-border text-primary" role="status">
  		<span className="sr-only">Loading...</span>
		</div>
		)};
		</div>
		)
	};

}


export default Todolist;