const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('tricktracker');
const userCollection = db.collection('user');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addScore(user) {
  const result = await userCollection.insertOne(user);
  console.log(result)
  return result;
}
function getUser(email) {
    return userCollection.findOne({ email: email });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
// Hash the password before we insert it into the database
const passwordHash = await bcrypt.hash(password, 10);
const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
    trickScore: 0, 
    numTricks: 0
};
await userCollection.insertOne(user);

return user;
}

function getHighScores() {
    const options = {
      sort: { score: -1 },
      limit: 10,
    };
    const cursor = userCollection.find();
    return cursor.toArray();
}

module.exports = { getUser,
    getUserByToken,
    createUser,
    addScore, getHighScores };
