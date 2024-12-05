import React, { useCallback, useState } from 'react';

export const colorSelector = {
    "Purple": "#8434E1",
    "Black": "#252525",
    "White": "#FFFFFF",
    "Gray": "#808080",
    "Blue": "#0000FF",
    "Red": "#FF0000",
    "Orange": "#FFA500",
    "Navy": "#000080",
    "Grey": "#808080",
    "Yellow": "#FFFF00",
    "Pink": "#FFC0CB",
    "Green": "#008000"
};

const ColorsFilter = ({ colors }) => {

    const [appliedColors, setAppliedColors] = useState([]);

    const onClickDiv = useCallback((item) => {
        if (appliedColors.indexOf(item) > -1) {
            setAppliedColors(appliedColors?.filter(color => color !== item));
        } else {
            setAppliedColors([...appliedColors, item]);
        }
    }, [appliedColors, setAppliedColors]);

    return (
        <div className="mb-4">
            <p className="h5 text-dark mb-3">Colors</p>
            <div className="d-flex flex-wrap px-2">
                {colors?.map(item => {
                    return (
                        <div className="d-flex flex-column align-items-center mr-3 mb-3">
                            <div
                                className="w-100 h-100 rounded-circle border cursor-pointer mb-2"
                                onClick={() => onClickDiv(item)}
                                style={{
                                    backgroundColor: `${colorSelector[item]}`,
                                    width: '40px',
                                    height: '40px',
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            ></div>
                            <p
                                className="text-center text-muted mb-0"
                                style={{ color: `${appliedColors?.includes(item) ? 'black' : ''}`, fontSize: '12px' }}
                            >
                                {item}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorsFilter;
