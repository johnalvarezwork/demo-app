import React from 'react';
import { connect } from 'react-redux';
import { addCount } from '../../store/actions/card';

const Card = ({ count, addCount }) => {
  return (
    <div>
      <h1>Card</h1>
      <div>{count}</div>
      <button onClick={() => addCount(count)}>+ 1</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.card.count,
});

export default connect(mapStateToProps, { addCount })(Card);
