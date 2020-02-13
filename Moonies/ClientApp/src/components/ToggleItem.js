import React, {useState} from 'react';
const ToggleItem = (props) =>{
    const {id, isActive,callBack} = props;
    //const [state, setState] = useState(isActive);

    const on = () =>{
        const onStyle = (isActive)?
            {color:'green', fontSize:'16px', fontWeight:'900', padding:'1px 2px', width:'20px'}:
            {color:'grey', fontSize:'16px', fontWeight:'900', padding:'1px 2px', width:'20px'};
        return onStyle;
    }

    const off = () =>{
        const onStyle = (!isActive)?
            {color:'red', fontSize:'16px', fontWeight:'900', padding:'1px 2px', width:'26px'}:
            {color:'grey', fontSize:'16px', fontWeight:'900', padding:'1px 2px', width:'26px'};
        return onStyle;
    }

    const offOnStyle ={off:off(),on:on()}

    return (
        <div className="toggle-container">
            <span style={offOnStyle.off}>off</span>
            <span className="toggle">
                <input checked={isActive} onChange={()=>{callBack({isActive:!isActive})}}
                type="checkbox" className="checkbox" id={`${id}`} />
                <label htmlFor={`${id}`} />
            </span>
            <span style={offOnStyle.on}>on</span>
        </div>
    );
}
export default  ToggleItem;