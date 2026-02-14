
const initialState = [];

export default function CommentReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_Comment":
      return [
        ...state,
        { user: action.payload.value.user, comment: action.payload.value.comment }
      ];
    case "VIDER_Comment":
      return [];
    default:
      return state;
  }
}
