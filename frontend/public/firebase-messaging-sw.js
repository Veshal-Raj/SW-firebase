importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
import {  toast } from 'sonner'


const firebaseConfig = {
    apiKey: "AIzaSyAnokwUSkADF3gvZ1_RA-MqelWlfGfjxFs",
    authDomain: "push-notification-50e0e.firebaseapp.com",
    projectId: "push-notification-50e0e",
    storageBucket: "push-notification-50e0e.appspot.com",
    messagingSenderId: "192417561211",
    appId: "1:192417561211:web:e0dc499094101f423600de",
    measurementId: "G-YTPJNDGHL3"
  };

firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://example.com/icon.png',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});