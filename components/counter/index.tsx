import { useEffect, useState } from "react"
import { Button, View } from "react-native"
import { useTranslation } from "react-i18next"
import { ThemedText } from "../themed-text"

const Counter = () => {
    const [counter,setCounter] = useState(0)
    const { t } = useTranslation()

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
            <ThemedText>{t('counter.greeting')}</ThemedText>
            <ThemedText>{counter}</ThemedText>
            <Button title={t('counter.increment')} onPress={() => setCounter(counter + 1)}></Button>
        </View>
    )
}

export default Counter