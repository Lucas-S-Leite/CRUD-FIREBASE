const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./crud-firebase-7be40-firebase-adminsdk-avjzj-50c59f73ad.json');

initializeApp({
credential: cert(serviceAccount)
});

const db = getFirestore();

const data = {
name:'Los Angeles',

state: 'CA',

coutry:'USA'

}
const cityRef = db.collection('BA').doc('sa').set(data);

// UPDATE

/*const res =  db.collection('BA').doc('sa').update({
    name: 'hello',
    'capital': 'amarelo'
  });*/

// DELETE

  /*const res = db.collection('BA').doc('sa').update({
    name: FieldValue.delete('Los Angeles')
  });*/  
  

 

  