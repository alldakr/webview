import React from "react";

const WarrantStateContext = React.createContext();
const WarrantDispatchContext = React.createContext();

function warrantReducer(state, action) {
  switch (action.type) {
    case "SET_WARRANT":
      console.log("tempArr: ", [...state.warrantData]);
      return {
        ...state,
        warrantData: [...state.warrantData, action.data],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function WarrantProvider({ children }) {
  const [state, dispatch] = React.useReducer(warrantReducer, {
    warrantData: [],
  });
  return (
    <WarrantStateContext.Provider value={state}>
      <WarrantDispatchContext.Provider value={dispatch}>
        {children}
      </WarrantDispatchContext.Provider>
    </WarrantStateContext.Provider>
  );
}

function useWarrantState() {
  var context = React.useContext(WarrantStateContext);
  if (context === undefined) {
    throw new Error("useWarrantState must be used within a WarrantProvider");
  }
  return context;
}

function useWarrantDispatch() {
  var context = React.useContext(WarrantDispatchContext);
  if (context === undefined) {
    throw new Error("useWarrantDispatch must be used within a WarrantProvider");
  }
  return context;
}

export { WarrantProvider, useWarrantState, useWarrantDispatch, setMyWarrant };

// ###########################################################
function setMyWarrant(dispatch, data) {
  dispatch({
    type: "SET_WARRANT",
    data: data,
  });
}
