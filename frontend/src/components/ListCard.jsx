
import code from '../assets/code.png';
import deleteImg from '../assets/delete.png';

const ListCard = () => {
    return (
        <div className="flex w-[full] justify-between items-center cursor-pointer bg-[#141414] p-4 rounded-xl mb-4 hover:bg-[#202020]">
            <div className='flex items-center gap-4'>
                <img className='size-[80px]' src={code}></img>
                <div>
                    <h2 className='text-3xl'>My first Project</h2>
                    <p className='text-[gray] text-xl'> Created in 9 mon 2023</p>
                </div>
            </div>
            <div><img className='size-[50px] mr-4' src={deleteImg}></img></div>
        </div>
    )
}

export default ListCard