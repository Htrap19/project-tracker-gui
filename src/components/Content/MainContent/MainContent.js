import React from 'react';
import ProjectAssets from './ProjectAssets/ProjectAssets';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import NewAsset from "../../NewAsset/NewAsset";

const currentContent = (route) => {
    if (route === 'ProjectAssets')
        return <ProjectAssets />

    return <ProjectDetails />
}

const MainContent = ({ contentRoute, showAsset, toggleNewAsset }) => {
    return (
        <div className='p-6 flex w-full justify-center items-start'>
            { currentContent(contentRoute) }
            <NewAsset showAsset={showAsset} toggleNewAsset={toggleNewAsset} />
        </div>
    )
}

export default MainContent;