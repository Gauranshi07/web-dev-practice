function getTicket(){
        let max=999;
        let min=100;
        return Math.floor(Math.random()*(max-min+1))+min
}

function checkWin(ticket){
        let digit=0;
        let sum=0;
        while(ticket>0){
                digit=ticket%10;
                sum+=digit
                digit=0
                ticket=Math.floor(ticket/10)
        }
        return sum
}

export {getTicket,checkWin}