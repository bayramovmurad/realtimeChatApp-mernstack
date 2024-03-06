import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';



const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);

        try {
            const response = await axios.post("/api/auth/signup", {
                fullName,
                username,
                password,
                confirmPassword,
                gender
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = response.data;
            console.log(data);

            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    }
    return { loading, signup }
}



export default useSignUp

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields')
        return false
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters')
        return false
    }
    return true
}