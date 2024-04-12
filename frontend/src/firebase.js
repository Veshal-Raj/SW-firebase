import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";



const firebaseConfig = {
    apiKey: "AIzaSyAnokwUSkADF3gvZ1_RA-MqelWlfGfjxFs",
    authDomain: "push-notification-50e0e.firebaseapp.com",
    projectId: "push-notification-50e0e",
    storageBucket: "push-notification-50e0e.appspot.com",
    messagingSenderId: "192417561211",
    appId: "1:192417561211:web:e0dc499094101f423600de",
    measurementId: "G-YTPJNDGHL3"
  };

export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
