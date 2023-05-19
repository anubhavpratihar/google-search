import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import { SearchResults } from './SearchResults';

export const Results = () => {
  const { results, searchTerm, setSearchTerm } = useStateContext();

  useEffect(() => {
    // Simulating API call to fetch search results
    const fetchSearchResults = async () => {
      try {
        // Here you can perform an actual API request to fetch search results based on the searchTerm
        // For demonstration purposes, let's assume we have a mock API response stored in a variable
        const mockApiResponse = [
          { title: 'Result 1', url: 'https://example.com/result1' },
          { title: 'Result 2', url: 'https://example.com/result2' },
          { title: 'Result 3', url: 'https://example.com/result3' },
        ];

        // Simulating a delay to mimic API response time
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSearchTerm(searchTerm); // Update searchTerm in the state context
        setSearchResults(mockApiResponse); // Update search results in the state context
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [searchTerm, setSearchResults, setSearchTerm]);

  return (
    <div>
      {results.length > 0 ? (
        <SearchResults results={results} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Results;
