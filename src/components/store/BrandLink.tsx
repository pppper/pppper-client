import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as RightArrow } from '../../assets/icon/detail/detail_right_arrow_icon.svg';

interface IBrandLinkProps {
  brand_id: number;
}

const BrandLink: React.FC<IBrandLinkProps> = () => {
  return (
    <StyledBrandLink className="flex-row">
      <img className="brand-link-image" />
      <div className="brand-link-wrapper flex-row">
        <div className="brand-name-wrapper flex-col">
          <div className="brand-name-en">SCOTA</div>
          <div className="brand-name-kor">스코타</div>
        </div>
        <RightArrow className="brand-link-icon" />
      </div>
    </StyledBrandLink>
  );
};

const StyledBrandLink = styled.div`
  align-items: center;
  height: 69px;
  margin: 0px 16px;
  background-color: ${(props) => props.theme.colors.gray7};
  .brand-link-image {
    max-height: 69px;
    min-height: 69px;
    min-width: 69px;
    width: 69px;
    height: 100%;
    object-fit: cover;
  }
  .brand-link-wrapper {
    width: 100%;
    justify-content: space-between;
  }
  .brand-name-wrapper {
    margin-left: 15px;
  }
  .brand-name-en {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.colors.black};
  }
  .brand-name-kor {
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 12px;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.colors.gray2};
  }
  .brand-link-icon {
    margin-right: 19px;
  }
`;

export default BrandLink;
