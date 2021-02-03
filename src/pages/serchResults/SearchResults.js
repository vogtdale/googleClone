import React from "react";
import { useSelector } from "react-redux";
import useGoogleSearch from "../../config/useGoogleSearch";
import { searchTerms } from "../../feature/searchSlice";
import "./SearchResults.css";
import Response from "../../response";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  SearchOutlined,
} from "@material-ui/icons";

const SearchResults = () => {
  const term = useSelector(searchTerms);
  const {data} = useGoogleSearch(term)  // live call

  //const data = Response;  mock api call

  console.log(data);
  return (
    <div className="search-results">
      <div className="search-resultsHeader">
        <Link to="/">
          <img
            className="searchPage-logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="searchPage-searchInput">
          <Search hideButtons />

          <div className="searchPage-options">
            <div className="searchPage-optionsLeft">
              <div className="searchPage-option">
                <SearchOutlined />
                <Link to="/All">All</Link>
              </div>

              <div className="searchPage-option">
                <Description />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage-option">
                <Image />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage-option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage-option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage-option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage-optionsRight">
              <div className="searchPage-option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
      <div className="searchPage-resultsBody">
        <p className="searchPage-resultCount">
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} secondes) for {term}
        </p>

        {data?.items.map((item) => (
          <div className="searchPage-results">
            <a className="searchPage-resultLink" href={item.link}>
            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
              <img className="searchImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>
            )}
            {item.displayLink} :&#9660;
            </a>

            <a className="searchPage-resultTitle" href={item.link}>
              <h2>{item.title}</h2>
            </a>

            <p className="searchPage-resultSnippet">
              {item.snippet}
            </p>
            
          </div>
        ))}
      </div>

      )}
    </div>
  );
};

export default SearchResults;
