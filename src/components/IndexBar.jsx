import { Outlet, useNavigate } from "react-router-dom";
import MoonIcon from "../assets/images/MoonIcon.png"
import GitHubIcon from "../assets/images/GitHubIcon.png"

export default function IndexBar({ HandleClick }) {
    setTimeout( function() {
        if (HandleClick == null && document.getElementById("mobilebar-main").style.opacity == 1) {
            document.getElementById("mobilebar-main").style.opacity = "0"
        } else if (document.getElementById("mobilebar-main").style.opacity == 0) {
            document.getElementById("mobilebar-main").style.opacity = "1"
        }
    }, 100)

    

    return (
        <div className="mobilebar-main" id= "mobilebar-main">
        <button className = "mobilebar-mode-toggle" onClick={() => HandleClick(-2)} ><img className = "mobilebar-mode-icon" src = {MoonIcon}/></button>
        <button className = "mobilebar-github" onClick={() => HandleClick(-3)}><img className = "mobilebar-github-icon" src = {GitHubIcon}/></button>
        {/* <button className = "mobilebar-logout"  onClick={() => HandleClick(1)}>Home</button> */}
    </div>
    );
  }