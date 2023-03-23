interface MenuProps {
    ime: string;
}
export default function Menu({ime} : MenuProps) {
    return (
        <>
            <h1>{ime}</h1>
        </>
    )
}