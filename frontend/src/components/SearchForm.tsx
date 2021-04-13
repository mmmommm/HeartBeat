import React, { useContext, useRef } from "react";
import styles from "../styles/components/SearchForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router"
import { SearchConditionContext } from "../pages/_app";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export const SearchForm = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(SearchConditionContext)
  const updateValue = (ev) => {
    dispatch({ type: 'SET', payload: ev.target.value })
  }
  const resetValue = () => {
    dispatch({ type: 'CLEAR' })
  }
  const inputEl = useRef(null)
  const onFocusForm = () => {
    inputEl.current.focus();
    router.push("Search");
  }
  return (
    <div className={styles.search_container}>
      <form className={styles.search_form}>
        <label htmlFor="searchForm">
          <FontAwesomeIcon icon={faSearch} />
          {inputEl.current?.value ? (
            <span onClick={resetValue}><FontAwesomeIcon icon={faTimesCircle} /></span>
          ) : (null)}
          <input type="text" placeholder="Search" ref={inputEl} value={state?.value} onChange={updateValue} onFocus={() => onFocusForm()} />
        </label>
      </form>
    </div>
  )
}
