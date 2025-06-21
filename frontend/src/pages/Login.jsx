import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import image from '../assets/authPageSide.png'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-between">
                <div className="w-1/2 h-full flex flex-col items-center py-16">
                    <img className='w-[300px] my-14' src={logo} />
                    <form action="" onSubmit={submitForm} className="mb-36">
                        <div className='inputBox w-[450px]'>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='input bg-[#141414] w-full mt-4 px-4 py-3 rounded-md' />
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='input bg-[#141414] w-full mt-4 px-4 py-3 rounded-md' />
                            <p className='w-full mt-4 py-3'>Do not have an account? <Link to="/signup" className=" text-[#00AEEF]">Sign Up</Link></p>
                            <button className='w-full bg-[#00AEEF] text-white px-4 py-3 rounded-md mt-4 hover:bg-[#00AEEF]/80'>Login</button>
                        </div>
                    </form>
                </div>
                <div className="w-1/2">
                    <img src={image} className="h-screen w-full object-cover overflow-hidden" />
                </div>
            </div>
        </>
    )
}

export default Signup