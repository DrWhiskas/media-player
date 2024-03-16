const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017'; // Remplacez cette URL par l'URL de votre instance MongoDB

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect(async (err) => {
	if (err) {
		console.error('Error connecting to MongoDB:', err);
		process.exit(1);
	}

	console.log('Connected to MongoDB');

	// Remplacez cette ligne par la logique de votre application pour obtenir la référence à la base de données et à la collection
	const db = client.db('my-music');
	const musicCollection = db.collection('music');

	// Exportez les références à la base de données et à la collection pour une utilisation dans d'autres fichiers
	module.exports = { db, musicCollection };
});

