import { combineReducers } from 'redux';
import { users, itemsHasErrored, itemsIsLoading} from './items';

export default combineReducers({
    users,
    itemsHasErrored,
    itemsIsLoading
});