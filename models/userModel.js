const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

class UserModel { 
  constructor() {
    this.collection = 'users';
  }

  async all() {
    const db = await getDB();
    return db.collection(this.collection).find().toArray();
  }

  async findById(id) {
    const db = await getDB();
    return db.collection(this.collection).findOne({ _id: ObjectId(id) });
  }

  async create(user) {
    const db = await getDB();
    const result = await db.collection(this.collection).insertOne(user);
    // console.log(result)
    return result;
  }

  async update(id, user) {
    const db = await getDB();
    const result = await db.collection(this.collection).updateOne(
      { _id: ObjectId(id) },
      { $set: user }
    );
    return result.modifiedCount;
  }

  async delete(id) {
    const db = await getDB();
    const result = await db.collection(this.collection).deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
  }
}

module.exports = new UserModel();
