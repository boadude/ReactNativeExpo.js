export default function(dispatch, type, message = null) {
  return new Promise(async resolve =>
    resolve(
      dispatch({
        type: "MESSAGES_REPLACE",
        [type]: message
      })
    )
  );
}
