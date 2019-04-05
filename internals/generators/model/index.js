module.exports =  {
    description: 'mst model',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'model name please'
    }],
    actions: [{
      type: 'add',
      path: '../../src/models/{{properCase name}}Store.js',
      templateFile: './model/index.js.hbs'
    }]
  };