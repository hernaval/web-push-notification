self.addEventListener('push', function(e) {
    var options = {
      body: 'Vous avez de nouvelles commandes en attente',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Voir les commandes',
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
        let idPresta = localStorage.getItem("idPresta")
        clients.openWindow('https://pizzareunion.co/prestataire/index.php?Num_prestataire='+idPresta);
        notification.close()
      }
  })