"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface GreetingProps {
  helloworld: string;
}

const Greeting = ({ helloworld }: GreetingProps) => {
  apiData();

  return (
    <Card>
      <h1>{helloworld}</h1>
    </Card>
  );
};

export default Greeting;