import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignUp from "../../hooks/useSingUp";

const SignUp = () => {
    const initialInputs = {
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    };

    const [inputs, setInputs] = useState(initialInputs);
    const { loading, signup } = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
        setInputs(initialInputs);
        console.log(inputs);


    };

    const handleInputChange = (fieldName, value) => {
        setInputs({ ...inputs, [fieldName]: value });
    };


    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender })
    };

    return (
        <div className='flex flex-col items-center justify-center rounded-md min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input value={inputs.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>username</span>
                        </label>
                        <input value={inputs.username} onChange={(e) => handleInputChange("username", e.target.value)} type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password} onChange={(e) => handleInputChange("password", e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword} onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        />
                    </div>

                    <GenderCheckbox onCheckboxGender={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUp;