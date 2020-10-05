import React, {useState, setState} from 'react';
import * as emailjs from "emailjs-com";


const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        body: ""
    })

    const [sent, setSent] = useState(false)

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSent(true)

        const templateParams = {
            from_name: `${form.name} (${form.email})`,
            to_name: 'raudelf3@gmail.com',
            message: form.body
        }

        emailjs
            .send(
                'service_0q40sjk',
                'template_q4e3eax',
                templateParams,
                'user_H4oGojaVAorpxbCZjGArT',
            )
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        setForm({...form,
        name: "",
        email: "",
        body: ""
        })
    }

    return (
        <div className='container contactContainer' id='contact'>
            <section className='sectionHeadline'>
                <h1>Get in Touch!</h1>
            </section>
            <form className="formContainer" onSubmit={handleSubmit}>
                <h2>Send an Email</h2>
                <input 
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChanges}
                />
                <input 
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChanges}
                />
                <textarea 
                name="body"
                placeholder="Message"
                value={form.body}
                onChange={handleChanges}
                />
                <button className="emailBtn">Send Email</button>
            </form>

        </div>
    );
};

export default Contact;