"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface AskingQuestionsProps {
  name: string;
  time: number;
}

const AskingQuestions = ({ name, time }: AskingQuestionsProps) => {
  apiData();

  return (
    <Card>
      <h1>Your name is {name} and you woke up at {time}</h1>
    </Card>
  );
};

export default AskingQuestions;