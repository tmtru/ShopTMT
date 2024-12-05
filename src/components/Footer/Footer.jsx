import React from 'react';
import FbIcon from '../common/FbIcon';
import InstaIcon from '../common/InstaIcon';

const Footer = ({ content }) => {
    return (
        <div className="bg-dark text-white py-5 mt-3">
            <div className="container">
                <div className="row justify-content-around">
                    {content?.items &&
                        content?.items?.map((item, index) => {
                            return (
                                <div className="col-12 col-md-3 mb-4" key={index}>
                                    <p className="h6 pb-2">{item?.title}</p>
                                    {item?.list &&
                                        item?.list?.map((listItem, index) => (
                                            <a
                                                key={index}
                                                className="d-block text-light text-decoration-none py-2"
                                                style={{fontSize: '14px'}}
                                                href={listItem?.path}
                                            >
                                                {listItem?.label}
                                            </a>
                                        ))}
                                    {item?.description && <p>{item?.description}</p>}
                                </div>
                            );
                        })}
                </div>
                <div className="d-flex gap-3 justify-content-center py-3">
                    <a href="/fb">
                        <FbIcon />
                    </a>
                    <a href="/insta">
                        <InstaIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
