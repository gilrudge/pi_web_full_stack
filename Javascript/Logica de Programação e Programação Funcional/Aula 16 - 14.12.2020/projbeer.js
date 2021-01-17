const axios = require ('axios')
const input = require ('readline-sync')


async function principal(){
  let beer_house = await getState()
                                  
  let list_name = beer_house.map(nome => ({
                                          //name: nome.name,
                                          type: nome.type})
  )
  console.log(beer_house)
  console.log(list_name)
}




async function getState(){
  let usstate = input.question('Choose the state for beer: ')
  let breweries = await axios.get(`https://api.openbrewerydb.org/breweries?by_state=${usstate}`)
                        .then(res => res.data)
                        .then(data => data.map(
                          brewerie => ({name: brewerie.name,
                                        city: brewerie.city,
                                        type: brewerie.brewery_type,
                                        street: brewerie.street,
                                        website: brewerie.website_url 
                          })

                          
                          ))
  return breweries  
  
}

principal()