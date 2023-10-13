"use client"

import { useState } from 'react';
import Day from './Day';
import "./Calendar.css";

type CalendarProps = {
    month: number;
    year: number;
    games: {
      startDateTimeLocal: string;
      title: string;
      // ... other fields
    }[];
  };

  function getMonthName(monthNumber: number) {
    const date = new Date(2023, monthNumber); 
    return date.toLocaleString('default', { month: 'long' });
  }
  
  export default function Calendar({ month, year, games }: CalendarProps) {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const [currentMonth, setCurrentMonth] = useState(month);
    const [currentYear, setCurrentYear] = useState(year);
  
    const gameMap: Record<number, typeof games[0]> = {};
    games.forEach(game => {
        const date = new Date(game.startDateTimeLocal);
        const key = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        gameMap[key] = game;
    });
    

    console.log("GAME MAP: ", gameMap)
  
    const days: JSX.Element[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
        const key = `${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        if (gameMap[key]) {
            days.push(<Day key={i} day={i} game={gameMap[key]} />);
        } else {
            days.push(<Day key={i} day={i} />);
        }
    }
    
  
    // Adjust for the first day of the month
    for (let i = 0; i < firstDay; i++) {
        days.unshift(<Day key={`empty-${i}`} day={0} />);
      }

    const advanceMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(prevYear => prevYear + 1);
        } else {
            setCurrentMonth(prevMonth => prevMonth + 1);
        }
    }
    
    const retreatMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(prevYear => prevYear - 1);
        } else {
            setCurrentMonth(prevMonth => prevMonth - 1);
        }
    }
    
    return (
        <>
            <h2>Or Choose a Date</h2>
            <div className="flex gap-1">
                <button onClick={retreatMonth}>{"<"}</button>
                <h2>{getMonthName(currentMonth)}</h2>
                <button onClick={advanceMonth}>{">"}</button>
            </div>
            <div className="calendar-grid">
                {days}
            </div>
        </>
    );
  };
  