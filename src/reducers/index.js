import {
  SET_USER

} from "../actions"

const initialState = {
  users: null,
};

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_USER:
      return {
        ...state,
          users: action.payload,
            isLogged: true,
      };

    default:
      return state;
  }

}