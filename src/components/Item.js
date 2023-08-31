import React ,{useState} from "react";

function Item({ name, category }) {
  const [isClicked,setIsClicked]=useState(false);

  function handleClick(){
    setIsClicked((isClicked)=>!isClicked)

  }
const appClass = isClicked ? "in-cart" : ""
const appClassTwo = isClicked ? "remove" : "add"


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}className={appClassTwo}>{isClicked ? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
