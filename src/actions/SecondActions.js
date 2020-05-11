export const addSecond = (firstItem) => {
  return {
    type: 'add_second',
    payload: firstItem
  }
}

export const changeSecond = (id, text) => {
  return {
    type: 'change_second',
    payload: { id, text }
  }
}
