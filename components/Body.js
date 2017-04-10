import React from 'react'
import location from './location'
import intro from './intro'
import results from './results'
import footer from './footer'
import {Container, Row, Col} from 'styled-bootstrap-grid'

class Body extends React.Component {
  // constructor (props) {    super(props)  }

  render () {
    return (
      <div className='container'>
        <Container>
          <Row>
            <Col xl='1' lg='2' md='3' sm='12'>
              <location />
              <intro />
              <results />
              <footer />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Body
