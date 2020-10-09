import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';
const uuid = require('uuid');

function CardsView(props) {
    const { cards } = props;

    return (
        <div className={"shop-card-container"}>
            { cards.map(item => <ShopCard key={uuid()} cards={item} />) }
        </div>
    );
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired,
}

export default CardsView;

