'use client';
import {customClassSwitcher} from '@/core';

const COMPONENT_NAME = 'Separator';

const Separator = ({orientation='horizontal', className='', customRootClass=''})=>{
    const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME);
    const orientationClass = orientation === 'vertical'? `${rootClass}-vertical` : `${rootClass}-horizontal`;

    return <div className={`${rootClass} ${orientationClass} ${className}`}></div>;
};

Separator.displayName = COMPONENT_NAME;

export default Separator;