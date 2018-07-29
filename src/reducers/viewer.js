import * as actions from '../actions/uploader'


const initialState = {
}


export default (state = initialState, action) => {
  const uploaderName = action.uploaderName ? action.uploaderName : null
  const fileId = action.fileId ? action.fileId : null

  switch (action.type) {
    case actions.CLEAR_ALL_UPLOADERS:
      return initialState

    case actions.CREATE_UPLOADER:
      if (uploaderName) {
        return {
          ...state,
          // TODO Add an uploader to the state
        }
      }
      console.error('uploader created without name')
      return state

    case actions.DESTROY_UPLOADER:
      if (uploaderName) {
        const newState = { ...state }
        newState.remove(uploaderName)
        // TODO Any other clearing up???
        return newState
      }
      console.error('Attempted to destroy an uploader without name')
      return state

    case actions.ADD_FILE:
      if (fileId && uploaderName) {
        // TODO delete it from state
        return {
          ...state,
        }
      }
      console.error('ADD_FILE action invoked without fileId or uploaderName')
      return state

    case actions.DELETE_FILE:
      if (fileId && uploaderName) {
        // TODO delete it from state
        return {
          ...state,
        }
      }
      console.error('DELETE_FILE action invoked without fileId or uploaderName')
      return state

    case actions.UPDATE_FILE:
      if (fileId && uploaderName) {
        // TODO update the file in the state
        return {
          ...state,
        }
      }
      console.error('UPDATE_FILE action invoked without fileId or uploaderName')
      return state

    default:
      return state
  }
}
