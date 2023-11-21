import { useCountries } from "./hooks/useCountries";

function App() {
  const { isLoading, countries } = useCountries();

  return isLoading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <pre>{JSON.stringify(countries, null, 2)}</pre>
    </>
  );
}

export default App;
