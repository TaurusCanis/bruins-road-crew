

export default function InfoCard({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <div className="m-2">
            <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
            { children }
        </div>
    )
}