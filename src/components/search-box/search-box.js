import React from "react";
import './search-box-styel.css'



export const SearchBox= ({placeholder,handelChange} ) => (

    <input
        className={'search'}
        type={'searchbox'}
        placeholder={placeholder}
        size="large"
        onChange={handelChange}
    />
)
