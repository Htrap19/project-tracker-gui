import React from 'react';
import DatabaseItem from './DatabaseItem/DatabaseItem';

const ProjectDetails = () => {
    return (
        <form className='group'>
            <div className="my-base-input group">
                <label htmlFor="projectName">Project Name</label>
                <input type="text" id="projectName" />
            </div>
            <div className="my-base-input group">
                <label htmlFor="description">Description</label>
                <textarea id="description" />
            </div>
            <div className='grid xl:grid-cols-2 xl:gap-6'>
                <div className="my-base-input group">
                    <label htmlFor="projectStatus">Status</label>
                    <select id='projectStatus'>
                        <option>Pending</option>
                        <option>Started</option>
                        <option>Stopped</option>
                        <option>Canceled</option>
                        <option>Completed</option>
                    </select>
                </div>
                <div className='my-base-input group'>
                    <label htmlFor='duration'>Duration (months)</label>
                    <input type='number' id='duration' />
                </div>
            </div>
            <div className='grid xl:grid-cols-3 xl:gap-6'>
                <div className='my-base-input group'>
                    <label htmlFor='startDate'>Start Date</label>
                    <input id='startDate' type='date'/>
                </div>
                <div className='my-base-input group'>
                    <label htmlFor='completionDate' >Completion Date</label>
                    <input id='completionDate' type='date'/>
                </div>
                <div className='my-base-input group'>
                    <label htmlFor='deliveryDate' >Delivery Date</label>
                    <input id='deliveryDate' type='date'/>
                </div>
            </div>
            <div className='grid xl:grid-cols-3 xl:gap-6'>
                <div className='my-base-input group'>
                    <label htmlFor='appType'>Application Type</label>
                    <select id='appType'>
                        <option>Web</option>
                        <option>Mobile</option>
                        <option>CMD</option>
                        <option>Integrated API</option>
                        <option>Desktop</option>
                    </select>
                </div>
                <div className='my-base-input group'>
                    <label htmlFor='languages'>Languages</label>
                    <input type='text' id='languages' />
                </div>
                <div className='my-base-input group'>
                    <label htmlFor='frameworkUsed'>Framework Used</label>
                    <input type='text' id='frameworkUsed' />
                </div>
            </div>
            <div className='my-base-input group'>
                <label>Databases Used</label>
                <div className='w-full bg-midnight-light rounded-lg shadow-lg'>
                    <ul className='divide-y-2 divide-midnight-lighter'>
                        <DatabaseItem name="MYSQL" dbType="Relational" version='8.0.28' />
                        <DatabaseItem name="Redis" dbType="NoSQL" version='6.2.6' />
                        <DatabaseItem name="MongoDB" dbType="NoSQL" version='5.2' />
                    </ul>
                </div>
            </div>
        </form>
    )
}

export default ProjectDetails;