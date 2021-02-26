import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'

const ContactForm = () => {
    //useState to define the variables
    const [formState, setFormState] = useState({ name: '', number: '', email: '', message: '', model: '', upload: ''});
    const { name, number, email, message, model, upload } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    //function handle form input
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {
                console.log("ERROR");
            }
        };
        xhr.send(data);
    }


    return (
        <div className={styles.container}>
            <br />
            <br />
            <Form id="contact-form" className="form-fields" action="https://formspree.io/f/xleokwwz" method="POST" encType="multipart/form-data" onSubmit={submitForm}>
                <Form.Row>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Enter Name" />
                </Form.Group>

                <Form.Group htmlFor="name">
                    <Form.Label htmlFor="number">Phone Number</Form.Label>
                    <Form.Control type="text" name="number" defaultValue={number} onBlur={handleChange} placeholder="Enter Number" />
                </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Enter Email" />
                </Form.Group>

                <Form.Group controlId="formBasicModel">
                    <Form.Label>Plane Model</Form.Label>
                    <Form.Control type="text" name="model" defaultValue={model} onBlur={handleChange} placeholder="Model" />
                </Form.Group>

                <Form.Group controlId="formBasicArea">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" defaultValue={message} onBlur={handleChange} placeholder="Brief description of what needs to be done..." />
                </Form.Group>

                {/* <Form.Group>
                    <Form.Label htmlFor="upload">Image of Instrument Panel</Form.Label>
                    <Form.File type="file" name="upload" defaultValue={upload} accept="image/png, image/jpeg"/>
                </Form.Group> */}

                <Button variant="dark" type="submit" data-testid="button">
                    Submit
            </Button>
            </Form>
        </div>
        // <section >
        //     <form id="contact-form" className="form-fields" action="https://formspree.io/f/xleokwwz" method="POST" onSubmit={submitForm}>
        //         <div>
        //             <label htmlFor="name">Name:</label>
        //             <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        //         </div>
        //         <div>
        //             <label htmlFor="email">Email address:</label>
        //             <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        //         </div>
        //         <div>
        //             <label htmlFor="message">Message:</label>
        //             <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        //         </div>
        //         {errorMessage && (
        //             <div>
        //                 <p className="error-text">{errorMessage}</p>
        //             </div>
        //         )}
        //         <button type="submit" data-testid="button">Submit</button>
        //     </form>
        // </section>
    );
}

export default ContactForm;