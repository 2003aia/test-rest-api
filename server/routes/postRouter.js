// import controllers review, products
const postController = require("../controllers/postController.js");

// router
const router = require("express").Router();

// use routers
router.post("/login", postController.login);

router.post("/signUp", postController.signUp);

router.post("/addPost", postController.addPost);

router.get("/allPosts", postController.getAllPosts);

router.put("/:id", postController.updatePost);

router.delete("/:id", postController.deletePost);

module.exports = router;
