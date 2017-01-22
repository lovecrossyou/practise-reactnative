/**
 * Created by huibei on 17/1/22.
 */
function likeBlockReducer (state = initialLikeBlockState, action) {
    switch (action.type) {
        case actionType.ADD_LIKE_ITEM: {
            var addIndex = action.obj.index;
            var newLikedList = Object.assign({}, state, {
                [addIndex]: action.obj.item
            })
            return newLikedList;
        }
        case actionType.DELETE_LIKE_ITEM: {
            var newLikedList =  {};
            for (var key in state) {
                var val = state[key];
                newLikedList[key] = val;
            }
            var index = action.index;
            delete newLikedList[index];
            return newLikedList;
        }
        default: {
            return state;
        }
    }
}

export default likeBlockReducer
