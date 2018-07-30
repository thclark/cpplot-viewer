import * as actions from '../actions/viewer'

const initialState = {
  list: [],         // A list of available figures [{id: id1, name: fig1, modified: date1}, {id: id2, name: fig2, modified: date2}] in the folder designated by path
  loading: false,   // Boolean indicating whether a load is in progress
  detail: null,     // Data for the currently selected figure
  selected: null,   // Name of the selected figure
}


export default (state = initialState, action) => {

  switch (action.type) {
    case actions.FIGURE_SET_LOADING:
      return {
        ...state,
        loading: true,
        detail: null,
        selected: action.index
      }

    case actions.FIGURE_LOADED:
      // TODO Improve calculation of size properties based on screen width
      let layout = action.detail.layout ? action.detail.layout : {}
      return {
        ...state,
        loading: false,
        detail: {
          ...action.detail,
          layout: {...layout,
            width: 600,
            height: 600
          }
        },
        selected: action.index
      }

    case actions.FIGURE_UPDATE:
      // TODO Add figure save functionality
      console.warning('No figure save functionality in place yet')
      return state

    case actions.FILES_SELECT:
      // TODO get the list of available *.json files in the selected directory
      // [
      //           {
      //             name: '/Users/thc29/Source/thclark/cpplot-viewer/examples/mandelbrot.json',
      //             modified: '2018-07-29T07:41:06+00:00'
      //           },
      //           {
      //             name: '/Users/thc29/Source/thclark/cpplot-viewer/examples/mandelbrot_temp.json',
      //             modified: '2018-07-29T07:41:07+00:00'
      //           }
      //         ],
      console.log('reducer: selected files')
      return{
        list: Array.from(action.files),
        loading: false,
        detail: null,
        selected: null,
      }

    default:
      return state
  }
}
