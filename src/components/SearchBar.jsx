import React from "react";
import styled from "styled-components";


export default function SearchBar({setSearchResults}){
    
    
    return(
        <div className="search">
            <h2 className="search__title">Search</h2>
            <input type="text" name="search" id="search" onChange={setSearchResults} />
        </div>
    )
}