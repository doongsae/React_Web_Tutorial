const { initializeApp } = require('@firebase/app');
const { getDatabase, ref, onValue } = require('@firebase/database');
const fs = require('fs');

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
var firebaseConfig = {
  apiKey: conf.apiKey,
  authDomain: conf.authDomain,
  databaseURL: conf.databaseURL,
  storageBucket: conf.storageBucket
};

const fbApp = initializeApp(firebaseConfig);
var fb_database = getDatabase();

app.get('/api/customers', (req, res) => {
  const personRef = ref(fb_database, '/people');
  onValue(personRef, (snapshot) => {
    const resV = snapshot.val();
    res.send(resV);
  })
});

app.listen(port, () => console.log(`Listening on Port ${port}`));