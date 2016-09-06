import 'firebase';

var config = {
	apiKey: "AIzaSyC5FO8SBGwYcSZ3IMGu2adI2iPul0FwAdY",
  authDomain: "project-4553713265761533610.firebaseapp.com",
  databaseURL: "https://project-4553713265761533610.firebaseio.com",
  storageBucket: "project-4553713265761533610.appspot.com",
}

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebaseApp.database();