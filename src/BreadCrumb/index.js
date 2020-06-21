import React, {Fragment, useEffect} from 'react'
import styled from 'styled-components/macro'

const ModuleBreadCrumb = (props) => {
  const {bredcrumb, onClick, seporator} = props

  useEffect(()=>{
    getUrl()
  },[bredcrumb, seporator, onClick])

  const getUrl = () => {
    return (
      <Fragment>
        {bredcrumb.map((item, i)=> {
          if(item.link){
            return (
              <Fragment>
                <Link onClick={(e)=>{onClick(item.link)}}>{item.title}</Link>
                <Seporator>{seporator}</Seporator>
              </Fragment>
            )
          } return  <LastUrl isLast={true}>{item.title}</LastUrl>
        })}
      </Fragment>
    )
  }

  return (
    <Container>
      {getUrl()}
    </Container>
  )

}

export default ModuleBreadCrumb
//
const Container = styled.div`
   padding: 13px 20px 13px 13px;
    font-size: 10px;
    display: flex;
    color: #454573;
    text-transform: uppercase;
    border: 1px solid #EFF1F4;
    background-color: #fff;
    max-height: 52px;
`;
const Seporator = styled.div`
    padding: 7px 3px;
`;
const Name = styled.div`
    display: flex;
    color: #2A2A52;
    font-weight: bold;
    padding: 7px;
`;
const Link = styled.div`
    display: flex;
    padding: 7px;
    cursor: pointer;
    &:hover {
      background: #F5F5F5;
      border-radius: 4px;
      transition: ease 0.4s;
    }
`;
const LastUrl = styled(Link)`
  cursor: ${({isLast}) => isLast ? 'default' : 'pointer'};
  color: ${({isLast}) => isLast ? '#2A2A52' : '#2A2A52'};
  font-weight: ${({isLast}) => isLast ? 'bold' : 'regular'};

  &:hover {
      background:  ${({isLast}) => isLast ? 'transparent' : '#F5F5F5'} ;
    }
`;
