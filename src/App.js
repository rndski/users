import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import AppContent from "./Components/AppContent";
import "./App.css";
import AppContextProvider from "./Data/AppContext";
import { CssBaseline } from "@material-ui/core";
import UIContextProvider from "./Data/UIContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline>
          <AppContextProvider>
            <div className="content">
              <UIContextProvider>
                <NavBar />
                <AppContent />
              </UIContextProvider>
            </div>
          </AppContextProvider>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
