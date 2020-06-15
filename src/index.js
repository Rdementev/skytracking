import React from 'react'
import PageLogin from './Login'
import {Provider} from "react-redux";
import store from "./Login/Core/store";

export const ExampleComponent = () => {
  return (
    <Provider store={store}>
      <PageLogin/>
    </Provider>
  )
}
