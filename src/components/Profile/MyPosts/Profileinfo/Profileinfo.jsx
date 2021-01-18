import React from 'react';
import s from './Profileinfo.module.css';




const Profileinfo = () => {

    return (
        <div>
            <div>
                <img src='https://media.comicbook.com/2016/08/pulpfiction-196459.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default Profileinfo;