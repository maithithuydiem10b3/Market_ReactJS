import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
        <div className="topLeft">
          <h3>What Happenned</h3>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <a href="">INTRODUCTION</a></li>
            <li className="topListItem"><a href="">SOLUTION</a></li>
            <li className="topListItem"><a href="">RATE PLAN</a> </li> 
            <li className="topListItem"> <p id="gach">|</p> </li>
          </ul>
        </div>
        <div className="topRight">
          <ul className="topList">
            <li className="topListItem"><a href="">LOGIN</a></li>
            <li className="topListItem"><a href="">APPLY FOR FREE USE</a></li>
          </ul>
        </div>
      </div>
    )
}
