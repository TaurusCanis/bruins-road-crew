import Link from "next/link"
import "./Day.css"

export default function AwayGame({ title }: { title: string }) {

    return (
        <Link href={`/teams/${title}`}>
            <div className="game-info away">{title}</div>
        </Link>
    )
}