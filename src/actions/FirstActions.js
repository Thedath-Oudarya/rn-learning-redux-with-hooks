export const addFirst = (firstItem) => {
  return {
    type: 'add_first',
    payload: firstItem
  }
}

export const deleteFirst = (id) => {
  return {
    type: 'delete_first',
    payload: id
  }
}
