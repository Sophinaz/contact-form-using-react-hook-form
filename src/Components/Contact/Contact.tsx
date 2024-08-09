import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import './Contact.css'
import {DevTool} from '@hookform/devtools'
import second from '../../../Images/mail.jpg'
import third from '../../../Images/message.jpg'
import font from '../../../Images/font1.png'
import fourth from '../../../Images/fourth.jpg'

type Formtype = {
    name: string
    email: string
    message: string
}


const Contact = () => {

    const form = useForm<Formtype>()
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState;
    const [success, setSuccess] = useState(false)

    const onSubmit = (data: Formtype) => {
        setSuccess(true)
    }
  
    return (
    <div className='main'>
        

        <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='newone'>
            <h1>Contact Form</h1>
            <div className='space'>
                <img src={fourth} className='icon'  alt="" />

                <input className='A' placeholder='Your name' type="text"  id="name" {
                    ...register("name",
                    {required: "Name is required."})
                }/>

            </div>
            <p className='error'>{errors.name?.message}</p>

            <div className='space'>
                <img src={second} className='icon'  alt="" />
                <input className='A' type="text" id="email" placeholder='Your email' {...register("email", 
                    {required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email format."
                    }
                    }
                )}/>

            </div>
            <p className='error'>{errors.email?.message}</p>

            <div className='space1'>
                <img src={third} className='icon1'  alt="" />
                <input className='B' type="text" placeholder='Message you want to send' id="message" {...register("message", 
                    {required: "Message is required."}
                )}/>
            </div>

            <p className='error'>{errors.message?.message}</p>

            <div className='spacex'>
                <button onClick={handleSubmit(onSubmit)} >Submit</button>
            </div>
            {success ? (
                <p className='success'>Form submitted successfully!</p>
            ) : null}

            </div>

        <img src={font} className='image' alt="" />
        </form>
        <DevTool control={control} />
    </div>
  )
}

export default Contact