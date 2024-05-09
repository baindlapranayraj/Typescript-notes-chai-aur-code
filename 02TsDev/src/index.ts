type seatAllotment = {
    windowSeat :boolean,
    seatNum :number,
    passangerName :string
}

function passengerInfo(passanger:seatAllotment):seatAllotment{
    return {windowSeat:true,seatNum:909,passangerName:"Rakesh"} 
}
passengerInfo({windowSeat:true,seatNum:909,passangerName:"Rakesh"})