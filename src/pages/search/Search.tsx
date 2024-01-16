import SearchResults from "../../components/poster/searchResults/SearchResults";

function Search() {
  return (
    <div>
      <h1 className="ml-[80px] mt-[45px] mb-[34px] font-Roboto text-[20px] w-[500] ">
        Showing search results for:
      </h1>
      <div>
        <SearchResults />
      </div>
      <div>
        <SearchResults />
      </div>
      <div>
        <SearchResults />
      </div>
    </div>
  );
}

export default Search;
