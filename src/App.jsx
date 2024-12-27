import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction"

function App()
{
     const [ toggale,setToggale] = useState(true);

  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn"onClick={()=>setToggale(!toggale)}>{toggale?"Fiction Books":"NonFiction Books"}</button>

      <div data-testid="conditional-container">
      {/* <Fiction/>
      <NonFiction/> */}
        {
          (toggale?<Fiction/>:<NonFiction/> )

        }
        
      </div>
    </div>
  );
}

export default App;