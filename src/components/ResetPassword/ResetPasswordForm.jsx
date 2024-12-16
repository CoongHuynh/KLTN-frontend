import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormWrapper, Title, Input, Button, LogoWrapper, Container } from '../../pages/ResetPassword/styles';

const ResetPasswordForm = () => {
    const token = window.location.pathname.split('/').pop();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        console.log('Token:', token); // Log the token to the console
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/reset-password`, {
                token,
                newPassword: password,
            });
            setSuccess(data.message);
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <Container>
            <FormWrapper>
                <LogoWrapper>
                    <img src="/logo.png" alt="Logo" />
                </LogoWrapper>
                <Title>Reset Password</Title>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>New Password:</label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit">Reset Password</Button>
                </form>
            </FormWrapper>
        </Container>
    );
};

export default ResetPasswordForm;