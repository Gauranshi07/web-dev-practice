import './AmazonCards.css'
import Price from './Price.jsx'

function AmazonCards({title,desc,desc2,image,idx}){
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,199","899","278"];
    return(
        <>
        <div className="AmazonCards">
            <h2>{title}</h2>
            <p><ul><li>{desc}</li><li>{desc2}</li></ul></p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
        </>
    )
}
export default AmazonCards;