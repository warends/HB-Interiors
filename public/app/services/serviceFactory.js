app.factory('ServiceFactory', () => {
  var services = [
    {
      name: 'e-Design'
    },
    {
      name: 'Space Planning'
    },
    {
      name: 'Branding'
    },
    {
      name: 'Interior Design'
    },
    {
      name: 'Furniture Design'
    }
  ];

  return {
    list: function(){
      return services;
    },
    find: function(name){
        return _.find(services, (service) => {
          return service.name == name;
        });
    }
  }
})
