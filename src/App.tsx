import './App.scss';
import MovieSearch from './components/MovieSearch/MovieSearch';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Container from './components/Container/Container';

function App() {

  return (
    <div className="App">
      <Container>
        <h1>hello</h1>
        <MovieSearch />
        <MovieGrid />
      </Container>
    </div>
  );
}

export default App;
