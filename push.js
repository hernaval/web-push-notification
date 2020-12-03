var push = require("web-push")

let res = push.generateVAPIDKeys();

let validKeys = {
    publicKey : 'BOVzCX6DMf03XZzbpNGs7yf6Qqry6ymwsJtBojwjcIxsFG38qURmApw_dO3Qy6MOI-zqcYAEUmzverCV3xRzH_Y',
    privateKey : 'gTS4TXZYzNj0o9p9GHKctyFc80qd6uDByLqXPHRgZag'
}

push.setVapidDetails("mailto:hernavalasco@gmail.com",validKeys.publicKey, validKeys.privateKey)

let sub = {}
push.sendNotification(sub, "test message")
