import React, { useContext } from "react";
import styles from "../styles/components/SearchForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router"
import { SearchConditionContext } from "../components/Layout";

export const SearchForm = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(SearchConditionContext)
  const updateValue = (ev) => {
    dispatch({ type: 'SET', payload: ev.target.value })
  }
  const resetValue = () => {
    dispatch({ type: 'CLEAR' })
  }
  return (
    <div className={styles.search_container}>
      <form className={styles.search_form} onFocus={() => router.push("/Search")}>
        <label htmlFor="1"><FontAwesomeIcon icon={faSearch} /></label>
        <input type="text" placeholder="Search" id="1" value={state.value} onChange={updateValue} />
      </form>
    </div>
  )
}
