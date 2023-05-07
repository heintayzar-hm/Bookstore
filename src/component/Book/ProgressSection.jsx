import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddProgress from './AddProgress';
import { editProgressAction } from '../../redux/actions/booksActions';

// eslint-disable-next-line react/prefer-stateless-function
class ProgressSection extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      boxOpen: false,
      ...this.props,
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: +(e.target.value),
    }));
  }

  submitHandler = () => {
    const { boxOpen } = this.state;
    const { dispatch } = this.props;
    if (boxOpen) {
      dispatch(editProgressAction(this.state));
    }
    this.setState((prevState) => ({ ...prevState, boxOpen: !prevState.boxOpen }));
  }

  render() {
    const {
      currentChapter, totalChapter,
    } = this.state;
    const { boxOpen } = this.state;
    return (
      <>

        <div className="flex flex-wrap items-center justify-items-center gap-2">
          <div className=" w-[5.625rem] h-[5.625rem] p-[0.63em]"><div className="absolute rounded-[50%] w-[4.25em] h-[4.25em] border-[5px] border-solid border-blue rotate-45 border-l-[#e8e8e8]" /></div>
          <div className="flex flex-col">
            <div className="text-3xl font-important text-brown dark:text-white">
              {(currentChapter / totalChapter) ? `${Math.floor((currentChapter / totalChapter) * 100)}%`
                : (
                  <>
                    <div className="text-lg">Not Started</div>
                  </>
                )}
            </div>
            {
              (currentChapter !== 0)
                ? (
                  <>
                    <div className="text-sm opacity-50 font-important text-brown dark:text-white">Completed</div>
                  </>
                )
                : null
            }
          </div>
        </div>
        <div className="grid grid-cols-1 font-normal gap-1">
          <span className="font-normal opacity-50 text-brown dark:text-white text-sm">CURRENT CHAPTER </span>
          <span className="tracking-tight font-normal">
            Chapter
            {' '}
            {currentChapter}
          </span>
          {(boxOpen) ? (
            <>
              <AddProgress
                currentChapter={currentChapter}
                totalChapter={totalChapter}
                changeHandler={this.changeHandler}
                fromUpdateSection
              />
            </>
          ) : null}
          <button onClick={this.submitHandler} className="tracking-wider hover:bg-white hover:text-blue text-white font-normal bg-blue rounded" type="button">UPDATE PROGRESS</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  // specify which state data to provide to the component
  books: state.books,
});

ProgressSection.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(ProgressSection);
