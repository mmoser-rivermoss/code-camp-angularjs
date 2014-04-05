angular.module('riverMoss.notifications').provider('Notifications', [function() {
    var stack = [];
    var size = 10;

    return {
      setStackSize: function(value) {
          size = value;
      },
      $get: function() {
          function checkStack() {
              if (stack.length > size) {
                  var index = stack.length - size;
                  stack = stack.slice(index);
              }
          }

          function removeFromStack(message) {
              var messageIndex = 0;
              angular.forEach(stack, function(notification, index) {
                  if (notification === message) {
                      messageIndex = index;
                  }
              });
              stack.splice(messageIndex, messageIndex + 1);
          }

          function showMessage(message, success) {
              var alert = {
                  message: message,
                  type: (success) ? 'success' : 'danger'
              };

              if (service.messages.length > 0) {
                  stack.push(service.messages.pop());
                  checkStack();
              }

              service.messages.push(alert);
          }

          function close() {
              stack.push(service.messages.pop());
              checkStack();
          }

          function getStack() {
              return stack;
          }

          var service = {
              show: showMessage,
              messages: [],
              getStack: getStack,
              close: close,
              removeFromStack: removeFromStack
          };
          return service;
      }
    };
}]);

angular.module('riverMoss.notifications').config(['NotificationsProvider', function(notifications) {
    notifications.setStackSize(3);
}]);