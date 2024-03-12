const getTheTitles = function (books) {
  const booksTitle = [];
  books.forEach((book) => {
    booksTitle.push(book.title);
  });
  return booksTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
