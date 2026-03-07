"use client"


import { useEffect, useState } from "react";
import AddingTwoNumbers from "./components/AddingTwoNumbers";
import AskingQuestions from "./components/AskingQuestions";
import GuessIt from "./components/GuessIt";
import HelloWorld from "./components/HelloWorld";
import MadLib from "./components/MadLib";
import OddOrEven from "./components/OddorEven";
import ReverseItAlphanumeric from "./components/ReverseItAlphanumeric";
import ReverseItNumbers from "./components/ReverseItNumbers";
import apiData from "@/scripts/DataService";

interface AddingTwoNumbers {
  num1: number;
  num2: number;
}

interface AskingQuestions {
  name: string;
  time: number;
}

interface GuessIt {
  diff: "Easy" | "Medium" | "Hard";
  guess: number;
}

interface HelloWorld {
  helloworld: string;
}

interface MadLib {
    adjective: string;
    noun: string;
    verb: string;
    place: string;
    emotion: string;
}

interface OddOrEven {
  num: number;
}

interface ReverseItAlphanumeric {
  word: string;
}

interface ReverseItNumbers {
  num: number;
}

export default function Home() {
  console.log("Home is loading");
  


  
  const [name, setName] = useState<AddingTwoNumbers>();
  const [result1, setResult1] = useState<AddingTwoNumbers>();
  const [result2, setResult2] = useState<AskingQuestions>();
  const [result3, setResult3] = useState<GuessIt>();
  const [result4, setResult4] = useState<HelloWorld>();
  const [result5, setResult5] = useState<MadLib>();
  const [result6, setResult6] = useState<OddOrEven>();
  const [result7, setResult7] = useState<ReverseItAlphanumeric>();
  const [result8, setResult8] = useState<ReverseItNumbers>();

  const word: string = "";

  const handleSubmit = async () => {


    setResult1(await apiData());
    setResult2(await apiData());
    setResult3(await apiData());
    setResult4(await apiData());
    setResult5(await apiData());
    setResult6(await apiData());
    setResult7(await apiData());
    setResult8(await apiData());
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key == "Enter") {
      console.log("fetch with name: ", name);
    }
  }

  useEffect(() => {
    console.log("Use Effect is running");
    
  }, [name, result1]);

  useEffect(() => {
    const handleReduce = () => {
      let arr = [1, 1, 1, 1, 1,];

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
        <input type="text" className="bg-white text-black" onKeyDown={(event) => handleOnKeyDown(event)} />
        <button onClick={handleSubmit}>Submit</button>
        <div>
          <p>HelloWorld: {result1?.num1}</p>
          <p>Count: {result1?.num2}</p>
        </div>
    </div>
  )
}
