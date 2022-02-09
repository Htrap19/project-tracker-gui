import React from "react";
import Button from "../../../helpers/components/Button";

const showAdditionalButtons = (route, toggleNewAsset) => {
    if (route === 'ProjectAssets')
        return (
            <div>
                <Button text='New Asset' extraClassNames='bg-green-600 hover:bg-green-500 text-stone-300 mt-4 mr-4 md:mt-0' onClick={toggleNewAsset} />
                <Button text='New Dep' extraClassNames='bg-green-600 hover:bg-green-500 text-stone-300 mt-4 mr-4 md:mt-0' />
            </div>
        )
}

const NavigationBar = ({ changeContentRoute, contentRoute, toggleNewAsset }) => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://img.icons8.com/fluency/48/000000/project-setup--v3.png" alt='cross'/>
                    <span className="ml-3 text-xl text-stone-300">MyProject1</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-stone-300">
                    <p className="mr-5 hover:text-stone-400 hover:underline cursor-pointer" onClick={() => { changeContentRoute("ProjectDetails") }}>Details</p>
                    <p className="mr-5 hover:text-stone-400 hover:underline cursor-pointer" onClick={() => { changeContentRoute("ProjectAssets") }}>Assets</p>
                    <p className="mr-5 hover:text-stone-400 hover:underline cursor-pointer" onClick={() => { changeContentRoute("ProjectManagement") }}>Management(Kanban)</p>
                </nav>
                { showAdditionalButtons(contentRoute, toggleNewAsset) }
                <button className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0 text-stone-300">Persist
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default NavigationBar;