import React from "react";

class AddTodo extends React.Component{

    state = {
        textTodo : ''
    }

    handleEdit = (e) =>{
        this.setState({
            textTodo : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        // document.getElementById('one').value = ''
        this.props.handleAdd(this.state.textTodo)
        this.setState({
            textTodo : ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id='one' onChange={this.handleEdit} value={this.state.textTodo}/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo