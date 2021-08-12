import styled from 'styled-components';

import ImagePlaceholder from '../../components/ImagePlaceholder';
import { SizedBox } from '../../components/SizedBox';

export interface ICodiProposal {
  profile: ICodiProposalProfile;
  description: string;
  tags: string[];
}

export interface ICodiProposalProfile {
  imgSrc: string;
  name: string;
}

interface ICodiProposalProps {
  codiProposal: ICodiProposal;
}

const CodiProposal: React.FC<ICodiProposalProps> = (props) => {
  const { codiProposal } = props;
  return (
    <Wrapper>
      <ProposalRow>
        <ProposalProfile>
          <img
            src={codiProposal.profile.imgSrc}
            alt=""
            className="profile-picture"
          />
          <SizedBox height={5}></SizedBox>
          <span className="profile-name">{codiProposal.profile.name}</span>
        </ProposalProfile>
        <SizedBox width={20}></SizedBox>
        <ProposalTags>
          {codiProposal.tags.map((tag, index) => {
            return <ProposalTag key={index}>#{tag}</ProposalTag>;
          })}
        </ProposalTags>
      </ProposalRow>
      <SizedBox height={16}></SizedBox>
      <ProposalDescription>“ {codiProposal.description} ”</ProposalDescription>
      <SizedBox height={16}></SizedBox>
      <ReferenceCodiSlider>
        <ReferenceCodi></ReferenceCodi>
        <ReferenceCodi></ReferenceCodi>
        <ReferenceCodi></ReferenceCodi>
      </ReferenceCodiSlider>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ProposalRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0 28px;
`;

const ProposalDescription = styled.div`
  line-height: 1.43;
  letter-spacing: 0.07px;
  font-size: 14px;
  padding: 0 28px;
`;

const ProposalProfile = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 80px;
  flex-shrink: 0;

  img.profile-picture {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 18px;
  }

  span.profile-name {
    font-size: 11px;
    color: #555561;
  }
`;

const ProposalTags = styled.div`
  text-align: left;
`;

const ProposalTag = styled.div`
  display: inline-flex;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.gray7};

  justify-content: center;
  align-items: center;

  font-size: 11px;

  margin-right: 4px;
  margin-bottom: 7.5px;
`;

const ReferenceCodiSlider = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding: 0 28px;
`;

const ReferenceCodi = styled(ImagePlaceholder)`
  width: 220px;
  height: 220px;
  margin-right: 8px;
  flex-shrink: 0;
`;
export default CodiProposal;
