const admin = require('firebase-admin'); //interacts with firebase from privileged environments

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };
