import {FloatButton} from 'antd';
import React, {useState} from 'react';

export default function FloatButtonAction()
{
    const [activeNav, setActiveNav] = useState("#");
    return (
        <div className={activeNav === '#' ? 'active' : ''}>
            <a href="#home" onClick={() => setActiveNav('#home')} className='hover:bg-white'><FloatButton.BackTop visibilityHeight={0} /></a>
        </div>
    )
}