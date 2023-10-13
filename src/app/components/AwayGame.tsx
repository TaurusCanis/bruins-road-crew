"use client"

import { useRouter } from "next/navigation"
import "./Day.css"

export default function AwayGame({ title }: { title: string }) {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/teams/${title}`)} className="game-info away">{title}</div>
    )
}