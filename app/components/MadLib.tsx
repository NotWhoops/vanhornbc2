"use client"

import { Card } from 'flowbite-react';
import apiData from '@/scripts/DataService';

interface MadLibProps {
    adjective: string;
    noun: string;
    verb: string;
    place: string;
    emotion: string;
}

const MadLib = ({adjective, noun, verb, place, emotion}: MadLibProps) => {

apiData();

    return (
    <Card>
        <h1> "Yesterday, I saw a {adjective} {noun} trying to {verb} on top of a {adjective} {place}, and it made everyone feel extremely {emotion}." </h1>
    </Card>
  )
}

export default MadLib;