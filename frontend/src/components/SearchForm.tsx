import React, { useState } from "react";
import styles from "../styles/components/SearchForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router"

export const SearchForm = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const updateValue = (ev) => {
    setValue(ev.target.value)
  }
  return (
    <div className={styles.search_container}>
      <form className={styles.search_form} onFocus={() => router.push("/Search")}>
        <label htmlFor="1"><FontAwesomeIcon icon={faSearch} /></label>
        <input type="text" placeholder="Search" id="1" value={value} onChange={updateValue} />
      </form>
    </div>
  )
}
