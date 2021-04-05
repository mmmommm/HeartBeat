import React, { createContext, useContext, useMemo, useReducer } from "react";
import { Sidebar } from "./Sidebar";
import styles from "../styles/components/Layout.module.scss";

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
  {
    name: "Language",
    as: "/Language",
    href: "/Language",
  },
];

type State = {
  value: string;
}
type Action =
  | { type: 'SET', payload: string }
  | { type: 'CLEAR' }
const initialState = {
  value: ""
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
    default:
      return state
  }
}

export const SearchConditionContext = createContext({} as {
  state: State
  dispatch: React.Dispatch<Action>
})

export const Layout: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <SearchConditionContext.Provider value={{ state, dispatch }}>
      <div className={styles.layout}>
        <aside className={styles.layout_sidebar}>
          <Sidebar navItems={navItems} />
        </aside>
        <main className={styles.layout_content}>{children}</main>
      </div>
    </SearchConditionContext.Provider>
  );
};
