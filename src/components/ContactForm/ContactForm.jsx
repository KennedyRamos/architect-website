import { useState, useEffect } from 'react';
import './ContactForm.css';

// COMPONENTS
import Button from '../Button/Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            setFormSubmitLoading(true)
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...formData, access_key: "2e4800d2-f572-428d-8013-7978bf785626" })
                })

                if (response.ok) {
                    setFormSubmitted(true)
                    setFormData({ name: '', email: '', message: '' })
                    setTimeout(() => setFormSubmitted(false), 5000)
                } else {
                    alert('ERRO AO ENVIAR!')
                }
            } catch (e) {
                alert('Erro: ', e)
            } finally {
                setFormSubmitLoading(false)
            }
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email)
        }

        const isValid = 
            formData.name.trim().length > 0 && 
            formData.email.trim().length > 0 && 
            isValidEmail(formData.email) && 
            formData.message.trim().length > 0;

        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        })
    }

    return (
        <div className='contact-form d-flex fd-column al-center'>
            <h2>We love meeting new people and helping them.</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex form-group'>
                    <input 
                    className='form-input' 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder='Name *' 
                    value={formData.name} 
                    onChange={handleChange} />

                    <input 
                    className='form-input' 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Email *'
                    value={formData.email}
                    onChange={handleChange} />

                </div>
                <div className='d-flex form-group'>
                    <textarea 
                    className='form-input' 
                    name="message" 
                    id="message" 
                    placeholder='Mensagem *' 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}></textarea>
                </div>

                <div className='d-flex al-center jc-end form-group'>

                    {formSubmitted && <p className=''>Sucesso</p>}
                    <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading}>Enviar</Button>

                </div>
            </form>
        </div>

    )
}