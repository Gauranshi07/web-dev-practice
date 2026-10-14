import Activity from "./Activity.jsx";
function ActivityTab({userName}){
    return(
        <div>
            <Activity userName={userName} textColor={textColor}/>
        </div>
    )
}
export default ActivityTab;