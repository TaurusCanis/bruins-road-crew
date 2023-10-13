"use client"

import { useRouter } from "next/navigation"
import { ChangeEvent } from 'react';

export default function TeamList({ teamList }: { teamList: any }) {
    const router = useRouter();
    
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        router.push(`/teams/${event.target.value}`)
    }   

    return (
        <div className='' id="team-list">
            <h2>Choose a team</h2>
            <select onChange={handleChange}>
            {
                teamList.map((team: Record<string, string>) => 
                    <option key={team.team} value={team.team}>{team.team}</option>
                  )   
            }
            </select>
            
        </div>
    )
}