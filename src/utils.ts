import teams from "./dummyData/teams.json"
import schedule from "./dummyData/schedule.json"

export function formatTitle(title: string) {
    const splitTitle = title.split("@");
    return splitTitle[0].includes("Boston Bruins") ? 
        splitTitle[1] : 
        splitTitle[0].slice(2).trim(); // This removes the hockey stick emoji from the beginning of the title
  }

export function formatDate(date: string) {
    const splitDate = date.split("T");
    return splitDate[0];
}

export async function getTeamList() {
    return teams;
  }
  
 export async function getSchedule() {
    return schedule;
  }