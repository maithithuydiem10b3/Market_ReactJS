import "./header.css";
var img = document.createElement('img');

export default function Header() {
    return (
      <div>
      {/* banner header */}
      <div className="header">
        <img.src =  alt="" className="headeImg" />
        <div className="headerAll">
          <button className="btn-lorem">LOREM ISPUM</button>
          <i className="Iconright fas fa-long-arrow-alt-right a" />
          <button className="market-lauch">MAKET <br /> LAUCHING!</button>
          <i className="Iconright fas fa-long-arrow-alt-right a" />
          <button className="btn-lorem">LOREMISPUM</button>   
        </div>
      </div>
      <div className="headernext">
        <img src={window.location.origin + '../../my-app/img/hinh1.jpg'} alt="" className="bannerImage" />
        <div className="bannerTitle">
          <h1>WHAT HAPPENED !</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid similique ex repellendus vero nam consectetur! Velit ab architecto voluptatibus rem veritatis quod, nesciunt, voluptate inventore quia eius nam deserunt.
          </p>
        </div>
      </div>
      {/* Best Product */}
      <div className="banner">
        <div className="bannerProduct">
          <img src="../my-app/img/background.jpg" alt="" className="background" />
          <div className="bannerProductTittle">
            <h1>BEST PRODUCT</h1>
            <p id="productTittle">How to create mobile-optimizes videos in minutes. Not a disigner, every team makes a lot of videos. Can be trimmed. Take the first.
            </p>
          </div>
          <div className="bannerProductMobile">
            <div className="ProductMobile">
              <div className="ProductMobileNumber">
                <img src="../my-app/img/star.png" alt="" className="Productstar" />
                <span id="number">01</span>
              </div>
              <img src="../my-app/img/9.jpg" alt="" className="ProductMobileImg" />
              <div className="ProductMobileInfo">
                <span className="productMobileTitle">How to create mobile-optimized</span>
                <div className="ProductMobile-go">
                  <a href>GO</a>
                </div>
              </div>
            </div>
            <div className="ProductMobile">
              <div className="ProductMobileNumber">
                <img src="../my-app/img/star.png" alt="" className="Productstar" />
                <span id="number">01</span>
              </div>
              <img src="../my-app/img/10.jpg" alt="" className="ProductMobileImg" />
              <div className="ProductMobileInfo">
                <span className="productMobileTitle">How to create mobile-optimized</span>
                <div className="ProductMobile-go">
                  <a href>GO</a>
                </div>
              </div>
            </div>
            <div className="ProductMobile">
              <div className="ProductMobileNumber">
                <img src="../my-app/img/star.png" alt="" className="Productstar" />
                <span id="number">01</span>
              </div>
              <img src="../my-app/img/26.jpg" alt="" className="ProductMobileImg" />
              <div className="ProductMobileInfo">
                <span className="productMobileTitle">How to create mobile-optimized</span>
                <div className="ProductMobile-go">
                  <a href>GO</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="products">
        <div className="cards">
          <div className="card">
            <img src="../my-app/img/1.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/2.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/3.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/4.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/5.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/6.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/7.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/8.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/9.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/10.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/11.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/12.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/13.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/14.jpg" alt="" className="card-image" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/15.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/16.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/17.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/18.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/19.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/20.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/21.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/22.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/23.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/24.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../my-app/img/25.jpg" alt="" className="card-Img" />
            <div className="card-content">
              <div className="card-top">
                <li className="card-tittle">
                  [What happend] How to create
                </li>
              </div>
              <div className="card-bottom">
                <div className="card-price">2,500 won</div>
                <div className="card-like">
                  <i className="fas fa-heart" />
                  <span>236</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="card-btn">SEE MORE</button>
      </div>
      {/* BrandStory */}
      <div className="brand">
        <div className="brandStory">
          <img src="../my-app/img/brand.jpg" alt="" className="brandImg" />
          <div className="brandTittle">
            <h1>BRAND STORY</h1>
            <p id="contentTitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quod provident veritatis qui.
              adipisicing elit. Dolorum quod provident veritatis qui.
            </p>
          </div>
        </div>
        <div className="brandSm">
          <div className="title">COLLABORATION</div>
          <img src="../my-app/img/brandimg.jpg" alt="" className="brandImg" />
          <div className="brandSmTittle">
            <h3>WHAT HAPPENED'S BRAND SROTY</h3>
            <p id="br-title">?????? ??? ?????? ??? ?????? , ????????? . ?????? ?????? ????????? ?????? ?????? ??? ??? ?????? ??? ?????? ??? ??? ????????? ?????? . ??? ?????? ??? ?????? ?????? ?????? ?????? ??? ?????? ?????? ?????? ?????? , ????????? . ??? ?????? ??? ?????? ????????? ?????? ??? ?????? ??? ????????? . ?????? ?????? ????????? ??? ?????? . ?????? ??? ?????? ?????? ?????? ??? ??? ????????? ????????? ????????? ??? ?????? . ????????? ?????? ??? ?????? ?????? ?????? ??? ??? ????????? ???????????? ?????? ??? ?????? ?????? ?????? ?????? ?????? ??? ?????? ??? ?????? .</p>
            <button className="brand-btn card-btn">SEE MORE</button>
          </div>
        </div>
      </div>
      {/* Happened's Issue */}
      <div className="bannerHappend">
        <div className="happenedTop">
          <img src="../my-app/img/img.png" alt="" className="happenedImg" />
          <div className="happenedTittle">
            <h1>HAPPENED'S ISSUE</h1>
            <p id="happenedText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quod provident veritatis qui.
              adipisicing elit. Dolorum quod provident veritatis qui.
            </p>
          </div>
          <button className="happend-btn card-btn">SEE MORE</button>
        </div>
        <div className="HappendBottom">
          <img src="../my-app/img/28.jpg" alt="" className="HappenTopImg" />
        </div>
      </div>
      {/* WHAT HAPPENED */}
      <div className="happenedNext">
        <div className="happenedPostert">
          <img src="../my-app/img/hinhanh.png" alt="" className="PostertImg" />
          <div className="happenedNextTittle">
            <h1>WHAT HAPPENED</h1>
            <p id="happenedNextText">
              How to create mobile-optimizes videos in minutes. Not a disigner, every team makes a lot of videos. Can be trimmed. Take the first.
            </p>
            <img className="poster" src="../my-app/img/poster2.png" alt="" />
          </div>
          <button className="happenedNext-btn card-btn">SEE MORE</button>
        </div>
      </div>
    </div>
    );
}
