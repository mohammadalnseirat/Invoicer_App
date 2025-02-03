import { useState, useEffect, createContext } from "react";
import netlifyIdentity from "netlify-identity-widget";

//! initialize the context:
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});
