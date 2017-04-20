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
      desc: 'We can help make your space more functional with our space planning service.  Contact us for more details.'
    },
    {
      name: 'Branding',
      slug: 'branding',
      logo: 'img/icons/branding.png',
      banner: 'img/services/branding.jpg',
      subHead: 'Helping your customers get to know you',
      desc: 'We understand that it is difficult to separate yourself from others.  With our custom made booklets, we will create a beautiful marketing and branding tool to be able to physically hand to potential clients, architects, magazines, or anyone else you want to present your work to. We take the amazing images of your designs and put together a distict booklet that displays your beautiful work.  Take a look at some of the talented designers that we’ve worked with below.  Please contact us for more details.'
    },
    {
      name: 'Interior Design',
      slug: 'interior-design',
      logo: 'img/icons/think-draw-build.png',
      banner: 'img/services/master-br.png',
      subHead: 'creating individualized products',
      desc: 'Contact us for full service in-person design services.  It is most important to us to create a design that reflects the personalities of our wonderful clients.  Please contact us for more details.'
    },
    {
      name: 'Furniture Design',
      slug: 'furniture',
      logo: 'img/icons/construction.png',
      banner: 'img/services/bench.png',
      subHead: 'creating individualized products',
      desc: 'Whether it’s creating unique furniture from an amazing piece of wood or refinishing a great piece of furniture with good bones, we love it.  If there’s something that is a keepsake from your grandmother that you feel bad parting with, let us take a look and see if we can’t remake it into something that you love.'
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
