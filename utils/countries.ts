import countries from 'world-countries';

export const formattedCountries = countries.map( (item) => {
return { code: item.cca2, name:item.name.common, flag:item.flag, location:item.latlng, region:item.region }
} )


export const findCountry = (code:string) => {
    return formattedCountries.find( (item) => item.code === code )
}