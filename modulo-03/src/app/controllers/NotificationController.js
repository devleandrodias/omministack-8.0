import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res
        .status(400)
        .json({ error: 'Only provider can load notification' });
    }

    const notification = Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desk' })
      .limit(20);

    return res.json(notification);
  }

  async update(req, res) {
    const notificationId = req.params.id;

    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      {
        read: true,
      },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
