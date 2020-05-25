import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    return (
      <Counter
        color={this.props.color}
        value={this.props.number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.get('color'),
  number: counter.get('number'),
});

const mapDispatchToProps = { increment, decrement };
// 위와같이 축약해서 표현할 수 있다.
// (1) const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });
// (2) const mapDispatchToProps = dispatch => bindActionCreators({ increment, decrement }, dispatch); // **** (2) bindActionCreators 사용.


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);