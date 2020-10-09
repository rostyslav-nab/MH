import React from 'react';
import classes from './App.module.css';
import './App.module.css'
import Layout from "./Layout/Layout"
console.log('LOGLOGLOG');
class App extends React.Component {

    render() {

        return (
            <div className={classes.App}>
                <Layout />
            </div>
        );
    }

}

export default App;
