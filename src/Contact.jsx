import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



function Contact() {
    const navigate = useNavigate();
 
    let formik = useFormik({
      initialValues:{
        name:"",
        terms:false,
        message:"",
        email:""
      },

      validationSchema:Yup.object({
        name:Yup.string("Name must be string").required("Name is required").min(3,"Name must be 3 characters"),
        email:Yup.string("Email must be string").required("Email is required").email("not an Email "),
        message:Yup.string().required("message is required"),
        terms:Yup.boolean().isTrue("Terms must be checked")
      }),

      onSubmit:(values)=>{
          
        console.log("someone clicked me")     
        toast("Form Submitted Successfully") 
        setTimeout(()=>{
          navigate("/success");   
        },1000)
        // formik.resetForm();
      }
    })


    
console.log(formik.errors)

  // function to handle form submission
  

  return (
    <div className="contact p-8 flex justify-center bg-emerald-500">
         <ToastContainer/>
      <div className="bg-emerald-600  shadow-sm shadow-black flex flex-col align-center justify-center rounded-md w-1/2 p-4 ">
      <h1 className="text-4xl text-center p-2">Contact Us</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group flex flex-col">
          <label htmlFor="name" className={formik.touched.name && formik.errors.name? "text-red-500": "text-white"}>{formik.touched.name && formik.errors.name? formik.errors.name: "Name"}</label>
          <input
            type="text"
            className="border-2 border-teal-500  w-1/2 focus:outline-none focus:border-emerald-700  rounded-md m-1"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group flex flex-col">
          <label 
          className={formik.touched.email && formik.errors.email? "text-red-500": "text-white"}>{formik.touched.email && formik.errors.email? formik.errors.email: "Email"}</label>

          <input
            type="text"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-2  w-1/2 border-teal-500 focus:border-teal-600 focus:outline-none rounded-md m-1"
          />
        </div>

        <div className="form-group flex flex-col">
          <label htmlFor="message"
           className={formik.touched.message && formik.errors.message? "text-red-500": "text-white"}>{formik.touched.message && formik.errors.message? formik.errors.message: "Message"}</label>
          <textarea
            id="message"
           
            className="border-2 border-teal-500 focus:outline-none focus:border-teal-600 rounded-md m-1"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        
        <h2 className={formik.touched.terms && formik.errors.terms? "text-red-500": "text-white"}>{formik.touched.terms && formik.errors.terms? formik.errors.terms: ""}</h2>

        <div className="form-group">
          <input
            type="checkbox"
            id="terms"
            value={formik.values.terms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-2 border-teal-600 focus:outline-none mx-2"
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        
        
        <div className="mt-4  flex align-center justify-center">
          <button type="submit"
          className="bg-emerald-400 rounded-md px-4 py-1 hover:bg-emerald-700">
            Send</button>
        </div>
       
      </form>
      
      </div>
    </div>
  );
}

export default Contact;
