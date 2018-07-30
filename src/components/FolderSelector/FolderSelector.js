import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Input, FormGroup, FormText} from 'reactstrap'
import { selectFiles } from '../../actions/viewer'


const mapStateToProps = state => ({
  selected: state.selected,
  detail: state.detail,
})


const mapDispatchToProps = dispatch => ({
  onSelectedFilesChange: (e) => {
    const files = e.target.files
    console.log('onSelectedFilesChange files:', files)
    dispatch(selectFiles(e.target.files))
  },
})


class FolderSelector extends Component {
  render() {
    return (
      <div>
        <FormGroup>
          <FormText color="muted">
            Select a group of *.json files to watch. They'll be rendered below, and updated if the files get overwritten.
          </FormText>
        </FormGroup>
        <Label className="btn btn-primary" for="fileSelector">
          <Input type="file" style={{display: "none"}} id="fileSelector" onChange={(event) => this.props.onSelectedFilesChange(event)} multiple />
          Select *.json figure files
        </Label>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FolderSelector)
