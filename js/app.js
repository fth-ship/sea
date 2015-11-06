angular
  .module('sea', [])
  .value('screencasts', [{
    title: 'Node.js - Como criar um CMS com MEAAN - #1 ',
    src: '//www.youtube.com/embed/U0BKa_ocKvI',
    target: 'https://plus.google.com/events/cvv7ludd57esg0ob8fgsglu7fak',
  }, {
    title: 'Node.js - Como criar um CMS com MEAAN - #2',
    src: '//www.youtube.com/embed/_wN0MCiIwq8',
    target: 'https://plus.google.com/events/cbhii35b860jhr634eqk7c31jm4',
  }])
  .controller('MainCtrl', function ($scope, screencasts, $sce) {
    function _trustMapHandler(item) {
      item.src = $sce.trustAsResourceUrl(item.src);
      return item;
    }
    $scope.screencasts = screencasts.map(_trustMapHandler).reverse();
  })
  .run(function ($log) {
    $log.debug('Sea is running!');
  });

$(function () {
<<<<<<< HEAD
  var $body = angular.element('body');

  angular
    .bootstrap($body, ['sea']);
=======
  angular
    .bootstrap(document.getElementsByTagName('body'), ['sea']);
>>>>>>> 75ee5e8511168b4b2e4b54654c67984c37894728
});
