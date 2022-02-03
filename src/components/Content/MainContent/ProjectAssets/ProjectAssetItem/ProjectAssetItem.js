import React from 'react'

const ProjectAssetItem = ({ name, description, assetType, filepath }) => {
    return (
        <div className="flex flex-wrap -mx-4 -my-8">
            <div className="py-8 px-4 lg:w-full">
                <div className="h-full flex items-start">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span className="text-stone-300 pb-2 mb-2 border-b-2 border-midnight-lighter">Jul</span>
                        <span className="font-medium text-lg text-stone-500 title-font leading-none">18</span>
                    </div>
                    <div className="flex-grow pl-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">{assetType}</h2>
                        <h1 className="title-font text-xl font-medium text-stone-300 mb-3">{name}</h1>
                        <p className="leading-relaxed mb-5">{description}</p>
                        <a className="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                        <span className="flex-grow flex flex-col pl-3">
                            <span className="title-font font-medium text-stone-400">Someone known</span>
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProjectDepItem = ({ name, description, used }) => {
    return (
        <div className="flex flex-wrap -mx-4 -my-8">
            <div className="py-8 px-4 lg:w-full">
                <div className="h-full flex items-start">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span className="text-stone-300 pb-2 mb-2 border-b-2 border-midnight-lighter">Jul</span>
                        <span className="font-medium text-lg text-stone-500 title-font leading-none">18</span>
                    </div>
                    <div className="flex-grow pl-6">
                        <h2 className={"tracking-widest text-xs title-font font-medium mb-1 " + (used === 'Used' ? 'text-green-500' : 'text-red-500')} >{used}</h2>
                        <h1 className="title-font text-xl font-medium text-stone-300 mb-3">{name}</h1>
                        <p className="leading-relaxed mb-5">{description}</p>
                        <a className="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                        <span className="flex-grow flex flex-col pl-3">
                            <span className="title-font font-medium text-stone-400">Someone known</span>
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProjectAssetItem, ProjectDepItem };