"use client" 

import Calendar from './components/Calendar'
import TeamList from './components/TeamList'

interface HomeProps {
    teamList: any;
    schedule: any;
}

export default function HomeComponent({ teamList, schedule }: HomeProps) {
    return (
        <>
            <TeamList teamList={teamList} />
            <Calendar month={8} year={2023} games={schedule} />
        </>
    )
}
    