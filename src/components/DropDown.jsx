import styled from 'styled-components';
import { useGenerateContext } from '../context/generateContext';
import { Link } from 'react-router-dom';

const DropDown = () => {
  const { getSelectedItem, handleSubmit } = useGenerateContext();

  return (
    <Wrapper>
      <select
        name='select-item'
        className='select-item'
        onChange={(e) => getSelectedItem(e)}
        defaultValue='select-an-item'
      >
        <option value='select-an-item' disabled>
          Select an option
        </option>
        <option value='raw product'>Raw product</option>
        <option value='core product'>Core product</option>
        <option value='partially used'>Partially used</option>
        <option value='value chain ingredient'>Value chain ingredient</option>
      </select>
     
      <Link to='single-page'  className='btn'>Submit</Link>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 5px;

  .select-item {
    font-size: 1rem;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
    margin: 2rem;
  }

  .submit-btn {
    width: 100%;
  }

  .select-item option:hover {
    background-color: var(--grey-200);
  }
    .btn{
      text-align: center;
    }
`;

export default DropDown;
