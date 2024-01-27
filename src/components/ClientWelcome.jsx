import styled from 'styled-components'
import { PersonIcon } from './icons/PersonIcon';

const Text = styled.span`
margin-top: 1rem;
font-weight: bold;
font-size: 19px;
`
const SubText = styled.p`
`

const IconContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const InnerText = styled.p`
font-weight: bold;
font-size: 14px;
`

const Container = styled.div`
gap: 0.5rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: fit-content;
padding: 2rem;
border-radius: 10px;
`

const SubmitButton = styled.button`
background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
margin: 10px;
padding: 15px 45px;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
display: block;
text-decoration: none;
background-position: right center;

&:hover {
    background-position: left center; /* change the direction of the change here */
  }
`

const InnerCard = styled.div`
margin-top: 1rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
background-color: #F1F1F2;
padding: 1rem;
gap: 0.5rem;
display: flex;
flex-direction: column;
`


export const ClientWelcome=()=>{
    return(
        <Container>
            <IconContainer>
            <PersonIcon/>
            </IconContainer>
            <Text>Welcome, Customer</Text>
            <SubText>To use the eHotel Management System, access the Booking portal</SubText>
            <InnerCard>
                <InnerText>Ready to start a booking?</InnerText>
            <SubmitButton>Go to Hotels</SubmitButton>
            </InnerCard>


        </Container>

    )
}