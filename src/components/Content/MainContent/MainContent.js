import React from 'react';
import ProjectAssets from './ProjectAssets/ProjectAssets';
import ProjectDetails from './ProjectDetails/ProjectDetails';

const currnetContent = (route) => {
    if (route === 'ProjectAssets')
        return <ProjectAssets />
    

    return <ProjectDetails />
}

const MainContent = ({ contentRoute }) => {
    return (
        <div className='p-6 flex w-full justify-center items-start'>
            { currnetContent(contentRoute) }
        </div>
    )
}

export default MainContent;