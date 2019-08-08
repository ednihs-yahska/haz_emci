import React from 'react'
import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { colors, device } from '../../globals';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Map from '../reusables/mapbox';
import {ExpandedCard, MiniCard} from '../reusables/report_cards'

const StyledDash = styled.div`
    display: block;
    margin-left: 73px;
    height: 100%;
`

const DashMain = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 85px; repeat(auto-fill, 10%);
  grid-template-columns: repeat(10, 1fr);
`

const TitleBar = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  background: ${colors.background};
  display: grid;
  grid-template-columns: 2fr 2fr 3fr 3fr;
  grid-template-rows: 1fr;
  font-family: Roboto;
`
const Title = styled.div`
  font-size: 2em;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 170px;
  & span{
    position: relative;
    left: 2rem;
    border-bottom: 2px solid ${colors.primary_font_color};
    padding: 0 10px;
  }
`

const EmergencyButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  & span {
    position: relative;
    min-width: 260px;
    color: #E84849;
    font-size: 1.2rem;
    text-align: right;
    padding: 10px;
    border-radius: 30px;
    animation: glow 10s infinite linear;
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 10px 2px #dadada;
    }
    50% {
      box-shadow: 0 0 1px 0px ${colors.lighter_red};
    }
    100% {
      box-shadow: 0 0 10px 2px #dadada;
    }
  }
`

const DatePicker = styled.div`
  display: flex;
  align-items: center;

  & .picker-wrapper{
    display: flex;
    color: ${colors.medium_gray};
  }

  & .picker-wrapper span{
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
  }
`
const AccountManagement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DashBody = styled.div`
  grid-area: 2 / 1 / -1 / -1;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(100px, auto));
  grid-template-columns: 50% 30% 18%; 
  background: ${colors.background};
`

const MapContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 100px);
  grid-template-columns: repeat(10, 1fr);
  grid-area: 1 / 1 / -1 / 2;
  background: ${colors.background};
`

const ReportContainer = styled.div`
  display: flex;
  grid-area: 1 / 2 / -1 / -1;
  background: ${colors.background};
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  position: relative;
  @media ${device.laptop} {
    display: flex;
    grid-area: 1 / 2 / -1 / 3;
  }

  .title{
    display: flex;
    width: 100%;
    height: 3em;
    align-items: flex-start;
    font-family: Roboto;
    justify-content: center;
    color: ${colors.lighter_red};
    font-size: 1.4em;
    font-weight: 400;
    position: absolute;
    top: 0;
  }
`
const MiscContainer = styled.div`
    display: none;

    @media ${device.laptop} {
      display: grid;
      grid-template-rows: repeat(auto-fill, 50px);
      grid-template-columns: repeat(10, 1fr);
      flex-direction: column;
      grid-area: 1 / 3 / -1 / 4;
      background: ${colors.background};
    }
`

const MapElement = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  padding: 10px;
`

const cardHeight = 80;
const padding = 4;
const CardReport = styled.div`
  display: flex;
  width: 90%;
  padding: ${padding}px;
  min-height: ${cardHeight}px;
  box-shadow: 0 0 5px 2px #dadada;
  border-radius: 5px;
  transition: top 1s, left 1s, height 1s, width 1s;
  position: absolute;
  background: #fff;
  ${props => props.priority && css`
    top: ${props.top}px;
  `}

  ${props => props.priority===1 && css`
    top: 56px;
  `}
`

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`

const Stats = styled.div`
  grid-area: 1 / 1 / 8 / -1;
  display: flex;
  background: #dadada;
`

const Feed = styled.div`
  grid-area: 8 / 1 / -1 / -1;
  display: flex;
  background: #fafafa;
`

const ExpandedReport = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 1 / 2 / -1 / -1;
  background: #fff;
  padding: 10px;
  opacity: 0.97;
  z-index: 99;

`

function Dashboard(props){
    return (
        <StyledDash>
            <DashMain>
              <TitleBar>
                 <Title>
                   <span>Home</span>
                 </Title>
                 <EmergencyButtonContainer>
                    <span>Create Emergency Alert</span>
                 </EmergencyButtonContainer>
                 <DatePicker>
                    <div className="picker-wrapper">
                      <span><FontAwesomeIcon icon={faCalendarAlt} /></span>
                      
                    </div>
                 </DatePicker>
                 <AccountManagement>
                   
                 </AccountManagement>
              </TitleBar>
              <DashBody>
                <MapContainer>
                  <MapElement>
                    <Map />
                  </MapElement>
                </MapContainer>
                <ReportContainer isSelected={props.dashboard.selectedReport}>
                  <span className="title">Incoming Reports</span>
                  <CardsList>
                    {props.dashboard.reports.map((element, key)=>{
                      const _top = 56+((element.priority-1)*(cardHeight+(3*padding)+(2*8)));
                    return <CardReport top={_top} onClick={()=>{props.dispatch({type:"OPEN_REPORT", payload:element.id})}} className={`${element.floating?"floating":""}`} priority={element.priority} key={key}>
                      <MiniCard id={element.id} priority={element.priority}/>
                    </CardReport>})}
                  </CardsList>
                </ReportContainer>
                <MiscContainer>
                  <Stats>
                  </Stats>
                  <Feed>
                  </Feed>
                </MiscContainer>
                { props.dashboard.selectedReport && 
                  <ExpandedReport>
                    <ExpandedCard  handleClose={(e)=>props.dispatch({type:"CLOSE_REPORT"})} id={props.dashboard.selectedReport.id} report={props.dashboard.selectedReport}/>
                  </ExpandedReport>
                }
              </DashBody>
            </DashMain>
        </StyledDash>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}


const mapDispatchToProps = dispatch => {
    return {
      dispatch: dispatch
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))