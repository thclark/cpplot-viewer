import React, { Component } from 'react'
import { FigureViewer } from './components'
import {Card, CardGroup, Col, Container, Row } from 'reactstrap'


import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'


export default class App extends Component {
  render () {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row>
            <Col xs="12">
              <CardGroup style={{marginTop: "2rem", marginBottom: "1rem"}}>
                <Card className="p-4">
                  <FigureViewer />
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
