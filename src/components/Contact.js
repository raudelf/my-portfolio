import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [err, setErr] = useState(false)
    const [form, setForm] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.send('service_0q40sjk', 'template_q4e3eax', form, 'user_H4oGojaVAorpxbCZjGArT')
        .then(res => {
            console.log('SUCCESS: ', res)
            setForm({
                from_name: '',
                reply_to: '',
                message: ''
            })
        })
        .catch(res => {
            console.log('ERROR SENDING EMAIL: ', res)
        })
    }
    return (
        <div className='container contactContainer' id='contact'>
            <section className='sectionHeadline'>
                <h1>Get in Touch!</h1>
            </section>
            <form className='formContainer'>
                <input 
                type='text'
                placeholder='Name'
                name='from_name'
                onChange={handleChange}
                value={form.from_name}/>
                <input
                type='email'
                placeholder='Email'
                name='reply_to'
                onChange={handleChange}
                value={form.reply_to}
                />
                <textarea
                placeholder='Message'
                name='message'
                onChange={handleChange}
                value={form.message}/>
                <button className='emailBtn' onClick={handleSubmit}>Send Email</button>
            </form>

        </div>
    );
};

export default Contact;