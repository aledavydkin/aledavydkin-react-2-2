import React from 'react';
import PropTypes from 'prop-types';

function ShopCard(props) {
    const { cards } = props;

    return (
        <div className={'shop-card-item'}>
            <div className={'shop-card-img'}>
                <img src={cards.img} alt={cards.name} title={cards.name} />
            </div>
            <div className={'shop-title'}>{cards.name}</div>
            <div className={'shop-card-color'}>{cards.color}</div>
            <div className={'shop-price'}>${cards.price}</div>
            <button className={'shop-card-button'}>add to cart</button>
        </div>
    );
}

ShopCard.propTypes = {
    cards: PropTypes.object.isRequired,
}

export default ShopCard;
