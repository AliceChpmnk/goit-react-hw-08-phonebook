import React from 'react';
import { useDispatch } from "react-redux";
import {setFilter} from 'redux/filterSlice'
import { StyledInput } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  return (
      <div>
      <h3>Find contacts by name</h3>
      <StyledInput type="text" onChange={ event => dispatch(setFilter(event.target.value))} />
    </div>
  )
}

export default Filter;
