import React, { useContext } from 'react'
import Smurf from './Smurf'
import { SmurfContext } from "../contexts/SmurfContext";


const SmurfsList = () => {

    const smurfsCont = useContext(SmurfContext);
    // console.log(smurfsCont.smurfs)

    return (
        <div>
            {smurfsCont.smurfs.map(smurf => (
                <Smurf name={smurf.name}
                       age={smurf.age}
                       height={smurf.height}
                />
            ))
            }            
        </div>
    )
}

export default SmurfsList