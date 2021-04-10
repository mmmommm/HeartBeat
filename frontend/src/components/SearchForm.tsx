import React, { useContext, useRef } from "react";
import styles from "../styles/components/SearchForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router"
import { SearchConditionContext } from "../pages/_app";

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
        <label htmlFor="searchForm"><FontAwesomeIcon icon={faSearch} /></label>
        <input type="text" placeholder="Search" ref={inputEl} onChange={updateValue} onFocus={() => onFocusForm()} />
      </form>
    </div>
  )
}
