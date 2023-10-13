

export default function TeamPage({ params }: { params: { slug: string }}) {
    return (
        <>
            <h1>Team Page</h1>
            {params.slug}
        </>
    )
}