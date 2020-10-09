import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from "./ShopItem";
const { v4: uuidv4 } = require('uuid');

function ListView(props) {
    const { items } = props;

    return (
        <>
            <div className={"shop"}>
                {items.map(item => <ShopItem cards={item} key={uuidv4()} />)}
            </div>
        </>
    );
}

ListView.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ListView;
