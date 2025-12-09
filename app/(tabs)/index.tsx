import Counter from "@/components/counter"
import I18nDemo from "@/components/I18nDemo"
import { useRouter } from "expo-router"
import { useTranslation } from "react-i18next"
import { Button, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Counter/>
        <Button title={t('home.article')} onPress={() =>{
          router.push('/articles/coco')
        }}></Button>
        <I18nDemo />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
