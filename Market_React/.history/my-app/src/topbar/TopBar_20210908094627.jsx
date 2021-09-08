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
            <li className="topListItem">RATE PLAN </li> 
            <li className="topListItem"> | </li>
          </ul>
        </div>
        <div className="topRight">
          <ul className="topList">
            <li className="topListItem">LOGIN</li>
            <li className="topListItem">APPLY FOR FREE USE</li>
          </ul>
        </div>
      </div>
    )
}
