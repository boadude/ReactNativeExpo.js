import axios from "axios";

import ErrorMessages from "@constants/errors";
import MessagesAction from "@common/messages/MessagesActions";

export function Login(email, password) {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      await MessagesAction(dispatch, "loading", true);

      if (!email) return reject({ message: ErrorMessages.missingEmail });
      if (!password) return reject({ message: ErrorMessages.missingPassword });

      const form = {
        email,
        password
      };

      return axios({
        method: "POST",
        url: "YOUR_API_ENDPOINT",
        data: form
      })
        .then(async response => {
          await MessagesAction(dispatch, "loading", false);

          resolve(
            dispatch({
              type: "USER_LOGIN",
              data: response.data
            })
          );
        })
        .catch(error => reject({ message: error.response.data.error }));
    }).catch(async err => {
      await MessagesAction(dispatch, "error", err.message);

      throw err.message;
    });
}

export function Logout() {
  return dispatch =>
    new Promise(async resolve => {
      resolve(
        dispatch({
          type: "USER_LOGOUT"
        })
      );
    }).catch(async err => {
      await MessagesAction(dispatch, "error", err.message);

      throw err.message;
    });
}

export function FakeLogin(email, password) {
  return dispatch =>
    new Promise(async (resolve, reject) => {
      if (!email) return reject({ message: ErrorMessages.missingEmail });
      if (!password) return reject({ message: ErrorMessages.missingPassword });

      const response = {
        token: "yesthisismyfaketoken"
      };

      return resolve(
        dispatch({
          type: "USER_LOGIN",
          data: response
        })
      );
    }).catch(async err => {
      await MessagesAction(dispatch, "error", err.message);

      throw err.message;
    });
}

export function ChangeInputLogin(name, value) {
  return dispatch =>
    new Promise(async resolve => {
      resolve(
        dispatch({
          type: "USER_CHANGE_INPUT",
          data: {
            name,
            value
          }
        })
      );
    });
}
