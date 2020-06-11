import React from "react";
import classes from './UserCard.module.scss';

class UserCard extends React.Component{
    render() {

        return (
            <div className={classes.UserCard}>
                <div><p>First Name:&nbsp;</p>{this.props.userName}</div>
                <div><p>Last Name:&nbsp;</p>{this.props.surName}</div>
                <div><p>Description:&nbsp;</p>{this.props.desc}</div>
            </div>
        )
    }
}

export default UserCard;