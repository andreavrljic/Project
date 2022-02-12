import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVPo8AuI2i8gqyb3dJ5VeScpnaJAH6spc",
    authDomain: "library-1c58c.firebaseapp.com",
    databaseURL: "https://library-1c58c-default-rtdb.firebaseio.com",
    projectId: "library-1c58c",
    storageBucket: "library-1c58c.appspot.com",
    messagingSenderId: "662110834919",
    appId: "1:662110834919:web:cf9b7ba7b3679d4e785242",
    measurementId: "G-4E0RTS4LYJ"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
// change specific element 
// firebaseDB.ref('car/brand').set('Changeitto')
// firebaseDB.ref('car/brand').set('Changeitto')
// .then(()=>{
//     console.log('data saved')
// })
// .catch((e) => {
//     console.log(e);
// })

// use remove instead set to delete something
//update 
//single key with "set", or update several things "update({  object: 'vrijednst', lastname: 'prezime'})

// firebaseDB.ref().once('value')
// .then((snapshot) => {
//     console.log(snapshot.val())
// })
// .catch((e) => {
//     console.log(e);
// })


//get all data --- contains update -- real time database 
// firebaseDB.ref().on('value', (snapshot)=> {
//     console.log(snapshot.val())
// })
