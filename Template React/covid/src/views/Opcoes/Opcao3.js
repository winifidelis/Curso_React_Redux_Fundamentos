import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'

class Opcao1 extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Opções
          </div>
          <div className="card-body">
            <Row>
              OPÇÃO 3
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Opcao1;
