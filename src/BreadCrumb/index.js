import React, {Fragment, useEffect} from 'react'
import styled from 'styled-components/macro'


const ModuleBreadCrumb = (props) => {
  const {list, onClick, seporator, styled} = props

  useEffect(()=>{
    getUrl()
  },[list, seporator, onClick])


  const getUrl = () => {
    return (
      <Fragment>
        {list.map((item, i)=> {
          if(i === list.length - 1){
            return (
              <LastUrlBlock styled={styled && styled.lastUrlBlock}>
                <LastUrl styled={styled && styled.lastItem ? styled.lastItem : ''} isLast={true}>{item.title}</LastUrl>
                <LastUrlIcon styled={styled && styled.lastUrlIcon}>
                  {item.icon}
                </LastUrlIcon>
              </LastUrlBlock>

            )
          }
          else if(item.link){
            return (
              <Fragment>
                <LinkBlock styled={styled && styled.linkBlock}>
                  <Link styled={styled && styled.item ? styled.item : ''} onClick={(e)=>{onClick(item.link)}}>{item.title}</Link>
                  <LinkIcon styled={styled && styled.linkBlockIcon}>{item.icon}</LinkIcon>
                </LinkBlock>
                <Seporator styled={styled && styled.seporator ? styled.seporator : ''}>{seporator}</Seporator>
              </Fragment>
            )
          }
        })}
      </Fragment>
    )
  }

  return (
    <Container styled={styled && styled.container ? styled.container : ''}>
      {getUrl()}
    </Container>
  )

}

export default ModuleBreadCrumb
//

const Container = styled.div`
    padding: ${({padding}) => padding ? padding : '13px 20px 13px 13px'} ;
    font-size: ${({fontSize}) => fontSize ? fontSize : '10px'} ;
    display: flex;
     color: #134153;
    text-transform: uppercase;
    border: 1px solid #EFF1F4;
    background-color: #fff;
    max-height: 52px;
    ${({styled}) => styled}
`;
const Seporator = styled.div`
    padding: 7px 3px;
    ${({styled}) => styled}
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
    ${({styled}) => styled}
`;
const LastUrl = styled(Link)`
  cursor: ${({isLast}) => isLast ? 'default' : 'pointer'};
  font-weight: ${({isLast}) => isLast ? 'bold' : 'regular'};

  &:hover {
      background:  ${({isLast}) => isLast ? 'transparent' : '#F5F5F5'} ;
    }

  ${({styled}) => styled}
`;

const LinkBlock = styled.div`

  ${({styled}) => styled}
`;
const LastUrlBlock = styled.div`
  display: flex;
  align-items: center;

  ${({styled}) => styled}
`;
const LastUrlIcon = styled.div`
  display: flex;
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
  & > svg {
    margin: auto;
  }
  ${({styled}) => styled}
`;

const LinkIcon = styled.div`

  ${({styled}) => styled}
`;
