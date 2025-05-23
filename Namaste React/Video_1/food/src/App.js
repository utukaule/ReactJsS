import logo from "./assets/logo.png"

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" height="70px" />

        <div className="nav-link">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const burgerKing = {
  image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_769470.JPG",
  name:"burger king",
  cusines:['burger','american'],
  rating:'4.2' 
}

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} width="150" height="140"/>
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(",")}</h3>
      <h4>{burgerKing.rating}</h4>
    </div>
  )
}

const Body = () => {
  return (
    <>
    <div className="restro-list">

      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
    </div>
    </>
  )
}
const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
    </>
  )
}
