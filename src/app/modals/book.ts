export class Book {
  book_name: string;
  authors: string;
  isbn: string;
  publisher_id: number;
  constructor(book: string, authors: string, isbn: string, publisher_id: number) {
    this.book_name = book;
    this.authors = authors;
    this.isbn = isbn;
    this.publisher_id = publisher_id;
  }
}
