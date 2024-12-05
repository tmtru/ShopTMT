import React from 'react'
import ArrowIcon from '../common/ArrowIcon'
import './Card.css'


const Card = ({ imagePath, title, description, actionArrow, height, width }) => {
    return (
        <div className='d-flex  flex-column p-6 me-5 card-main'>
            <img className={`h-[${height ? height : '320px'}] max-h-[${height ? height : '280px'}] w-[${width ? width : '280px'}] max-w-[${width ? width : '280px'}]
         border rounded-lg card-item `} width={width ?? "260px"} height={height ?? "350px"} src={imagePath} alt='Jeans' />
            <div className='d-flex justify-content-between items-center pt-2'>
                <div className='d-flex flex-column'>
                    <div className='p-1 fw-bolder ' style={{ fontSize: '18px' }}>{title}</div>
                    {description && <p className='px-1 text-secondary ' style={{ fontSize: '14px' }}>{description}</p>}
                </div>
                {actionArrow && <span className='cursor-pointer pe-2 items-center'><ArrowIcon /></span>}
            </div>
        </div>
    )
}

export default Card