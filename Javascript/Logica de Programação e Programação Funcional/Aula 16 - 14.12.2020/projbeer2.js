const axios = require ('axios')
const input = require ('readline-sync')


async function principal(){
  let option
  let usState
  let usCity
  let usType
  let usName                     
  let menu = `
  --------------------------------------
  Choose an option for your beer search:
  --------------------------------------
  1 - State
  2 - City
  3 - Type
  4 - Name
  5 - Exit
  --------------------------------------`
  let menu_type = `Choose a type:
  ${'='.repeat(100)}
   - micro >>> Most craft breweries. For example, Samuel Adams is still considered a micro brewery.
   - nano >>> An extremely small brewery which typically only distributes locally.
   - regional >>> A regional location of an expanded brewery. Ex. Sierra Nevada's Asheville, NC location.
   - brewpub >>> A beer-focused restaurant or restaurant/bar with a brewery on-premise.
   - large >>> A very large brewery. Likely not for visitors. Ex. Miller-Coors.
   - planning >>> A brewery in planning or not yet opened to the public.
   - bar >>> A bar. No brewery equipment on premise.
   - contract >>> A brewery that uses another brewery's equipment.
   - proprietor >>> Similar to contract brewing but refers more to a brewery incubator
   - closed >>> A location which has been closed.
   ${'='.repeat(100)}
  `
  
  
  

  while (option != 5){

    console.log(menu)

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
      console.log(menu_type)

      usType = input.question('Type a type: ')
      let beer_type = await getType(usType)
      console.log(beer_type)}

    else if (option === 4) { 
      usName = input.question('Type a name: ')
      let beer_name = await getName(usName)
      console.log(beer_name)}


    else if (option === 5) {
      console.log('Program finished')}

    else console.log('Choose a valid option\n')
    
  }
}



//REQUISITONS FOR STATE, CITY and TYPE
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
async function getName(usName){
  
  let breweries_name = await axios.get(`https://api.openbrewerydb.org/breweries?by_name=${usName}`)
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
  return breweries_name
}


principal()