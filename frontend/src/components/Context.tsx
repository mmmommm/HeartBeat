import React, { createContext, useMemo, useReducer } from "react";

type State = {
  value: string;
}
type Action =
  | { type: 'set' }
  | { type: 'clear' }

const initialState = {
  value: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return { value: action }
    case 'clear':
      return initialState
    default:
      return state
  }
}

export const SearchConditionContext = createContext<State | Action>(initialState)

SearchConditionContext.displayName = 'SearchCondition'

// Context Object の Provider（提供側）コンポーネントを返す
const SearchConditionProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setSearchValue = () => dispatch({ type: 'SET_SEARCH_VALUE' })
  const clearSearchValue = () => dispatch({ type: 'CLEAR_SEARCH_VALUE' })
  const value = useMemo(
    () => ({
      state,
      setSearchValue,
      clearSearchValue,
    }),
    [state]
  )
  return <SearchConditionContext.Provider value={value} {...props} />
}
// Context Object を子、孫コンポーネントから呼び出すための Custom Hook
export const useSearchCondition = () => {
  const context = React.useContext(SearchConditionContext)

  if (typeof context === 'undefined') {
    throw new Error('useSearchCondition must be within a SearchConditionProvider')
  }

  return context
}

// 検索条件の state と更新のための action を提供するためのコンポーネント
export const ManagedSearchConditionContext: React.FC = (props) => (
  <SearchConditionProvider>{props.children}</SearchConditionProvider>
)