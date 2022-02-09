import React from 'react'
import Button from "../../helpers/components/Button";

const NewAsset = ({ showAsset, toggleNewAsset }) => {
    if (showAsset === true) {
        return (
            <div id="authentication-modal" aria-hidden={!showAsset} className="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-50 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                <div className="relative w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-midnight-light rounded-lg shadow text-stone-300 p-4">
                        <div className="flex justify-between p-2 items-center">
                            <h2 className='text-stone-300 text-xl'>Create New Asset</h2>
                            <button type="button" className="text-stone-300 bg-transparent hover:bg-red-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={toggleNewAsset}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <div className='grid'>
                                <div className='grid xl:grid-cols-2 xl:gap-6'>
                                    <div className='my-base-input'>
                                        <label htmlFor="newAssetName">Name</label>
                                        <input type='text' id='newAssetName'/>
                                    </div>
                                    <div className='my-base-input'>
                                        <label htmlFor="newAssetType">Type</label>
                                        <select id='newAssetType'>
                                            <option>API Docs</option>
                                            <option>Design</option>
                                            <option>Flowchart</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='my-base-input'>
                                    <label htmlFor="newAssetDescription">Description</label>
                                    <textarea id='newAssetDescription'/>
                                </div>
                            </div>
                            <div className='flex flex-row justify-end'>
                                <Button text='Create Asset' extraClassNames='bg-green-600 hover:bg-green-500' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return <div />
}

export default NewAsset;