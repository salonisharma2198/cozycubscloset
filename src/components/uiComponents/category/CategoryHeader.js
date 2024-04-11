import React from "react";
import { categoryGirl, categoryBoy, infantBoy, infantGirl,arrowRight } from "../../aasets";
import { StyledImage, CategoryheaderWrapper, CategoryTextWrapper, AgeTextWrapper, WrapperDiv } from './CategoryMuiStyles';
import { useNavigate } from "react-router-dom";

const Categoryheader = () => {
  const navigate=useNavigate();

  const categoryArr = [
    { categoryName: 'Tiny Blossoms', categoryType: 'Infant_Girls', category: 'Infant', img: infantGirl, ageGroup: '0-2 years' },
    { categoryName: 'Little Gentlemen', categoryType: 'Infant_Boys', category: 'Infant', img: infantBoy, ageGroup: '0-2 years' },
    { categoryName: 'Toddler Girls', categoryType: 'Girls', category: 'Girls', img: categoryGirl, ageGroup: '3 and above years' },
    { categoryName: 'Toddler Boys', categoryType: 'Boys', category: 'Boys', img: categoryBoy, ageGroup: '3 and above years' },
    { categoryName: 'See All', categoryType: 'All', category: 'All', img: arrowRight, ageGroup: '' }
  ]
  return (
    <CategoryheaderWrapper>
      {categoryArr.map((value) => {
        const { img, categoryName, ageGroup } = value
        return (
          <WrapperDiv onClick={()=>navigate('/products')}>
            <StyledImage src={img} />
            <CategoryTextWrapper>{categoryName}</CategoryTextWrapper>
            <AgeTextWrapper>{ageGroup}</AgeTextWrapper>
          </WrapperDiv>
        )
      })}
    </CategoryheaderWrapper>
  )
}
export default Categoryheader