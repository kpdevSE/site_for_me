import React from 'react';
import {useParams} from 'react-router-dom';
import ParticleBackground from '../../components/particleBackground';
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
        <div className='text-white'>
            <ParticleBackground />
            <h1 className='text-red-300'>Details of {id}</h1>
            <h1>{user.name}</h1>
            <p>{user.technolodgy}</p>
            <p>{user.description}</p>
            <a href={user.liveDemo}>Live Demo</a>
        </div>
    );
};

export default Post;

