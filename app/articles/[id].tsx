import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { useLocalSearchParams } from "expo-router"
import { useTranslation } from "react-i18next"


const Article = () => {
    const params = useLocalSearchParams()
    const { t } = useTranslation()
    console.log("🚀 ~ Article ~ params:", params)

    return(
        <ThemedView>
            <ThemedText>{t('article.test')}</ThemedText>
        </ThemedView>
    )
    

}