const { sequelize } = require("../../../models");
const db = require("../../../models");
const { users, posts, comments } = db;

exports.getAllUsers = async (req, res, next) => {
  try {
    const userInfos = await users.findAll({
      include: [
        {
          model: posts,
        },
        {
          model: comments,
        },
      ],
    });

    return res.status(200).json({
      msg: "Fetched all users",
      data: userInfos,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const user = { email: Date.now() };

  try {
    let savedUser = await users.create(user);
    console.log(savedUser);

    return res.json({
      msg: "User Created",
      data: savedUser,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.login = async (req, res, next) => {
  console.log(req);
  res.send("Login Route");
};
