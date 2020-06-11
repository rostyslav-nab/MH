import React from 'react';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.module.css';
import Layout from "./Layout/Layout";

class App extends React.Component{
    render() {
        return (
            <div className={classes.App}>
                <Layout/>
            </div>
        );
    }

}

export default App;
