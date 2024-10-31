import React from 'react';
import logo from './logo.png';

const Authentication = () => {
    return (
        <div className='d-flex align-items-center justify-content-center bg-white' style={{ height: '100vh' }}>
            <div className='px-5 pt-4 pb-5 text-dark shadow-lg border' style={{ borderRadius: '15px' }}>
                <span className='text-center d-flex align-item-center justify-content-center'>
                    <img src={logo} width={60} alt="Logo" />
                </span>
                <h3 className='mb-1 mt-3'>to-do using supabase</h3>
                <hr />

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder='Enter name'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder='Enter email'
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Enter password'
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-secondary btn-sm w-100 mt-3 ">Login / Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Authentication;
