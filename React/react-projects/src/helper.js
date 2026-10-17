function getTicket(){
        let max=999;
        let min=100;
        return Math.floor(Math.random()*(max-min+1))+min 
}



export {getTicket}