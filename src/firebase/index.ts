import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDe5k7TTnvoNNRK2o7KK_MaPNFEge4m1G0',
  authDomain: 'pulpspit.firebaseapp.com',
  projectId: 'pulpspit',
  storageBucket: 'pulpspit.appspot.com',
  messagingSenderId: '891181285030',
  appId: '1:891181285030:web:11623747a11a420c593e67',
  measurementId: 'G-LYJ1KTBTCJ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
