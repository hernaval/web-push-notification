var push = require("web-push")

//let res = push.generateVAPIDKeys();

let validKeys = {
    publicKey : 'BOEIfS6bNIn5fjXBwwDbP2jMJqyGvDfoaGjoEztQ_5UUCJqyt8Y1uTVsf9eSqoK8JYCaGZCenb6tKqTVAiipLX4',
    privateKey : '5w5qTp4KEEFTUgZvLrm8hM4CU6hr9E8B4LJlXT3B3LE'
}


push.setVapidDetails("mailto:hernavalasco@gmail.com",validKeys.publicKey, validKeys.privateKey)

let sub ={
    endpoint:"https://fcm.googleapis.com/fcm/send/eZ53hoUbIWA:APA91bHgePaDy4jQ9MLNPZazrhqq4VLdUs2lz6tp5axq8fu1dybmfZ41AxSptB95Q2p0RboXjplIxw2y4HkIkw-8HklPjVqVDlcyFCncl1LxQ1kUlpd9X-iFugmIjjvQsk9UQo8bXC13",
    expirationTime:null,
    keys:{
        p256dh:"BHK5bA2tUaU9FI6Ps3-ufNv0BT7p3pegyJVuPkjklsqibivl0hHKbQJuM5v57BjbAYBs4liVJQmKxIs7dxRJ5g4",
        auth:"PdNtWZqnpXTtEHImNzM_UQ"}
    }
    

push.sendNotification(sub, "test message")
