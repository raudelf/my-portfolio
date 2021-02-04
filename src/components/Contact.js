import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [err, setErr] = useState({
        error: false,
        success: false,
        message: ''
    })

    const [form, setForm] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    })

    const handleChange = e => {
        setErr({
            ...err,
            error: false,
            success: false
        })
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (form.from_name === '' || form.reply_to === '' || form.message === '') {
            setErr({
                ...err,
                error: true,
                message: 'Please finish filling out the form.'
            })
        } else {
            emailjs.send('service_0q40sjk', 'template_q4e3eax', form, 'user_H4oGojaVAorpxbCZjGArT')
            .then(res => {
                console.log('SUCCESS: ', res)
                setErr({
                    ...err,
                    success: true,
                    message: 'Message Sent!'
                })
                setForm({
                    from_name: '',
                    reply_to: '',
                    message: ''
                })
            })
            .catch(res => {
                console.log('ERROR SENDING EMAIL: ', res)
                setErr({
                    ...err,
                    error: true,
                    message: 'Sorry, there was problem contacting the server. Please try again.'
                })
            })
        }
    }
    return (
        <div className='container contactContainer' id='contact'>
            <section className='sectionHeadline'>
                <h1>Contact Me</h1>
            </section>
            <form className='formContainer'>
                <h2>Questions, comments, or just want to chat? Fill out the form below to get in touch with me, I'll respond as soon as I am available!</h2>
                <input 
                type='text'
                placeholder='Name'
                name='from_name'
                onChange={handleChange}
                value={form.from_name}
                required/>
                <input
                type='email'
                placeholder='Email'
                name='reply_to'
                onChange={handleChange}
                value={form.reply_to}
                required
                />
                <textarea
                placeholder='Message'
                name='message'
                onChange={handleChange}
                value={form.message}
                required/>
                <button className='emailBtn' onClick={handleSubmit}>Send</button>
                {err.error || err.success ? <h3 className='errorMssg' style={{color: err.error ? 'red' : 'green'}}>{err.message}</h3> : <div/>}
            </form>
        </div>
    );
};

export default Contact;