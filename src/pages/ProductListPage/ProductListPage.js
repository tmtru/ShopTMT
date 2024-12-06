// import React, { useEffect, useMemo, useState } from 'react';
// import FilterIcon from '../../components/common/FilterIcon';
// import content from '../../data/content.json';
// import Categories from '../../components/Filters/Categories';
// import PriceFilter from '../../components/Filters/PriceFilter';
// import ColorsFilter from '../../components/Filters/ColorsFilter';
// import SizeFilter from '../../components/Filters/SizeFilter';
// import ProductCard from './ProductCard';
// import './ProductList.css'


// const categories = content?.categories;

// // destructuring
// const ProductListPage = ({ categoryType }) => {

//     const [products, setProducts] = useState([]);
//     const [filters, setFilters] = useState({
//         category: [],
//         color: [],
//         price: [0, 500],
//         size: []
//     });
//     useEffect(() => {
//         setFilters({
//             category: [],
//             color: [],
//             price: [0, 500],
//             size: []
//         });
//     }, [categoryType])


//     const categoryContent = useMemo(() => {
//         return categories?.find((category) => category.code === categoryType);
//     }, [categoryType]);

//     const productListItems = useMemo(() => {
//         return content?.products?.filter(
//             (product) => product?.category_id === categoryContent?.id
//         );
//     }, [categoryContent]);
//     const filteredProducts = useMemo(() => {
//         return productListItems?.filter((product) => {
//             // Kiểm tra danh mục
//             const categoryMatch =
//                 filters.category.length === 0 ||
//                 filters.category.includes(product.type_id.toString());
//             console.log(categoryMatch);

//             // Kiểm tra màu sắc
//             const colorMatch =
//                 filters.color.length === 0 ||
//                 filters.color.includes(product.color);

//             // Kiểm tra kích thước
//             const sizeMatch =
//                 filters.size.length === 0 ||
//                 filters.size.includes(product.size);

//             // Kiểm tra giá
//             const priceMatch =
//                 product.price >= filters.price[0] &&
//                 product.price <= filters.price[1];

//             return categoryMatch;
//         });
//     }, [productListItems, filters]);




//     return (
//         <div className="container mt-4 product-list">
//             <div className="row">
//                 {/* Sidebar */}
//                 <div className="col-md-3">
//                     <div className="card">
//                         <div className="card-body">
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <h5 className="card-title text-secondary">Filter</h5>
//                                 <FilterIcon />
//                             </div>
//                             <hr />
//                             {/* Categories */}
//                             <div>
//                                 <h6 className="text-dark mt-4">Categories</h6>
//                                 <Categories
//                                     types={categoryContent?.types}
//                                     onChange={(selectedCategories) =>
//                                         setFilters(prev => ({ ...prev, category: selectedCategories }))
//                                     }
//                                 />

//                                 <hr />
//                             </div>
//                             {/* Price */}
//                             <PriceFilter />
//                             <hr />
//                             {/* Colors */}
//                             <ColorsFilter colors={categoryContent?.meta_data?.colors} />
//                             <hr />
//                             {/* Sizes */}
//                             <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main content */}
//                 <div className="col-md-9">
//                     {/* <h4 className="text-dark">{category?.description}</h4>  */}
//                     <div className="row mt-4">
//                         {filteredProducts?.map((item, index) => (
//                             <div className="col-lg-4 col-md-6 mb-4" key={item?.id + '_' + index}>
//                                 <ProductCard {...item} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductListPage;


import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, setProducts } from '../../redux/slices/productListSlice';
import FilterIcon from '../../components/common/FilterIcon';
import content from '../../data/content.json';
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductCard from './ProductCard';
import './ProductList.css';

const categories = content?.categories;

const ProductListPage = ({ categoryType }) => {
    const dispatch = useDispatch();

    // Lấy dữ liệu sản phẩm và bộ lọc từ Redux store
    const { products, filters } = useSelector((state) => state.products);

    const categoryContent = useMemo(() => {
        return categories?.find((category) => category.code === categoryType);
    }, [categoryType]);

    const productListItems = useMemo(() => {
        return content?.products?.filter(
            (product) => product?.category_id === categoryContent?.id
        );
    }, [categoryContent]);

    const filteredProducts = useMemo(() => {
        return productListItems?.filter((product) => {
            const categoryMatch =
                filters.category.length === 0 ||
                filters.category.includes(product.type_id.toString());

            const colorMatch =
                filters.color.length === 0 || filters.color.includes(product.color);

            const sizeMatch =
                filters.size.length === 0 || filters.size.includes(product.size);

            const priceMatch =
                product.price >= filters.price[0] && product.price <= filters.price[1];

            return categoryMatch ;
        });
    }, [productListItems, filters]);

    useEffect(() => {
        dispatch(setProducts(productListItems));
    }, [dispatch, productListItems]);

    useEffect(() => {
        dispatch(setFilters({
            category: [],
            color: [],
            price: [0, 500],
            size: []
        }));
    }, [categoryType, dispatch]);

    return (
        <div className="container mt-4 product-list">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-secondary">Filter</h5>
                                <FilterIcon />
                            </div>
                            <hr />
                            {/* Categories */}
                            <div>
                                <h6 className="text-dark mt-4">Categories</h6>
                                <Categories
                                    types={categoryContent?.types}
                                />
                                <hr />
                            </div>
                            {/* Price */}
                            <PriceFilter />
                            <hr />
                            {/* Colors */}
                            <ColorsFilter colors={categoryContent?.meta_data?.colors} />
                            <hr />
                            {/* Sizes */}
                            <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="col-md-9">
                    <div className="row mt-4">
                        {filteredProducts?.map((item, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={item?.id + '_' + index}>
                                <ProductCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;

