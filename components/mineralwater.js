import React from 'react'
import mineralwaterresults from './mineralwaterresults'
import gauge from './gauge'
import {Container, Row, Col} from 'styled-bootstrap-grid'
class mineralwater extends React.Component {
  render () {
    return (
      <Row>
        <Col lg='3' md='3' sm='0' xs='0'>
          <mineralwaterresults />
          <gauge />
        </Col>
      </Row>
    )
  }
}

export default mineralwater
