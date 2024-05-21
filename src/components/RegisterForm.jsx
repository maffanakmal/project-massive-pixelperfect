import React from 'react'
import { NavLink } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <>
            <form action="">
                <div className='d-flex mb-3'>
                    <div className='first-name'>
                        <label for="first-name" className="form-label">First Name</label>
                        <input type="text" className="form-control fw-light" id="first-name" placeholder='Your first name' />
                    </div>
                    <div className='last-name'>
                        <label for="last-name" className="form-label">Last Name</label>
                        <input type="text" className="form-control fw-light" id="last-name" placeholder='Your last name' />
                </div>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="text" className="form-control fw-light" id="email" placeholder='Enter your email' />
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control fw-light" id="phone" placeholder='Enter your phone number' />
                </div>
                <div className="mb-4">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control fw-light" id="password" placeholder='Enter your password' />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn-login w-100 fs-6">Create Account</button>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Already have an account?</p>
                    <NavLink to="/login">Sign Up</NavLink>
                </div>
            </form>
        </>
    )
}

export default RegisterForm