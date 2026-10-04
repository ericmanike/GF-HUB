"use client";

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper className="min-h-screen w-full flex items-center justify-center bg-slate-50">
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 120px;
    height: 22px;
    border-radius: 40px;
    color: #059669;
    border: 2px solid;
    position: relative;
  }
  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    width: 25%;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background: currentColor;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {
    50% {
      left: 100%;
      transform: translateX(calc(-100% - 4px));
    }
  }
`;

export default Loader;
