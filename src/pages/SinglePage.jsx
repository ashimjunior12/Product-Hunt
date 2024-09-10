import React, { useEffect, useState } from 'react';
import { useGenerateContext } from '../context/generateContext';
import { data } from '../utils/data';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';

const SinglePage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { text } = useGenerateContext();

  useEffect(() => {
    if (!text.trim()) {
      setShowAlert(true);
    } else {
      setShowAlert(false); // Hide alert when text is provided
    }
  }, [text]);

  const filteredItems = text.trim()
    ? data.filter((item) =>
        item.product_name.toLowerCase().includes(text.toLowerCase())
      )
    : [];

  return (
    <Wrapper>
      <article className='section-center'>
        {filteredItems.length > 0 ? (
          <section className='card-container'>
            {filteredItems.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </section>
        ) : (
          text.trim() && <p>No results found</p>
        )}

        {!text.trim() && showAlert && <h4>Please enter some value</h4>}

        <Link to='/' className='btn back-btn'>
          Back to Home
        </Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    width: 80%;
    gap: 1rem;
    margin: 2rem auto;
    // background: var(--grey-100);
  }

  .btn {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    display: inline-block;
  }

  h4 {
    margin: 0;
    padding: 0.5rem;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem 10rem;
    width: 100%;
  }
`;

export default SinglePage;
