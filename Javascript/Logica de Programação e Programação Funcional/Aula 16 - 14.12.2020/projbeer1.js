const axios = require ('axios')
const input = require ('readline-sync')


async function principal(){
  let option
  let usState
  let usCity
  let usType                     
  
  
  
  

  while (option != 4){

    console.log(`
  --------------------------------------
  Choose an option for your beer search:
  --------------------------------------
  1 - State
  2 - City
  3 - Type
  4 - Exit
  --------------------------------------`)

    option = parseInt(input.question('Choose an option number >>> '))

    if (option === 1) {
      usState = input.question('Type a State: ')
      let beer_state = await getState(usState)
      console.log(beer_state)
      
        
    }

    else if (option === 2) {      
      usCity = input.question('Type a City: ')
      let beer_city = await getCity(usCity)
      console.log(beer_city)}

    else if (option === 3) {
      usType = input.question('Type a type: ')
      let beer_type = await getType(usType)
      console.log(beer_type)}

    else if (option === 4) {
      console.log('Program finished')}

    else console.log('Choose a valid option\n')
    
  }
}



//REQUISITONS FOR STATE, CITY, TYPE AND RANDOM SEARCH
async function getState(usState){
  
  let breweries_state = await axios.get(`https://api.openbrewerydb.org/breweries?by_state=${usState}`)
                        .then(res => res.data)
                        .then(data => data.map(
                          brewerie => ({name: brewerie.name,
                                        type: brewerie.brewery_type,
                                        street: brewerie.street,
                                        city: brewerie.city,
                                        state: brewerie.state,                                        
                                        postal:  brewerie.postal_code,
                                        country: brewerie.country,
                                        phone: brewerie.phone,
                                        website: brewerie.website_url,                                  

                          })

                          
                          ))
  return breweries_state
                        }
  
  async function getCity(usCity){
  
  let breweries_city = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${usCity}`)
                        .then(res => res.data)
                        .then(data => data.map(
                          brewerie => ({name: brewerie.name,
                                        type: brewerie.brewery_type,
                                        street: brewerie.street,
                                        city: brewerie.city,
                                        state: brewerie.state,                                        
                                        postal:  brewerie.postal_code,
                                        country: brewerie.country,
                                        phone: brewerie.phone,
                                        website: brewerie.website_url,                                  

                          })

                          
                          ))
  return breweries_city
}
async function getType(usType){
  
  let breweries_type = await axios.get(`https://api.openbrewerydb.org/breweries?by_type=${usType}`)
                        .then(res => res.data)
                        .then(data => data.map(
                          brewerie => ({name: brewerie.name,
                                        type: brewerie.brewery_type,
                                        street: brewerie.street,
                                        city: brewerie.city,
                                        state: brewerie.state,                                        
                                        postal:  brewerie.postal_code,
                                        country: brewerie.country,
                                        phone: brewerie.phone,
                                        website: brewerie.website_url,                                      

                          })

                          
                          ))
  return breweries_type
}



principal()