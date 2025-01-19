'use client';

import RegisterContainer from '@/components/RegisterContainer';
import { handleUserChange, loginUser, registerUser } from '@/features/user/userSlice';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const { name, email, password, isLoggedIn, isLoading } = useSelector((store) => store.user);

    const handleIsLogin = () => {
        setIsLogin((prev) => !prev);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleUserChange({ name, value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLogin) {
            await dispatch(loginUser({ email, password }));
        } else {
            if (!name || !email || !password) {
                toast.error('Please fill in all fields to register!')
                return
            } else {
                await dispatch(registerUser({ name, email, password }));
            }
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/add-job');
        }
    }, [isLoggedIn, router]);

    if (isLoading) {
        return <div>Loading...</div>; // Show a loading spinner or placeholder
    }

    return (
        <main className='bg-muted min-h-screen grid place-items-center'>
            <RegisterContainer
                isLogin={isLogin}
                handleIsLogin={handleIsLogin}
                handleChange={handleChange}
                name={name}
                email={email}
                password={password}
                handleSubmit={handleSubmit}
            />
        </main>
    );
};

export default RegisterPage;
