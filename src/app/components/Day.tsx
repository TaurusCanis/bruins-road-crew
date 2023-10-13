import "./Day.css"
import AwayGame from "./AwayGame";

type DayProps = {
    day: number;
    game: {
      title: string;
      location: string;
      description: string;
      // ... other fields
    };
  };

  function formatTitle(title: string) {
    const splitTitle = title.split("@");
    return splitTitle[0].includes("Boston Bruins") ? 
        splitTitle[1] : 
        splitTitle[0].slice(2).trim(); // This removes the hockey stick emoji from the beginning of the title
  }
  
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
  