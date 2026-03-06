"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface ReverseItAlphanumericProps {
  word: string;
}

const ReverseItAlphanumeric = ({ word }: ReverseItAlphanumericProps) => {
  apiData();

  let reversed = word.split("").reverse().join("");

  return (
    <Card>
      <h1>
        Here is your word: {word} and here is your word reversed: {reversed}
      </h1>
    </Card>
  );
};

export default ReverseItAlphanumeric;