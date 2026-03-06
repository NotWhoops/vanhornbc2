"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";


const Magic8Ball = () => {
  apiData();

  let responses = [
    "Probably not, don't ask again",
    "How dare you, that's weird",
    "Um no, you might want to seek therapy",
    "Yes, I always knew you were a nerd",
    "Nah",
    "Yes but also no",
    "System Error, Please try again",
    "You monster, how dare you suggest that",
    "I don't contain the parameters to help you",
    "Please read the bible bro"
  ];

  let randomResponse = responses[Math.floor(Math.random() * responses.length)];

  return (
    <Card>
      <h1>Magic 8 Ball Says: {randomResponse}</h1>
    </Card>
  );
};

export default Magic8Ball;