export default (state = { secondList: [] }, action) => {
  switch (action.type) {
    case 'add_second':
      return { ...state, secondList: [...state.secondList, action.payload] }
    case 'change_second':
      return { ...state, secondList: state.secondList.map(item => item.id === action.payload.id ? action.payload : item) }
    default:
      return state
  }
}
