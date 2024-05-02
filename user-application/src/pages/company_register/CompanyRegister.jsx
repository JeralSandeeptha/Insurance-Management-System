import React, { useContext, useEffect, useState } from 'react'
import './CompanyRegister.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../api/baseURL';
import logo from '../../assets/img/icon/icon-02-primary.png';

const CompanyRegister = () => {

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword] = useState();

    const register = (e) => {
        e.preventDefault();
        try {
            console.log({
              email: email,
              contact: mobile,
              name: name,
              address: address,
              password: password
            });
            axios.post(`${baseURL}/company`, {
              email: email,
              contact: mobile,
              name: name,
              address: address,
              password: password
            })
              .then((res) => {
                console.log(res.data.data);
                alert('Company register successfully');
                navigate('/company/login');
              })
              .catch((error) => {
                console.log(error);
                alert('Please enter all the required fields');
              })
        }catch (error) {
          console.log(error.message);
        }
      }


  return (
    <div className="register">
        <div className="left"></div>
        <div className="right"> 
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src={logo} style={{width:'100px'}} alt="Your Company" />
                    <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register Your Company</h2>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                        <div className="mt-2">
                        <input value={name} onChange={(e) => {
                            console.log(e.target.value);
                            setName(e.target.value);
                        }} id="email" name="email" type="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                        <input value={email} onChange={(e) => {
                            console.log(e.target.value);
                            setEmail(e.target.value);
                        }} id="email" name="email" type="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
                        <div className="mt-2">
                        <input value={mobile} onChange={(e) => {
                            console.log(e.target.value);
                            setMobile(e.target.value);
                        }} id="email" name="email" type="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Company Address</label>
                        <div className="mt-2">
                        <input value={address} onChange={(e) => {
                            console.log(e.target.value);
                            setAddress(e.target.value);
                        }} id="email" name="email" type="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                        <input value={password} onChange={(e) => {
                            console.log(e.target.value);
                            setPassword(e.target.value);
                        }} id="password" name="password" type="password" autocomplete="current-password" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button onClick={register} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                <Link to='/company/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Already have an account?</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CompanyRegister;