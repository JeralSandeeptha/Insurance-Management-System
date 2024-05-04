import React from 'react';
import './Plan.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import baseURL from '../../api/baseURL';
import { useEffect } from 'react';

const Plan = () => {

    const { planId } = useParams();
  
    const [plan, setPlan] = useState({});

    const [rejectedNic, setRejectedNic] = useState();
    const [acceptedNic, setAcceptedNic] = useState();

    const addRejectedUser = (e) => {
        e.preventDefault();
        try {
            axios.put(`${baseURL}/plan/addRejectedUser/${planId}`, {
                nic: rejectedNic
            })
                .then((res) => {
                    console.log(res.data.data);
                    getPlan();
                    setRejectedNic('');
                    alert('Add new rejected user');
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error.message);
        }
    }

    const removeRejectedUser = (userNic) => {
        try {
            axios.put(`${baseURL}/plan/removeRejectedUser/${planId}`, {
                nic: userNic
            })
                .then((res) => {
                    console.log(res.data.data);
                    getPlan();
                    alert('Removed rejected user');
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error.message);
        }
    }

    const addAcceptedUser = (e) => {
        e.preventDefault();
        try {
            axios.put(`${baseURL}/plan/addAcceptedUser/${planId}`, {
                nic: acceptedNic
            })
                .then((res) => {
                    console.log(res.data.data);
                    setAcceptedNic('');
                    getPlan();
                    alert('Add new accepted user');
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error.message);
        }
    }

    const removeAcceptedUser = (userNic) => {
        try {
            axios.put(`${baseURL}/plan/removeAcceptedUser/${planId}`, {
                nic: userNic
            })
                .then((res) => {
                    console.log(res.data.data);
                    getPlan();
                    alert('Removed accepted user');
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error.message);
        }
    }

    const getPlan = () => {
        try {
            axios.get(`${baseURL}/plan/${planId}`)
                .then((res) => {
                    console.log(res.data.data);
                    setPlan(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }catch(error) {
            console.log(error);
        }
    }

    function extractDate(timestamp) {
        if (!timestamp) {
          console.error("Timestamp is not provided");
          return null;
        }
      
        const datePart = timestamp.substring(0, 10);
        return datePart;
    }
      

    useEffect(() => {
        getPlan();
    }, []);

    return (
        <div class="bg-white">
            <div class="pt-6">

                <img style={{width:'100%', height: '60vh', padding: '0 20px', borderRadius: '0.25rem', backgroundSize: 'cover', backgroundPosition: 'center'}} src={plan.image} />

                <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"> 
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"> 
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{plan.name}</h1>
                    <h4 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Rs: {plan.price} /-</h4>
                </div>

                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    <div>
                    <h3 class="sr-only">Description</h3>

                    <div class="space-y-6">
                        <p class="text-base text-gray-900">{plan.description}</p>
                    </div>
                    </div>
                </div>
                    <div>
                        <h3>Plan Created:</h3>
                        <h5>{extractDate(plan.createdAt)}</h5>

                        <div style={{marginTop:'40px'}}>
                            <h3>Plan Updated:</h3>
                            <h5>{extractDate(plan.updatedAt)}</h5>
                        </div>
                    </div>
                </div>

                <div className='users-status'>
                    <div className="left">
                        <h4 style={{marginBottom:'20px'}}>Accepted Users for this Plan</h4>
                        <form className="space-y-6">
                            <div className="mt-2">
                                <input value={acceptedNic} onChange={(e) => {
                                    setAcceptedNic(e.target.value);
                                    console.log(e.target.value);
                                }} placeholder="Enter customer NIC Number" id="email" name="email" type="text" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>

                            <div>
                            <button onClick={addAcceptedUser} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
                            </div>
                        </form>
                        <div style={{
                            width: '100%',
                            minHeight: '30vh',
                            marginTop: '20px'
                        }}>
                            {
                                plan && plan.acceptedUsers && plan.acceptedUsers.length > 0 ? (
                                    plan.acceptedUsers.map((user, index) => (
                                        <div className="mb-1 px-4 py-2 rounded-sm cursor-pointer flex items-center justify-between bg-green-200" key={index}>
                                            <div>
                                                <h6 className='text-sm'>{user._id}</h6>
                                                <h5 className='text-xl'>{user.fname} {user.lname}</h5>
                                                <h5 className='text-lg'>{user.nic}</h5>
                                            </div>
                                            <div>
                                                <button onClick={() => {
                                                    removeAcceptedUser(user.nic);
                                                }} className='rounded-sm px-2 py-2 bg-green-500 text-white text-sm'>Remove</button>
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                <h5 className="text-sm">No accepted users for this plan</h5>
                            )}
                        </div>
                    </div>
                    <div className="right">
                        <h4 style={{marginBottom:'20px'}}>Rejected Users for this Plan</h4>
                        <form className="space-y-6">
                            <div className="mt-2">
                                <input value={rejectedNic} onChange={(e) => {
                                    setRejectedNic(e.target.value);
                                    console.log(e.target.value);
                                }} placeholder="Enter customer NIC Number" id="email" name="email" type="text" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>

                            <div>
                            <button onClick={addRejectedUser} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
                            </div>
                        </form>
                        <div style={{
                            width: '100%',
                            minHeight: '30vh',
                            marginTop: '20px'
                        }}>
                            {
                                plan && plan.rejectedUsers && plan.rejectedUsers.length > 0 ? (
                                    plan.rejectedUsers.map((user, index) => (
                                        <div className="mb-1 px-4 py-2 rounded-sm cursor-pointer flex items-center justify-between bg-red-200" key={index}>
                                            <div>
                                                <h6 className='text-sm'>{user._id}</h6>
                                                <h5 className='text-xl'>{user.fname} {user.lname}</h5>
                                                <h5 className='text-lg'>{user.nic}</h5>
                                            </div>
                                            <div>
                                                <button onClick={() => {
                                                    removeRejectedUser(user.nic);
                                                }} className='rounded-sm px-2 py-2 bg-red-500 text-white text-sm'>Remove</button>
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                <h5 className="text-sm">No rejected users for this plan</h5>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Plan;