import './SeasonDisplay.css';

import React from 'react';

const seasonConfig = {
    summer:{
        text:'Let\'s hit the beach',
        iconName:'sun'
    },
    winter:{
        text:'Burr, Its chilly',
        iconName:'snowflake'
    }
}
const getWeather = (lat,month)=>{
    if(month>2&&month<9){
        return lat>0?'summer':'winter'
    }
    else{
        return lat<0?'summer':'winter'
    }
}
const SeasonDisplay =(props)=>{
    const season = getWeather(props.lat, new Date().getMonth());
    const { iconName, text } = seasonConfig[season];
    return(
        <div className={`seaon-display ${season}`}>
            <i className={`massive icon-left ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`massive icon-right ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;