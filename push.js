var push = require("web-push")

//let res = push.generateVAPIDKeys();

//console.log(res)

let validKeys = {
  publicKey: 'BFH8Oze4td_fsVWc_rmlTEM1qRtd4c3PGimCJZs6ZdQ9XLar_fO8YE7IMzAUHCJrQcVRycWJCQYz5E8w0ex9y1o',
  privateKey: 'V3bcCJrHL23s63JK__FlmEIX6FmIzAfveNBBj3vRfIE'
}


 push.setVapidDetails("mailto:hernavalasco@gmail.com",validKeys.publicKey, validKeys.privateKey)

//let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/dnrEYyHEKM4:APA91bGVlwnSIYrjtk_CyTMpZvaCiGyO8Sh-jq652gARPk7Yfwh5CAE9CcVsNs0I8mt1aKC9ROwStdTMbc0PZX4KpZDfSo86YnWwTHZUjdhIdBlyg1AxqrzE0ICPY8dJvwnSybGF8giy","expirationTime":null,"keys":{"p256dh":"BB3RhuvAnunn-CoruC-8LplQLUWLdsyWAZkiQN7eCUclb2T1RMvjjFAXZHomTz_EHNPREb3kVDkW1Tr9Q2si0-I","auth":"APu35hQ4rESwhRKcVXrU1A"}}
let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/ccFfDjkWmUw:APA91bGC7JIRgtvN31YxOUNKuT_t8hV2rEFo0jUCTmUifgWxp9ateo2HbclrQHg7o3rEa5G61D4A9-4RTM6EcYtMT9ao6p3LZAKXJ12YBED2Dlo9Lr0tEGxgLbtxvChUN7NjDrxsCwPH","expirationTime":null,"keys":{"p256dh":"BL36Rtf2igKluY00B22q4ca6leqO0m9EGwHsgTaqw3IKl1Gz3EIyF5n07rqJUMaxi33ASXay2vgKontr4MePbhM","auth":"ZkS6DOm7DEXlcYCvzJ7n0g"}}

 push.sendNotification(sub, "test message")
