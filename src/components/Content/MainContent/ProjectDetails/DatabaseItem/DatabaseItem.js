import React from 'react'

const DatabaseItem = ({ name, dbType, version }) => {
    return (
        <li className='w-full p-3 hover:rounded hover:bg-green-700 hover:text-stone-300 transition-all'>
            <div className='flex flex-row justify-between'>
                <label className='xl:w-6'>{name}</label>
                <span className='invisible xl:visible'>{version}</span>
                <select defaultValue={dbType} className='bg-midnight-light border border-midnight-lighter text-stone-300 text-sm rounded-lg focus:border-green-500 p-1'>
                    <option>Relational</option>
                    <option>NoSQL</option>
                </select>
            </div>
        </li>
    )
}

export default DatabaseItem;