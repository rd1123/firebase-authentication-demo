// require('firebase/auth');
// require('firebase/firestore');

// firebase.initializeApp(firebaseConfig);
// => sign up
// firebase.auth().createUserWithEmailAndPassword(email = "test111@email.com", password = "thisIsPassword")
//   .then(userCredential => {
//     const user = userCredential.user;
//     console.log("user => ", user);
//   })
//   .catch(e => {
//     const errorCode = e.code;
//     const errorMessage = e.message;
//     console.log({ errorCode, errorMessage });
//   });
// => sign in

// firebase.auth().signInWithEmailAndPassword(email = "test1@email.com", password = "123456")
//   .then(userCredential => {
//     const user = userCredential.user;
//     console.log(user);
//   }).catch(error => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log({
//       "errorCode => ": errorCode,
//       "errorMessage => ": errorMessage
//     });
//   }); // console.log(getIdToken);

// => sign out
// firebase.auth().signOut()
//   .then(user => {
//     console.log("Sign out user => ", user);
//     console.log("Sign out successful");
//   })
//   .catch(e => {
//     console.log("Sign out user => ");
//     console.log(e.message);
//   })

// =========> 擷取api送進來的id token解析為user的uid
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjMmVkODQ5YThkZTI3ZTI0NjFlNGJjM2VmMDZhYzdhYjc4OGQyMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWJhY2tlbmQtdGVzdC1jOGQ4MyIsImF1ZCI6ImZpci1iYWNrZW5kLXRlc3QtYzhkODMiLCJhdXRoX3RpbWUiOjE2MTI3NzkxOTUsInVzZXJfaWQiOiJqa0hOTnZnQTBnUlU1aVdxWHZ5T3Bjd0FPczczIiwic3ViIjoiamtITk52Z0EwZ1JVNWlXcVh2eU9wY3dBT3M3MyIsImlhdCI6MTYxMjc3OTE5NSwiZXhwIjoxNjEyNzgyNzk1LCJlbWFpbCI6InRlc3QzQGVtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0M0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Hgp-iNdaWN6vZJsiadp_n5itYsId2wMj3LHOs193SSkjfqHAGyZYUgft5bWXFH5qusJna3YriAqe4q-wcx5hGg8epNB82n9F-epLyRHOy4ykH7MzjQO-FYDl_3QAucP92gfA1E4ahHSPuAL2akLmNshHT2WFgL7m9fflYvtau2_KAfQAO6WeGkjPuPh4NyrAxzOMc80NsfY3-9NVMS7m-qjS29iALTjXVGaA1p3B9UByf06hqiay12uJVaASGY0PymhIYWbmSLgWi0F9SW8UaMoEC5BtvU3tw0prSV9Far-FyLIhCpDyANMKzrMLSGMENWBqPYMSAHXgg74h37D5cw";


admin
  .auth()
  .verifyIdToken(idToken)
  .then(jwt => {
    const userId = jwt.uid;
    console.log(userId);
  })
  .catch(e => {
    console.log(e);
  })