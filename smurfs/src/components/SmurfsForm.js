import React, { useState } from 'react'

const SmurfsForm = () => {
    const [ state, setState ] = useState()

    return (
        <div>
            <form>
                <input
                    name='name'
                    type='text'
                    value=''
                    placeholder='Enter name'
                />
                <input
                    name='age'
                    type='number'
                    value=''
                    placeholder='Enter age'
                />
                <input
                    name='height'
                    type='text'
                    value=''
                    placeholder='Enter height'
                />
            </form>
        </div>
    )
}

export default SmurfsForm