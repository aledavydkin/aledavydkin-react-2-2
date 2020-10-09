import React, {useState} from 'react';
import IconSwitch from './IconSwitch'
import CardsView from "./CardsView";
import ListView from "./ListView";
import data from './data'

function Store() {
const [iconSwitch, setIconSwitch] = useState('view_list');

const onSwitch = () => {
    setIconSwitch((prevState) => (prevState === 'view_list' ? "view_module" : "view_list"));
}

return (
    <div className={"container"}>
        <IconSwitch icon={iconSwitch} onSwitch={onSwitch}  />
        {iconSwitch ===  'view_module' ? <CardsView cards={data} /> : <ListView items={data} />}
    </div>
    );
}

export default Store;

