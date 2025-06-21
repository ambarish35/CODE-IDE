import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import GridCard from '../components/GridCard';
import ListCard from '../components/ListCard';

const Home = () => {
    const [isGridLayout, setIsGridLayout] = useState(true);
    const toggleLayout = () => {
        setIsGridLayout(!isGridLayout);
    }
    useEffect(() => {

    }, []);
    return (
        <>
            <Navbar changeLayout={toggleLayout} isGridLayout={isGridLayout} />
            <div className=' flex items-center justify-between px-[100px] my-[40px]'>
                <h2 className='text-2xl'>Hi, Ambarish 👋</h2>
                <div className='flex items-center gap-3'>
                    <div className='inputBox w-[350px]'>
                        <input id="search" type="text" placeholder='Search Here....!'></input>
                    </div>
                    <button className='btnBlue rounded-md text-xl'>+</button>
                </div>
            </div>
            <div className="cards">
                {
                    isGridLayout ?
                        <div className="grid grid-cols-5 gap-12 px-[100px]">
                            <GridCard />
                            <GridCard />
                            <GridCard />
                        </div>
                        :
                        <div className="list px-[100px]">
                            <ListCard />
                            <ListCard />
                            <ListCard />
                        </div>
                }
            </div>
        </>
    )
}

export default Home