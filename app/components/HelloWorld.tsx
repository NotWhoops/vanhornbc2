"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface HelloWorldProps {
  helloworld: string;
}

const HelloWorld = ({ helloworld }: HelloWorldProps) => {
  apiData();

  return (
    <Card>
      <h1>{helloworld}</h1>
    </Card>
  );
};

export default HelloWorld;