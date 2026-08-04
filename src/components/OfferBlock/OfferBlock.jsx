import React from 'react';
import './OfferBlock.css';

const OfferBlock = ({
    offerText = "Оферта",
    policyText = "Политика конфиденциальности",
    offerLink = "/offer",
    policyLink = "/privacy-policy",
    target = "_blank",
    className = ""
}) => {
    return (
        <div className={`joint3-thq-frame1054-elm ${className}`}>
            <span className="joint3-thq-text-elm164">
                {offerLink ? (
                    <a
                        href={offerLink}
                        target={target}
                        rel={target === "_blank" ? "noopener noreferrer" : undefined}
                        className="offer-block__link"
                    >
                        {offerText}
                    </a>
                ) : (
                    offerText
                )}
            </span>
            <span className="joint3-thq-text-elm165">
                {policyLink ? (
                    <a
                        href={policyLink}
                        target={target}
                        rel={target === "_blank" ? "noopener noreferrer" : undefined}
                        className="offer-block__link"
                    >
                        {policyText}
                    </a>
                ) : (
                    policyText
                )}
            </span>
        </div>
    );
};

export default OfferBlock;