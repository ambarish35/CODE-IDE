import logo from '../assets/logo.png';

const EditorNavbar = () => {


    return (
        <>
            <div className="flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
                <div className="logo">
                    <img className="w-[150px] cursor-pointer" src={logo} alt="Logo" />
                </div>

            </div >

        </>
    )
}

export default EditorNavbar