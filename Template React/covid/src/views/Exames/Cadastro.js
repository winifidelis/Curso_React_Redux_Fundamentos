import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'

class CadastroExames extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Cadastro de exames
          </div>
          <div className="card-body">
            <Row>
              Formulário de exames
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroExames;
