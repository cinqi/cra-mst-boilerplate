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
  },{
    type: 'confirm',
    name: 'addAsync',
    default: true,
    message: 'Do you want use async calls in actions?',
  },],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../src/models/{{store_type}}/{{properCase name}}{{store_type}}Store.js',
        templateFile: './model/index.js.hbs',
      },
      {
        type: 'append',
        path: '../../src/stores.js',
        pattern: /import globalViewStore from '\.\/models\/View\/GlobalViewStore';/gi,
        template: "import {{camelCase name}}{{store_type}}Store from './models/{{store_type}}/{{properCase name}}{{store_type}}Store';",
      },
      {
        type: 'append',
        path: '../../src/stores.js',
        pattern: /globalViewStore,/gi,
        template: "  {{camelCase name}}{{store_type}}Store,",
      }
    ];
    actions.push({
      type: 'prettify',
      path: '/models/',
    });
    return actions;
  },
};
