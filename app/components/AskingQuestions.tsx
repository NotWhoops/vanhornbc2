"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface GreetingProps {
  name: string;
  time: number;
}

const Greeting = ({ name, time }: GreetingProps) => {
  apiData();

  return (
    <Card>
      <h1>Your name is {name} and you woke up at {time}</h1>
    </Card>
  );
};

export default Greeting;