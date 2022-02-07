import React, { Component } from 'react';
import Button from "../../helpers/components/Button";

class NewProject extends Component {

    componentDidMount() {
        window.history.pushState(null, null, window.location.pathname)
        window.addEventListener('popstate', this.onBackButtonClicked)
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.onBackButtonClicked)
    }

    onBackButtonClicked = (e) => {
        e.preventDefault()

        this.props.changeRoute("MainContent");
    }

    render() {
        return (
            <div className='flex flex-col justify-start items-center w-full min-h-screen p-20'>
                <div className='grid'>
                    <div className='flex flex-row justify-between items-center border-b border-midnight-lighter'>
                        <div className='flex flex-col justify-between items-start mb-4'>
                            <h2 className='text-stone-300 text-xl'>Create New Project</h2>
                            <p className='text-stone-400 text-sm'>A project is a high level representation of a real project</p>
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-2 xl:gap-6 mt-4'>
                        <div className='my-base-input'>
                            <label htmlFor="owner">Owner</label>
                            <select id='owner'>
                                <option>Someone 1</option>
                                <option>Someone 2</option>
                                <option>Someone 3</option>
                            </select>
                        </div>
                        <div className='my-base-input'>
                            <label htmlFor="newProjectName">Project Name</label>
                            <input id='newProjectName' type='text' />
                        </div>
                    </div>
                    <div className='my-base-input border-b mb-4 border-midnight-lighter pb-4'>
                        <label htmlFor="newProjectDescription">Description <p className='text-stone-500'>(Optional)</p></label>
                        <textarea id='newProjectDescription' />
                    </div>
                    <div className='flex flex-row justify-end'>
                        <Button text='Create Project' extraClassNames='bg-green-600 text-stone-300 hover:bg-green-500' />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewProject;