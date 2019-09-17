//user registration
export const registerUser = async (user, dispatch) => {
    const { username, email, password } = user;
  try {
   const registerRes = await fetch("/user/register", { method: "POST",
    mode: "cors", cache: "no-cache", headers: { "Content-Type":
    "application/json"
   },
   redirect: "follow", referrer: "no-referrer", body: JSON.stringify({
     username, email, password })
   });
  const { token, success, user: registeredUser } = await 
   registerRes.json();
  if (success) {
    dispatch({ type: REGISTER_USER, registeredUser, success });
     console.log(`${user.username}'s account was REGISTERED and set in 
     localstorage`);
  return localStorage.setItem( "authenticated-user", JSON.stringify({
    token, username: registeredUser.username, id: registeredUser._id
   })
  );
  }
  } catch (error) {
    console.error(error);
    return dispatch({ type: ERROR, message: error.message });
   }
  };