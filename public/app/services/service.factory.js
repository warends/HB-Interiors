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
      desc: "What is it? Do you feel like your space is not functional? Would you like assistance arranging a layout for your space? We can help!\n \nWe will organize your existing furniture in a way that creates a more natural and functional flow to make the best use of your space.",
      img1: 'img/services/bubble1.png',
      img2: 'img/services/floorplan.png'
  },
    {
      name: 'Branding',
      slug: 'branding',
      logo: 'img/icons/branding.png',
      banner: 'img/services/branding.jpg',
      subHead: 'Helping your customers get to know you',
      desc: "It is important to be able to stand out from the rest of the designers in your area.  By creating branding tools that potential clients or architects can get their hands on moves you to the front of the line.\n \nWe develop these business tools, such as portfolio booklets and business cards to reach your specific audience.",
      img1: 'img/services/floorplan.png',
      img2: 'img/services/floorplan.png'
    },
    {
      name: 'Interior Design',
      slug: 'interior-design',
      logo: 'img/icons/think-draw-build.png',
      banner: 'img/services/master-br.png',
      subHead: 'creating individualized products',
      desc: "If you are local to the Seattle area, we are here to assist you in your design needs.  We want you to feel at home in your home.  It is very important for us to get to know you and your style.  We will then be able to develop a design that is a reflection of you.\n \nThis is a more traditional form of design.  We will get to know you further by meeting and discussing your design needs and desires.  A design package with concepts will be created all the way through installation.",
      img1: 'img/services/kitchen.png',
      img2: 'img/services/interior-design.png'
    },
    {
      name: 'Furniture Design',
      slug: 'furniture',
      logo: 'img/icons/construction.png',
      banner: 'img/services/bench.png',
      subHead: 'creating individualized products',
      desc: "We love producing industrial, rustic and sustainable pieces.  These can be brand new pieces or repurposed furniture.  Breathing new life into second hand furniture is not only rewarding, but also helps to keep furniture from uselessly going to the trash.\n \nIf there were a certain piece of furniture you are looking for, we would love to be part of the process to create that perfect piece for you.",
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
