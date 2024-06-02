const books = require('../Modals/booksSchema');

// get
const getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await books.find();
    if (allBooks.length === 0) {
      return res.status(200).json({ message: "No books found", books: [] });
    }
    return res.status(200).json({ books: allBooks });
  } catch (err) {
    console.error("Error fetching books:", err);
    return res.status(500).json({ message: "Failed to fetch books", error: err.message });
  }
};

// add

const addbooks=async(req,res)=>{
    console.log(req.file);
    console.log("inside add user function");
    const{author,title,category,description,price}=req.body
    try{
const book= new books({
    title,author,category,description,price,image :req.file.filename          
});
      await book.save();
      return res.status(201).json({ book });
    }
    catch (err) {
                console.error("Error adding book:", err); 
                return res.status(500).json({ message: "Unable to add book. Please check server logs for more details." });
            }
}



// delete

const deleteBooks = async (req, res) => {
  const { id } = req.params
  try {
    const removeData = await books.findByIdAndDelete({ _id: id })
    res.status(200).json(removeData)

  } catch (err) {
    res.status(401).json(err)
  }
}


const editbooks = async (req, res) => {
  const { id } = req.params
  const { title, author, category, description, price,image } = req.body
  const file=req.file?req.file.filename:image

  try {
    const updateBooks = await books.findByIdAndUpdate({ _id:id }, {
      title, author, category, description, price, image:file
    }, { new: true })

    await updateBooks.save()
    res.status(200).json(updateBooks)
  } catch (err) {
    res.status(200).json(err)
  }


}


module.exports = {
  getAllBooks,

  addbooks,
  deleteBooks,
  editbooks

};