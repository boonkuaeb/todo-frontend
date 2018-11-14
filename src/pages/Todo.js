import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import endpoint from '../endpoint'
import AllTodos from "../components/todo/AllTodos";

class Todo extends Component {
    state = {
        profile: ''
    };
    componentDidMount() {

        this.setState({
            profile: JSON.parse(localStorage.getItem('profile'))
        });


        this.props.dispatch({type: 'LOADING_TRUE'});
        axios.get(`${endpoint.todoApiURL}${localStorage.getItem("userId")}`)
            .then(response => {
                this.props.dispatch({type: 'LOAD_TODO',data: response.data})
            })
            .catch(e => {
                this.props.dispatch({ type: 'LOADING_FALSE' })
            });
    };


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="col-lg-3 offset-md-5">
                    <div className="text-center">
                        <img className="card-img-top forum-card-img-top  mx-auto d-block img-fluid img-thumbnail"
                             src={this.state.profile.pictureUrl} alt={this.state.profile.displayName}/>
                    </div>
                </div>
                <div className="text-center">
                    <div className="card-body forum-card-body">
                        <h4 className="card-title"> {this.state.profile.displayName} </h4>
                        <p className="card-text">{this.state.profile.statusMessage}</p>
                    </div>
                </div>
                <AllTodos todos={this.props.todos} />
            </div>
        );
    }


}

// Retrieve state in the store as a props component.
function mapStateToProps(state) {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(Todo);
