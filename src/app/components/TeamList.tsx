"use client"

import { useRouter } from "next/navigation"
import { ChangeEvent } from 'react';

export default function TeamList({ teamList, teamName }: { teamList: any, teamName?: string }) {
    const router = useRouter();
    
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        router.push(`/teams/${event.target.value.trim().split(" ").join("_")}`)
    }   

    return (
        <div className='' id="team-list">
            <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                <select className="select w-full max-w-xs" onChange={handleChange}>
                    <option value={'default'}>
                    Choose a Team
                    </option>
                    {teamList.map((team: Record<string, string>) => 
                        <option key={team.team} value={team.team} selected={team.team === teamName}>
                            {team.team}
                        </option>
                    )}
                </select>
            </div>
        </div>
    )
}