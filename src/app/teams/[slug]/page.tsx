
import bruins_away_games_from_import from "../../../dummyData/bruins_away_games_dict.json";
import InfoCard from "@/app/components/InfoCard";
import { formatTitle, formatDate } from "@/utils";
import Sidebar from "@/app/components/Sidebar";
// import { useState } from "react";
import TeamList from "@/app/components/TeamList";
import { getTeamList } from "@/utils";
import TeamComponent from "./TeamComponent";

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

type BruinsAwayGames = {
  [team: string]: Game[];
};

function getGames(teamName: string) {
    const bruins_away_games: BruinsAwayGames = bruins_away_games_from_import;
    return bruins_away_games[teamName];
}

function getTeamInfo(teamName: string) {
    const teamInfo: Record<string, string> = {};
    ["arenaInfo", "foodAndDrinkInfo", "lodgingInfo", "transportationInfo"].forEach(info => {
        teamInfo[info] = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In tempor varius ipsum varius pellentesque. Sed feugiat dolor et 
            scelerisque porttitor. Fusce turpis massa, dapibus quis aliquet ut, 
            tempor ut ligula. Praesent sodales enim elit, eu porttitor enim dictum 
            in. Quisque maximus laoreet metus in imperdiet. Nam vitae urna at quam 
            aliquet consectetur ac quis ex. Donec ac ipsum sit amet neque tristique 
            pharetra. Maecenas imperdiet, eros vel gravida venenatis, eros nisi 
            mollis lorem, et molestie diam tellus et dui. Sed semper dapibus 
            tincidunt. Phasellus tincidunt, justo non fringilla porta, lectus 
            tortor rutrum mauris, quis dignissim felis ipsum nec est. Sed.`
        });
        return teamInfo;
}

function getNextGame(games: Game[]) {
    // find the first game in the games array that is on or after today's date
    const today = new Date();
    const nextGame = games.find(game => {
        const gameDate = new Date(game.startDateTimeUtc);
        return gameDate >= today;
    });
    return nextGame;
}

function processGames(games: Game[]) {
    return (
        <div className="flex justify-center">
            {games.map(game => {
                return (
                    <div key={game.id} className="border-2 m-2 p-6">
                        <div>{formatDate(game.startDateTimeUtc)}</div>
                        <div>{formatTitle(game.title)}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default async function TeamPage({ params }: { params: { slug: string }}) {
    // const teamList = await getTeamList();
    const teamName = params.slug.split("_").join(" ")
    const games = getGames(teamName);
    // const gamesInfo = processGames(games);
    // const nextGame = getNextGame(games);
    const teamInfo = getTeamInfo(teamName);
    const teamList = await getTeamList();
    // const [currentView, setCurrentView] = useState<string>("games");

    // function renderCurrentView() {
    //     switch(currentView) {
    //         case "arena":
    //             return (
    //                 <InfoCard title={"Arena"}>
    //                     {teamInfo.arenaInfo}
    //                 </InfoCard>
    //             );
    //         case "foodAndDrink":
    //             return (
    //                 <InfoCard title={"Food and Drink"}>
    //                     {teamInfo.foodAndDrinkInfo}
    //                 </InfoCard>
    //             );
    //         case "lodging":
    //             return (
    //                 <InfoCard title={"Lodging"}>
    //                     {teamInfo.lengthodgingInfo}
    //                 </InfoCard>
    //             );
    //         case "transportation":
    //             return (
    //                 <InfoCard title={"Transportation"}>
    //                     {teamInfo.transportationInfo}
    //                 </InfoCard>
    //             );
    //         default:
    //             return (
    //                 <InfoCard title={"Games"}>
    //                     {gamesInfo}
    //                 </InfoCard>
    //             );
    //     }
    // }

    return (
        <TeamComponent 
            params={{
                slug: params.slug,
                games: games,
                teamInfo: teamInfo,
                teamList: teamList
            }}
        />
        // <div className="flex flex-row">
        //     <Sidebar setCurrentView={setCurrentView} nextGame={nextGame} />
        //     <div className="container mx-auto">
        //         <TeamList teamList={teamList}/>
        //         {/* <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-center">{teamName}</h1> */}
        //         <div className="flex flex-wrap">
        //             {renderCurrentView()}
        //         </div>
        //     </div>
        // </div>
    )
}
