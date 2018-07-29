export const FIGURE_SET_LOADING = '@@viewer/FIGURE_SET_LOADING'
export const FIGURE_LOADED = '@@viewer/FIGURE_LOADED'
export const FIGURE_UPDATE = '@@viewer/FIGURE_UPDATE'
export const FILES_SELECT = '@@viewer/FILES_SELECT'


export const setFigureDetailLoading = index => ({
  type: FIGURE_SET_LOADING,
  index,
})


export const setFigureDetail = (index, detail) => ({
  type: FIGURE_LOADED,
  index,
  detail,
})


export const updateFigureDetail = (id, data) => ({
  type: FIGURE_UPDATE,
  id,
  data,
})


export const selectFiles = files => ({
  type: FILES_SELECT,
  files,
})
