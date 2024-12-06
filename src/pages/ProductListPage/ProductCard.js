import React from "react";
import SvgFavourite from "../../components/common/SvgFavourite";
import { Link } from "react-router-dom";
import './ProductCard.css'

const ProductCard = ({ id, title, description, price, discount, rating, brand, thumbnail, slug })=>{
    return (
        <div className="d-flex flex-column product-card me-2 position-relative">
            <Link to={`/product/${id}`} className="link-card">
                <img className="w-100 h-100 border rounded"
                src={thumbnail} alt={title}/>
            </Link>
            <div className='d-flex justify-content-between items-center'>
                <div className='d-flex flex-column pt-2'>
                    <p className='h6 p-1'>{title}</p>
                    {description && <p className=' px-1 text-secondary'>{brand}</p>}
                </div>
                <div className="mt-2  ">
                    <p className="bg-secondary text-white p-2 border rounded">${price}</p>
                </div>
            </div>
            <button onClick={() => console.log("Click button")} className='button-link position-absolute top-0 end-0 pt-4 pe-2'><SvgFavourite /></button>

        </div>
    )
}
export default ProductCard;