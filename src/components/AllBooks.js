import React from 'react';
import Book from './Book';
import BooksForm from './BooksForm';

const books = [
  { id: 1, title: 'The Da Vinci Code', category: 'Fiction' },
  { id: 2, title: 'Shogun', category: 'Historical Fiction' },
  { id: 3, title: 'The Way of the Peaceful Warrior', category: 'Fiction, Autobiography' },
  { id: 4, title: 'The A.B.C. Murders ', category: 'Crime Novel' },
];

function AllBooks() {
  return (
    <div id="books-area">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ id, title }) => (
            <Book key={id} id={id} title={title} />
          ))}
        </tbody>
      </table>
      <BooksForm />
    </div>
  );
}

export default AllBooks;
