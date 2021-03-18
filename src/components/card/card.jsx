import React from "react";
import './card-style.css';


export const Card =(props) =>(

    <div className={'card-container'}>
        <img alt={'robots'} src={`https://robohash.org/${props.monsters.id}?set=set2&size=100x100`}/>
        <p >{props.monsters.name},{props.monsters.email}</p>
    </div>
)