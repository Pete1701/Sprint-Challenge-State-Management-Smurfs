import React, { useState, useContext } from 'react'
import axios from 'axios'
import { SmurfContext } from "../contexts/SmurfContext";

const SmurfsForm = () => {

    const smurfsCont = useContext(SmurfContext);
    // console.log('SMURFS', smurfsCont)

    const [ newSmurf, setNewSmurf ] = useState(
        {
            name: '',
            age: null,
            height: '',            
          }
    )

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
        console.log('NEW', newSmurf)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                console.log('POST', res);
                smurfsCont.setSmurfs([...smurfsCont.smurfs,
                             newSmurf])
            })
            .catch(error => console.log(error));        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    type='text'
                    value={newSmurf.name}
                    placeholder='Enter name'
                    onChange={handleChanges}
                />
                <input
                    name='age'
                    type='number'
                    value={newSmurf.age}
                    placeholder='Enter age'
                    onChange={handleChanges}
                />
                <input
                    name='height'
                    type='text'
                    value={newSmurf.height}
                    placeholder='Enter height'
                    onChange={handleChanges}
                />
                <button type='submit'>
                    Call Smurf
                </button>
            </form>
        </div>
    )
}

export default SmurfsForm