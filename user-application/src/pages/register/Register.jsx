import React, { useState } from 'react'
import './Register.css';
import logo from '../../assets/img/icon/icon-02-primary.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../api/baseURL';

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [nic, setNic] = useState();
  const [address, setAddress] = useState();
  const [occupation, setOccupation] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const register = (e) => {
    e.preventDefault();
    try {
        if (password === confirmPassword) {
          console.log({
            email: email,
            mobile: mobile,
            fname: fName,
            lname: lName,
            nic: nic,
            address: address,
            occupation: occupation,
            password: password
          });
          axios.post(`${baseURL}/user`, {
            email: email,
            mobile: mobile,
            fname: fName,
            lname: lName,
            nic: nic,
            address: address,
            occupation: occupation,
            password: password
          })
            .then((res) => {
              console.log(res.data.data);
              alert('User register successfully');
              navigate('/login');
            })
            .catch((error) => {
              console.log(error);
              alert('Please enter all the required fields');
            });
        } else {
          alert('Both passwords should be matched');
        }
    }catch (error) {
      console.log(error);
      alert('Internal server error. Please try again later');
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} style={{width:'100px'}} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create New Account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }} style={{border:'1px solid gray'}} id="email" name="email" value={email} type="email" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setMobile(e.target.value);
              }} value={mobile} style={{border:'1px solid gray'}} id="text" name="email" type="text" autocomplete="email" required className=" text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setFName(e.target.value);
              }} value={fName} style={{border:'1px solid gray'}} id="text" name="email" type="text" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setLName(e.target.value);
              }} value={lName} style={{border:'1px solid gray'}} id="text" name="email" type="text" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Occupation</label>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setOccupation(e.target.value);
              }} value={occupation} style={{border:'1px solid gray'}} id="text" name="occupation" type="text" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">National ID Number</label>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setNic(e.target.value);
              }} value={nic} id="email" name="email" type="text" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setAddress(e.target.value);
              }} value={address} style={{border:'1px solid gray'}} id="email" name="email" type="text" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
              </div>
            </div>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setPassword(e.target.value);
              }} value={password} id="password" name="password" type="password" autocomplete="current-password" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div className="text-sm">
              </div>
            </div>
            <div className="mt-2">
              <input onChange={(e) => {
                console.log(e.target.value);
                setConfirmPassword(e.target.value);
              }} value={confirmPassword} id="password" name="password" type="password" autocomplete="current-password" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button onClick={register} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Already have an account?</Link>
        </p>
      </div>
    </div>
  )
}

export default Register