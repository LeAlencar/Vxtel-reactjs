import React, { Component } from 'react';
import api from '../services/api'


export default class Calc extends Component {
    state = {
        result: {},
    };

    async componentDidMount() {
        const response = await api.get()
    }

    render() {
        return <h1>Resultado</h1>
    } 
}