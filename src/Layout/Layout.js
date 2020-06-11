import React from 'react';
import classes from './Layout.module.scss'
import classNames from 'classnames';
import Users from "../components/Users/Users";
class Layout extends React.Component {

render() {
    return (
        <div className={classNames(classes.Layout, 'container')}>
            <div className={'row'}>
                <Users/>
            </div>
        </div>
    )
}
}

export default Layout;