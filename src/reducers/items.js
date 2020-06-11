export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function users(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.users;

        default:
            return state;
    }
}

// export function itemPageSize(state= 5, action) {
//     switch (action.type) {
//         case 'ITEMS_PAGE_SIZE':
//             return action.itemPageSize;
//
//         default:
//             return state;
//     }
// }
// export function itemTotalUserCount(state = 14, action) {
//     switch (action.type) {
//         case 'ITEM_TOTAL_USER_COUNT':
//             return action.itemTotalUserCount;
//
//         default:
//             return state;
//     }
// }
// export function itemCurrentPage(state = 1, action) {
//     switch (action.type) {
//         case 'ITEMS_CURRENT_PAGE':
//             return action.itemCurrentPage;
//
//         default:
//             return state;
//     }
// }
//



