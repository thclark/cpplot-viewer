import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'


export class ComingSoon extends Component {
  render() {
    return (
      <Col md={{ size: 10, offset: 1 }}>
        <Row className="justify-content-center placeholder row-gutter">
          <i className="fa fa-wrench faa-wrench animated faa-slow" />
        </Row>
        <Row className="justify-content-center placeholder">
          Coming soon...
        </Row>
      </Col>
    )
  }
}


export class LoadingSpinner extends Component {
  render() {
    return (
      <Col md={{ size: 10, offset: 1 }}>
        <Row className="justify-content-center placeholder">
          <i className="fa fa-spinner fa-pulse loading-spinner" />
        </Row>
      </Col>
    )
  }
}
