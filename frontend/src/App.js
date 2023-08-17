import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./pages/home.jsx"
import { Sales } from "./pages/sales.jsx"
import { Coupons } from "./pages/coupons.jsx"
import { Cart } from "./pages/cart.jsx"
import { CouponContext } from "./contexts/couponcontext.js"

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
});

function App() {
  const [code, setCode] = useState({});

  return (
    <>

      <ThemeProvider theme={theme}>
        <CouponContext.Provider value={{ code, setCode }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/sales" element={<Sales />}></Route>
              <Route path="/coupons" element={<Coupons />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </Router>
        </CouponContext.Provider>
      </ThemeProvider>

    </>
  );
}

export default App;
