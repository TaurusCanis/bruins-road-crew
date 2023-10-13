import Image from 'next/image'
import styles from './page.module.css'
import teams from "../dummyData/teams.json"
import schedule from "../dummyData/schedule.json"
import Calendar from './components/Calendar'
import TeamList from './components/TeamList'

async function getTeamList() {
  return teams;
}

async function getSchedule() {
  return schedule;
}

export default async function Home() {
  const teamList = await getTeamList();
  const schedule = await getSchedule();

  return (
    <main className={styles.main}>
      <TeamList teamList={teamList} />
      <Calendar month={8} year={2023} games={schedule} />
    </main>
  )
}
