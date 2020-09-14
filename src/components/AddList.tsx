import React from 'react';
//import './AddList.css';
import Button from '../style/Button';
//import InputStyle from './InputStyle';
import { Input, DatePicker } from 'antd';
import moment from 'moment';
import InputStyle from '../style/InputStyle';
import styled from 'styled-components';

const { RangePicker } = DatePicker;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CustomInput = styled(Input)`
  height: 40px;
  border: 1px solid #e7e7e7;
  :hover {
    border: 1px solid #2c2c2c;
    box-shadow: none;
  }
  :focus {
    border: 1px solid #2c2c2c;
    box-shadow: none;
  }
`;

function AddList({ text, start, end, onChange, onChangeDate, onCreate }) {
  return (
    <InputDiv>
      <div>
        <CustomInput
          size="middle"
          className="input"
          name="text"
          onChange={e => onChange(e.target.value)}
          value={text}
        />
      </div>
      <div>
        <RangePicker
          onChange={dates => onChangeDate(dates[0], dates[1])}
          value={[start, end]}
        />
      </div>
      <Button onClick={onCreate}>ADD</Button>
    </InputDiv>
  );
}
export default AddList;
