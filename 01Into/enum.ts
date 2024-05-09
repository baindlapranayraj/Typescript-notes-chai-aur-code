const enum USerResponse  {
    No = 0,
    Yes = 1,
}

function crow(recipt:string,message:USerResponse):void{
    console.log(`${recipt} and ${message}`)
}

crow("Crows rule the world",USerResponse.Yes)


