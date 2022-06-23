const admin = require("firebase-admin");
require("dotenv").config();


// const firebaseConfig = {
//   apiKey: process.env.APP_API_KEY,
//   authDomain: process.env.APP_AUTH_DOMAIN,
//   projectId: process.env.APP_PROJECT_ID,
//   storageBucket: process.env.APP_STORGE_BUCKET,
//   messagingSenderId: process.env.APP_MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.APP_MEASUREMENT_ID
// };

// console.log(process.env)
const serviceAccount = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key.replace(/\\n/g, '\n'),
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url
};

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const dataStore = app.firestore();
module.exports = { dataStore };