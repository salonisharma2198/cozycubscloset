import { childBG1, childBG2, childBG3, childBG4, childBG5, childBG6 } from "../../aasets";
import { BackgroundImgWrapper, ShopNowButton, AnimatedTypography,WrapperDiv,HeadingWrapper } from "./HomeMuiStyle";
import './HomeStyle.css';
import Categoryheader from "../../uiComponents/category/CategoryHeader";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <AnimatedTypography>SNUGGLE UP IN STYLE</AnimatedTypography>
      <WrapperDiv>     
      <Categoryheader/>
      <BackgroundImgWrapper>
        <div>
          <h1 className="headerStyle" data-text="Dressing Up">
            <span className="spanText" data-text="Your Little Stars">Dressing Up <br />Your Little Stars</span>
          </h1>
          <div className="buttonWrapper">
            <ShopNowButton variant="contained" size="large">Shop Now</ShopNowButton>
          </div>
        </div>
        <ul className="custom-ul">
          <li className="custom-li">
            <img src={childBG1} alt="Landscape" className="headerStyledimg" />
          </li>
          <li className="custom-li">
            <img src={childBG2} alt="Landscape" className="headerStyledimg" />
          </li>
          <li className="custom-li">
            <img src={childBG3} alt="Landscape" className="headerStyledimg" />
          </li>
          <li className="custom-li">
            <img src={childBG4} alt="Landscape" className="headerStyledimg" />
          </li>
          <li className="custom-li">
            <img src={childBG5} alt="Landscape" className="headerStyledimg" />
          </li>
          <li className="custom-li">
            <img src={childBG6} alt="Landscape" className="headerStyledimg" />
          </li>
        </ul>
      </BackgroundImgWrapper>
      </WrapperDiv>
      <HeadingWrapper>Little Fashionista Selections</HeadingWrapper>
    </div>
  )
}
export default Home;

