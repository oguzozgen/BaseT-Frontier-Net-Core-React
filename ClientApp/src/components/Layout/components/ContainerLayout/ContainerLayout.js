import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../../../NavMenu';

export class ContainerLayout extends Component {
  static displayName = ContainerLayout.name;

  render () {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
export default ContainerLayout;