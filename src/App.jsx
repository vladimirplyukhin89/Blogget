import { Provider } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import { AuthContextProvider, PostsContextProvider } from "./context";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header></Header>
          <Main></Main>
        </PostsContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}
