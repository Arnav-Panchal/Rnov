import clientPromise from './mongodb';

export async function trackVisit(deviceId) {
  const client = await clientPromise;
  const db = client.db('market');
  const existing = await db.collection('visits').findOne({ deviceId });

  if (!existing) {
    await db.collection('visits').insertOne({
      deviceId,
      timestamp: new Date()
    });
  }
}
