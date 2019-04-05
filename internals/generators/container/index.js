module.exports =  {
    description: 'React container',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'controller name please'
    }],
    actions: [{
      type: 'add',
      path: '../../src/containers/{{properCase name}}/index.js',
      templateFile: './container/index.js.hbs'
    }]
  };