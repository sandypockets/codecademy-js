/* Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating() */

// Parent class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(boolean) {
    this._isCheckedOut = boolean;
  }

  toggleCheckoutStatus() {
    return this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let total = 0;
    for (let i = 0; i < this._ratings.length; i++) {
      total += this._ratings[i];
    }
    return Math.round(total / this._ratings.length);
  }

  addRating (rating) {
    this._ratings.push(rating);
  }
}

// Classes
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}


// Book class debugging
// Adding data to the book class
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
// Change checkout status and print it to the console
historyOfEverything.toggleCheckoutStatus();
console.log(historyOfEverything.isCheckedOut);
// Adding three ratings and logging their average to the console
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Movie class debugging
// Adding data to the movie class, changing whether it is checked out, then printing to the console.
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckoutStatus();
console.log(speed.isCheckedOut);
// Averaging ratings for the Speed Movie.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

// CD class debugging
const now3 = new CD('Various Artists', 'Now3', 15);
now3.addRating(1);
now3.addRating(5);
now3.addRating(5);
now3.addRating(5);
now3.addRating(5);
now3.addRating(5);
now3.addRating(1);
console.log(now3.artist);
console.log(now3.title);
console.log(now3.getAverageRating());
