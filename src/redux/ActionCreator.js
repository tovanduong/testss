import * as ActionType from './ActionType'

export const fectstaff = () =>  (dispatch) => {
    return fetch('https://rjs101xbackend.herokuapp.com/staffs')
    .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((staff) => dispatch(add_staff(staff)))
      .catch((error) => dispatch(StaffsFailed(error.message)));
}

export const add_staff = (staff) => ({
    type: ActionType.ADD_STAFFS,
    payload: staff
})

export const StaffsFailed = (errmess) => ({
    type: ActionType.STAFFS_FAILED,
    payload: errmess,
});
  