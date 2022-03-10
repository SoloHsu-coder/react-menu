import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//console.log(typeof(items));
const allCategories = ['all',...new Set(items.map((item)=>item.category))]; // new Set ကထပ်နေတဲ့ category ရှိရင် တစ်ခါပဲယူအောင်သုံး။
  //console.log(allCategories);
  

function App() {
  
  const[menuItem,setMenuItem]= useState(items);
  const[categories,setCategories]=useState(allCategories);

  const filterItems =(category)=>{
   if(category ==="all"){
     return setMenuItem(items);
     
   }
   const newMenu = items.filter((item)=>
     item.category === category)
        return setMenuItem(newMenu);
     
   }
  return (
    <main className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories = {categories} filterItems={filterItems}/>
      <Menu items={menuItem} />
    </main>

  )
}

export default App;
