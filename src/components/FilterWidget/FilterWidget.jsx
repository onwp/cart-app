import styled from 'styled-components';
const FilterWidgetContainer = styled.div`
display:block;
padding:15px;
`;
const FilterWidgetTitle = styled.h2`
font-size:13px;
color:#697488;
text-align:left;
`;
const FilterWidgetContent = styled.div`
background:#fff;
margin-top:14.5px;
border-radius:2px;
padding:20px;
`;
function FilterWidget(props) {
    return (
        <FilterWidgetContainer>
            <FilterWidgetTitle>
            {props.title}
            </FilterWidgetTitle>
            <FilterWidgetContent>
            {props.children}
            </FilterWidgetContent>
        </FilterWidgetContainer>
    )
}

export default FilterWidget
