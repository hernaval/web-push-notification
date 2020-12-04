self.addEventListener('push', function(e) {
    var options = {
      body: 'Les nouvelles données sont synchronisées depuis votre application',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Voir les données',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Ignorer',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Synchronisation', options)
    );
  });

  self.addEventListener("notificationclick",function(e){
      var notification = e.notification
      var primaryKey = notification.data.primaryKey
      var action = e.action

      if(action == 'close'){
          
          notification.close()
      }else{
        clients.openWindow('http://idelia.co');
        notification.close()
      }
  })