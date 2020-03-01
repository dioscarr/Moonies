import React from 'react';
import Account from './Account';
import { connect } from '../../store/storeSettings';

const AccountsView = (props) => {
  const funcFundUpdate = (prop) => {
    const { model } = prop;
    props.DispatchUpdateFund(model);
  }
  return (
    props.funds.sort((a, b) => (a.id > b.id) ? 1 : -1).map(fundItem => <Account key={fundItem.id} funditem={fundItem} funcFundUpdate={funcFundUpdate.bind(this)} />)
  )
}
//settings
const mapStateToProps = state => { return { funds: state.AvailableFunds } }
const mapDispatchToProps = dispatch => {
  return {
    DispatchUpdateFund: (payload) => { dispatch({ type: 'UPDATE', payload }) },
    dispatchDeleteFund: (payload) => dispatch({ type: 'DELETE', payload })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountsView);

