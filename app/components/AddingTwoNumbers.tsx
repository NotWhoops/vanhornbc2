"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface AddingTwoNumbersProps {
  num1: number;
  num2: number;
}

const AddingTwoNumbers = ({ num1, num2 }: AddingTwoNumbersProps) => {
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

export default AddingTwoNumbers;