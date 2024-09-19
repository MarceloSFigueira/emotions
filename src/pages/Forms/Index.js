import React, {useState, useEffect} from 'react';
import { TextField,  Container, Box } from '@mui/material';
import './style.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

    const Form = () => {
    const [formData, setFormData] = useState({
        emotion: '',  
        name: '',
        email: '',
        description: ''
    });

    useEffect(() => {
        const selectedEmotion = localStorage.getItem('selectedEmotion');
        if (selectedEmotion) {
        setFormData(prevData => ({ ...prevData, emotion: selectedEmotion }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };
        

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);

        try {
        const response = await axios.post('http://127.0.0.1:8000/api/emocoes/', formData);
        console.log('Resposta do servidor:', response.data);

        setFormData({
            emotion: '',
            name: '',
            email: '',  
            description: ''
        });
        } catch (error) {
            console.error('Erro ao enviar os dados:', error.response ? error.response.data : error.message);
        
        }
    };
    
    const notify = () => toast.success("Obrigado por responder!");
    const navigate = useNavigate();

    return (

        
        <>
            <div className='logo-container'>
                <img 
                    src= {require(`../../assets/logo.png`)}
                    alt='logo'
                    className='logo'
                />
            </div>
            <Container className="form-container">
            <Box className="form-box" sx={{ borderRadius: '8px', padding: '20px' }}>
                <div className="emotion-selection">
                    <h2>Você escolheu:</h2>
                    <h3>{formData.emotion}</h3>
                </div>
                <p className='label'>Qual o seu nome?</p>
                <TextField
                    fullWidth
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />

                <p className='label'>Qual o seu email?</p>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <p className='label'>Por que você está se sentindo assim?</p>
                <TextField
                    fullWidth
                    label="Descreva como está se sentindo"
                    variant="outlined"
                    multiline
                    rows={3}
                    margin="normal"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <div className='container-image-divertidamente'>
                <img 
                    src= {require(`../../assets/Form/image.jpeg`)}
                    alt='divertidamente'
                    className='image'
                />
            <button
            className="submit-button"
            onClick={(e) => {
                handleSubmit(e);
                notify();
                setTimeout(() => {
                    navigate('/'); 
                }, 2000);   
                            }}
                >
                    Responder
            </button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                </div>

            </Box>
            </Container>
        </  >
    );
    };


    export default Form;