import React from 'react';
import PropTypes from 'prop-types';

function ShopItem(props) {
    const { cards } = props;

    return (
        <div className={'shop-item'}>
            <div className={'shop-title'}>{cards.name}</div>
            <div className={'shop-color'}>{cards.color}</div>
            <div className={'shop-img'}>
                <img src={cards.img} alt={cards.name} title={cards.name} />
            </div>
            <div className={'shop-bottom'}>
                <div className={'shop-price'}>${cards.price}</div>
                <button className={'shop-button'}>add to cart</button>
            </div>
        </div>
    );
}

ShopItem.propTypes = {
    cards: PropTypes.object.isRequired,
}

export default ShopItem;
