export default (state = { firstList: [] }, action) => {
  switch (action.type) {
    case 'add_first':
      return { ...state, firstList: [...state.firstList, action.payload] }
    case 'delete_first':
      return { ...state, firstList: state.firstList.filter(item => item.id !== action.payload) }
    default:
      return state
  }
}
