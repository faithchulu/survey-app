import { createContext } from 'react';

const UserContext = createContext({
  loggedInUsername: '',
  setLoggedInUsername: () => {},
  userId: null,
  setUserId: () => {}
});

export default UserContext;
