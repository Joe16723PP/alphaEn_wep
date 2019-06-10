import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyA8n7a8CsEJo_xpf29-bT2-WmOCWWwD7Fc",
  authDomain: "my-project-1533814401357.firebaseapp.com",
  databaseURL: "https://my-project-1533814401357.firebaseio.com",
  projectId: "my-project-1533814401357",
  storageBucket: "my-project-1533814401357.appspot.com",
  messagingSenderId: "479954742843",
};

const devConfig = {
  apiKey: "AIzaSyA8n7a8CsEJo_xpf29-bT2-WmOCWWwD7Fc",
  authDomain: "my-project-1533814401357.firebaseapp.com",
  databaseURL: "https://my-project-1533814401357.firebaseio.com",
  projectId: "my-project-1533814401357",
  storageBucket: "my-project-1533814401357.appspot.com",
  messagingSenderId: "479954742843"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();


export {
  db,
  auth,
};
