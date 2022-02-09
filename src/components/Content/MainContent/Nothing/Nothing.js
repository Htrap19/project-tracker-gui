import React from 'react';

import NotFoundImg from '../../../../assets/images/undraw_no_data_re_kwbl.svg'

const Nothing = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-full w-full opacity-10'>
            <img src={NotFoundImg} className='w-40 h-40' alt='Empty' id='NotFoundImg' />
            <label htmlFor="NotFoundImg">Nothing to do</label>
        </div>
    )
}

export default Nothing;