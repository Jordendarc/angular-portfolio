import { getApp, getApps, initializeApp } from 'firebase/app'

const firebaseConfig = {
  projectId: 'angular-portfolio-130f4',
  appId: '1:250971559007:web:7aa1231d9468e053f977ea',
  databaseURL: 'https://angular-portfolio-130f4.firebaseio.com',
  storageBucket: 'angular-portfolio-130f4.appspot.com',
  apiKey: 'AIzaSyD8Dzw7adZf5n8IrqzCK1GvUf4Cg83BnZE',
  authDomain: 'angular-portfolio-130f4.firebaseapp.com',
  messagingSenderId: '250971559007',
  measurementId: 'G-YWH6X204C4',
}

// Only used for analytics now; the page content lives in src/data/resume.ts
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
