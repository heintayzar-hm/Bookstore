import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

// eslint-disable-next-line react/prefer-stateless-function
class Books extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      books: [
        {
          id: '1',
          author: 'Hein Tay Zar',
          title: 'How to eat',
        },
        {
          id: '2',
          author: 'Hein Tay Zar2',
          title: 'How to sleep',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <>
        <ul>
          {books.map((book) => (
            <Book key={book.id} id={book.id} title={book.title} author={book.author} />
          ))}
        </ul>
        <AddBook />
      </>
    );
  }
}
export default Books;
