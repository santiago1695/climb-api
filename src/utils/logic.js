export const kelvinToCelsius= (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1)
  }
export const KelvinToFahrerheis = (tempKelvin) => {
    return (((tempKelvin - 273.15)* 9/5) + 32).toFixed(1)
  }

export const handleChangeUnitTemp = (set, boolean) => {
    set(!boolean)
  }