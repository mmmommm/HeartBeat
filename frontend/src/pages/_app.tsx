import React, { useEffect, createContext, useReducer } from "react";
import { Sidebar } from "../components/Sidebar";
import styles from "../styles/components/Layout.module.scss";
import "../styles/global.scss";
import { AppProps } from "next/app";
import { analytics } from "../utils/firebase";
import { useRouter } from "next/router";

const navItems = [
  {
    name: "Top",
    as: "/",
    href: "/",
  },
  {
    name: "Search",
    as: "/Search",
    href: "/Search",
  },
  {
    name: "Request",
    as: "/Request",
    href: "/Request",
  },
  // {
  //   name: "Language",
  //   as: "/Language",
  //   href: "/Language",
  // },
];

type State = {
  value: string;
  isEnter: boolean;
}
type Action =
  | { type: 'SET', payload: string }
  | { type: 'CLEAR' }
  | { type: 'FIRE', payload: boolean }
const initialState = {
  value: "",
  isEnter: false,
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        value: action.payload
      }
    case 'CLEAR':
      return initialState
    case 'FIRE':
      return {
        ...state,
        isEnter: action.payload
      }
    default:
      return state
  }
}

export const SearchConditionContext = createContext({} as {
  state: State
  dispatch: React.Dispatch<Action>
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const logEvent = (url) => {
      analytics().setCurrentScreen(url);
      analytics().logEvent('screen_view');
    };
    router.events.on('routeChangeComplete', logEvent);
    logEvent(window.location.pathname);
    return () => {
      router.events.off('routeChangeComplete', logEvent);
    };
  }, [])
  return (
    <>
      <SearchConditionContext.Provider value={{ state, dispatch }}>
        <div className={styles.layout}>
          <aside className={styles.layout_sidebar}>
            <Sidebar navItems={navItems} />
          </aside>
          <div className={styles.layout_content}>
            <Component {...pageProps} />
          </div>
        </div>
      </SearchConditionContext.Provider>
    </>
  );
};

export default MyApp;
