import { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};
const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null
};
const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload;
    return {
      ...state,
      ...(
        // if payload (user) is provided, then is authenticated
        user
          ? ({
            isAuthenticated: true,
            isLoading: false,
            user
          })
          : ({
            isLoading: false
          })
      )
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    };
  }
};
const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);
export const AuthContext = createContext({ undefined });
export const AuthProvider = (props) => {
  const [usuarioLogado, setUsuarioLogado] = useState([])
  const [userState, setUserState] = useState([])
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);
  const [modeDarkLight, setModeDarkLight] = useState('light');


  const initialize = async () => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;
    let isAuthenticated = false;
    try {
      isAuthenticated = window.sessionStorage.getItem('authenticated') === 'true';
    } catch (err) {
      console.error(err);
    }
    if (isAuthenticated) {
      const user = {
        id: '5e86809283e28b96d2d38537',
        avatar: '/assets/avatars/avatar-anika-visser.png',
        name: userState.name,
        email: 'anika.visser@devias.io'
      };
      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: user
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE
      });
    }
  };
  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const skip = () => {
    try {
      window.sessionStorage.setItem('authenticated', 'true');
    } catch (err) {
      console.error(err);
    }
    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: userState.name,
      email: 'anika.visser@devias.io'
    };
    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    });
  };
  const checkAuthorization = async (authorization) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': authorization
    };
    const response = await fetch('seu ip/auth/user', {
      method: 'POST',
      headers: headers
    });
    if (response.ok) {
      const user = await response.json();
      setUserState(user)
      return user;
    } else {
      throw new Error('Error checking authorization');
    }
  }
  const signIn = async (nip, senha) => {
    const response = await fetch('seu ip/login', {
      method: 'POST',
      body: JSON.stringify({ nip, senha })
    });
    if (!response.ok) {
      throw new Error('Falha no Login');
    }
    const authToken = response.headers.get('Authorization');
    window.sessionStorage.setItem('Authorization', authToken);
    checkAuthorization(authToken)
    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: userState.name,
      email: 'anika.visser@devias.io'
    };
    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    });
  };
  const signUp = async (nip, name, senha) => {
    throw new Error('Sign up is not implemented');
  };
  const signOut = () => {
    dispatch({
      type: HANDLERS.SIGN_OUT
    });
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
        signOut,
        userState,
        setModeDarkLight,
        modeDarkLight,
      }}>{children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node
};
export const AuthConsumer = AuthContext.Consumer;
export const useAuthContext = () => useContext(AuthContext);