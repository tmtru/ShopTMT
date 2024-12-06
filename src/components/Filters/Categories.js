// import React, { useEffect, useState } from 'react';

// const Categories = ({ types, onChange }) => {
//     const [selectedCategories, setSelectedCategories] = useState([]);

//     const handleCheckboxChange = (event) => {
//         const { id, checked } = event.target;
//         const updatedCategories = checked
//             ? [...selectedCategories, id]
//             : selectedCategories.filter((item) => item !== id);

//         setSelectedCategories(updatedCategories);


//         if (onChange) {
//             onChange(updatedCategories); // Truyền danh sách danh mục đã chọn về cha
//         }
//     };
//     useEffect(() => {
//         setSelectedCategories([]);
//     }, [types]);

//     console.log(selectedCategories + "vv");


//     return (
//         <div>
//             {types?.map(type => {
//                 return (
//                     <div className="form-check mb-2" key={type?.code}>
//                         <input
//                             type="checkbox"
//                             name={type?.id}
//                             className="form-check-input"
//                             id={type?.id}
//                             onChange={handleCheckboxChange} // Gọi hàm khi trạng thái checkbox thay đổi
//                         />
//                         <label htmlFor={type?.code} className="form-check-label text-muted" style={{ fontSize: '14px' }}>
//                             {type?.name}
//                         </label>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Categories;


// src/components/Filters/Categories.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/slices/productListSlice';

const Categories = ({ types }) => {
    const dispatch = useDispatch();
    const selectedCategories = useSelector((state) => state.products.filters.category);

    const handleCategoryChange = (e) => {
        const category = e.target.name;
        const isChecked = e.target.checked;

        let updatedCategories;
        if (isChecked) {
            updatedCategories = [...selectedCategories, category];
        } else {
            updatedCategories = selectedCategories.filter((item) => item !== category);
        }

        // Cập nhật vào Redux store
        dispatch(setFilters({ category: updatedCategories }));
        
    };
    console.log(selectedCategories);

    return (
        <div className="category-filter">
            {types?.map((type) => (
                <div key={type.code}>
                    <input
                        type="checkbox"
                        name={type?.id}
                        className="form-check-input me-2 mb-2"
                        id={type?.id}
                        onChange={handleCategoryChange} // Gọi hàm khi trạng thái checkbox thay đổi
                    />
                    <label>{type.name}</label>
                </div>
            ))}
        </div>
    );
};

export default Categories;



