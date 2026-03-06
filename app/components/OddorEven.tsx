"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface OddOrEvenProps {
  num: number;
}

const OddOrEven = ({ num }: OddOrEvenProps) => {
  apiData();

  let isEven = num % 2 === 0;

  return (
    <Card>
      {isEven ? (
        <h1>You entered {num}, it was even</h1>
      ) : (
        <h1>You entered {num}, it was odd</h1>
      )}
    </Card>
  );
};

export default OddOrEven;