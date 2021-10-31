import React from 'react';
import { useForm } from "react-hook-form";

import './AddNewPackage.css';

const axios = require('axios');
const AddNewPackage = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frightful-moonlight-21065.herokuapp.com/packages',data)
        .then(res=> {
         if(res.data.insertedId){
             alert('Added SuccessFully');
             reset();
         }
        })
    }
    return (
        <div className="myform">
            <h1>Please Add New Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Place Name"/>
                <textarea {...register("description")  } placeholder="Description About Place"/>
                <input type="number" {...register("price" )} Placeholder="Total Cost"/>
                <input {...register("image")  } placeholder="Image"/>
                <input className="btn btn-warning" type="submit" />
             </form>
        </div>
    );
};

export default AddNewPackage;