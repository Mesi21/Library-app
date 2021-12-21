import React from 'react';
import PropTypes from 'prop-types';

function Book({
  id, title, author, category,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td><button type="submit" className="delBtn">Remove</button></td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
