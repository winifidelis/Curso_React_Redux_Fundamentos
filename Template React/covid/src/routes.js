import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const ExamesCadastro = React.lazy(() => import('./views/Exames/Cadastro'));
const ExamesListar = React.lazy(() => import('./views/Exames/Listar'));

const Opcao1 = React.lazy(() => import('./views/Opcoes/Opcao1'));
const Opcao2 = React.lazy(() => import('./views/Opcoes/Opcao2'));
const Opcao3 = React.lazy(() => import('./views/Opcoes/Opcao3'));
const Opcao4 = React.lazy(() => import('./views/Opcoes/Opcao4'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/graficos', name: 'Graficos', component: Dashboard },
  { path: '/exames', exact: true, name: 'Exames', component: ExamesListar },
  { path: '/exames/cadastro', name: 'Cadastro', component: ExamesCadastro },
  { path: '/exames/listar', name: 'Listar', component: ExamesListar },


  { path: '/opcoes', exact: true, name: 'Opções', component: Opcao1 },
  { path: '/opcoes/1', name: '1', component: Opcao1 },
  { path: '/opcoes/2', name: '2', component: Opcao2 },
  { path: '/opcoes/3', name: '3', component: Opcao3 },
  { path: '/opcoes/4', name: '4', component: Opcao4 },
];

export default routes;
