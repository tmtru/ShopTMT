import React from 'react'

const Categories = ({ types }) => {
    return (
        <div>
            {types?.map(type => {
                return (
                    <div className="form-check mb-2">
                        <input
                            type="checkbox"
                            name={type?.code}
                            className="form-check-input"
                            id={type?.code}
                        />
                        <label htmlFor={type?.code} className="form-check-label text-muted" style={{ fontSize: '14px' }}>
                            {type?.name}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}

export default Categories;
