import "./Day.css"
import AwayGame from "./AwayGame";
import { formatTitle } from "@/utils";

type DayProps = {
    day: number;
    game?: {
      title: string;
      location: string;
      // ... other fields
    };
  };
  
  export default function Day({ day, game }: DayProps) {
    const isHome = game?.location === 'TD Garden';
    const title = game ? formatTitle(game.title) : "";
  
    return (
      <div className="day">
        {day !== 0  && day}
        {game && isHome ? <div className="game-info">{title}</div> : <AwayGame title={title} />}
        {/* Add other game details if necessary */}
      </div>
    );
  };
  