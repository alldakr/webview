import React from "react";

const BuyHistStateContext = React.createContext();
const BuyHistDispatchContext = React.createContext();

function buyHistReducer(state, action) {
  switch (action.type) {
    case "SET_WARRANT":
      const tempArr = [...state.buyHistData];
      const newEle = action.data;
      const arr = tempArr.map((data) => {
        if (data.id === newEle.id) {
          data.issued = true;
        }
        return data;
      });
      return {
        ...state,
        buyHistData: [...arr],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function BuyHistProvider({ children }) {
  const [state, dispatch] = React.useReducer(buyHistReducer, {
    buyHistData: [
      {
        id: 1,
        issued: false,
        title: "보테가베네타",
      },
      {
        id: 2,
        issued: false,
        title: "보테가베네타",
      },
      {
        id: 3,
        issued: false,
        title: "보테가베네타",
      },
    ],
  });
  return (
    <BuyHistStateContext.Provider value={state}>
      <BuyHistDispatchContext.Provider value={dispatch}>
        {children}
      </BuyHistDispatchContext.Provider>
    </BuyHistStateContext.Provider>
  );
}

function useBuyHistState() {
  var context = React.useContext(BuyHistStateContext);
  if (context === undefined) {
    throw new Error("useBuyHistState must be used within a BuyHistProvider");
  }
  return context;
}

function useBuyHistDispatch() {
  var context = React.useContext(BuyHistDispatchContext);
  if (context === undefined) {
    throw new Error("useBuyHistDispatch must be used within a BuyHistProvider");
  }
  return context;
}

export { BuyHistProvider, useBuyHistState, useBuyHistDispatch, setBuyHist };

// ###########################################################
function setBuyHist(dispatch, data) {
  dispatch({
    type: "SET_WARRANT",
    data: data,
  });
}
