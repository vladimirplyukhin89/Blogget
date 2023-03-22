import Header from "./components/Header";
import Main from "./components/Main";
import { useToken } from "./hooks/useToken";

export default function App() {
  const [token] = useToken("");

  return (
    <>
      <Header token={token}></Header>
      <Main></Main>
    </>
  );
}
