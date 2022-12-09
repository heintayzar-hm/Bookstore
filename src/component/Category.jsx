import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Category extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <>
        <div>
          <button data-testid="check-status" type="button">Check Status</button>
        </div>
      </>
    );
  }
}
export default Category;
