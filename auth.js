const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
})

const authenticate = async (idToken) => {
  try {
    console.log(idToken);
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    console.log(decodedIdToken);
    return;
  } catch (e) {
    console.log(e.message);
  }
};

authenticate("eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjMmVkODQ5YThkZTI3ZTI0NjFlNGJjM2VmMDZhYzdhYjc4OGQyMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWJhY2tlbmQtdGVzdC1jOGQ4MyIsImF1ZCI6ImZpci1iYWNrZW5kLXRlc3QtYzhkODMiLCJhdXRoX3RpbWUiOjE2MTI1MTM0NzUsInVzZXJfaWQiOiJTanZNM2FVaDB1WDBLUE1xQWRuU0F4b01KR3IxIiwic3ViIjoiU2p2TTNhVWgwdVgwS1BNcUFkblNBeG9NSkdyMSIsImlhdCI6MTYxMjUxMzQ3NSwiZXhwIjoxNjEyNTE3MDc1LCJlbWFpbCI6InRlc3QxQGVtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0MUBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.oMID2Y1df-b51ybw-RCFlszPtKQcVWgL4ExxkMuSdmwzj37NFs6Vq8KN3EfbPlxP9S_mORT1NhFukQs6o87ye5pcUcIAdoT0C4ZK6NFcnCcLkc-awb5xaNB_73VujC1bHFPz290S_-Kc8JCrmBpukChZSg2546j4SPAd4EXW8Yn5tfiWfGEWFr0XjMtU_djr3m17CCafzBUDmFChOjqwgFJdLqs-DtcNCr5o6IDRHjj63XktYk-f2MbHmIxYayi5RRjyLUw1jtrG-ysTuJ-S15E_m5zxkiJ0enxkZyI2Qg9QXOHATRopLGlFILTczoQ6relgthuh1paBzSgWuOWy3w");