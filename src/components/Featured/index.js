import React from 'react'
import Carrousel from './Carrousel';
import Time from './Time'

const Featured = () => {
        return (
            <div style ={{position :"relative"}}>
                <Carrousel />
                <div className ="artist_name">
                    <div className="wrapper">
                        Ariana Grande
                    </div>
                </div>
                <Time/>
            </div>
            
        )
        
    }


export default Featured;
