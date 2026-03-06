"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface ReverseItNumbersProps {
  num: number;
}

const ReverseItNumbers = ({ num }: ReverseItNumbersProps) => {
  apiData();

  
  let reversed = Number(num.toString().split("").reverse().join(""));

  return (
    <Card>
      <h1>
        Here is your number: {num} and here is your number reversed: {reversed}
      </h1>
    </Card>
  );
};

export default ReverseItNumbers;