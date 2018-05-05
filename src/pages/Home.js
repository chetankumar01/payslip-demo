import React from 'react';
import { connect } from 'react-redux';
import { PayslipForm } from '../components';
import { ComputeActions } from '../actions';
import { history } from '../utils/history';

class Home extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    if (nextProps.computePayslipRequestStatus === 'success') {
      history.push('/results');
    }
  }
  computePayslip = values => {
    console.log(values);
    this.props.computePayslip(values);
  };
  render() {
    return (
      <div className="uk-container uk-margin-top">
        <h1>Enter details to generate the Payslip</h1>
        <hr />
        <div className="uk-width-1-2@s">
          <PayslipForm
            onSubmit={this.computePayslip}
            requestStatus={this.props.computePayslipRequestStatus}
            submitError={this.props.computePayslipError}
          />
        </div>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    computePayslipRequestStatus: state.compute.computePayslipRequestStatus,
  };
}

Home = connect(mapStateToProps, { ...ComputeActions })(Home);

export { Home };
