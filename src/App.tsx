import Message from "./Message"
import ListGroup from "./components/ListGroup"

function App() {
    let iteams = ["New York", "San Fransisco", "Tokiyo", "London", "Paris"]

    const handleSelectItem = (iteam:string)=>{
        console.log(iteam)
    }
    return (
        <div>
            <ListGroup iteams={iteams} heading = {'Cities'} onSelectItem={handleSelectItem}/>
        </div>
    )
}

export default App
