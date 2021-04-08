import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddEvents.css'

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
      console.log(data);
        const eventData = {
           
           name: data.name,
            price: data.price,
           imageURL:imageURL
        };
        const url = `https://stormy-river-25571.herokuapp.com/addEvent`
        
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };
    
    const handleImageUpload = event=>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'c649c52f14f321564e47880fcb137785');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return (
        <div>
    
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="navBar">
        <h2><a  href="#">Manage Product</a></h2>
        <h2><a href="#">+ Add Product</a></h2>
      </div>
      <div className="inputsDiv">
      <h4>Product Name</h4>
      <input name="name" defaultValue="" placeholder="Enter name" {...register("name")} />
      <br/>
      <h4>Product Price</h4>
      <input name="price"   defaultValue="" placeholder="Enter price"  {...register("price")} />
      <br/>
      <h5>Upload Photo</h5>
      <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
    <br/>
      <input className="submit-button" type="submit" />
      </div>
    </form>
        </div>
    );
};

export default AddEvents;