module.exports = {
  description: 'React component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Component name:',
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
