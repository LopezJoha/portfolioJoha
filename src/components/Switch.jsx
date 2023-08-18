import React from "react";
import classNames from "classnames";

export default function Switch(props){
    return(
        <div onClick={props.funcion}
             className={classNames("cursor-pointer flex w-10 h-5 self-center bg-gray-600 rounded-full transition-all duration-500", {"bg-green-600" : props.idioma})}>
            <span className={classNames("h-5 w-5 bg-white rounded-full transition-all duration-500 shadow-2xl", {"ml-5" : props.idioma})}/>
            
        </div>
    )
}