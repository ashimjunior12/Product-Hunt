import styled from "styled-components";
import AnimatedHeadings from "./AnimatedHeadings";
import { useGenerateContext } from "../context/generateContext";
import DropDown from "./DropDown";
import { useEffect, useState } from "react";
styled;
import { RxCross2 } from 'react-icons/rx';



const FormComponent = () => {
  const {handleInput,handleButtonClick, isButtonClicked, text} = useGenerateContext();

  
  
  return (
    <div>
      <Wrapper>
        <div className='section-center'>
          <form
            className='search-form form'
            onSubmit={(e) => e.preventDefault()}
          >
            <header>
              <AnimatedHeadings />
            </header>

            {/* check the input */}

    

            <div className='form-row'>
              <input
                type='text'
                className='form-input'
                placeholder='Enter Ingredient, eg: coconut'
                onChange={handleInput}
                value={text}
              />
              <button className='btn-hipster btn' onClick={handleButtonClick}>
                generate
              </button>
            </div>

            {isButtonClicked && <DropDown />}
          </form>
        </div>
       
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`

  padding: 5rem 0;
  display: grid;
  gap: 4 rem;
  height: 80vh;
  place-items: center;

  .search-form {
    width: 90vw;
    max-width: 900px;
    display: grid;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .form-input {
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
    .alert-row{
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: .5rem
    }
      .close-btn{
        cursor:pointer
      }

  @media (max-width: 780px) {
    h2 {
      font-size: 1.1rem;
      text-transform: bold;
      text-align: center;
    }
    .form-row {
      margin: 1rem;
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 1rem;
    }
  }
`;
export default FormComponent
