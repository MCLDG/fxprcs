{"filter":false,"title":"modalController.js","tooltip":"/client/controllers/modalController.js","undoManager":{"mark":21,"position":21,"stack":[[{"start":{"row":0,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["var app = angular.module('sampleapp');","","app.controller('ComplexController', [","  '$scope', '$element', 'title', 'close', ","  function($scope, $element, title, close) {","","  $scope.name = null;","  $scope.age = null;","  $scope.title = title;","  ","  //  This close function doesn't need to use jQuery or bootstrap, because","  //  the button has the 'data-dismiss' attribute.","  $scope.close = function() {"," \t  close({","      name: $scope.name,","      age: $scope.age","    }, 500); // close, but give 500ms for bootstrap to animate","  };","","  //  This cancel function must use the bootstrap, 'modal' function because","  //  the doesn't have the 'data-dismiss' attribute.","  $scope.cancel = function() {","","    //  Manually hide the modal.","    $element.modal('hide');","    ","    //  Now call close, returning control to the caller.","    close({","      name: $scope.name,","      age: $scope.age","    }, 500); // close, but give 500ms for bootstrap to animate","  };","","}]);"],"id":1}],[{"start":{"row":0,"column":26},"end":{"row":0,"column":35},"action":"remove","lines":["sampleapp"],"id":2},{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["p"]}],[{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["r"],"id":3},{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["i"]}],[{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["c"],"id":4}],[{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["i"],"id":5}],[{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":["n"],"id":6},{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["g"]}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"remove","lines":["C"],"id":7}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["M"],"id":8}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["O"],"id":9}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"remove","lines":["O"],"id":10}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"remove","lines":["M"],"id":11}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["M"],"id":12}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["o"],"id":13}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["d"],"id":14}],[{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["a"],"id":15}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["l"],"id":16}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["o"],"id":17}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["m"],"id":18}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["p"],"id":19}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["l"],"id":20}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["e"],"id":21}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["x"],"id":22}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":33,"column":4},"end":{"row":33,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1435067029380,"hash":"1b69ba24a7b3e987afbb02a388211864199c2e3e"}