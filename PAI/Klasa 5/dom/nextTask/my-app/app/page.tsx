'use client'

import { useState } from "react";

export default function Home(){
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount (count + 1);
  };

  return (
    <div>
        <p>Liczba: {count}</p>
        <button onClick={handleClick}>Zwiększ liczbę: </button>
    </div>
  );

}
