import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import css from './styles/main.css';
const el = document.getElementById('omhuroot');

ReactDOM.render(<Routes/>, document.getElementById('omhuroot'));