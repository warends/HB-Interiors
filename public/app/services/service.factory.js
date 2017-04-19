angular.module('service.factory', []).factory('ServiceFactory', () => {
  var services = [
    // {
    //   name: 'e-Design',
    //   logo: 'img/icons/construction.png'
    // },
    {
      name: 'Space Planning',
      slug: 'space-planning',
      logo: 'img/icons/house-plan.png',
      banner: 'img/services/floor-plan.png',
      subHead: 'creating individualized products',
      desc: 'We can create a functional floor plan that has great flow.  Send us images of your space with measurements to allow us the ability to bring your space new comfort and functionality.'
    },
    // {
    //   name: 'Branding'
    // },
    {
      name: 'Interior Design',
      slug: 'interior-design',
      logo: 'img/icons/think-draw-build.png',
      banner: 'img/services/master-br.png',
      subHead: 'creating individualized products',
      desc: 'We would love to come to your home and give you a free hour consultation.  We will create a new and inspiring space that emulates your personality.'
    },
    {
      name: 'Furniture Design',
      slug: 'furniture',
      logo: 'img/icons/construction.png',
      banner: 'img/services/bench.png',
      subHead: 'creating individualized products',
      desc: 'We love to create furniture out of sustainable materials. Crafting unique furniture has become a wondeful passion of our.  Let us help you create something one-of-a-kind for your space.'
    }
  ];

  return {
    list: function(){
      return services;
    },
    find: function(slug){
        return _.find(services, (service) => {
          return service.slug == slug;
        });
    }
  }
})
