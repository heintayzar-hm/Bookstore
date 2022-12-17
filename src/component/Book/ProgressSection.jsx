import React from 'react';
import PropTypes from 'prop-types';
import AddProgress from './AddProgress';

// eslint-disable-next-line react/prefer-stateless-function
class ProgressSection extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      boxOpen: false,
    };
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: +(e.target.value),
    }));
  }

  render() {
    const {
      chapter, totalChapter,
    } = this.props;
    const { boxOpen } = this.state;
    return (
      <>

        <div className="flex flex-wrap items-center justify-items-center gap-2">
          <div className=" w-[5.625rem] h-[5.625rem] p-[0.63em]"><div className="absolute rounded-[50%] w-[4.25em] h-[4.25em] border-[5px] border-solid border-blue rotate-45 border-l-[#e8e8e8]" /></div>
          <div className="flex flex-col">
            <div className="text-3xl font-important text-brown dark:text-white">
              {(chapter / totalChapter) ? `${Math.floor((chapter / totalChapter) * 100)}%`
                : (
                  <>
                    <div className="text-lg">Not Started</div>
                  </>
                )}
            </div>
            {
              (chapter !== 0)
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
            {chapter}
          </span>
          {(boxOpen) ? (
            <>
              <AddProgress
                currentChapter={chapter}
                totalChapter={totalChapter}
                changeHandler={this.changeHandler}
                fromUpdateSection
              />
            </>
          ) : null}
          <button onClick={() => this.setState((prevState) => ({ ...prevState, boxOpen: !prevState.boxOpen }))} className="tracking-wider hover:bg-white hover:text-blue text-white font-normal bg-blue rounded" type="button">UPDATE PROGRESS</button>
        </div>
      </>
    );
  }
}

ProgressSection.propTypes = {
  chapter: PropTypes.number.isRequired,
  totalChapter: PropTypes.number.isRequired,
};
export default ProgressSection;
