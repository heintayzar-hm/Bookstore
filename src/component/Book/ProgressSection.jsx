import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class ProgressSection extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const {
      chapter, totalChapter,
    } = this.props;
    return (
      <>

        <div className="flex flex-wrap items-center justify-items-center gap-2">
          <div className=" w-[5.625rem] h-[5.625rem] p-[0.63em]"><div className="absolute rounded-[50%] w-[4.25em] h-[4.25em] border-[5px] border-solid border-blue rotate-45 border-l-[#e8e8e8]" /></div>
          <div className="flex flex-col">
            <div className="text-3xl font-important text-brown dark:text-white">
              {Math.floor((chapter / totalChapter) * 100)}
              %
            </div>
            <div className="text-sm opacity-50 font-important text-brown dark:text-white">Completed</div>
          </div>
        </div>
        <div className="grid grid-cols-1 font-normal gap-1">
          <span className="font-normal opacity-50 text-brown dark:text-white text-sm">CURRENT CHAPTER </span>
          <span className="tracking-tight font-normal">
            Chapter
            {' '}
            {chapter}
          </span>
          <button className="tracking-wider text-white font-normal bg-blue rounded" type="button">UPDATE PROGRESS</button>
        </div>
      </>
    );
  }
}

ProgressSection.propTypes = {
  chapter: PropTypes.string.isRequired,
  totalChapter: PropTypes.string.isRequired,
};
export default ProgressSection;
