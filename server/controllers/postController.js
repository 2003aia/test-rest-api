const db = require("../models");

/* // image Upload
const multer = require("multer");
const path = require("path"); */

const Post = db.posts;

const Login = db.login;

// main work

const signUp = async (req, res) => {
  let info = {
    email: req.body.email,
    password: req.body.password,
  };
  const signupInfo = await Login.create(info);
  res.status(200).send({ message: "successful signup" });
  console.log(signupInfo);
};

const login = async (req, res) => {
  const loginInfo = await Login.findAll({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  }).catch((err) =>
    res.status(404).send({ message: `error wrong email or password||${err}` })
  );

  res.status(200).send(loginInfo);
};

const addPost = async (req, res) => {
  let info = {
    author: req.body.author,
    message: req.body.message,
  };

  const post = await Post.create(info);
  res.status(200).send(post);
  console.log(post);
};

const getAllPosts = async (req, res) => {
  let posts = await Post.findAll({});
  res.status(200).send(posts);
};

const updatePost = async (req, res) => {
  let id = req.params.id;

  const post = await Post.update(req.body, { where: { id: id } });

  res.status(200).send(post);
};

const deletePost = async (req, res) => {
  let id = req.params.id;

  await Post.destroy({ where: { id: id } });

  res.status(200).send("Post is deleted !");
};

/* const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image"); */

module.exports = {
  addPost,
  getAllPosts,
  updatePost,
  deletePost,
  login,
  signUp,
};
