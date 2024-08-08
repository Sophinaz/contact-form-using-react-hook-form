import React from 'react'
import { useForm } from 'react-hook-form'
import './Contact.css'
import {DevTool} from '@hookform/devtools'

type Formtype = {
    name: string
    email: string
    message: string
}


const Contact = () => {

    const form = useForm<Formtype>()
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState;
    

    const onSubmit = (data: Formtype) => {
        console.log(data)
    }
  
    return (
    <div className='main'>
        

        <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h1>Contact Form</h1>
            <div className='space'>
                <label htmlFor="name"><h3>Name:</h3></label>
                <input type="text"  id="name" {
                    ...register("name",
                    {required: "Name is required"})
                }/>
            </div>
            <p className='error'>{errors.name?.message}</p>

            <div className='space'>
                <label htmlFor="email"><h3>Email:</h3></label>
                <input type="text" id="email" {...register("email", 
                    {required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email format"
                    }
                    }
                )}/>
            </div>
            <p className='error'>{errors.email?.message}</p>

            <div className='space'>
                <label htmlFor="message"> <h3>Message:</h3></label>
                <input type="text" id="message" {...register("message", 
                    {required: "Message is required"}
                )}/>
            </div>
            <p className='error'>{errors.message?.message}</p>

            <div className='spacex'>
                <button onClick={handleSubmit(onSubmit)} >Submit</button>
            </div>

        </form>
        <DevTool control={control} />
    </div>
  )
}

export default Contact