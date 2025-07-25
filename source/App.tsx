// import Counter from "./components/Counter"
import { useEffect } from "react"
import ThemeDemo from "./components/ThemeDemo"
import { initializeTheme } from "./utils/themeUtils"
import { useAppSelector } from "./store/hooks";
import { selectTheme } from "./feature/Theme/themeSlice";
import AuthTest from "./components/AuthTest";
import Users from "./components/Users";

const App = () => {
  const theme = useAppSelector(selectTheme)
  useEffect(() => {
    initializeTheme();
  }, []);
  return(
    // <Counter />
    <>
      <ThemeDemo />
      <AuthTest/>
      <Users/>
    </>
  );
};

export default App;