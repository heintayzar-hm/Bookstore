import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class GeneralSection extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const {
      id, title, author, removeBook, category, updateHandler,
    } = this.props;
    return (
      <>

        <div className="grid grid-cols-1">
          <span className="tracking-wide font-important font-bold opacity-50 text-sm text-brown">{category}</span>
          <h2 className="font-normal tracking-tight font-extrabold text-2xl">{title}</h2>
          <h5 className="text-lightblue text-sm font-normal tracking-wide">{author}</h5>
          <div className=" text-lightblue text-sm font-normal tracking-wide mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
            <button type="button">Comments</button>
            <div className="w-[0.125em] h-5 bg-[#e8e8e8] mr-4 ml-4" />
            <button onClick={() => removeBook(id)} type="button">Remove</button>
            <div className="w-[0.125em] h-5 bg-[#e8e8e8] mr-4 ml-4" />
            <button type="button" onClick={() => updateHandler(id)}>Edit</button>
          </div>
        </div>

      </>
    );
  }
}

GeneralSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeBook: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired,
};
export default GeneralSection;
