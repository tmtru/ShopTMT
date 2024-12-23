import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import content from '../../data/content.json';
import SizeFilter from '../../components/Filters/SizeFilter';
import SectionHeading from "../../components/Sections/SectionsHeading/SectionHeading";
import ProductCard from "../ProductListPage/ProductCard";
import Rating from "../../components/Rating/Rating";
import './ProductDetail.css'
import ColorsFilter from "../../components/Filters/ColorsFilter";
const ProductDetails = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState();
    const [similarProduct, setSimilarProducts] = useState([]);
    const [selecteSize, setSelectedSize] = useState('');

    useEffect(() => {
        // Tìm sản phẩm theo ID
        const product = content?.products?.find((product) => product?.id.toString() === productID.toString());
        setImage(product?.thumbnail);
        setProduct(product);
    }, [productID]);

    const sizes = useMemo(() => {
        const sizeSet = product?.size;
        return sizeSet

    }, [product]);

    const colors = useMemo(() => {
        const colorSet = product?.color;
        return colorSet

    }, [product]);

    return (
        <>
        <div className="container mt-5">
            <div className="row">
                {/* Image Section */}
                <div className="col-12 col-md-5">
                    <div className="d-flex flex-column flex-md-row">
                        <div className="d-flex flex-column col-12 col-md-3">
                            {/* Stack Images */}
                            <div className="d-flex flex-row flex-md-column justify-content-center align-items-center">
                                {product?.images?.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setImage(item)}
                                        className="border rounded mb-4 button-img"
                                    >
                                        <img
                                            src={item}
                                            className="img-fluid rounded-lg"
                                            alt={`sample-${index}`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-12 col-md-9 thumbnail">
                            <img
                                src={image}
                                className="img-fluid rounded"
                                alt={product?.name}
                                style={{ maxHeight: '520px' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="col-12 col-md-7">
                    <div>
                        <h2>{product?.title}</h2>
                        <div className="rating">
                            <Rating rating={product?.rating} />
                            {/* Add rating component here */}
                        </div>
                        <p className="h4">${product?.price}</p>

                        <div className="mt-3">
                            <div className="d-flex justify-content-between align-items-center">
                                {/* <p className="h6">Select Size</p> */}
                                <a
                                    href="https://en.wikipedia.org/wiki/Clothing_sizes"
                                    target="_blank"
                                    className="text-decoration-none"
                                >
                                    Size Guide →
                                </a>
                            </div>
                            <SizeFilter onChange={(values) => setSelectedSize(values?.[0] ?? '')} sizes={sizes}/> 
                        </div>

                        <div className="mt-3">
                            {/* <p className="h6">Colors Available</p> */}
                            <ColorsFilter colors={colors}></ColorsFilter>
                        </div>

                        <div className="py-4">
                            <button
                                // onClick={addItemToCart}
                                className="btn btn-dark w-50"
                            >
                                <svg
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2"
                                >
                                    <path
                                        d="M1.5 1.33325H2.00526C2.85578 1.33325 3.56986 1.97367 3.6621 2.81917L4.3379 9.014C4.43014 9.8595 5.14422 10.4999 5.99474 10.4999H13.205C13.9669 10.4999 14.6317 9.98332 14.82 9.2451L15.9699 4.73584C16.2387 3.68204 15.4425 2.65733 14.355 2.65733H4.5M4.52063 13.5207H5.14563M4.52063 14.1457H5.14563M13.6873 13.5207H14.3123M13.6873 14.1457H14.3123M5.66667 13.8333C5.66667 14.2935 5.29357 14.6666 4.83333 14.6666C4.3731 14.6666 4 14.2935 4 13.8333C4 13.373 4.3731 12.9999 4.83333 12.9999C5.29357 12.9999 5.66667 13.373 5.66667 13.8333ZM14.8333 13.8333C14.8333 14.2935 14.4602 14.6666 14 14.6666C13.5398 14.6666 13.1667 14.2935 13.1667 13.8333C13.1667 13.373 13.5398 12.9999 14 12.9999C14.4602 12.9999 14.8333 13.373 14.8333 13.8333Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                 Add to Cart
                            </button>
                        </div>

                        {/* {error && <p className="text-danger">{error}</p>}

                        <div className="d-flex flex-wrap gap-3 mt-4">
                            {extraSections?.map((section, index) => (
                                <div key={index} className="d-flex align-items-center">
                                    {section?.icon}
                                    <p className="ms-2">{section?.label}</p>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
                </div>
                </div>
<div className="px-5">
            {/* Product Description */}
            <SectionHeading title="Product Description" />
            <div className="p-2 ms-5">
                <p>{product?.description}</p>
            </div>

            {/* Similar Products */}
            <SectionHeading title="Similar Products" />
            <div className="row">
                <div className="col-12 pt4- ms-5">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                        {similarProduct?.map((item, index) => (
                            <div key={index} className="col">
                                <ProductCard {...item} />
                            </div>
                        ))}
                        {!similarProduct?.length && <p>No Products Found!</p>}
                    </div>
                </div>
            </div>
                </div>
        </>
    );
};

export default ProductDetails;
