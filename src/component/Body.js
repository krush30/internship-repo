import React, { useEffect, useState } from 'react'

const Body = () => {
    const [api, setAPI] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
        const json = await data.json();
        console.log(json)
        setAPI(json.results[0]);
    }

    if (api === null) return;


    return (


        (api && <div className='h-[30rem] flex justify-center items-center'>
            <div className='flex  justify-center w-[20rem] mt-60 border-2 p-5  border-black'>
                <img className='border-2 border-black' alt='img' src={api.picture.large} />
                <div className='p-3 '>
                    <h1 className='p-2'>{api.name.first}  {api.name.last}</h1>
                    <h1 className='p-2'>{api.gender}</h1>
                    <h1 className='p-2'>{api.phone}</h1></div>


            </div>
        </div>)

    )
}

export default Body
