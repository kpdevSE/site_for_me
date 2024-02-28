import {FloatButton} from 'antd';
import React, {useState} from 'react';

export default function FloatButtonAction()
{
    const [active, setActiveNav] = useState("#");
    return (
        <div>
            <a href="#home" onClick={() => setActiveNav('#home')} className='hover:bg-white'><FloatButton.BackTop visibilityHeight={0} /></a>
        </div>
    )
}