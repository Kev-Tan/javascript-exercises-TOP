const getTheTitles = function(booksArr) {
    bookTitles = booksArr.map((book)=>{
        return book.title
    })
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
