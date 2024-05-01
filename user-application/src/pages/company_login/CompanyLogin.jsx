import React from 'react'
import './CompanyLogin.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/icon/icon-02-primary.png';

const CompanyLogin = () => {
  return (
    <div className="login">
        <div className="left"></div>
        <div className="right"> 
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
                <img className="mx-auto h-10 w-auto" src={logo} style={{width:'100px'}} alt="Your Company" />
                <h2 className="mb-10 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
            </div>

            <form className="space-y-6">
                <div>
                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" style={{textDecoration:'none'}}>Forgot password?</a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
                </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                <Link to='/company/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Don't have an account?</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CompanyLogin;