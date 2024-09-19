'use client'
import SearchBar from '../components/search';
import CarsList from '../components/carsList';
import { useState } from 'react';

function CarsCatalogo2() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm: string) => {
    console.log('Search term updated:', searchTerm);
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <CarsList searchTerm={searchTerm} />
    </div>
  );
}

export default CarsCatalogo2;