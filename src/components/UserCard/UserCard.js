import React from "react";
import classes from './UserCard.module.scss';

class UserCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {

        return (
            <div className={classes.UserCard}>
                <div>{this.props.userName}</div>
                <div>{this.props.surName}</div>
                <div>{this.props.desc}</div>
            </div>
        )
    }
}

export default UserCard;