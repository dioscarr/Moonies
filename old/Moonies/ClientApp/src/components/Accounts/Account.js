import React, { useContext } from 'react';
import './Account.scss'
import { db } from '../../store/storeSettings';
import { useForm } from '../../hooks/useForm';
import ToggleItem from '../ToggleItem';

import { Fab } from '@material-ui/core';
import { FaCheck } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'




const Account = (props) => {
    const itm = props.funditem;
    const { state, dispatch } = useContext(db);
    const { fields, setFields, setField, GetUpdatedBalance } = useForm({ Ibalance: "" });
    function SendUpdate() {
        let updatedModel = {
            id: itm.id,
            Name: itm.Name,
            Balance: GetUpdatedBalance(itm.Balance),
            BalanceDate: itm.BalanceDate
            , isActive: itm.isActive
        }
        dispatch({ type: 'UPDATE', payload: updatedModel });
        setFields({ Ibalance: '' });
    }
    function Delete() {
        let updatedModel = {
            id: itm.id,
            Name: itm.Name,
            Balance: itm.Balance,
            BalanceDate: itm.BalanceDate
        }
        dispatch({ type: 'DELETE', payload: updatedModel })
        //setFields({Ibalance:''});
    }
    function callback(props) {

        const { isActive } = props;
        let updatedModel = {
            id: itm.id,
            Name: itm.Name,
            Balance: itm.Balance,
            BalanceDate: itm.BalanceDate
            , isActive: isActive
        }
        dispatch({ type: 'UPDATE', payload: updatedModel });
        setFields({ Ibalance: '' });
    }

    return (
        <div data-theme={state.dataTheme.theme} className="funditems">
            <div className="fundLName">
                {itm.Name}
            </div>
            <div className="fundLBalance">
                ${parseFloat(itm.Balance).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className="fundLBalanceDate">
                {itm.BalanceDate}
            </div>
            <div className="fundIName">
                <input type="text" name="Ibalance" onChange={setField} value={fields.Ibalance} />
            </div>
            <div className="btnfundUpdate">
                <Fab onClick={SendUpdate} color="primary" aria-label="edit">
                    <FaCheck style={{ fontSize: '30px' }} />
                </Fab>
            </div>
            <div className="btnFundRemove">
                <Fab onClick={Delete} color="primary" aria-label="edit">
                    <MdDelete style={{ fontSize: '30px' }} />
                </Fab>
            </div>
            <div className="isActiveToggle">
                <ToggleItem id={`toggleItem${itm.id}`} isActive={itm.isActive} callBack={callback.bind(this)} />
            </div>
        </div>
    );
}
export default Account;

