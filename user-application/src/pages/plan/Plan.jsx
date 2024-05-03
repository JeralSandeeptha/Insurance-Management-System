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
                        <div>no users</div>
                    </div>
                    <div className="right">
                        <h4 style={{marginBottom:'20px'}}>Rejected Users for this Plan</h4>
                        <div>no users</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Plan;