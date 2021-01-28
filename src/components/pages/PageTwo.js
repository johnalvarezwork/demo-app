import React from 'react';
import { connect } from 'react-redux';
import { getData, postData } from '../../store/actions/card';

const PageTwo = ({ count, message, getData, postData }) => {
  return (
    <div>
      <h1>This is Page 2</h1>
      <p>Count from page one: {count}</p>
      <div className="get-data">
        <p>{!message ? 'no message found' : `Message: ${message}`}</p>
        <button onClick={() => getData()}>Get Data</button>
        <button onClick={() => postData(message)}>Post Data</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.card.count,
  message: state.card.message,
});

export default connect(mapStateToProps, { getData, postData })(PageTwo);
