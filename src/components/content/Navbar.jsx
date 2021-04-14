import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const NavContainer = styled.nav`
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  padding: 0 10px;
  /* opacity: 0.7; */
`;
const NavBrand = styled.div`
  background-color: yellow;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
`;

const NavUl = styled.ul`
  background-color: yellowgreen;
  display: flex;

  @media (max-width: 768px) {
    background-color: dodgerblue;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: -40vw;
    top: 60px;
    padding: 15px 15px 0 15px;
    margin: 0;
    height: calc(100vh - 60px);
    width: 70vw;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    /* padding-top: 60px; */
  }
`;

const NavLi = styled.li`
  background-color: purple;
  list-style: none;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 15px;
  }
`;

const NavItem = styled(Link)`
  background-color: wheat;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  padding: 0 10px;
  width: 100%;
  display: block;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 28px;
    padding: 5px;
  }
`;

const ToggleButton = styled.button`
  min-width: 45px;
  min-height: 45px;
  width: 45px;
  height: 45px;
  border: 1px solid black;
  /* border-radius: 50%; */
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

/*
<i class="fas fa-times"></i>
*/

const Navbar = () => {
  return (
    <NavContainer>
      <NavBrand onClick={() => scroll.scrollToTop()}>aac-devs</NavBrand>
      <ToggleButton>
        <i className="fas fa-ellipsis-v fa-2x"></i>
      </ToggleButton>
      <NavUl>
        {/* <NavLi>
          <NavItem>home</NavItem>
        </NavLi> */}
        <NavLi>
          <NavItem to="portfolio" smooth={true} duration={1000}>
            portfolio
          </NavItem>
        </NavLi>
        <NavLi>
          <NavItem to="skills" smooth={true} duration={1000}>
            skills
          </NavItem>
        </NavLi>
        <NavLi>
          <NavItem to="contact" smooth={true} duration={1000}>
            contact
          </NavItem>
        </NavLi>
      </NavUl>
    </NavContainer>
  );
};

export default Navbar;
