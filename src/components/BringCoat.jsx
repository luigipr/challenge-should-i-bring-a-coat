import styled from "styled-components"

export function BringCoat({weather}) {
    return (
    <BringCoatContainer>
    {weather < 17 ? 
        <p style={{color: "#AFADAD", fontStyle: 'italic' }}>Sim, você deve levar um casaquinho!</p> : 
        <p style={{color: "#222", fontStyle: 'italic' }}>Não, você não deve levar um casaquinho!</p>}
        <p>Dados fornecidos pela <a href="https://openweathermap.org/">Open Weather API</a></p>
    </BringCoatContainer>
    )
}

const BringCoatContainer = styled.div`
    
`




// {weather?.temp < 17 ? 
//     <p style={{color: "#AFADAD", fontStyle: 'italic' }}>Sim, você deve levar um casaquinho!</p> : 
//     <p style={{color: "#222", fontStyle: 'italic' }}>Não, você não deve levar um casaquinho!</p>}
//     <p>Dados fornecidos pela <a href="https://openweathermap.org/">Open Weather API</a></p>
//     </BringCoat>