import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// console.log(ReactGA.pageview(window.location.pathname))

// import firebase from "firebase";  //change later
// if ("serviceWorker" in navigator){
//   navigator.serviceWorker
//     .register("./firebase-messaging-sw.js")
//     .then(function(registration){
//       console.log("Registration successful", registration.scope)
//     })
//     .catch(function(err){
//       console.log("service worker error -> ", err)
//     })
// }

// const config = {
//     apiKey: "AIzaSyCpsOrzgUxm_0mB4VtRW8-ndqCPtnAx__M",
//     authDomain: "funationalarm.firebaseapp.com",
//     projectId: "funationalarm",
//     storageBucket: "funationalarm.appspot.com",
//     messagingSenderId: "103919320447",
//     appId: "1:103919320447:web:c752e0712bfa1da6a5ee4a",
//     measurementId: "G-PPWDL8RRSG"
//   };

// firebase.initializeApp(config);


// const messaging = firebase.messaging();

// Notification.requestPermission()
// .then(function(){
//   console.log("Allow permission");
//   return messaging.getToken();
// })  
// .then(function(token){
//   console.log("token code is => " + token);
// })
// .catch(function(err){
//   console.log("err : ", err);
// })


// messaging.onMessage(function(payload){
//   console.log('onMessageis...: ', payload);
//   alert(payload.data.message);
// })

ReactDOM.render(
    <App />
    ,
  document.getElementById('root')
);

reportWebVitals();
