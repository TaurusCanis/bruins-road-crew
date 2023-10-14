import Link from "next/link"
import "./Day.css"

export default function AwayGame({ title }: { title: string }) {

    return (
        <Link href={`/teams/${title.trim().split(" ").join("_")}`}>
            <div className="game-info away">{title}</div>
        </Link>
    )
}