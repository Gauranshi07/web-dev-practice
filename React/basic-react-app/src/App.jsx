import './App.css'
import AmazonCardTab from './AmazonCardTab.jsx'
// import Activity from "./Activity"
// import ProductTab from "./ProductTab"
function App() {
    return(
        // <>
        // <Activity userName="Gauranshi" textColor="blue"/>
        // <Activity userName="John" textColor="pink"/>
        // <Activity userName="Lily" textColor="black"/>
        //<ProductTab/>
        // </>

        <div>
        <h1 style={{fontSize: '25px', lineHeight: '1.5'}}>Blockbuster Deals on Amazon Accessories | Shop Now</h1>
        <div className="App">
        <AmazonCardTab/></div>
        </div>
    )
}

export default App
