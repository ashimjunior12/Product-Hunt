import styled from "styled-components"
import { Link } from "react-router-dom"


const Error = () => {
  return (
    <Wrapper>
     <section>
      <h1>404!</h1>
      <h3>the page you tried cannot be found</h3>
      <Link to='/' className="btn">back to home</Link>
     </section>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  h1 {
    color: red;
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    
    margin-bottom: 2rem;
  }
    @media(max-width: 992px){
    h1{
    font-size: 5rem
    }
    h3{
    font-size: 1rem
    }
    }
`;
export default Error