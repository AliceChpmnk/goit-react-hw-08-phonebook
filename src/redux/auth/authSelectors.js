const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUseremail = state => state.auth.user.email;
const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUseremail,
  selectIsRefreshing,
};
export default authSelectors;