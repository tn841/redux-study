import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function Detail({todo}){
    const id = useParams();

    return (
        <div>
            <h1>{todo?.text}</h1>
            <h5>Created at : {todo?.id} </h5>
        </div>
    )
}

function mapStateToProps(state, ownProps){
    const {match: {params: {id}}} = ownProps
    console.log(id)
    return {
        todo: state.find(todo => todo.id === parseInt(id))
    }
}

export default connect(mapStateToProps) (Detail);

