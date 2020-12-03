var push = require("web-push")

let res = push.generateVAPIDKeys();



let validKeys = {
    publicKey : 'BOEIfS6bNIn5fjXBwwDbP2jMJqyGvDfoaGjoEztQ_5UUCJqyt8Y1uTVsf9eSqoK8JYCaGZCenb6tKqTVAiipLX4',
    privateKey : '5w5qTp4KEEFTUgZvLrm8hM4CU6hr9E8B4LJlXT3B3LE'
}

push.setVapidDetails("mailto:hernavalasco@gmail.com",validKeys.publicKey, validKeys.privateKey)

let sub = {}
push.sendNotification(sub, "test message")
