import React from "react";

const SectionHeading = ({title}) => {
    return (
        <div className="d-flex flex-wrap px-5 align-items-center" style={{ height: '100px' }}>
            <div className="border border-4 bg-dark w-2 h-50 mb-3 me-2 ">
            </div>
            <p className="fw-bolder" style={{fontSize: '25px'}}>{title}</p>
        </div>
    )
}
export default SectionHeading;