import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
// import { Link } from "react-router-dom";

function App() {
  // currency's for manual upgrades
  const [currency, setCurrency] = useState({
    influence: 2000,
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
  // generators for passive increase of currency or other generators
  const [influencers, setInfluencers] = useState([
    {
      key: 0,
      id: 0,
      name: 'kevin',
      assigned: ['influence'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 1,
      id: 1,
      name: 'internetProtestor',
      assigned: ['kevin'],
      cost: 100,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 2,
      id: 2,
      name: 'karen',
      assigned: ['internetProtestor'],
      cost: 1000,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 3,
      id: 3,
      name: 'protestor',
      assigned: ['karen'],
      cost: 10000,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 4,
      id: 4,
      name: 'doctor',
      assigned: ['protestor'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 5,
      id: 5,
      name: 'lawyer',
      assigned: ['doctor'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 6,
      id: 6,
      name: 'judge',
      assigned: ['lawyer'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 7,
      id: 7,
      name: 'da',
      assigned: ['judge'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 8,
      id: 8,
      name: 'mayor',
      assigned: ['da'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 9,
      id: 9,
      name: 'governor',
      assigned: ['mayor'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 10,
      id: 10,
      name: 'senator',
      assigned: ['governor'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 11,
      id: 11,
      name: 'singlelift',
      assigned: ['kevin'],
      cost: 5,
      quantity: 0,
      itemPer: 5
    },
    {
      key: 12,
      id: 12,
      name: 'jeeves',
      assigned: ['kevin'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 13,
      id: 13,
      name: 'doctor-bike',
      assigned: ['doctor'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 14,
      id: 14,
      name: 'amsonbold',
      assigned: ['karen'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 15,
      id: 15,
      name: 'hashanbi',
      assigned: ['internetProtestor'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 16,
      id: 16,
      name: 'slade',
      assigned: ['judge'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    },
    {
      key: 17,
      id: 17,
      name: 'johnny',
      assigned: ['kevin'],
      cost: 5,
      quantity: 0,
      itemPer: 1
    }
  ]);
  // incremental constant
  // setInterval(() => {
  //   incrementInfluencers(influencers)
  // }, 2000)
  // incrementCurrency()

  const loginTimer = new Date();
  // general generator purchase to increase quantity 
  const addGen = (e) => {
    let idx = e.target.id
    console.log(idx)
    if (influencers[idx].cost <= currency.influence) {
      let costChange = currency.influence - influencers[idx].cost
      let data = influencers.map(item => {
        if (item.id == idx) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      setInfluencers(data)
      setCurrency(prev => ({ ...prev, influence: costChange }))
    }
  };
  // incremental constant function
  const incrementInfluencers = () => {
    setInfluencers(influencers = influencers.map(item => {
      // // if (item.quantity > 0) {
      // //   for (const key in influencers) {
      // //     if (key.includes(influencer.name)) {
      // //       for (const prop in item.itemPer) {
      // //         if (prop === influencer.name) {
      // //           return {  }
      // //         }
      // //       }
      // //     }
      // //   }
      // } else {
      //   return { ...item }
      // }
    }
    )
    )
    console.log(influencers)
  };
  console.log(influencers)

  const incrementCurrency = () => {
    setInfluencers(prev => influencers.map(item => {
      for (const key in currency) {
        if (item.assigned.includes(key)) {
          setCurrency(prev => (
            {
              ...prev,
              [key]: currency[key] + (item.itemPer * item.quantity)
            }))
        }
      }
      for (const key in influencers) {
        if (influencers[key].assigned.includes(item.name)) {
          return {
            ...item, quantity: item.quantity + (influencers[key].itemPer * influencers[key].quantity)
          }
        }
      }
      return item

    }))
  }

  // const incrementGen=()=>{

  // }
  // useLocalStorage(currency, influencers)
  // console.log(currency);
  // console.log(influencers);
  // console.log(loginTimer);

  return (
    <div className="app">
      <Header currency={currency} />
      <Main influencers={influencers} addGen={addGen} />
      <Footer />
      <button onClick={incrementCurrency}>inc currency</button>
      <button onClick={incrementInfluencers}>inc influencers</button>
    </div>
  );
}

export default App;