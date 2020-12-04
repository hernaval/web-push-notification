var push = require("web-push")

//let res = push.generateVAPIDKeys();


let validKeys = {
    publicKey : 'BPrZ8OliMNQ_cjx1veGnCY1d__Q9thLT_nYZIVR3H_3kTtLFkOBHa6qczE3SLrNIE-G7vh3oc_lPdwpyYWm22Lk',
    privateKey : 'CBdiGzdyKZrtTaW1_WB4dQtbAyJB15T76pjyzJPg3X8'
}


 push.setVapidDetails("mailto:hernavalasco@gmail.com",validKeys.publicKey, validKeys.privateKey)

let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/fSMVXTmSMz4:APA91bFcAGez4hx6fLbYESfBwmI54pWKjTJ4zJlsJaDNaxtlSVVgsro_5TMqAYkz_Gjk0k4dignkpbytOKZFl0xzxPsWVpyR4_euzQmhnScKu46E6klxEk9uS6wBunhwEjkrNwAbgLjZ","expirationTime":null,"keys":{"p256dh":"BHNeHGGPRssFmcdVVY38vb2exVjjNpfqH1IAhtXFAryrR6ecYHUrIU5FT9r5Pn9kozc5UiIyrYud35KZSPUqgEY","auth":"2hRytTuKQR08vfpWtrlMaA"}}
    

 push.sendNotification(sub, "test message")
