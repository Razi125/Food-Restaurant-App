
import React from 'react';
import SearchBar from '../components/SearchBar/index.tsx'

{/**
1. For design i have use Tailwindcss
2. Its my main Layout Container page
3. Its responsive on on all Screens 
4. we Filter data according Categires base
5. Searching according restaurant Name  
6. pagination working
7. Modal is open showing card details. 
*/}

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto">
     <SearchBar/> 
    </div>
  );
}

export default HomePage;