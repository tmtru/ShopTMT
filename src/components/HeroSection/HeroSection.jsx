import React from "react";
import HeroImg from "../../assets/pexels-lucas-toyes-706110023-18398399.jpg"
import './HeroSection.css'
const HeroSection = () => {
    return (
        <div
            className="d-flex align-items-start hero-section w-100"
            style={{
                backgroundImage: `url(${HeroImg})`
            }}
        >
            <div className="text-section container d-flex flex-column justify-content-center">
                <div className="px-4">
                    <div className="text-left">
                        <h2 className="mb-3">T-shirt / Tops</h2>
                    </div>
                    <p className="mt-3 display-1 text-white">
                        Summer <br /> Value Pack
                    </p>
                    <p className="mt-3 fs-4  text-white">
                        cool / colorful / comfy
                    </p>
                    <button className="btn px-5 py-2 btn-dark border rounded mt-4">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>

    )
}
export default HeroSection;