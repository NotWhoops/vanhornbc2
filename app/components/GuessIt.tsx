"use client";

import { Card } from "flowbite-react";
import apiData from '@/scripts/DataService';


interface GreetingProps {
  diff: "Easy" | "Medium" | "Hard";
  guess: number;
}

apiData();

const Greeting = ({ diff, guess }: GreetingProps) => {
  let getRandom = (max: number) =>
    Math.floor(Math.random() * max) + 1;

  let Easy = () => {
    let target = getRandom(10);
    if (guess < target) return `${guess} is too low`;
    if (guess > target) return `${guess} is too high`;
    return `${guess} is correct!`;
  };

  let Medium = () => {
    let target = getRandom(50);
    if (guess < target) return `${guess} is too low`;
    if (guess > target) return `${guess} is too high`;
    return `${guess} is correct!`;
  };

  let Hard = () => {
    let target = getRandom(100);
    if (guess < target) return `${guess} is too low`;
    if (guess > target) return `${guess} is too high`;
    return `${guess} is correct!`;
  };

  let result = (() => {
    switch (diff) {
      case "Easy": return Easy();
      case "Medium": return Medium();
      case "Hard": return Hard();
      default: return "Invalid difficulty";
    }
  })();

  return (
    <Card>
      <h1>Difficulty: {diff}</h1>
      <h2>Guess Result: {result}</h2>
    </Card>
  );
};

export default Greeting;