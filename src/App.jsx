import Header from "./components/Header";
import Main from "./components/Main";
import {
  TokenContextProvider,
  AuthContextProvider,
  PostsContextProvider
} from "./context";

export default function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header></Header>
          <Main></Main>
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}
