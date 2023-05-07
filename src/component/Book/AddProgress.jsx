import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class AddProgress extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const {
      currentChapter, totalChapter, changeHandler, fromUpdateSection,
    } = this.props;
    return (
      <>
        <div className={(fromUpdateSection) ? 'grid p-3 grid-cols-1 gap-4' : 'grid p-3 grid-cols-2 gap-4'}>
          <div className="grid grid-cols-1 gap-5">
            <span className="font-important text-gray-50 text-xl font-semibold">Current Chapter</span>
            <input id="currentChapter" className="dark:bg-black dark:text-white p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="currentChapter" onChange={changeHandler} data-testid="book-title-input" type="number" min="0" max="10000" placeholder="Current Chapter" value={currentChapter} required />
          </div>
          <div className="grid grid-cols-1 gap-5">
            <span className="font-important text-gray-50 text-xl font-semibold">Total Chapter</span>
            <input id="totalChapter" className=" dark:bg-black dark:text-white p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="totalChapter" onChange={changeHandler} data-testid="author-title-input" type="number" min="0" max="10000" placeholder="Total Chapter" value={totalChapter} required />
          </div>
        </div>
      </>
    );
  }
}

AddProgress.propTypes = {
  currentChapter: PropTypes.number.isRequired,
  totalChapter: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  fromUpdateSection: PropTypes.bool.isRequired,
};
export default AddProgress;
