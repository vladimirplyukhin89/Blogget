import Header from "./components/Header";
import Main from "./components/Main";
import { TokenContextProvider, AuthContextProvider } from "./context";

export default function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <Header></Header>
        <Main></Main>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}
