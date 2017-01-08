import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin, handleFacebookLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';
import FacebookLogin from 'react-facebook-login';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('body').css('background-image', "url(http://res.cloudinary.com/omash612/image/upload/c_scale,w_2216/v1483592932/baseballMit_vlwj1y.jpg)");
    $('body').css('background-position', '100% 70%');
    $('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'no-repeat');
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.refs;
    let user = { user: {
      email: email.value,
      password: password.value
    }}

    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: user
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.history.push("/userEvents")
    }).fail( err => {
      let message = err.responseJSON.error;
      this.props.dispatch(setFlash(message, 'error'))
    });
  }

  responseFacebook = (auth) => {
    this.props.dispatch(handleFacebookLogin(auth, this.props.history))
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col s3 offset-s9 center'>
            <h2 className='white-text'>Login</h2>
          </div>
        </div>
          <form  onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='col s3 offset-s9 right'>
                <label className='left white-text'> Email </label>
                <input className='login-caret white-text' type="email" required={true} ref="email" />
              </div>
            </div>
            <div className='row'>
              <div className='col s3 offset-s9 right'>
                <label className='left white-text'> Password </label>
                <input className='login-caret white-text' type="password" required={true} ref="password" />
              </div>
            </div>
            <div className='row'>
              <div className='col s3 offset-s9 center'>
                <input type='submit' value='Game On' className="btn blue" />
              </div>
            </div>
          <div className='row'>
            <div className='col s3 offset-s9 center'>
              <FacebookLogin
                appId = '1653601048266232'
                autoLoad = { false }
                fields = 'name, email'
                className = 'facebook-button'
                icon = 'fa-facebook'
                callback = { this.responseFacebook } />
            </div>
          </div>
        </form>
      </div>
    )
  }

}

export default connect()(SignIn);
