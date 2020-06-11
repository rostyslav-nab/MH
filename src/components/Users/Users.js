import React from 'react';
import classes from './Users.module.scss';
import UserCard from "../UserCard/UserCard";
import { connect } from 'react-redux';
import {itemsFetchData} from "../../actions/items";


class Users extends React.Component{
    componentDidMount() {
        this.props.fetchData('http://77.120.241.80:8911/api/users');
        console.log(this.props);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        console.log(this.props.hasErrored)
        console.log(this.props.users)
        return(
            <div className={classes.Users}>
                {this.props.users.map(item =>(
                    <div className={classes.cardStyle}>
                        <UserCard userName={item.name} surName={item.surname} desc={item.desc}/>
                    </div>
                ))}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Users) ;