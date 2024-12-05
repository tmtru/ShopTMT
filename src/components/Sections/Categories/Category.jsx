import React from 'react'
import SectionHeading from '../SectionsHeading/SectionHeading'
import Card from '../../Card/Card'

const Category = ({ title, data }) => {
    return (
        <>
            <SectionHeading title={title} />
            <div className='ms-5 d-flex items-center g-3 flex-wrap'>
                {data && data?.map((item, index) => {
                    return (
                        <Card key={index} title={item?.title} description={item?.description} imagePath={item?.image}
                            actionArrow={true} height={'320px'} width={'270px'} />
                    )
                })}
            </div>
        </>
    )
}

export default Category