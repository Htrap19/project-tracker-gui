import React from 'react';

import { ProjectAssetItem, ProjectDepItem } from './ProjectAssetItem/ProjectAssetItem';

const ProjectAssets = () => {
    return (
        <div className='flex flex-col justify-around items-start'>
            <div className='mb-6'>
                <label htmlFor='assets' className='block mb-4 text-sm font-medium text-stone-300 underline'>Assets</label>
                <section className="text-gray-600 body-font" id='assets'>
                    <div className="container">
                        <ProjectAssetItem name="Asset 1" assetType="API Docs" description="Some little description about this asset" />
                        <ProjectAssetItem name="Asset 2" assetType="Flow chart" description="Some little description about this asset and more about little description about this asset" />
                        <ProjectAssetItem name="Asset 3" assetType="Design" description="Some little description about this asset and more about little description about this asset" />
                        <ProjectAssetItem name="Asset 4" assetType="Business Requirment Docs" description="Some little description about this asset and more about little description about this asset" />
                    </div>
                </section>
            </div>
            <div className=''>
                <label htmlFor="deps" className='block mb-4 text-sm font-medium text-stone-300 underline'>Dependencies</label>
                <section className="text-gray-600 body-font" id='deps'>
                    <div className="container">
                        <ProjectDepItem name="Deps 1" used="Used" description="Some description about dependency" />
                        <ProjectDepItem name="Deps 2" used="Unused" description="Some description about dependency more and more" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProjectAssets;