import React from 'react'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../globals';

export const StyledExpandedCard = styled.div`
    display: flex;
    background: #dadada;
    height: 6em;
    border-radius: 10px;
`

export const StyledMiniCard = styled.div`
    display: flex;
    width: 100%;
    font-family: Roboto;
    cursor: pointer;
`

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-basis: 40%;
    flex-grow: 1;
    font-size: 2em;
    color: red;
    padding: 5px;
`

const HazardText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    font-size: 0.8em;
    padding: 5px;
    color: red;
`

const ReportStats = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    padding: 5px;
    flex-grow: 1;
`

const ReportNos = styled.div`
    display: flex;
    flex-grow: 1;
    font-size: 2em;
    justify-content: center;
    align-items: center;
`

const TimePassed = styled.div`
    display: flex;
    margin-top: auto;
    font-size: 0.7em;
    justify-content: center;
    align-items: center;
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
`

const IconExpanded = styled.div`
    display: flex;
    flex-basis: 20%;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: red;

`

const HazardTextExpanded = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
`


const OptionIcon = styled.div`
  display: flex;
  flex-basis: 10%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ExpandedTitle = styled.div`
    display: flex;
    font-family: Roboto;
    color: red;
    font-size: 2em;
    justify-content: center;
`

const DetailReport = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Roboto;
`

export const MiniCard = ({id, expanded, onCancel, priority}) => (
    <StyledMiniCard>
        <IconContainer>
            <Icon>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </Icon>
            <HazardText>
                Shooter Alert
            </HazardText>
        </IconContainer>
        <ReportStats>
            <ReportNos>
                {priority}
            </ReportNos>
            <TimePassed>
                {id} mins ago
            </TimePassed>
        </ReportStats>
        <OptionIcon>
            <FontAwesomeIcon icon={faChevronRight} />
        </OptionIcon>
    </StyledMiniCard>
)

export const ExpandedCard = ({handleClose, report}) => (
    <DetailReport>
        <ExpandedTitle>
            Incoming Reports
        </ExpandedTitle>
        <StyledExpandedCard>
            <IconExpanded>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </IconExpanded>
            <HazardTextExpanded>
                Shooter Alert
            </HazardTextExpanded>
            <ReportStats>
                <ReportNos>
                    {report.priority}
                </ReportNos>
                <TimePassed>
                    {report.id} mins ago
                </TimePassed>
            </ReportStats>
            <OptionIcon onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} />
            </OptionIcon>
        </StyledExpandedCard>
    </DetailReport>
)



export const CardReport = styled.div`
  display: flex;
  width: 90%;
  margin: 0.5em 0;
  padding: 0.25em;
  min-height: 4em;
  box-shadow: 0 0 5px 2px #dadada;
  border-radius: 5px;
  transition: top left height width 2s;
  ${props => props.priority && css`
    order: ${props.priority};
  `}
  
  &.floating{
    position: absolute;
    left: 62%;
    top: 100px;
    height: calc(100% - 100px);
    background: ${colors.background};
    opacity: 0.9;
  }
`