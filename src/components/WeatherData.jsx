import styled from "styled-components"

export function WeatherData({max,min,wind,humidity}) {
    const min1 = Math.floor(min)
    const max1 = Math.floor(max)
    return (
        <WeatherDataContainer>
            <Round>
                <DataContainer>
                    <p>Mínima</p>
                    <h1>{min1}° C</h1>
                </DataContainer>
                <DataContainer>
                    <p>Máxima</p>
                    <h1>{max1}° C</h1>
                </DataContainer>
            </Round>
            <Round>
            <DataContainer>
                    <p>Umidade</p>
                    <h1>{humidity}%</h1>
                </DataContainer>
                <DataContainer>
                    <p>Máxima</p>
                    <h1>{wind} m/s</h1>
                </DataContainer>
            </Round>
        </WeatherDataContainer>
    )
  }

  const WeatherDataContainer = styled.div`
    @media screen and (max-width: 412px) {
    width: 100%;
  }
  `

  const DataContainer = styled.div`
    background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
    width: 500px;
    height: 180px;
    border-radius: 32px;
    padding-top: 25px;
    padding-left: 25px;
    color: #fff;
    

    p{
        font-size: 22px;
    }
    h1{
        font-size: 48px;
    }

    @media screen and (max-width: 412px) {
    width: 350px;
    height: 100px;
    align-items:center;
  }
  `

const Round = styled.div`
    gap: 70px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 412px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`