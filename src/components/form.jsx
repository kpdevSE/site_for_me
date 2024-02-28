import emailjs from '@emailjs/browser';
import React, {useRef} from 'react';
import {toast} from 'react-toastify';

export default function FormCom()
{
    const form = useRef();

    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs
            .sendForm('service_349nieo', 'template_lmkv93m', form.current, {
                publicKey: 'MA5Cl1V8RM4C7H82s',
            })
            .then(
                () =>
                {
                    toast.success("Email Sent Successfully 😁🙌 !", {
                        position: "top-right"
                    });
                    window.location.reload();
                    console.log('SUCCESS!');
                },
                (error) =>
                {
                    toast.error("Something Went Wrong 🥲😕 !", {
                        position: "top-right"
                    });
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='w-full flex items-center justify-center'>
            {/* Form Component */}
            <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col items-center justify-center'>
                {/* Name Input Field */}
                <div className='mb-5 w-full'>
                    <label className='block mb-2 text-sm font-medium text-white'>Name</label>
                    <input type="text" name="user_name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required placeholder='Kanishka Pasindu' />
                </div>
                {/* Email Input Field */}
                <div className='mb-5 w-full'>
                    <label className='block mb-2 text-sm font-medium text-white'>Email</label>
                    <input type="email" name="user_email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required placeholder='kpdev@gmail.com' />
                </div>
                {/* Message Textarea */}
                <div className='mb-5 w-full'>
                    <label className='block mb-2 text-sm font-medium text-white'>Message</label>
                    <textarea name="message" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 h-[300px] focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required placeholder='Your Message' />
                </div>
                {/* Submit Button */}
                <input type="submit" value="Send" className='bg-gradient-to-r from-pink-500 to-yellow-500 w-[200px] h-[40px] transition-all rounded-lg' />
            </form>
        </div>

    )

}