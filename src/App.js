import s from './App.module.scss'
import {Admin_Panel} from "./Components/Admin_panel/Admin_panel";

function App() {
  return (
    <div className={s.wrapper}>
        <div className={s.container}>
            <Admin_Panel/>
        </div>

    </div>
  );
}

export default App;
