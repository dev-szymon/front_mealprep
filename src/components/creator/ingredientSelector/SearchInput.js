import React from "react"
import InputField from "../InputField"
import "./SearchInput.css"

const SearchInput = ({
  placeholder,
  onChange,
  onClickSearch,
  onClickClear,
  value,
  onKeyPress,
  loading,
}) => {
  return (
    <div className="searchinput-container">
      <InputField
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
        autoFocus
      />
      <div>
        <button type="submit" onClick={onClickSearch}>
          {loading ? "O" : "search"}
        </button>
        {value.length > 0 && <button onClick={onClickClear}>X</button>}
      </div>
    </div>
  )
}

export default SearchInput
