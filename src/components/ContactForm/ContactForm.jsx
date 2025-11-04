import { useState, useEffect } from 'react';
import './ContactForm.css';

// COMPONENTS
import Button from '../Button/Button';

export default function ContactForm(){
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        message: ''
    })
    const [isFormValid, setIsFormValid] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (isFormValid){
            null;
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email)
        }

        const isValid = formData.name.trim() && formData.email.trim() && isValidEmail(formData.email) && formData.message.trim();

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({ ...formData,
            [name]: value,

        })
    }

    return(
        <div className='contact-form d-flex fd-column al-center'>
            <h2>We love meeting new people and helping them.</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex form-group'>
                    <input className='form-input' type="text" name="name" id="name" placeholder='Name *' onChange={handleChange}/>
                    
                    <input className='form-input' type="email" name="email" id="email" placeholder='Email *' onChange={handleChange}/>
                    
                </div>
                <div className='d-flex form-group'>
                    <textarea className='form-input' name="message" id="message" placeholder='Mensagem *' rows="4" onChange={handleChange}></textarea>
                </div>

                <div className='d-flex al-center jc-end form-group'>
                    
                    <Button type="submit" buttonStyle="secondary" disabled={!isFormValid}>Enviar</Button>
                    
                </div>
            </form>
        </div>
        
    )
}