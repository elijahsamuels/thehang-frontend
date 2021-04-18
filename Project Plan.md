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
  

# Steps
https://www.youtube.com/watch?v=VOETc9FyWCc

start with rails backend


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



# OTHER NOTES

- An approach to JWT login and authentication with a lot of comments and notes
https://github.com/Dane-Dawson/logintemp-frontend
https://github.com/Dane-Dawson/logintemp-backend

- Final Project Pointers and Resources
https://docs.google.com/document/d/1Ezg1fdE00_CG1D6Jk_j2dCb7LTtJANaZb-axexeY3KY/edit


Possible topics to brush up on/practice: 

- fetch, promises, async stuff (if you use axios or async await, be prepared to explain those too)
- using state to handle saving and updating of components; i.e. when state changes and/or when setState is called, the component re-renders
- state vs props
- local state vs global state, the idea that changes in state cause a component to be re-rendered
- setState. Why do we need to use setState? Why not just use this.state = “whatever”? What does it mean to say that setState is asynchronous?
- creating functions to handle user events
- Differences between an arrow function and a regular function declaration
- Understand how to pass data/functions through to components using props
- differences between function vs class-based components
- class components vs function components
- presentational components vs container components
- you should be able to justify the organization of your app (component structure)
- Explain the flow of data from React, through Redux and back to React. This is especially important as far as redux actions - you may be asked to add in a number of console.logs and think about in what order they might be logged. 
- Redux flow
- map state to props, map dispatch to props
- thunk, async dispatches with redux
- rails backend concepts: serializers, restful routing, controller methods
- react lifecycle methods
- does react state persist beyond page refresh? Why use a backend?
- React has a Virtual DOM, what does that mean?
- if you use hooks (e.g. setState, useEffect) which is NOT required, you should be able to coherently talk about what they are replacing 

Working through labs and lessons, your project, sample builds etc is a nice way to brush up on react and redux, and reading through the react and redux documentation is often super helpful as well. For vanilla javascript, eloquent javascript (https://eloquentjavascript.net/), particularly chapters 1-5, can be super helpful.

Don't feel pressured to do all of these things - work on one or two things at a time, and think of these as long-term goals to help prepare you for job interviews. Start with the things you feel rusty on, and find a balance between reviewing vs working on your project - maybe spend 80% of your coding time working on your project, and maybe 20% reviewing questions or weak spots that come up as you are working on your project.

-------------------------------------------------------------------------------------------------------------------------------

4. Live coding practice

Some basic things we are looking for:

- Write basic javascript code confidently, under pressure. This could be many things, like sorting, for example. Anything in vanilla js is fair game
- Be prepared to demonstrate your app as well as refactor it a little

I can give you some suggestions for common live-coding exercises, but note that the assessor is not guaranteed to give you one of these - regardless of what challenge you are given, you should remain calm and professional - no arguing with your reviewer or complaining that something is “too difficult”. Remember, this review is essentially being conducted as if it is a job interview.

Your livecoding should be in react, not redux - you will not be asked to program redux (unless your app is broken or not meeting the requirements, which might require you to fix some redux stuff. One exception is that you could be asked to refactor from using global state to using local state, but they would mainly be gauging your ability to work with local state. 

Some common exercises: 

- build a "Like" button that increments a counter. You can do that with state or hooks; your choice. Be prepared to explain how/why you did what you did. Could also be something similar, like an upvote/downvote button. 
- some other feature implementing a counter - possibly building a timer
- build sorting functionality, maybe through a button or form. If you so have to sort something, be careful - sort is a destructive method, and you will need to take that into account when working with state. 
- build search/filter functionality, maybe through a button or form
- refactor class component to function component or vice versa






=======================================

##### Validating Forms in Semantic UI React
https://medium.com/@krandles/validating-forms-in-semantic-ui-react-a057957f1dd6


# Google OAuth for React #

##### Add Google Login to your React Apps in 10 mins
https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del

##### React Google Login
https://www.npmjs.com/package/react-google-login

##### JWT from WebDevSimplified
https://www.youtube.com/watch?v=mbsmsi7l3r4

##### JS COOKIE
https://github.com/js-cookie/js-cookie


Primary_Instrument
rails generate migration CreatePrimaryInstruments flute:boolean clarinet:boolean

rails generate migration CreateJoinTableUserPrimaryInstruments user primary_instrument

Secondary_Instrument
rails generate migration CreateSecondaryInstruments flute:boolean clarinet:boolean





https://medium.com/@AndrewBonner2/filter-results-with-react-f746dc7984c