const admin = require('firebase-admin');
const data = require('./data.json');

admin.initializeApp({
  credential: admin.credential.cert('./serviceAccountKey.json')
});

const db = admin.firestore();

async function uploadCollection(collectionName, documents) {
  for (const doc of documents) {
    await db.collection(collectionName).add(doc);
    console.log(`Documento agregado a "${collectionName}"`);
  }
}

async function main() {
  for (const [collectionName, documents] of Object.entries(data)) {
    await uploadCollection(collectionName, documents);
  }
  console.log('Carga completa de Firestore finalizada.');
  process.exit(0);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
