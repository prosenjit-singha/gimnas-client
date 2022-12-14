import styled, { css } from "styled-components";
import FocusStyles from "../../styles/FocusStyles";
import { device } from "../../utils/device";

const openStyles = css`
  /* left: 0; */
  /* padding-inline: max(1.5rem, calc(100vw - 1280px)); */
`;

const easing = "cubic-bezier(0.38, 0.41, 0.24, 0.99)";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  padding: 1.5rem;
  padding-top: 0.95rem;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.isopen ? props.theme.background[300] : "transparent"};
  overflow-y: auto;
  overscroll-behavior-y: contain;
  z-index: 10;
  transform: ${(p) =>
    p.isopen
      ? "translateX(0%)"
      : "translateX(calc(100% - 1.5rem - 44px - max(1.5rem, calc(100vw - 1280px))))"};
  transition: transform 1000ms ${easing}, background-color 1000ms ${easing};
  @media ${device.md} {
    width: 400px;
  }
  @media ${device.xl} {
    top: 80px;
  }
`;

export const Wrapper = styled.section``;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  outline: none;
  border: none;
  display: block;
  height: 2.75rem;
  width: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:focus-visible {
    ${FocusStyles}
  }
  &:active {
    scale: 0.975;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Name = styled.h3`
  letter-spacing: 1px;
`;

export const Location = styled.p`
  display: block;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.text.secondary};
`;

export const Info = styled.div`
  opacity: ${(p) => (p.isopen ? 1 : 0)};
  transition: opacity 700ms ease-out;
`;

export const Section = styled.section`
  pointer-events: ${(p) => (p.isopen ? "auto" : "none")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${(p) => p.theme.background[200]};
  opacity: ${(p) => (p.isopen ? 1 : 0)};
  transition: opacity 700ms ease-out;
`;

export const Prop = styled.p`
  color: ${(p) => p.theme.text.secondary};
  text-align: center;
`;

export const Value = styled.h3`
  position: relative;
  text-align: center;
  color: ${(p) => p.theme.text.primary};
  &::after {
    position: absolute;
    top: 30%;
    content: attr(data-unit);
    color: ${(p) => p.theme.text.disabled};
    font-weight: normal;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

export const Heading = styled.h3`
  pointer-events: ${(p) => (p.isopen ? "auto" : "none")};
  margin-top: 2rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: capitalize;
  opacity: ${(p) => (p.isopen ? 1 : 0)};
  transition: opacity 700ms ease-out;
`;
export const SubHeading = styled.h4`
  font-weight: 400;
  letter-spacing: 1px;
`;

export const BreakBtn = styled(Button)`
  padding: 1rem;
  font-size: 1.15rem;
  font-weight: 500;
  text-align: center;
  color: ${(p) => p.theme.text.secondary};
  background-color: ${(p) =>
    p.isactive === "true" ? p.theme.palette.secondaryActive : "transparent"};

  transition: background-color 500ms ease-out;
  &:hover {
    color: ${(p) => p.theme.text.hovered};
    background-color: ${(p) =>
      p.isactive === "true"
        ? p.theme.palette.secondary
        : p.theme.palette.secondaryHovered};
  }
`;

export const Time = styled.p`
  color: ${(p) => p.theme.text.disabled};
`;

export const CompletedBtn = styled(Button)`
  pointer-events: ${(p) => (p.isopen ? "auto" : "none")};
  margin-inline: auto;
  height: auto;
  width: auto;
  border-radius: 0;
  font-size: 1.15rem;
  padding: 0.5em 1em;
  background-color: ${(p) => p.theme.palette.secondary};
  opacity: ${(p) => (p.isopen ? 1 : 0)};
  transition: opacity 700ms ease-out, background-color 500ms ease;
  &:hover {
    background-color: ${(p) => p.theme.palette.secondaryActive};
  }
`;

export const BlackOverlay = styled.div`
  overscroll-behavior-y: contain;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  width: 0;
  height: 100%;
  z-index: 5;
  transform: ${(p) => (p.isopen ? "translateX(0%)" : "translateX(-100%)")};
  transition: transform 1000ms ${easing};
  @media ${device.md} {
    width: calc(100% - 400px);
  }
`;
