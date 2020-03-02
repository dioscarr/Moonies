import React, { useContext } from 'react';
import Account from './Account';
import { db } from '../../store/storeSettings';
//import { connect } from '../../store/storeSettings';


const AccountsView = () => {
  const { state, dispatch } = useContext(db);
  const funcFundUpdate = (prop) => {
    const { model } = prop;
    dispatch({ type: 'UPDATE', payload: model })
    //props.DispatchUpdateFund(model);
  }
  // return (<div>loading..</div>)
  return (
    (state.AvailableFunds.length === 0)
      ?
      (<div>loading...</div>)
      :

      state.AvailableFunds.sort((a, b) => (a.id > b.id) ? 1 : -1).map(fundItem => <Account key={fundItem.id} funditem={fundItem} funcFundUpdate={funcFundUpdate.bind(this)} />)
  );
}
//settings
//const mapStateToProps = state => { return { funds: state.AvailableFunds } }
//const mapDispatchToProps = dispatch => {
//return {
//DispatchUpdateFund: (payload) => { dispatch({ type: 'UPDATE', payload }) },
//dispatchDeleteFund: (payload) => dispatch({ type: 'DELETE', payload })
//}
//}
// export default connect(mapStateToProps, mapDispatchToProps)(AccountsView);
export default AccountsView;

