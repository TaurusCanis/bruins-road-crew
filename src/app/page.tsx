
import HomeComponent from "./HomeComponent"
import styles from './page.module.css'
import { getTeamList, getSchedule } from "@/utils";

export default async function Home() {
  const teamList = await getTeamList();
  const schedule = await getSchedule();

  return (
    <main className={styles.main}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md prose">
            <h1>Boston Bruins Road Crew</h1>
            <HomeComponent teamList={teamList} schedule={schedule} />
          </div>
        </div>
      </div>
    </main>
  )
}
