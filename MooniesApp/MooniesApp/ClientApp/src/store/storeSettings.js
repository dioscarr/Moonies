
import React, {Component, useContext} from 'react';


export const db = React.createContext();
export const connect = (mapStateToProps, mapDispatchToProps) =>
{
  return function(Component){

    return function(){

        const {state, dispatch} = React.useContext(db)
        const stateToProps = mapStateToProps(state)
        const dispatchToProps = mapDispatchToProps(dispatch)
        const props = {...stateToProps, ...dispatchToProps}

        return (<Component {...props} />)
    }
  }
}
