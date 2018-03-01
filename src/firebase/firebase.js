import * as firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyBtkIIoq0cZExSFDYaLMNgoEDsQPh8yYUk",
    authDomain: "react-firebase-authenticate.firebaseapp.com",
    databaseURL: "https://react-firebase-authenticate.firebaseio.com",
    projectId: "react-firebase-authenticate",
    storageBucket: "",
    messagingSenderId: "1087061469268"
  };
  if (!firebase.apps.lenth){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};