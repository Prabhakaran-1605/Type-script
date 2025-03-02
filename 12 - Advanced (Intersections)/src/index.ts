// intersection is a another technique of combining types called intersection  (&)

type Draggable = {
    drag : () => void
}

type Resizeable = {
   resize : () => void 
}

type UIWidget = Draggable & Resizeable;

let textBox : UIWidget = {
    drag : () => {

    },
    resize : () => {

    }
}

//  To initialize textbox we need to all properties/methods in Draggable and Resizeable type.
