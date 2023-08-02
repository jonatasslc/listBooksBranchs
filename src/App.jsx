// hooks react
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListBooks from './components/ListBooks';
import { getBooks } from './../api/BooksService';

const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ccc;
  padding: 10px;
`;

function App() {
  const[books, setBooks] = useState([]);

  useEffect( () => {
    setBooks(getBooks)
  },[])  


  return (
    <Container>
        <h1>Minhas Lista de Livros</h1>
        <ListContainer>
          {
            books.map(book => {
              return ( <ListBooks 
                key={book.url} 
                img={book.image}
                title={book.title}  
                url={book.url}
                price={book.price}
                  /> )
            })
          }
          
        </ListContainer>
    </Container>

  )
}

export default App


