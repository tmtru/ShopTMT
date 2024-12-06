import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Slider } from "antd";
import './PriceFilter.css';
const PriceFilter = () => {
    const [range, setRange] = useState({
        min: 10,
        max: 250
    });
    const onChange = (newValue) => {
        setRange({ min: newValue[0], max: newValue[1] }); 

    };

    return (
        <div className='mb-4'>
            <p className='h5 text-dark mt-3 mb-4'>Price</p>

            {/* RangeSlider component */}
            <Slider range defaultValue={[0, 500]}
                max={500}
                min={0}
                onChange={onChange}
            />

            {/* Price inputs */}
            <div className='row justify-content-between mt-4'>
                <div className='d-flex align-items-center col-6'>
                    <span className='text-muted me-1'>$</span>
                    <input
                        type='number'
                        value={range?.min}
                        className='form-control '
                        min={0}
                        max="499"
                        disabled
                        placeholder='min'
                    />
                </div>
                <div className='d-flex align-items-center col-6'>
                    <span className='text-muted me-1'>$</span>
                    <input
                        type='number'
                        value={range?.max}
                        className='form-control'
                        min={0}
                        max="500"
                        disabled
                        placeholder='max'
                    />
                </div>
            </div>
        </div>
    );
}

export default PriceFilter;
