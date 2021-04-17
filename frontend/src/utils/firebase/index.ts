import firebase from "firebase/app";
import 'firebase/analytics';
import config from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const analytics = firebase.analytics;

export { firebase, analytics };