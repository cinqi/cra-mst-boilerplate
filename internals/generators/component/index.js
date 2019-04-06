module.exports =  {
    description: 'React component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please'
    }],
    actions: data => {

      const actions = [
        {
          type: 'add',
          path: '../../src/components/{{properCase name}}/index.js',
          templateFile: './component/index.js.hbs'
        }
      ];

      actions.push({
        type: 'prettify',
        path: '/components/',
      });
      return actions;
    }
  };