module.exports = {
  description: 'Mobx-state-tree model',
  prompts: [{
    type: 'list',
    name: 'store_type',
    message: 'Select the model type:',
    default: 'Domain',
    choices: () => [
      'Domain',
      'View',
    ],
  }, {
    type: 'input',
    name: 'name',
    message: 'Model name',
  }],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../../src/models/{{store_type}}/{{properCase name}}{{store_type}}Store.js',
        templateFile: './model/index.js.hbs',
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/models/',
    });
    return actions;
  },
};
