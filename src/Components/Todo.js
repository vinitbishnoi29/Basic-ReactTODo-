import React, { Component } from 'react'

class Todo extends Component {
    constructor(){ 
        super();
        this.state = { 
            tasks : [{task: 'check mails', id :0},{task : 'Read article', id :1},{task : 'Complete HW', id :2}],
            currTask : ''
        }
    }

    handleChange = (e) =>{ 
          console.log(e.target.value);
          this.setState({ 
            currTask : e.target.value
          })
    }

    handleSubmit = ()=>{ 
          this.setState({ 
               tasks : [...this.state.tasks, {task : this.state.currTask , id : this.state.tasks.length}],
               currTask :''
          })
    }
    handleDelete = (id)=>{
        let narr = this.state.tasks.filter((taskObj)=> {
               return taskObj.id != id;
        }) 
          this.setState({ 
              tasks : [...narr]
          })
    }
  render() {
    return (
      <div>
        <input type= "text" value= {this.state.currTask} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
        { 
          this.state.tasks.map((taskObj) =>(
              <li key={taskObj.id}> 
                <p>{taskObj.task}</p>
                <button onClick={()=> this.handleDelete(taskObj.id)}>Delete</button>
              </li>
          ))
        }
        </ul>
        </div>
    )
  }
}

export default Todo;
