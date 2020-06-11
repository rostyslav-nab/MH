import React from 'react';
import classes from './Users.module.scss';
import UserCard from "../UserCard/UserCard";
import { connect } from 'react-redux';
import {itemsFetchData} from "../../actions/items";
// import {itemTotalUserCount} from "../../reducers/items";


class Users extends React.Component{
    componentDidMount() {
        this.props.fetchData('http://77.120.241.80:8911/api/users');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        // let pageCount = this.props.itemTotalUserCount / this.props.itemPageSize;
        // let pages = [];
        // for(let i = 1; i <= pageCount; i++){
        //     pages.push(i);
        // }
        // console.log(this.props.itemTotalUserCount);

        return(
            <div className={classes.Users}>
                {/*<div>*/}
                {/*    {pages.map(p => <span className={ this.props.currentPage === p && classes.selectedPage}>{p}</span>)}*/}
                {/*</div>*/}
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
        // itemPageSize: state.pageSize,
        // itemTotalUserCount: state.totalUserCount,
        // itemCurrentPage: state.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Users) ;