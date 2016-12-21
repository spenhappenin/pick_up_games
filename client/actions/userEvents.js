export const fetchUserEvents = () => {
  return(dispatch) => {
    $.ajax({
      url: '/api/events',
      type: 'GET',
      dataType: 'JSON'
    }).done( userEvents => {
      dispatch({ type: 'ALL_USER_EVENTS', userEvents });
    }).fail( data => {
      console.log(data);
    });
  }
}
