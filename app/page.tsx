"use client"

import { log } from "console";
import { useEffect, useState } from "react";
import Greeting from "./components/AddingTwoNumbers";
import { apiData } from "@/scripts/DataService";

interface IAgify {
  name: string 
  age: number 
  count: number
}

export default function Home() {
  console.log("Home is loading");
  


  const [name, setName] = useState("");
  const [result, setResult] = useState<IAgify>();

  const word: string = "";

  const handleSubmit = async () => {
    console.log(name);
    // https://api.agify.io/?name=${username}

    setResult(await apiData(name));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    setName(event.target.value);
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key == "Enter") {
      console.log("fetch with name: ", name);
    }
  }

  //example for importing components
  // TextComponent;

  useEffect(() => {
    console.log("Use Effect is running");
    
  }, [name, result]);

  useEffect(() => {
    const handleReduce = () => {
      let arr = [1, 1, 1, 1, 1,];

      // () =>
      // () => {  return  }
      let arr2 = arr.reduce((total, currentValue) => {
        console.log("Total: ", total); 
        console.log("CurrentValue: ", currentValue);
        console.log("   ");

        return total + currentValue;
      }, 0);

      console.log("arr2: ", arr2);

      
      let strArr = ["a", "b", "c", "d"];
      
      let str = strArr.reduce((result, currentElement) => result + " " + currentElement, "");

      console.log("str: ", str);
    }

    handleReduce();
  }, []);
  
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark: bg-black"> 
        <input type="text" className="bg-white text-black" onChange={(event) => setName(event.target.value)} onKeyDown={(event) => handleOnKeyDown(event)} />
        <button onClick={handleSubmit}>Submit</button>
        <div>
          <p>Age: {result?.age}</p>
          <p>Count: {result?.count}</p>
        </div>
    </div>
  )
}
