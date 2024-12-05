import React, { useCallback, useEffect, useState } from 'react';

const SizeFilter = ({ sizes, hidleTitle, multi = true, onChange }) => {

    const [appliedSize, setAppliedSize] = useState([]);

    const onClickDiv = useCallback((item) => {
        if (appliedSize.indexOf(item) > -1) {
            setAppliedSize(appliedSize?.filter(size => size !== item));
        } else {
            if (multi) {
                setAppliedSize([...appliedSize, item]);
            } else {
                setAppliedSize([item]);
            }
        }
    }, [appliedSize, multi]);

    useEffect(() => {
        onChange && onChange(appliedSize);
    }, [appliedSize, onChange]);

    return (
        <div className={`mb-4 ${hidleTitle ? '' : 'd-flex flex-column'}`}>
            {!hidleTitle && <p className='h5 text-dark mt-3 mb-4'>Size</p>}

            <div className='d-flex flex-wrap px-2'>
                {sizes?.map((item, index) => {
                    return (
                        <div key={index} className='d-flex flex-column align-items-center me-3 mb-3'>
                            <div
                                className={`border text-center py-2 px-3 rounded-lg cursor-pointer mb-2
                  ${appliedSize?.includes(item) ? 'bg-dark text-white' : 'bg-white text-secondary'}`}
                                onClick={() => onClickDiv(item)}
                            >
                                {item}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SizeFilter;
