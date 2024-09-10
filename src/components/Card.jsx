import styled from "styled-components";
import coconut from '../assets/coconut.jpg'
import { useState } from "react";

const Card = ({product_name, brief,description}) => {
 
 const [readMore, setReadMore] = useState(false)

  return (
    <Wrapper>
      <article className='single-product'>
        <img src={coconut} alt={product_name} /> <hr />
        <h3>{product_name}</h3>
        <p className="para">{brief}</p> 
        {readMore && <p>{description}</p>}

        <button className="btn" onClick={()=>setReadMore(!readMore)}>{readMore ?'read less':'read more'}</button>
      </article>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .single-product {
    background: var(--clr-white);
    border-radius: var(--radius);
    margin: 2rem 0;
    box-shadow: var(--light-shadow);
    position: relative;
  }
  .single-product:hover {
    box-shadow: var(--dark-shadow);
  }
  .single-product img {
    display: block;
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }
  p {
    margin-top: 1rem;
    letter-spacing: 0.1rem;
    
  }
  h3 {
    font-weight: bold;
    margin-top: 0.5rem;
  }
  .para {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
 
`;
export default Card;