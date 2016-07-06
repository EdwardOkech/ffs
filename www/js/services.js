angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lenders = [{
    id: 0,
    name: 'Equity',
    lastText: '18%',
    face: 'img/equity.png'
  }, {
    id: 1,
    name: 'Barclays',
    lastText: '21%',
    face: 'img/barclays.jpg'
  }, {
    id: 2,
    name: 'Sidian Bank',
    lastText: '16%',
    face: 'img/sidian.jpg'
  }, {
    id: 3,
    name: 'KCB',
    lastText: '17.5%',
    face: 'img/kcb.png'
  }, {
    id: 4,
    name: 'Chase Bank',
    lastText: '18%',
    face: 'img/chase.png'
  }];

  return {
    all: function() {
      return lenders;
    },
    remove: function(chat) {
      lenders.splice(lenders.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < lenders.length; i++) {
        if (lenders[i].id === parseInt(chatId)) {
          return lenders[i];
        }
      }
      return null;
    }
  };
});
