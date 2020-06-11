import { combineReducers } from 'redux';
import { users, itemsHasErrored, itemsIsLoading, itemPageSize, itemTotalUserCount, itemCurrentPage } from './items';

export default combineReducers({
    users,
    itemsHasErrored,
    itemsIsLoading
    // itemPageSize,
    // itemTotalUserCount,
    // itemCurrentPage
});