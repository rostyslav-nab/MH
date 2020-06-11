const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';
// const ITEMS_PAGE_SIZE = 'ITEMS_PAGE_SIZE';
// const ITEM_TOTAL_USER_COUNT = 'ITEM_TOTAL_USER_COUNT';
// const ITEMS_CURRENT_PAGE = 'ITEMS_CURRENT_PAGE;';
export function itemsHasErrored(bool) {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}
// export function itemPageSize(itemPageSize = 5) {
//     return{
//         type: ITEMS_PAGE_SIZE,
//         itemPageSize
//     };
// }
// export function itemTotalUserCount(totalUserCount = 1) {
//     return{
//         type: ITEM_TOTAL_USER_COUNT,
//         totalUserCount
//     };
// }
// export function itemCurrentPage(pageSize = 14) {
//     return{
//         type: ITEMS_CURRENT_PAGE,
//         pageSize
//     };
// }

export function itemsIsLoading(bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(currentPage) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        currentPage
    };
}



export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        // const boundSize = text => dispatch(itemPageSize(text));
        // const boundTotal = text => dispatch(itemTotalUserCount(text));
        // const boundCurrent = text => dispatch(itemCurrentPage(text));
        // boundSize(5);
        // boundTotal(1);
        // boundCurrent(14);
        //
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));
                // dispatch(itemPageSize(4));
                // dispatch(itemTotalUserCount(14));
                // dispatch(itemCurrentPage(1));
                return response;
            })
            .then((response) => response.json())
            .then((users) => dispatch(itemsFetchDataSuccess(users)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}