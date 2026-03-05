"use client"

import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react'

interface GreetingProps {
    num1: number;
    num2: number;
}

const Greeting = ({num1, num2}:GreetingProps) => {

const apiData = async () => {
    const response = await fetch("https://allforoneapi-hhdrdah6b0hgfgdz.westus3-01.azurewebsites.net/AddingTwoNumbers/AddingTwoNumbers");
    const data = await response.json();
    console.log(data[0]);
    return data[0];
}


    return (
    <Card>
        <h1> Here are your two numbers added together {num1} + {num2} </h1>
    </Card>
  )
}

export default Greeting