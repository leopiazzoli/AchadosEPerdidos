angular.module('starter.services', [])

.factory('Perdido', function($http) {  
  return {
    postPerdido: function(perdido) {
      console.log(perdido);
      return $http("http://192.168.1.6/AchadoPerdidoWebAPI/api/perdidos/postperdido", perdido).then(function(){
        return console.log("POST OK");
      }, function(error){
        return console.log(error);
      })
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
