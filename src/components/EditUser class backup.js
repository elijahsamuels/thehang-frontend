import React, { Component, useEffect, useState, setState, useReducer } from 'react'
import { connect, useDispatch } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import {
  Form,
  Icon,
  Loader,
  Dimmer,
  TextArea,
  Button
} from 'semantic-ui-react'
import { UserCard } from './UserCard'
import { editUser } from '../actions/userActions'


const genderOptions = [
  { key: 'male', text: 'Male', value: 'male' },
  { key: 'female', text: 'Female', value: 'female' },
  { key: 'other', text: 'Other', value: 'other' },
  { key: 'na', text: 'Prefer not to say', value: 'prefer not to say' }
]

const instruments = [
  { name: 'flute', key: 'flute', text: 'Flute', value: 'flute' },
  { name: 'clarinet', key: 'clarinet', text: 'Clarinet', value: 'clarinet' },
  {
    name: 'saxophone',
    key: 'saxophone',
    text: 'Saxophone',
    value: 'saxophone'
  },
  { name: 'oboe', key: 'oboe', text: 'Oboe', value: 'oboe' },
  { name: 'bassoon', key: 'bassoon', text: 'Bassoon', value: 'bassoon' },
  { name: 'trumpet', key: 'trumpet', text: 'Trumpet', value: 'trumpet' },
  { name: 'trombone', key: 'trombone', text: 'Trombone', value: 'trombone' },
  {
    name: 'acoustic guitar',
    key: 'acoustic guitar',
    text: 'Acoustic Guitar',
    value: 'acoustic guitar'
  },
  {
    name: 'electric guitar',
    key: 'electric guitar',
    text: 'Electric Guitar',
    value: 'electric guitar'
  },
  {
    name: 'electric bass',
    key: 'electric bass',
    text: 'Electric Bass',
    value: 'electric bass'
  },
  { name: 'drums', key: 'drums', text: 'Drums', value: 'rums' },
  {
    name: 'piano/keys',
    key: 'piano/keys',
    text: 'Piano/Keys',
    value: 'piano/keys'
  },
  {
    name: 'vocals (male)',
    key: 'vocals (male)',
    text: 'Vocals (Male)',
    value: 'vocals (male)'
  },
  {
    name: 'vocals (female key)',
    key: 'vocals (female)',
    text: 'Vocals (Female)',
    value: 'vocals (female)'
  },
  { name: 'tuba', key: 'tuba', text: 'Tuba', value: 'tuba' },
  { name: 'violin', key: 'violin', text: 'Violin', value: 'violin' },
  { name: 'viola', key: 'viola', text: 'Viola', value: 'viola' },
  { name: 'cello', key: 'cello', text: 'Cello', value: 'cello' },
  {
    name: 'double bass',
    key: 'double bass',
    text: 'Double Bass (Upright Bass)',
    value: 'double bass'
  },
  {
    name: 'accordion',
    key: 'accordion',
    text: 'Accordion',
    value: 'accordion'
  },
  { name: 'dj', key: 'dj', text: 'DJ', value: 'dj' },
  { name: 'banjo', key: 'banjo', text: 'Banjo', value: 'banjo' },
  { name: 'mandolin', key: 'mandolin', text: 'Mandolin', value: 'mandolin' },
  { name: 'other', key: 'other', text: 'Other', value: 'other' }
]


// const currentUser = state.user

export class EditUser extends Component {


// class EditUser extends React {
    // const currentUserData = props.user
    // const user = this.props.users.find(user => user.id == this.props.match.params.id)

    state = {
        first_name: "",
        last_name: "",

    };
    
    componentDidMount() {
        let user = this.props.user
            // (user) => user.id === this.props.match.params.id
        // );
        // debugger
        this.setState({
            first_name: user.first_name,
            last_name: user.last_name,
            id: user.id,
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleEditSubmit = (event, id) => {
        event.preventDefault();
        console.log("handle Submit", id);
        // debugger
        this.props.editUser(this.state);
        // this.props.history.push(`/musicians/${id}`);
        // this.setState({
        //     first_name: user.first_name,
        //     last_name: user.last_name,
        // });
    };


    
//   const [localUser, setLocalUser] = useState({
//       ...currentUserData,
//     first_name: currentUserData.first_name,



    //   last_name: props.user.last_name,
    //   city: props.user.city,
    //   state: props.user.state,
    //   email: props.user.email,
    //   phone: props.user.phone,
    //   website: props.user.website,
    //   primary_instrument_id: props.user.primary_instrument_id,
    //   secondary_instrument_id: props.user.secondary_instrument_id,
    //   description: props.user.description,
    //   password: props.user.password,
    //   deleteme: console.log("props from useState: ", props.user)
    // })

//   const handleSubmit = event => {
//     event.preventDefault()
//     props.editUser(props)
//     props.setState({
//       first_name: localUser.first_name,
//       last_name: localUser.last_name,
//       city: localUser.city,
//       state: localUser.state,
//       email: localUser.email,
//       phone: localUser.phone,
//       website: localUser.website,
//       primary_instrument_id: localUser.primary_instrument_id,
//       secondary_instrument_id: localUser.secondary_instrument_id,
//       description: localUser.description,
//       password: localUser.password,
//     })
//   }


//   const handleChange = event => {
//     setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   const instrumentIDToName = instrumentIDs => {
//     const instrumentSelect = {
//       0: '',
//       1: 'Guitar',
//       2: 'Bass',
//       3: 'Drums',
//       4: 'Keys',
//       5: 'Saxophone'
//     }
//     if (!!instrumentIDs) {
//       return instrumentSelect[instrumentIDs]
//     }
//     return instrumentSelect[0]
//   }

//   const dispatch = useDispatch()
//   useEffect(() => dispatch(editUser(parseInt(props.match.params.id))), [
//     dispatch
//   ]) // this is like componentDidMount

//   if (props.loading) {
//     return (
//       <div>
//         <Dimmer active>
//           <Loader size='massive'>Loading</Loader>
//         </Dimmer>
//       </div>
//     )
//   }
  // const findUser = users.find(user => user.id == routerProps.match.params.id)

//   const baseLocationURL = 'www.google.com/maps/place/'
// document.querySelector("#first_name").

render() {
    let userId = this.props.match.params.id;
    // let user = this.props.users.find(
    //     (user) => user.id === userId
    // );
// debugger
  return (
    <div>

      <Form onSubmit={(event) =>
            this.handleEditSubmit(event, this.props.match.params.id)
            }>
        <Form.Group widths='equal'>
          <Icon name='user' color='black' />
          <Form.Input
            fluid
            name="first_name"
            label='First name'
            type="text"
            id="first_name"
            placeholder='First name'
            value={this.state.first_name}
            onChange={(event) => this.handleChange(event)}
            />

          <Icon name='user' color='black' />
          <Form.Input
            fluid
            name="last_name"
            label='Last name'
            type="text"
            id="last_name"
            placeholder='Last name'
            value={this.state.last_name}
            onChange={(event) => this.handleChange(event)}
          />
        <Button 
        color="blue">Save Changes</Button>

        </Form.Group>
      </Form>
    </div>
  )}
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


// export default connect(mapStateToProps, { editUser })(EditUser)
// export default withRouter(connect(mapStateToProps, { editUser })(EditUser))
export default connect(mapStateToProps, { editUser })(EditUser);

