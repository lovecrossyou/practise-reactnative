/**
 * Created by huibei on 17/1/22.
 */
import * as actionType from '../actions/actionTypes';


const initialLikeBlockState = {
    selectList: [],
    likedList:[]
};


function likeBlockReducer (state = initialLikeBlockState, action) {
    switch (action.type) {
        case actionType.ADD_LIKE_ITEM: {
            // var addIndex = action.obj.index;
            // var newLikedList = Object.assign({}, state, {
            //     [addIndex]: action.obj.item
            // })
            return state;
        }
        case actionType.DELETE_LIKE_ITEM: {
            // var newLikedList =  {};
            // for (var key in state) {
            //     var val = state[key];
            //     newLikedList[key] = val;
            // }
            // var index = action.index;
            // delete newLikedList[index];
            return state;
        }
        default: {
            return state;
        }
    }
}

export default likeBlockReducer
