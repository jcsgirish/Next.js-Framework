
import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
  
      const { title, image, address, description } = data;
      const client = await MongoClient.connect('mongodb+srv://thewizard:wizard0004@cluster0.ahkbhop.mongodb.net/meetups?retryWrites=true&w=majority');
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
  
      client.close();
  
      try {
        res.status(201).json({ message: 'Meetup inserted' });
      } catch (error) {
        console.log('Error sending response:', error);
      }
    }
  }
  
  export default handler;
  