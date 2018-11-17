import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFlagCheckered, faSave, faThumbtack, faUndo} from '@fortawesome/free-solid-svg-icons'
import endpoint from '../../endpoint'
import Moment from 'react-moment';
import 'moment-timezone';

import './Todo.css';
import axios from "axios";


class AllTodos extends Component {

    handleIsPin = (todo, isPinNew) => {
        todo.isPin = isPinNew;

        this.props.dispatch(
            {
                type: 'IS_PIN',
                data: todo
            });
        this.callApiUpdte(todo);
    };

    handleIsSuccess = (todo, isNewSuccess) => {
        todo.isSuccess = isNewSuccess;

        this.props.dispatch(
            {
                type: 'IS_SUCCESS',
                data: todo
            });
        this.callApiUpdte(todo);
    };


    callApiUpdte = (todo) => {
        axios.put(`${endpoint.todoApiUpdateURL}${todo.id}`, todo, {headers: {"Content-Type": "application/json"}})
            .then(res => {
                console.log(res.data)
            }).catch(e => {
            console.log(e.message)
        });
    };

    render() {
        const todos = this.props.todos;
        return (
            <div className="all_todos_container">
                {this.props.loading ? <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div> : null}

                {todos && todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <div className={todo.isPin ? "shadow-lg" : ''}>
                                <div className={todo.isPin ? "card border-danger" : 'card '}>
                                    <div className=" card-body p-3 d-flex align-items-center">
                                        {todo.isPin ?
                                            <div className="bg-warning p-3 font-2xl mr-3">
                                                <FontAwesomeIcon icon={faThumbtack}/>
                                            </div>
                                            :
                                            <div className="bg-info p-3 font-2xl mr-3">
                                                <FontAwesomeIcon icon={faFlagCheckered}/>
                                            </div>}
                                        <div>
                                            <div className="text-muted text-uppercase font-weight-bold small">
                                                <div className={todo.isSuccess ? "checked" : ""}>{todo.taskName}
                                                </div>
                                            </div>

                                            <div className="text-value-sm">
                                                {todo.isSuccess ?
                                                    // (new Date(todo.date)).toString()
                                                    <div>Completed At:
                                                        <Moment locale="th"
                                                                format="dddd  D MMMM YYYY h:mm a">{todo.updated_at}</Moment>
                                                    </div>
                                                    :
                                                    <div>Create At:
                                                        <Moment locale="th"
                                                                format="dddd  D MMMM YYYY h:mm a">{todo.date}</Moment>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer px-3 py-2">
                                        {!todo.isPin ?
                                            <button onClick={() => this.handleIsPin(todo, true)}
                                                    className="btn btn-sm btn-primary" type="submit">
                                                <FontAwesomeIcon icon={faThumbtack}/> Pin
                                            </button>
                                            :
                                            <button onClick={() => this.handleIsPin(todo, false)}
                                                    className="btn btn-sm btn-primary" type="submit">
                                                <FontAwesomeIcon icon={faThumbtack}/> Un Pin
                                            </button>
                                        }
                                        {!todo.isSuccess ?

                                            <button onClick={() => this.handleIsSuccess(todo, true)}
                                                    className="btn btn-sm btn-success float-right" type="reset">
                                                <FontAwesomeIcon icon={faSave}/> Mark Done
                                            </button>
                                            :
                                            <button onClick={() => this.handleIsSuccess(todo, false)}
                                                    className="btn btn-sm btn-warning float-right" type="reset">
                                                <FontAwesomeIcon icon={faUndo}/> Restore
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    loading: state.loading
});
export default connect(mapStateToProps)(AllTodos);