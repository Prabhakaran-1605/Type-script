// type alias  - using type alias we can design a custom type

// if we need to introduce new object again we need to repeat the structure / shape

//  we need to follow DRY - dont repeat yourself

//  we can define the shape of the object and can reuse in multiple places.

type Employee =  {
    id: number,
    name: string,
    retire: (date : Date) => void
}


let employee : Employee = {
    id: 1,
    name: "prabhakar",
    retire : (date : Date)=>{
        console.log(date)
    }
}

employee.retire(new Date())
