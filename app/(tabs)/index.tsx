import Counter from "@/components/counter"
import { useRouter } from "expo-router"
import { Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
const HomeScreen = () => {
  const router = useRouter()
  return(
    <SafeAreaView>
      <Counter/>
      <Button title="article" onPress={() =>{
        router.push('/articles/coco')
      }}></Button>
    </SafeAreaView>
  )
}

export default HomeScreen