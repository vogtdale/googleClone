import { Mic, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../feature/searchSlice";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");

  const history = useHistory();
  const dispatch = useDispatch()

  const search = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm({
      term: input
    }))

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchOutlined className="search-searcIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Mic />
      </div>

      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            className="search-buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search-buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
