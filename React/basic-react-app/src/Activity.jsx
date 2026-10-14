function Activity({userName,textColor}){
    return(
        <div className="Activity">
            <h2 style={{color: textColor}}>Hello {userName}</h2>
        </div>
    )
}
export default Activity;