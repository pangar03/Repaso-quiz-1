export const findBooks = (books, year, pages) => {
    const filteredBooks = [];

    books.forEach(book => {
        if (book.year >= year && book.pages >= pages) filteredBooks.push(book);
    });

    return filteredBooks;
};