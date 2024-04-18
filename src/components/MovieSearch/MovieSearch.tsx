import debounce from 'lodash/debounce';
import { SEARCH_TERM_QS, fetchMovies } from '../../api/api';
import './MovieSearch.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get(SEARCH_TERM_QS);

  useEffect(() => {
    // If we have an initial search term we perform that search.
    if (searchTerm) {
      fetchMovies(searchTerm);
    }
  })

  const search = (searchTerm: string) => {
    setSearchParams({ searchTerm });
    fetchMovies(searchTerm);
  }

  const debouncedSearch = debounce(search, 500);

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    debouncedSearch(e.currentTarget.value)
  }

  return (
    <div className="search">
      <label htmlFor='search'>Search</label>
      <input
        id="search"
        name="search"
        defaultValue={searchTerm || ''}
        placeholder='Search for movie title'
        onChange={onChangeSearch}
        className='search__input'
      />
    </div>
  )
}

export default MovieSearch;