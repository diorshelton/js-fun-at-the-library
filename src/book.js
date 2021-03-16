function createTitle(title) {
  return `The ${title}`
}
function buildMainCharacter(name, age, pronouns) {
  return {
    name: `${name}`,
    age: `${age}`,
    pronouns: `${pronouns}`,
  }
}
/*function saveReview(review) {
  var reviews = [];
  return reviews.push(review);
}*/
function calculatePageCount(bookTitle) {
  var noSpaceString = bookTitle.split(" ").join("");
  for (var i = 0; i < noSpaceString.length; i++) {
    var bookPageCount;
    return bookPageCount+=20;
  }
}

function noSpaceString(string) {
   var result = string.split(" ").join('');
   return (result.length)*20;
} 
function adds20ForEachCharacter(title) {
  var result = (title.length)*20;
  return result
}

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}