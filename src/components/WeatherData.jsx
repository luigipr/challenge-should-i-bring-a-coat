import styled from "styled-components"

export function WeatherData({
    max,
    min,
    wind,
    humidity,
  }) {
    const min1 = Math.floor(min)
    const max1 = Math.floor(max)
    return (
        <>
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
        </>
    )
  }

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
  `

const Round = styled.div`
    gap: 70px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
`