import { useEffect, useState } from "react";

export function useCountries() {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/country")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setCountries(data);
      });
  }, []);

  return { isLoading, countries };
}
