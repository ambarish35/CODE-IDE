import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import image from '../assets/authPageSide.png'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-between">
                <div className="w-1/2 h-full flex flex-col  items-center py-16">
                    <img className='w-[300px] my-14' src={logo} />
                    <form action="" onSubmit={submitForm} className="mb-8">
                        <div className='inputBox w-[450px]'>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' className='input bg-[#141414] w-full px-4 py-3 rounded-md' />
                            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name' className='input bg-[#141414] w-full mt-4 px-4 py-3 rounded-md' />
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='input bg-[#141414] w-full mt-4 px-4 py-3 rounded-md' />
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='input bg-[#141414] w-full mt-4 px-4 py-3 rounded-md' />
                            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='input bg-[#141414] w-full mt-4 px-4 py-3 rounded-md' />
                            <p className='w-full mt-4 py-3'>Already have an account? <Link to="/login" className=" text-[#00AEEF]">login</Link></p>
                            <button className='w-full bg-[#00AEEF] text-white px-4 py-3 rounded-md mt-4 hover:bg-[#00AEEF]/80'>Sign Up</button>
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