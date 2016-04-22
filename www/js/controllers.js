angular.module('starter.controllers', [])

.controller('CadastroAchadoCtrl', function($scope, Perdido) {
  $scope.perdido = {};
  $scope.salvar = function(perdido) {
    perdido.id_usuario = 1;
    perdido.encontrado = 0;
    Perdido.postPerdido(perdido);
  }
})

.controller('ChatsCtrl', function($scope) { 
})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
})

.controller('AccountCtrl', function($scope) { 
});
