export const hide = () => {
  return {
    type: 'HIDE'
  }
}

export const show = () => {
  return {
    type: 'SHOW'
  }
}

export const showQuery = () => {
  return {
    type: 'SHOW_QUERY'
  }
}

export const hideQuery = () => {
  return {
    type: 'HIDE_QUERY'
  }
}

export const changeQuery = (query) => {
  return {
    type: 'CHANGE_QUERY',
    payload: query
  }
}