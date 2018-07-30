import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import theme from 'react-jsonschema-form-bootstrap'
import plotComponentFactory from 'react-plotly.js/factory'
import Plotly from 'plotly.js/dist/plotly';
import { connect } from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { Col, Row, FormGroup, FormText } from 'reactstrap'
import { setFigureDetailLoading, setFigureDetail } from '../../../actions/viewer'
import FolderSelector from '../../FolderSelector'
import { updateFigureDetail } from '../../../actions/viewer'
import { LoadingSpinner } from '../../Common'


// Build the plot component. We do it this was instead of exporting so we can access the Plotly library API directly.
const Plot = plotComponentFactory(Plotly);


const mapStateToProps = state => ({
  list: state.list,
  loading: state.loading,
  detail: state.detail,
  selectedFigure: state.selectedFigure,
})


const mapDispatchToProps = dispatch => ({
  onLoad: (index, list) => {

    // Check that the browser is compatible
    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser. Try using Chrome!")
      return
    }

    // Indicate that loading is in progress
    dispatch(setFigureDetailLoading(index))

    // Load the JSON file. Once loaded set the loaded data into state.detail
    let fr = new FileReader();
    fr.onload = receivedText;
    fr.readAsText(list[index]);
    function receivedText(e) {
      let lines = e.target.result;
      dispatch(setFigureDetail(index, JSON.parse(lines)))
    }

  },

  onSubmit: (formData) => {
    console.log('Dispatching updateFigureDetail', formData)
    dispatch(updateFigureDetail(formData))
  },
})


class FigureMetaBase extends Component {
  render() {
    const schema = {
      'type': 'object',
      'required': [
      ],
      'properties': {
        'title': {
          'type': 'string',
          'title': 'Title',
        },
        'short_caption': {
          'type': 'string',
          'title': 'Short caption',
        },
        'caption': {
          'type': 'string',
          'title': 'Full caption',
        },
      },
    }
    const uiSchema = {
      'id': {
        'ui:widget': 'hidden',
      },
      'caption': {
        'ui:widget': 'textarea',
        'ui:options': {
          'rows': 10,
        },
      },
    }

    const onSubmit = ({ formData }) => {
      this.props.onSubmit(formData)
    }

    return (
      <Form formData={this.props.detail} onSubmit={onSubmit} theme={theme} schema={schema} uiSchema={uiSchema} />
    )
  }
}


export const FigureMeta = connect(mapStateToProps, mapDispatchToProps)(FigureMetaBase)


class FigureBase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      layout: {
        width: 677,
      },
      frames: [],
      config: {
        modeBarButtonsToRemove: ['toImage', 'sendDataToCloud'],
        modeBarButtonsToAdd: [{
          name: 'Save as .svg (publication quality)',
          icon: Plotly.Icons.camera,
          click: function(gd) {
            Plotly.downloadImage(gd, {format: 'svg'})
          }
        }, {
          name: 'Save as low res .jpg',
          icon: Plotly.Icons.camera,
          click: function(gd) {
            Plotly.downloadImage(gd, {format: 'jpeg'})
          }
        }]
      },
    }
  }

  componentDidMount() {
  }

  setStateOnFigureInitialized(figure) {
    this.setState(figure)
  }

  setStateOnFigureUpdate(figure) {
    this.setState(figure)
  }

  render() {
    if (this.props.detail) {
      return (
        <Plot
          data={this.props.detail.data}
          layout={this.props.detail.layout}
          frames={this.state.frames}
          config={this.state.config}
          onInitialized={(figure) => this.setStateOnFigureInitialized(figure)}
          onUpdate={(figure) => this.setStateOnFigureUpdate(figure)}
          style={{ width: '100%', height: '100%' }}
          useResizeHandler
        />
      )
    }
    return null
  }
}


export const Figure = connect(mapStateToProps, mapDispatchToProps)(FigureBase)


class FigureViewerBase extends Component {
  constructor(props) {
    super(props)
    this.updateSelected = this.updateSelected.bind(this)
    this.state = {
      selected: undefined,
    }
  }

  componentDidMount() {
    if (this.state.selected) { this.props.onLoad(this.state.selected) }
  }

  updateSelected(index) {
    this.setState({
      selected: index,
    })
    this.props.onLoad(index, this.props.list)
  }

  render() {
    const options = this.props.list ? this.props.list.map((file, index) => ({ value: index, label: file.name })) : []
    return (
      <div>
        <Row>
          <Col md="4">
            <Row>
              <Col xs="12">
                <h4>{this.props.title}</h4>
                <h6>{this.props.subtitle}</h6>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs="12">
                <FolderSelector />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs="12">
                <FormGroup>
                  <FormText color="muted">
                    Choose which figure to render. The figure will be re-rendered on change.
                  </FormText>
                </FormGroup>
                <Select
                  id="figure-select"
                  ref={(ref) => { this.select = ref }}
                  onBlurResetsInput={false}
                  onSelectResetsInput={false}
                  autoFocus
                  options={options}
                  simpleValue
                  clearable
                  name="selected-figure"
                  disabled={false}
                  value={this.state.selected}
                  onChange={this.updateSelected}
                  rtl={false}
                  searchable
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs="12">
                {/* <FigureMeta figureId={this.state.selected} /> */}
              </Col>
            </Row>
          </Col>
          <Col md="8">
            { this.props.loading ? <LoadingSpinner /> : null}
            {/* The component "display" property is set none by the tabs. So it's rendering when the tab is created, */}
            {/*  with size 0. this is what causes the figure to be the wrong size in the first instance. See: */}
            {/* https://stackoverflow.com/questions/44088883/conditional-rendering-in-react-that-causes-remounting-when-toggled */}
            <Figure figureId={this.state.selected} />
          </Col>
        </Row>
      </div>
    )
  }
}

FigureViewerBase.defaultProps = {
  title: 'cpplot-viewer',
  subtitle: 'View and interact with figure files on your local machine.',
}

export default connect(mapStateToProps, mapDispatchToProps)(FigureViewerBase)
