import styled from "styled-components";
import FilterWidget from "../FilterWidget/FilterWidget";
import { Checkbox, Input, Radio } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const FiltersContainer = styled.div`
  min-width: 300px;
  width: auto;
  max-width: 100%;

  div > label {
    color: #525252;
  }
`;

const VerticalGroup = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
  .ant-input {
    padding: 10px;
    border: 2px solid #e0e0e0;
    border-radius: 2px;
    margin-bottom: 15px;
  }
  .ant-radio-wrapper {
    margin-bottom: 10px;
  }
  .ant-radio {
    margin-right: 7px;
  }
  .ant-checkbox-wrapper {
    margin-bottom: 10px;
  }
  .ant-checkbox {
    margin-right: 7px;
  }
`;

function Filters() {
  return (
    <FiltersContainer>
      <FilterWidget title="Sorting">
        <VerticalGroup>
          <Radio onChange={onChange}>Price low to high</Radio>
          <Radio onChange={onChange}>Price high to low</Radio>
          <Radio onChange={onChange}>New to old</Radio>
          <Radio onChange={onChange}>Old to new</Radio>
        </VerticalGroup>
      </FilterWidget>
      <FilterWidget title="Brands">
        <VerticalGroup>
          <Input placeholder="Search brand" />
          <Checkbox onChange={onChange}>All (18)</Checkbox>
          <Checkbox onChange={onChange}>Konopelski Group (9)</Checkbox>
          <Checkbox onChange={onChange}>Rice Inc (9)</Checkbox>
        </VerticalGroup>
      </FilterWidget>
      <FilterWidget title="Tags">
        <VerticalGroup>
          <Input placeholder="Search tag" />
          <Checkbox onChange={onChange}>All (18)</Checkbox>
          <Checkbox onChange={onChange}>Beach (9)</Checkbox>
          <Checkbox onChange={onChange}>People (9)</Checkbox>
        </VerticalGroup>
      </FilterWidget>
    </FiltersContainer>
  );
}

export default Filters;
