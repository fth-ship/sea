;(function (document, window) {
  angular
    .module('sea', [])
    // .value('screencasts', [{
    //   title: 'Node.js - Como criar um CMS com MEAAN - #1 ',
    //   src: '//www.youtube.com/embed/U0BKa_ocKvI',
    //   target: 'https://plus.google.com/events/cvv7ludd57esg0ob8fgsglu7fak',
    // }, {
    //   title: 'Node.js - Como criar um CMS com MEAAN - #2',
    //   src: '//www.youtube.com/embed/_wN0MCiIwq8',
    //   target: 'https://plus.google.com/events/cbhii35b860jhr634eqk7c31jm4',
    // }])
    .value('events', [{
      title: 'Meteor + Angular + Ionic utilizando (ES6)',
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ywqsKJLvYL4" frameborder="0" allowfullscreen></iframe>',
      content: 'Este foi o resultado do que preparamos neste primeiro encontro!',
      references: [{
        href: 'https://medium.com/@dzay/aprenda-a-escrever-um-app-para-mobile-421093f341da',
        label: 'Matéria'
      }, {
        href: 'https://drive.google.com/file/d/0B-Yd5zfwO7tHVWdyR3VqY3R0TVU/view?usp=sharing',
        label: 'Download'
      }, {
        href: 'https://github.com/fth-ship/jankenpo',
        label: 'Código'
      }]
    }])
    .controller('MainCtrl', function ($scope, $sce, events) {
      // function _trustMapHandler(item) {
      //   item.src = $sce.trustAsResourceUrl(item.src);
      //   return item;
      // }
      // $scope.screencasts = screencasts.map(_trustMapHandler).reverse();
      $scope.events = events.map(function (event) {
        event.video = $sce.trustAsHtml(event.video);
        return event;
      });
    })
    .run(function ($log) {
      $log.debug('Sea is running!');
    });

  angular.element(document).ready(onReady);

  function onReady() {
    console.log('document ready');
    angular.bootstrap(document.getElementsByTagName('body'), ['sea']);
  }
})(document, window);
