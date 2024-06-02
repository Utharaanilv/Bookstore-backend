const express = require('express');
const booksController = require('../Controller/booksController');
const userController=require('../Controller/userController')

const multerConfig=require('../middleware/multermiddleware')
const router = new express.Router();

router.get('/books', booksController.getAllBooks);

router.post('/add',multerConfig.single("image"),booksController. addbooks)

router.delete('/delete-books/:id',booksController.deleteBooks)

router.put('/edit/books/:id', multerConfig.single('image'), booksController.editbooks);

router.post('/user/register',userController.registerController)

router.post('/user/login',userController.loginController)

module.exports = router;


