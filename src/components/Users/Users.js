import React from 'react';
import classes from './Users.module.scss';
import UserCard from "../UserCard/UserCard";
import { connect } from 'react-redux';
import {itemsFetchData} from "../../actions/items";
import Pagination from "react-js-pagination";


class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});

    };

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
        return(
            <div>
                <div>
                    <Pagination
                        hideFirstLastPages
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={this.state.activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={this.props.users.length}
                        pageRangeDisplayed={4}
                        onChange={this.handlePageChange}
                    />
                </div>

                <div className={classes.Users}>
                    {this.props.users.map(item =>(
                        <div className={classes.cardStyle}>
                            <UserCard userName={item.name} surName={item.surname} desc={item.desc}/>
                        </div>

                    ))}
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        activePage: state.activePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Users) ;