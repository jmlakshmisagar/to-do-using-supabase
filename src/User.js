import React from 'react';
import logo from './logo.png';
import './User.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const User = () => {
    const timer = new Date();
    const day = timer.getDay();
    const month = timer.getMonth();
    const year = timer.getFullYear();
    const hours = timer.getHours();
    const minutes = timer.getMinutes();
    console.log(timer);
    const meridian = hours >= 12 ? "pm" : "am";
    const hr = hours % 12 || 12;
    return (
        <div className='d-flex align-items-center flex-column justify-content-center bg-white' style={{ height: '100vh', }}>
            <div className=' text-center '>
                <img src={logo} width={60} />
                <span className='fs-2 ms-4'>to-do using supabase</span>
            </div>
            <h3 className='mt-3 text-secondary'><span className='text-dark'>User</span>'s to-do</h3>
            <div className='mt-3 styleinput'>
                <input type='text' placeholder='Enter task to do' />
                <button type='button' >Add</button>
                <button type='button' style={{ borderRadius: '10px', marginLeft: '5px' }} data-bs-toggle="tooltip" data-bs-placement="top" title="Completed tasks">
                    <span><i className="fa-regular fa-circle-check me-1"></i>Tasks</span>
                </button>
            </div>
            <p className='mt-4 fs-6 text-secondary'>{day + 1}:{month + 1}:{year} {hr}:{minutes} {meridian}</p>



            {/* list */}
            <div className='stylelist d-flex align-items-center justify-content-between' style={{ width: '400px' }} >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='text-start fs-5'> 8am wake up</span>
                    <span className='text-start' style={{ fontSize: '12px' }}>00:00:00 00:00 pm</span>
                </div>

                <div className='icons'>
                    <span className='me-1'><i className="fa-regular fa-circle-check"></i></span>
                    <span><i className="fa-regular fa-trash-can"></i></span>
                </div>
            </div>
        </div>
    )
}

export default User 