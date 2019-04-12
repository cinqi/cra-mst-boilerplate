module.exports = {
  description: 'React component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Component name:',
  }, {
    type: 'confirm',
    name: 'addHook',
    default: true,
    message: 'Do you want to use hooks?',
  }],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/components/',
    });
    return actions;
  },
};
