// 'use client'
// import { useState } from 'react';

// interface SearchProps {
//   handleSearch: (searchTerm: string) => void;
// }

// function SearchBar({ handleSearch }: SearchProps) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log('form submitted')
//     handleSearch(searchTerm);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.target.value)}
//         placeholder="Search..."
//         className="w-full p-2 pl-10 text-sm text-gray-700"
//       />
//       <button
//         type="submit"
//         className="bg-primary text-white p-2 rounded-lg"
//       >
//         Pesquisar
//       </button>
//     </form>
//   );
// }

// export default SearchBar;