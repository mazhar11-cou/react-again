import { MouseEvent, useState } from "react"

interface Props {
    iteams: string[]
    heading: string
    onSelectItem: (item:string) => void; 
}

function ListGroup({iteams, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <>
            <h1>{heading}</h1>
            {iteams.length === 0 && <p>No iteam found</p>}
            <ul className="list-group">
                {iteams.map((iteam, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={iteam}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(iteam)
                        }}
                    >
                        {iteam}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ListGroup
