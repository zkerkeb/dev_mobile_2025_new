import { useEffect, useState } from "react"
import { Button, View } from "react-native"
import { ThemedText } from "../themed-text"

const Counter = () => {
    const [counter,setCounter] = useState(0)

    //change une state ici
    // const increment = () => {}
    useEffect(() => {
     setCounter(counter+1)   

     return(() =>{
        // do something when the component dies
     })
    },[])

    // () => {}
    // () => ()
    // () => function()

    return(
        <View>
            <ThemedText>Coucou</ThemedText>
            <ThemedText>{counter}</ThemedText>
            <Button title="Increment" onPress={() => setCounter(counter + 1)}></Button>
        </View>
    )
}

export default Counter