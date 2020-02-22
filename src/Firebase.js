import Firebase from 'react-native-firebase';

const config = {
  apiKey: 'AIzaSyAd0JyyhlleOnPKHdUVTQhGr3zcpHUXfgg',
  authDomain: 'telegramclone-6fd13.firebaseapp.com',
  databaseURL: 'https://telegramclone-6fd13.firebaseio.com',
  projectId: 'telegramclone-6fd13',
  storageBucket: 'telegramclone-6fd13.appspot.com',
  messagingSenderId: '554915869036',
  appId: '1:554915869036:web:b772357872551808660349',
  measurementId: 'G-7C02M8RR0F',
};

const firebase = Firebase.initializeApp(config);

export default firebase;
