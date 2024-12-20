import { createContext, useState } from "react";
import Header from "./header";

export const GlobalColor = createContext();
function Home() {
  const [color, setColor] = useState('green')
  const [pColor, setPColor] = useState('#022c02')
  return (
    <>
      <GlobalColor.Provider value={{ color: color, pColor: pColor }}>
        <Header />
        <div className="bg-gray">
          <h1>
            <strong>Home page</strong>
          </h1>
        </div>
      </GlobalColor.Provider>
    </>
  );
}

export default Home;
