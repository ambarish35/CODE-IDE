import code from '../assets/code.png';
import deleteImg from '../assets/delete.png';

const GridCard = () => {
    return (
        <div className="cursor-pointer bg-[#141414] p-4 rounded-xl mb-4 hover:bg-[#202020]">
            <div className=''>
                <img className='size-[80px]' src={code}></img>
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-2/3'>
                    <h2 className='text-3xl'>My first Project</h2>
                    <p className='text-[gray] text-xl'> Created in 9 mon 2023</p>
                </div>
                <img className='size-[50px] mr-4' src={deleteImg}></img>
            </div>
        </div>
    )
}

export default GridCard