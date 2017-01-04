import React, { Component } from 'react';
import { editUserEventCard, deleteUserEventCard } from '../actions/userEvents';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import * as moment from 'moment';
import moment from 'moment';

class UserEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit});
  }


  handleSubmit(e) {
    e.preventDefault();
    let event_name = this.refs.event_name.value;
    let event_sport = this.refs.event_sport.value;
    let event_street = this.refs.event_street.value;
    let event_city = this.refs.event_city.value;
    let event_zip = this.refs.event_zip.value;
    let event_date = this.refs.event_date.value;
    let skill_level = this.refs.skill_level.value;
    let event_time = this.refs.event_time.value;
    let capacity = this.refs.capacity.value;
    let event_state = this.refs.event_state.value;
    let venue = this.refs.venue.value;
    let active = true;
    let description = this.refs.description.value;

    this.props.dispatch(editUserEventCard(this.props.userEvent.id, event_name, event_sport, event_date, event_time, capacity, venue,
                                event_street, event_city, event_state, event_zip, skill_level, description, active ));
    this.toggleEdit();
  }

  componentDidMount() {
    $('.collapsible').collapsible();
    $('.datepicker').pickadate({
     selectMonths: true,
     selectYears: 2
   });
   $('select').material_select();
  }

  componentDidUpdate() {
    $('.collapsible').collapsible();
    $('.datepicker').pickadate({
     selectMonths: true,
     selectYears: 2
   });
   $('select').material_select();
  }

  handleClick(e) {
    e.preventDefault();
  }
  edit() {
    let { name, description, sport, venue, capacity, street, city, state, zip, skill_level, date, time } = this.props.userEvent;
    let timeFormat = moment(time, 'YYYY MM DD hh:mm:ss z' ).format('hh:mm');
    return(
      <div >
        <ul className="collapsible" data-collapsible="accordion" >
          <li>
            <div className='col s3 sport-image-container'>
              <img className='responsive-img sport-image' src='basketball.jpg' alt='Basketball Icon' />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <h5><input type='text' defaultValue= {name}  placeholder='Rec Basketball' ref='event_name' required /></h5>
              </div>
              <div>
                <em><input type='text' defaultValue= {sport}  placeholder='Bball' ref='event_sport' required /></em>
              </div>
              <div>
                <em><input type='text' defaultValue= {venue}  placeholder='Fun Arena' ref='venue' required /></em>
              </div>
              <div>
                <em><input type='text' defaultValue= {capacity}  placeholder='number' ref='capacity' required /></em>
              </div>
              <div>
                <em><input type='text' defaultValue={street}  placeholder='1234 USA Drive' ref='event_street' required /></em>
              </div>
              <div>
                <em><input type='text' defaultValue= {city}  placeholder='Salt Lake City' ref='event_city' required /></em>
              </div>
              <div>
                <em><input type='text' defaultValue= {state}  placeholder='UT' ref='event_state' required /></em>
              </div>
              <div>
                <em><input type='number' defaultValue= {zip}  placeholder='84011' ref='event_zip' required /></em>
              </div>

                <div className='col s8 offset-s2'>
                  <label className='center'> Skill Level </label>
                  <select ref='skill_level' className='placeholder' defaultValue={skill_level} required>
                    <option value="" disabled> </option>
                    <option value='Open'> Open </option>
                    <option value='AA'> AA </option>
                    <option value='A'> A </option>
                    <option value='B'> B </option>
                    <option value='Novice'> Novice </option>
                    <option value='Everyone'> Everyone </option>
                  </select>
                </div>

                <br />
                <div>
                  Description: <textarea defaultValue= {description}  placeholder='Write Description Here...' ref='description'></textarea>
                </div>
                <br />
                <div>
                  Date: <i><input type='date' defaultValue={date}  className='datepicker' ref='event_date' required /></i>
                </div>
                <div>
                  Time: <i><input type='time' defaultValue={timeFormat}  ref='event_time' required /></i>
                </div>
                <div>
                  <textarea placeholder="comment..."></textarea>
                </div>
                <div>
                  <button type='submit' className='btn green comment-btn'>Save</button>
                  <button type='button' onClick={this.toggleEdit} className='btn orange comment-btn right'>Cancel</button>
                </div>
              </form>

          </li>
        </ul>
      </div>
    );
  }

  display() {
    let sportEvent = this.props.userEvent;

    let dateFormat = moment(sportEvent.date ).format('MMMM Do YYYY');
    let timeFormat = moment(sportEvent.time, 'YYYY MM DD hh:mm:ss z' ).format('h:mm a');

    let id = `userEvent-${this.props.userEvent.id}`
    return(
      <div>
        <ul className="collapsible" data-collapsible="accordion" >
          <li>
            <div className='col s3 sport-image-container'>
              <img className='responsive-img sport-image' src='http://res.cloudinary.com/omash612/image/upload/v1483467364/basketball_wssdhp.jpg' alt='Basketball Icon' />
            </div>
            <div>
              <h5 id={id}>{ sportEvent.name }</h5>
            </div>
            <div>
              <em>{ sportEvent.street }</em>
            </div>
            <div>
              <em>{ sportEvent.city }, { sportEvent.state }</em>
            </div>
            <div>
              <em>{ sportEvent.zip }</em>
            </div>
            <div className="collapsible-header">
              <a href='#' className='right' onClick={this.handleClick}> Show More </a>
            </div>

            <div className="collapsible-body" style={{ padding: '10px' }}>
              <div>
                Skill Level: <i>{ sportEvent.skill_level }</i>
              </div>
              <br />
              <div>
                Description: { sportEvent.description }
              </div>
              <br />
              <div>
                Date: <i>{ dateFormat }</i>
              </div>
              <div>
                Time: <i>{ timeFormat }</i>
              </div>
              <br />
              <div>
                Location: <i>{ sportEvent.venue }</i>
              </div>
              <div>
                Capacity: <i>{ sportEvent.capacity }</i>
              </div>
              <div>
                <textarea placeholder="comment..."></textarea>
              </div>
              <div>
                <button type='button' className='btn green comment-btn'>Submit</button>
                <button type='button' onClick={() => this.props.dispatch(deleteUserEventCard(sportEvent.id))} className='btn red comment-btn right'>Delete</button>
                <button type='button' onClick={this.toggleEdit} className='btn orange comment-btn right'>Edit</button>
              </div>

            </div>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    if(this.state.edit) {
      return(this.edit());
    }else{
      return(this.display());
    }
  }
}



export default connect() (UserEventCard);
