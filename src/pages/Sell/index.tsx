import { API_URL } from "@/api/api";
import Form from "../../components/ProductForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
import { useAuth } from "@/context/AuthContext";

interface FormData {
    title: string;
    location: string;
    description: string;
    price: number;
    image: File | null;
  }
   
  const Sell = () => {
    const [formData, setFormData] = useState<FormData>({
      title: '',
      description: '',
      location: '',
      price: 0,
      image: null,
    });
    
    const { authenticated, authLoading } = useAuth();
    const navigate = useNavigate()
    
    useEffect(()=>{
      if(!authLoading && !authenticated) navigate('/signin')

    }, [authenticated])

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleImageChange = (e) => {
      setFormData({ ...formData, image: e.target.files[0] });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { title, description, location, price, image } = formData;
  
      const data = new FormData();
      data.append('title', title);
      data.append('description', description);
      data.append('location', location);
      data.append('price', price);
      data.append('image', image);
      console.log(data)
      try {
        const response = await axios.post('http://localhost:8000/products', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true
        });
  
        // Handle the response from the server
        console.log(response.data);
        navigate(`/products/${response.data.id}`)
      } catch (error) {
        // Handle errors
        console.log('Error uploading data:', error);
      }
    };
  
    return (
      <>
      <h1 className="product-title">Sell a product</h1>
      <form className="product-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <label className="product-label">Title: </label>
        <input className="product-input" type="text" name="title" value={formData.title} onChange={handleInputChange} />
  
        <label className="product-label">Description: </label>
        <input className="product-input" type="text" name="description" value={formData.description} onChange={handleInputChange} />
  
        <label className="product-label">Location: </label>
        <input className="product-input" type="text" name="location" value={formData.location} onChange={handleInputChange} />
  
        <label className="product-label">Price: </label>
        <input className="product-input" type="number" name="price" value={formData.price} onChange={handleInputChange} />
  
        <label className="product-label">Image: </label>
        <input className="product-input" type="file" name="image" accept="image/*" onChange={handleImageChange} />
  
        <button className="product-button" type="submit">Submit</button>
      </form>
      </>
    );
  };
  
  export default Sell;



