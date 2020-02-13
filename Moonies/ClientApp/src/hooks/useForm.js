import { useState } from 'react';
import {getCurrentDate} from '../utility/utilities';

/**
 *  `useForm`.
*
* **/
export function useForm(initState) {

  const [fields, setFields] = useState(initState);

  const setField = (e) => {

    const propertyName = (typeof e.target !='undefined')? e.target.name: e.Name;
    const propertyValue = (typeof e.target !='undefined')? e.target.value: e.Value;
    setFields({ ...fields,[propertyName]:propertyValue });
  }
  const reset = ()=>setFields({ id:fields.id, Name:fields.Name,Iname:'', Balance:fields.Balance, Ibalance:'', BalanceDate:fields.getCurrentDate});
  const isBalanceValid = ()=>{return (isNaN(fields.Ibalance))?false:true}

  const GetUpdatedBalance = (Balance)=>
  {
    let tempBalance = fields.Ibalance;
    if(fields.Ibalance.indexOf("+")>-1){
      tempBalance =parseFloat(Balance) + parseFloat(fields.Ibalance)
    }
    else if(fields.Ibalance.indexOf("-")>-1){
      tempBalance = parseFloat(Balance) + parseFloat(fields.Ibalance)
    }
    return  tempBalance;
  }
  return {fields,setFields,setField,reset,isBalanceValid,GetUpdatedBalance}
}
