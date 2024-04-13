import { debounce } from 'lodash';
import { fetchMovies } from '../../api/api';
import './MovieSearch.scss';
import { $searchTerm } from '../../store/store';

const MovieSearch = () => {

  const search = (searchTerm: string) => {
    $searchTerm.set(searchTerm);
    fetchMovies(searchTerm);
  }

  const debouncedSearch = debounce(search, 300);

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    debouncedSearch(e.currentTarget.value)
  }

  return (
    <div className="search">
      <input
        placeholder='Search'
        onChange={onChangeSearch}
        className='search__input'
      />
    </div>
  )
}

export default MovieSearch;