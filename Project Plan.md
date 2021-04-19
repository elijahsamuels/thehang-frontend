# PROJECT IDEAS

## The Musicians GigBook/The Hang
A social media platform for individual musicians (not bands/groups)
- a database/social network for musicians

https://lucid.app/lucidchart/022b9f96-aabf-43e2-9042-258d1ef45345/edit?page=qM9oMrqsjgvy#

- A user can login for EDIT and full view permissions

### Phase One:

#### User story
- [x] a user (musician) can signup, and create a basic profile
- [x] a user can view their profile
- [x] a user can view edit/update profile
- [ ] a user can view delete profile
- [x] a user can view all profiles

- [x] user attributes:
  - [x] id: id
  - [x] string: password
  - [x] string: first_name
  - [x] string: last_name
  - [x] string: email
  - [x] string: city
  - [x] intger: primary_instrumet
  - [x] intger: secondary_instrumet
  
  ### Phase Two:
  - [x] string: phone
  - [x] integer: travel_distance
  - [x] string: description
  - [x] string: website link
  

  Instruments
  Instruments has_many users (join table: user_instruments)
  User Primary_Instrument belongs_to instrument (join table: user_instruments)
    - [ ] id: 1, name: clarinet
    - [ ] id: 2, name: flute
    - [ ] id: 3, name: saxophone
    - [ ] id: 4, name: trumpet
    - [ ] id: 5, name: trombone
    - [ ] id: 6, name: bass
    - [ ] id: 7, name: guitar
    - [ ] id: 8, name: drums
    - [ ] id: 9, name: piano
    - [ ] id: 10, name: vocals_male
    - [ ] id: 11, name: vocals_female
    - [ ] id: 12, name: vocals_female
    - [ ] id: 13, name: dj

  ### Phase Three:
  - [ ] has_many gig_types - [ ] Checkboxes
  Gig_types has_many users (join table: gig_types_for_user)
  User has_many gig_types (join table: gig_types_for_user)
  - [ ] boolean: available for gigs?
    - [ ] boolean: bar_restaurant
    - [ ] boolean: club
    - [ ] boolean: wedding_band
    - [ ] boolean: recording_session
    - [ ] boolean: chamber_ensemble
    - [ ] boolean: orchestra_symphony
    - [ ] boolean: touring
    - [ ] 

  ### Phase Four:
  - [ ] integer: requested_pay_rate
  - [ ] string: photo
  - [ ] string: gender
  - [ ] integer: date_of_birth
  - [ ] string: youtube_links
  - [ ] string: associated_bands
  - [ ] has_many genres
  Genre has_many users (join table: user_genres)
  User has_many genres (join table: user_genres)
    - [ ] boolean: rock
    - [ ] boolean: hip_hop_rap
    - [ ] boolean: rnb
    - [ ] boolean: country
    - [ ] boolean: electronic
    - [ ] boolean: latin
    - [ ] boolean: jazz
    - [ ] boolean: pop

  ### Phase Five:
  - [ ] a map (google maps? api?) with location of musicians
  - [ ] internal only? average requested pay rates by areas

  - [ ] connections with other musicians (users)
  User has_many users (connections) (join table: connections)
  
  - [ ] recommendations to other musicians (users) (can only recommend a musician with a connection)
  User has_many recommedations, through: connections (join table: user_recommendations)
  Recommendation belongs_to user (the user that created it) (join table: user_recommendations)

  - [ ] Gig stories
    - [ ] a user can CRUD a story to share 
      - [ ] has_many Stories
      Stories belongs_to a user (join table: user_stories)
      User has_many stories (join table: user_stories)


- [ ] A user not logged in can view basic info 

  Skills has_many users (join table: user_skills)
  User has_many skills (join table: user_skills)
    - [ ] boolean: arranging
    - [ ] boolean: band leader
    - [ ] boolean: composition
    - [ ] boolean: transcription
    - [ ] boolean: event production
    - [ ] boolean: studio mastering
    - [ ] boolean: studio mixing
    - [ ] boolean: studio recording
    - [ ] boolean: instrument repair - woodwind
    - [ ] boolean: instrument repair - brass
    - [ ] boolean: instrument repair - guitar & bass
    - [ ] boolean: instrument repair - acoustic piano
    - [ ] boolean: instrument repair - digital keyboad
    - [ ] boolean: instrument repair - amps
    - [ ] boolean: piano tuning
    - [ ] boolean: education - classroom
    - [ ] boolean: education - private lessons




rails new theHang --api --database=postgressql



### <strike> The contrafact </strike>
  - A database of song chord progressions
  - A user can login for EDIT permissions
  - A user not logged in can view.
  - A chord progression has_many songs
  - A song has_many a chord progression (a song as a whole has many chord progressions)
  - A user can create a chord progression and see what songs have the same chord progression
  

# REQUIREMENTS

- [x] The code is written in ES6 as much as possible
- [x] Use the create-react-app was used to create your React app
- [x] Your app should have one HTML page to render your react-redux application
- [x] There are 5 stateless components
- [x] There are 3 routes
- [x] 1 model in the backend (or more!)
- [x] react-router is being used with proper RESTful routing
- [x] Redux and redux-thunk middleware are being used to modify state change 
- [x] Make use of async actions and redux-thunk middleware to send data to and receive data from a server
- [x] Use of Rails API backend to persist data for the application
- [x] You should be using fetch() within your actions to GET and POST data from your API-do not use jQuery methods.
- [] Good understanding of the react/redux state flow
- [] Good understanding of state and props in React
- [] Knowledge of async JS with Promises
- [x] Your client-side application should handle the display of data with minimal data manipulation
- [x] Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it


# STRETCH GOALS

- [ ] User should have to prove they're a musician by passing some music related question. Either identify musical note on a staff, instrument, or something else
- [ ] 
- [ ] 
- [ ] 
- [ ] 


## Todo List/Goals

- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ]  
- [ ] 

