import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {data} from '../../data/data';

const Post = () =>
{
    const {id} = useParams();

    function convertToSlug(text)
    {
        return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    const user = data.users.find((e) =>
    {
        return convertToSlug(e.id.toString()) === id;
    });

    console.log(user);

    if (!user)
    {
        return <div>User not found</div>;
    }

    return (
        <div className='w-[85%] lg:h-full md:h-full h-full mx-auto flex items-center justify-center'>
            <div className='text-white mt-24'>
                <div className='flex items-start justify-between gap-4 lg:flex-row flex-col'>
                    <div className='lg:w-[50%] w-full lg:h-[500px] h-[375px] rounded-3xl'>
                        <img src={user.image} alt="" className='w-full h-full bg-cover bg-center rounded-3xl' />
                    </div>
                    <div className='lg:w-[50%] w-full flex items-start gap-3 flex-col'>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl'>{user.name}</h1>
                        <p className='text-red-500 font-semibold'>{user.technolodgy}</p>
                        <p className=''>{user.description}</p>
                        <Link to={'/'} className='mt-10'>
                            <button className='w-[200px] h-[45px] text-white rounded-lg shadow-lg border border-white'>
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='mt-24 w-full'>
                    <h1 className='text-white text-2xl'>More Screenshot about Project...</h1>
                    {user.more.map((e) =>
                    {
                        return (
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-4 mt-24 place-items-center p-1'>
                                <div className='rounded-lg shadow-lg shadow-gray-700 flex items-center justify-center w-full lg:h-[350px] h-[300px]'>
                                    <img src={e.imageOne} alt="" className='w-full h-full rounded-lg' />
                                </div>
                                <div className='rounded-lg shadow-lg shadow-gray-700 flex items-center justify-center w-full lg:h-[350px] h-[300px]'>
                                    <img src={e.imageTwo} alt="" className='w-full h-full rounded-lg' />
                                </div>
                                <div className='rounded-lg shadow-lg shadow-gray-700 flex items-center justify-center w-full lg:h-[350px] h-[300px]'>
                                    <img src={e.imageThree} alt="" className='w-full h-full rounded-lg' />
                                </div>
                                <div className='rounded-lg shadow-lg shadow-gray-700 flex items-center justify-center w-full lg:h-[350px] h-[300px]'>
                                    <img src={e.imageFour} alt="" className='w-full h-full rounded-lg' />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
};

export default Post;

