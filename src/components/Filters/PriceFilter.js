import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './PriceFilter.css';
const PriceFilter = () => {
    const [range, setRange] = useState({
        min: 10,
        max: 250
    });

    return (
        <div className='mb-4'>
            <p className='h5 text-dark mt-3 mb-4'>Price</p>

            {/* RangeSlider component */}
            <RangeSlider
                className={'custom-range-slider'}
                min={0}
                max={500}
                defaultValue={[range.min, range.max]}
                onInput={(values) => setRange({
                    min: values[0],
                    max: values[1]
                })}
            />

            {/* Price inputs */}
            <div className='d-flex justify-content-between mt-4'>
                <div className='d-flex align-items-center w-50'>
                    <span className='text-muted'>$</span>
                    <input
                        type='number'
                        value={range?.min}
                        className='form-control ms-2'
                        min={0}
                        max="499"
                        disabled
                        placeholder='min'
                    />
                </div>
                <div className='d-flex align-items-center w-50'>
                    <span className='text-muted'>$</span>
                    <input
                        type='number'
                        value={range?.max}
                        className='form-control ms-2'
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
