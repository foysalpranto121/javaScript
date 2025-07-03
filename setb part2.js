// Creating the book object
let book = {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genres: ["Mystery", "Thriller", "Drama"]
};

// a) Access title, author, and genres
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Genres:", book.genres);

// b) Access a specific genre (e.g., "Mystery")
console.log(book.genres[0]);


// c) Modify the book's title and update one of the genres
book.title = "The Whispering Patient";
book.genres[1] = "Psychological Thriller"; // Changing "Thriller" to "Psychological Thriller"
console.log("Updated Book:", book);

// d) Add a new genre and remove one
book.genres.push("Suspense");       // Add new genre
book.genres.splice(0, 1);           // Remove the first genre (index 0)
console.log("Final Genres List:", book.genres);

