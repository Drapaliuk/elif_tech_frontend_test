import React from 'react'
import { BsTrash } from 'react-icons/bs'

export function DeleteBtn({handler}) {
    return (
        <button onClick = {handler} className = 'bank__delete-btn'>
            <BsTrash className = 'bank__delete-icon' />
        </button>
    )
}

