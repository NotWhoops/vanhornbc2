"use client";

import { Card } from "flowbite-react";
import apiData from "@/scripts/DataService";

interface GreetingProps {
  fastfood?: string;
  pizza?: string;
  restaurants?: string;
}

const Greeting = () => {
  apiData();

  let fastfood = [
    "Taco Bell",
    "Carl's Jr",
    "McDonald's",
    "Subway",
    "Burger King",
    "In-N-Out",
    "Sonic",
    "Chick-fil-A",
    "Wendy's",
    "Wingstop"
  ];

  let pizza = [
    "Mountain Mike's Pizza",
    "Little Caesars",
    "Papa Johns",
    "Marco's Pizza",
    "Smack Pie",
    "Domino's Pizza",
    "Stratton's Pizza",
    "Pizza Guys",
    "Round Table Pizza",
    "Papa Murphy's"
  ];

  let restaurants = [
    "Olive Garden",
    "Red Lobster",
    "Texas Roadhouse",
    "Velvet Grill and Creamery",
    "El Rancho Steak & Lobster",
    "BJ's Restaurant and Brewhouse",
    "Cheesecake Factory",
    "The Old Spaghetti Factory",
    "The Firehouse Steakhouse",
    "Magpie Cafe"
  ];

  let randomFastFood =
    fastfood[Math.floor(Math.random() * fastfood.length)];

  let randomPizza =
    pizza[Math.floor(Math.random() * pizza.length)];

  let randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];

  return (
    <Card>
      <h1>You picked fast food and here is your place: {randomFastFood}</h1>
      <h1>You picked pizza and here is your place: {randomPizza}</h1>
      <h1>You picked restaurants and here is your place: {randomRestaurant}</h1>
    </Card>
  );
};

export default Greeting;