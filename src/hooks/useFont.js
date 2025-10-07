
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

function useFont() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  return fontsLoaded;
}

export default useFont;