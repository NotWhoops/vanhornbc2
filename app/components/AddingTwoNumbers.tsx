"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface GreetingProps {
  num1: number;
  num2: number;
}

const Greeting = ({ num1, num2 }: GreetingProps) => {
  apiData();

  const total = num1 + num2;

  return (
    <Card>
      <h1>
        Here are your two numbers added together: {num1} + {num2} = {total}
      </h1>
    </Card>
  );
};

export default Greeting;