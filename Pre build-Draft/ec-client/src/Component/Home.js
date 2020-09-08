import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import ProjectLogo from "../Img/logo.svg";
import HomeDisplay from "./HomeDisplay";
import SwipeableHome from "./SwipeableHome";

// import Button from 'react-bootstrap/Button'; this will only  bring the button module and not whole library if bootstrap

import { Button, ButtonGroup, Dropdown, MenuItem, Container } from "react-bootstrap";

function Home({ userData, userstatus, addBasketitems, userDataRefresh }) {
  const [yogaMatState, setYogaMatState] = useState("---Select Yogamats---");
  const [yogaEquipState, setYogaEquipState] = useState("---Select Equipments---");

  const [yogaClothsState, setYogaClothsState] = useState("---Select Cloths---");
  const [accessoriesState, setAccessoriesState] = useState("---Select Accessories---");
  const [showPage, setShowPage] = useState(undefined);

  const [homePage, setHomepage] = useState(undefined);
  // useEffect here when after first time it redirect from ligin page to home page so need to have user data call too
  useEffect(() => {
    userDataRefresh();
  }, [userstatus]);

  function reset() {
    setYogaMatState("---Select Yogamats---");
    setAccessoriesState("---Select Accessories---");
    setYogaClothsState("---Select Cloths---");
    setYogaEquipState("---Select Equipments---");
  }

  function yogaMatSelected(e) {
    // e.preventDefault(); uasing this will prenent to go to other links

    reset();
    setYogaMatState(e.currentTarget.textContent);
    console.log(e.currentTarget.textContent);
    tabsearch(e.currentTarget.textContent);
  }
  function equipmentSelected(e) {
    reset();
    setYogaEquipState(e.currentTarget.textContent);
    tabsearch(e.currentTarget.textContent);
  }
  function accessoriesselected(e) {
    reset();
    setAccessoriesState(e.currentTarget.textContent);
    tabsearch(e.currentTarget.textContent);
  }
  function Clothsselected(e) {
    reset();
    setYogaClothsState(e.currentTarget.textContent);
    tabsearch(e.currentTarget.textContent);
  }

  function tabsearch(selection) {
    // const headers = new Headers();
    // //  const userselection= // const datasent = { selectitem: selection };
    // let options = {
    //   method: "POST",
    //   headers,
    //   crendtials: "include",
    //   body: JSON.stringify(datasent),
    // }; let url = `http://localhost:5000/api/#/${selection}`;
    let selection1 = `/#/${selection}`;
    let customerSelection = encodeURIComponent(selection1);
    console.log(customerSelection);
    let url = `http://localhost:5000/api/${customerSelection}`;
    // this request make the http request format
    let request = new Request(url);

    (async () => {
      let tabsearchback = await fetch(request)
        .then((res) => {
          console.log(res);

          console.log("70bew");
          // console.log(res.json());
          // setHomepage(res.json());
          let y = res.json();
          console.log(y);
          return y;
        })
        .then((data1) => {
          console.log(data1); // array of object
          //   console.log(data1.key1);
          console.log(data1[0]); //object
          console.log(data1[0].price); // value from the object
          setHomepage(data1);
        })
        .catch((err) => setHomepage(undefined)); // if not data comes then it will turn page to default

      setShowPage(1);
    })();
  }
  return (
    // // TODO: <React.Fragment> its a wrapper and then we dont need to wrap around divs...
    // //FIXME:
    // //

    <React.Fragment>
      <div className="homestyle">
        <h3>
          <hr />
          <ul className="homebarstyle" size="lg">
            <li>
              {/* <Button variant="primary">Primary</Button> */}
              <Dropdown  >
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg" style={{ minWidth: "17rem" }}>
                  {yogaMatState}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenuSubItems">
                  {/* // whe delete the # it will not dispaly anything? why */}
                  {/* // we dont use yogaMatSelected() here as it will fire right away and we
                  dont want that we want when it get executed by onclick event */}
                  <Dropdown.Item href="#/Eco-YogaMats" onClick={yogaMatSelected}>
                    {/* //TODO: we can later take off the href as it doesnt seems to have any effect here */}
                    Eco-YogaMats
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Travel-YogaMats" onClick={yogaMatSelected}>
                    Travel-YogaMats
                  </Dropdown.Item>
                  <Dropdown.Item href="#/YogaMat-Towel" onClick={yogaMatSelected}>
                    YogaMat-Towel
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg" style={{ minWidth: "17rem" }}>
                  {yogaEquipState}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenuSubItems">
                  <Dropdown.Item href="#/yoga-Block&Bricks" onClick={equipmentSelected}>
                    Yoga-Block&Bricks
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Yoga-Chairs&Feetup" onClick={equipmentSelected}>
                    Yoga-Chairs&Feetup
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Yoga-Ropes&swing" onClick={equipmentSelected}>
                    Yoga-Ropes&swing
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Yoga-Belts" onClick={equipmentSelected}>
                    Yoga-Belts
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg" style={{ minWidth: "17rem" }}>
                  {yogaClothsState}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenuSubItems">
                  <Dropdown.Item href="#/Bottoms" onClick={Clothsselected}>
                    Bottoms
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Tops" onClick={Clothsselected}>
                    Tops
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Socks" onClick={Clothsselected}>
                    Socks
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg" style={{ minWidth: "17rem" }}>
                  {accessoriesState}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenuSubItems">
                  <Dropdown.Item href="#/Travelsize-SkinCare" onClick={accessoriesselected}>
                    Travelsize-SkinCare
                  </Dropdown.Item>
                  <Dropdown.Item href="#/Bath&Body" onClick={accessoriesselected}>
                    Bath&Body
                  </Dropdown.Item>
                  <Dropdown.Item href="#/WaterBottles" onClick={accessoriesselected}>
                    WaterBottles
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <hr />
        </h3>
      </div>
      <Container>
        {/* // in place of null we can set a slider window for default page */}
        {showPage ? <HomeDisplay props={homePage} addBasketitems={addBasketitems} /> : <SwipeableHome />}
        {/* // this will be the body of
        home page will display items that will be selected from the menue
        {`The user is looged in ${userstatus}and the email is ${userData}`} */}
      </Container>
    </React.Fragment>
  );
}

export default Home;