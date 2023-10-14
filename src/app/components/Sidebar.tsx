
import { formatDate } from "@/utils";
import { Dispatch, SetStateAction } from 'react';
import Image from "next/image";

interface Game {
    id: string;
    title: string;
    location: string;
    description: string;
    windowsTimeZoneId: string;
    startDateTimeUtc: string;
    endDateTimeUtc: string;
    startDateTimeLocal: string;
    isAllDayEvent: boolean;
  }

export default function Sidebar(
    { 
        setCurrentView, 
        nextGame 
    }: 
    { 
        setCurrentView: Dispatch<SetStateAction<string>>,
        nextGame?: Game
    }) {
    return (
        <div className="flex flex-col justify-between w-80 bg-black text-white items-center h-screen sticky top-0">
            <nav className="flex flex-col">
                <div className="m-4">
                    <h3>Next Game at</h3>
                    <h3>{ nextGame ? nextGame.location : "No games scheduled" }:</h3>
                    <div>{ nextGame && formatDate(nextGame.startDateTimeUtc) }</div>
                </div>
                <ul className="text-center flex flex-col gap-2">
                    <li onClick={() => setCurrentView("games")}>Games</li>
                    <li onClick={() => setCurrentView("arena")}>Arena</li>
                    <li onClick={() => setCurrentView("foodAndDrink")}>Food and Drink</li>
                    <li onClick={() => setCurrentView("lodging")}>Lodging</li>
                    <li onClick={() => setCurrentView("transportation")}>Transportation</li>
                </ul>
            </nav>
            <Image className="w-64 h-64 m-4" width={64} height={64} src="/bruins_road_dogs_logo.jpeg" quality={100} alt="Bruins Road Dogs Logo" />
        </div>
    )
}