const UserModel = require('../models/userModel');

class UserController {
  async index(req, res) {
    try {
      const users = await UserModel.all();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async show(req, res) {
    try {
      const user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async store(req, res) {
    try {
      const user = req.body;
      const createdUser = await UserModel.create(user);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ message: error +'Internal Server Error' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const user = req.body;
      const updatedCount = await UserModel.update(id, user);
      if (updatedCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const deletedCount = await UserModel.delete(id);
      if (deletedCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new UserController();
