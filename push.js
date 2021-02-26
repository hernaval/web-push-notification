var push = require("web-push")

//let res = push.generateVAPIDKeys();


let validKeys = {
    publicKey : 'BPrZ8OliMNQ_cjx1veGnCY1d__Q9thLT_nYZIVR3H_3kTtLFkOBHa6qczE3SLrNIE-G7vh3oc_lPdwpyYWm22Lk',
    privateKey : 'CBdiGzdyKZrtTaW1_WB4dQtbAyJB15T76pjyzJPg3X8'
}


 push.setVapidDetails("mailto:hernavalasco@gmail.com",validKeys.publicKey, validKeys.privateKey)

let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/cDjZmU-JTl0:APA91bFZq_owqJLtWvYJCC-icXJ6Ue3YRRGag2nASeRP9x-ijTDM_K4Bbuj3QLn15cvp4dtxya9zh-AUFePEEKlHdH7VlKIXe_aRktQdjXimPsFLpUvqVSaAHio3Sp0R4DdxEmwJLtup","expirationTime":null,"keys":{"p256dh":"BBiwNv7ZPLtfwUDHQMpajF_1s3xt_LPQVwClDfpf92MwCmJjC2pW40_UQ9m4oOCRIn6MkRNCXv_DrqYN_DdIxyM","auth":"Pwb2Za9bHBiSXoeCoUQXEA"}}

 push.sendNotification(sub, "test message")
