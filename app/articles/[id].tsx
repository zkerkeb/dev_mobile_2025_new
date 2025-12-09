import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { useLocalSearchParams } from "expo-router"


const Article = () => {
    const params = useLocalSearchParams()
    console.log("🚀 ~ Article ~ params:", params)

    return(
        <ThemedView>
            <ThemedText>Test</ThemedText>
        </ThemedView>
    )
    

}