//  Objects 


let employee : {
    readonly id : number,
    name: string,
    retire : (date : Date) => void
} = {
    id: 1,
    name: "prabhakar",
    retire: (date : Date) => { 
        console.log(Date)
    }
}

//  if we use readonly property then it can't be reassign 