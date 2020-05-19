import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'

class ListarExames extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Lista de exames realizados
          </div>
          <div className="card-body">
            <Row>
              Lista de exames
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default ListarExames;
