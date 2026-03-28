import React from 'react';

const Link = ({route}) => {
    return (
        <li className='md:mr-5 px-5 hover:bg-amber-700'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;