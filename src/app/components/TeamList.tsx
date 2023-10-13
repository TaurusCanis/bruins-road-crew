"use client"

import { useRouter } from "next/navigation"

export default function TeamList({ teamList }: { teamList: any }) {
    const router = useRouter();
    
    const handleChange = (event: Event) => {
        router.push(`/teams/${event.target.value}`)
    }   

    return (
        <div className='' id="team-list">
            <h2>Choose a team</h2>
            <select onChange={handleChange}>
            {
                teamList.map((team) => 
                    <option value={team.team}>{team.team}</option>
                  )   
            }
            </select>
            
        </div>
    )
}