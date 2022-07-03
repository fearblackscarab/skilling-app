import React, { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import Generators from "./Generators";
// import { Link } from "react-router-dom";

function App() {
  const [currency, setCurrency] = useLocalStorage('currency'
    , {
      influence: 5,
      money: 0,
      wood: 0,
      copper: 0,
      iron: 0,
      silver: 0,
      gold: 0,
      saphire: 0,
      emerald: 0,
      ruby: 0,
      Diamond: 0,
      platinum: 0
    }
  );

  const [influencers, setInfluencers] = useLocalStorage('influencers', [
    {
      key: 0,
      id: 0,
      name: 'kevin',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 1,
      id: 1,
      name: 'internet protestor',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 2,
      id: 2,
      name: 'karen',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 3,
      id: 3,
      name: 'protestor',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 4,
      id: 4,
      name: 'doctor',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 5,
      id: 5,
      name: 'lawyer',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 6,
      id: 6,
      name: 'judge',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 7,
      id: 7,
      name: 'da',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 8,
      id: 8,
      name: 'mayor',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 9,
      id: 9,
      name: 'governor',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 10,
      id: 10,
      name: 'senator',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 11,
      id: 11,
      name: 'singlelift',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 12,
      id: 12,
      name: 'jeeves',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 13,
      id: 13,
      name: 'doctor bike',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 14,
      id: 14,
      name: 'amsonbold',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 15,
      id: 15,
      name: 'hashanbi',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 16,
      id: 16,
      name: 'slade',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 17,
      id: 17,
      name: 'johnny',
      assigned: '',
      cost: 5,
      quantity: 0,
      itemPer: 1
    }
  ]);

  const loginTimer = new Date;

  const addGen = (e) => {
    const idx=e.target.id
    console.log(idx)
    if (influencers[idx].cost <= currency.influence) {
      setCurrency(prev => ({ ...prev, influence: currency.influence - influencers[idx].cost }))
      let data=influencers.map(item=>{
        if(item.id==idx){
          return {...item,quantity:item.quantity+1,cost:Math.floor(item.cost+2*1.15)}
        }
        return item
      })
      setInfluencers(data)
    }
  };

  console.log(currency);
  console.log(influencers);
  console.log(loginTimer);

  return (
    <div className="app">
      <div className="container">
        <h1>test</h1>
        <div className="row">
          {influencers.map(item => {
            return <Generators id={item.id} key={item.id} handleClick={addGen} name={item.name} />
            // return <div className="gens" id={item.id} onClick={addGen} key={item.id}><p>{item.name}</p></div>
          })}
          {/* <button onClick={}></button> */}
        </div>
      </div>
    </div>
  );
}

export default App;