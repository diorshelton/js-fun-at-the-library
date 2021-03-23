function createTitle(title) {
  if (title.includes('The')){
    return `${title}`
  } else { 
    return `The ${title}`;
  }
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
  reviews.push(review)};
}

function calculatePageCount(bookTitle) {
  return (bookTitle.length * 20);
}

function writeBook(title, mainCharacter, genre) {
  return {
  title:createTitle(title),
  mainCharacter:mainCharacter,
  pageCount:calculatePageCount(title), 
  genre:genre,
  };
}

function editBook(book) {
  return book.pageCount = (book.pageCount * .75);
 }

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}