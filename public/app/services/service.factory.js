angular.module('service.factory', []).factory('ServiceFactory', () => {
  var services = [
    // {
    //   name: 'e-Design',
    //   logo: 'img/icons/construction.png'
    // },


    {
      name: 'Interior Design',
      slug: 'interior-design',
      logo: 'img/icons/home.svg',
      banner: 'img/services/master-br.png',
      subHead: 'creating individualized products',
      desc: "Local to the Seattle area? We are here to assist you in your design needs. We want you to feel at home in your home. We’d love to get to know you to develop a style that is all your own. A design package with concepts and a floor plan will be created all the way through installation. Contact us for a free consultation!",
      img1: 'img/services/kitchen.png',
      img2: 'img/services/interior-design.png'
    },
    {
      name: 'Branding',
      slug: 'branding',
      logo: 'img/icons/finger-print.svg',
      banner: 'img/services/branding.jpg',
      subHead: 'Helping your customers get to know you',
      desc: "It is important to be able to stand out.  By creating branding tools that potential clients or architects can get their hands on, we will help move you to the front of the line. We can develop business tools that reflect your vision and reach your specific audience, such as portfolio booklets and business cards.",
      img1: 'img/services/branding1.png',
      img2: 'img/services/branding2.png'
    },
    {
      name: 'Space Planning',
      slug: 'space-planning',
      logo: 'img/icons/measurement.svg',
      banner: 'img/services/floor-plan.png',
      subHead: 'creating individualized products',
      desc: "What is space planning? Do you feel like your space is not functional? Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/bubble1.png',
      img2: 'img/services/floorplan.png'
    },
    {
      name: 'Furniture Design',
      slug: 'furniture',
      logo: 'img/icons/chair1.svg',
      banner: 'img/services/bench.png',
      subHead: 'creating individualized products',
      desc: "We love producing industrial, rustic and sustainable pieces here in Seattle. These can be brand new pieces or repurposed furniture. If you have an heirloom piece that you cannot bare to throw away, we may be able to give it a new look.  We would love to be part of the process to create that perfect piece for you.",
      img1: 'img/services/bench-paint.png',
      img2: 'img/services/table-work.png'
    }
  ];


  return {
    list: function(){
      return services;
    },
    find: function(slug){
        return services.find(function(service) {
            return service.slug == slug;
        });
    }
  }
})
