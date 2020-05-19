export default {
  items: [
    {
      name: 'Graficos',
      url: '/graficos',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Exames',
      wrapper: {
        element: '',
        attributes: {}
      },
      class: ''
    },
    {
      name: 'Cadastro',
      url: '/exames/cadastro',
      icon: 'icon-drop',
    },
    {
      name: 'Listas',
      url: '/exames/listar',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Mais opções',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Opções',
      url: '/opcoes',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Opção 1',
          url: '/opcoes/1',
          icon: 'icon-cursor',
        },
        {
          name: 'Opção 2',
          url: '/opcoes/2',
          icon: 'icon-cursor',
        },
        {
          name: 'Opção 3',
          url: '/opcoes/3',
          icon: 'icon-cursor',
        },
        {
          name: 'Opção 4',
          url: '/opcoes/4',
          icon: 'icon-cursor',
        },
      ],
    },
  ],
};
