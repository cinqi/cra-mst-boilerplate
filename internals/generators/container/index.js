module.exports =  {
    description: 'React container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Container name'
      }, {
        type: 'confirm',
        name: 'addHeaders',
        default: true,
        message: 'Do you want headers?',
      }, {
        type: 'confirm',
        name: 'addModel',
        default: true,
        message: 'Do you want add domain model associated with container?',
      }
    ],
    actions: data => {
      const actions = [
        {
          type: 'add',
          path: '../../src/containers/{{properCase name}}/index.js',
          templateFile: './container/index.js.hbs'
        },
        {
          type: 'add',
          path: '../../src/containers/{{properCase name}}/Loadable.js',
          templateFile: './container/Loadable.js.hbs'
        }
      ];
      if (data.addModel) {
        actions.push({
          type: 'add',
          path: '../../src/models/Domain/{{properCase name}}DomainStore.js',
          templateFile: './model/index.js.hbs'
        })
      }

      actions.push({
        type: 'prettify',
        path: '/containers/',
      });
      return actions;
    }
  };