import React from "react";

// Style
import style from "../../css/sections/Sections.module.css";

// React bootstrap
import { Col, Row } from "react-bootstrap";

// Images
import menuItemOne from "../../img/menu-1.jpg";
import menuItemTwo from "../../img/menu-2.jpg";
import menuItemThree from "../../img/menu-3.jpg";

// Components
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems = [
    {
      sectionName: "Hot Coffee",
      items: [
        {
          itemId: 1,
          itemImg: menuItemOne,
          itemPrice: "$5",
          itemName: "Black Coffee",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
          itemCount: 0,
          itemTotalPrice: "$5",
        },
        {
          itemId: 2,
          itemImg: menuItemTwo,
          itemPrice: "$7",
          itemName: "Chocolete Coffee",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
          itemCount: 0,
          itemTotalPrice: "$7",
        },
        {
          itemId: 3,
          itemImg: menuItemThree,
          itemPrice: "$9",
          itemName: "Coffee With Milk",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
          itemCount: 0,
          itemTotalPrice: "$9",
        },
      ],
    },
    {
      sectionName: "Cold Coffee",
      items: [
        {
          itemId: 4,
          itemImg: menuItemOne,
          itemPrice: "$5",
          itemName: "Black Coffee",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
          itemCount: 0,
          itemTotalPrice: "$5",
        },
        {
          itemId: 5,
          itemImg: menuItemTwo,
          itemPrice: "$7",
          itemName: "Chocolete Coffee",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
          itemCount: 0,
          itemTotalPrice: "$7",
        },
        {
          itemId: 6,
          itemImg: menuItemThree,
          itemPrice: "$9",
          itemName: "Coffee With Milk",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
          itemCount: 0,
          itemTotalPrice: "$9",
        },
      ],
    },
  ];
  return (
    <div className={`container ${style.menu}`}>
      <div className={style.title}>
        <SectionTitle name="Menu & Pricing" title="Competitive Pricing" />
      </div>
      <div className={style.menu_container}>
        <Row>
          {menuItems.map((menuItem, index) => {
            return (
              <Col key={index} lg={6}>
                <Row>
                  <Col lg={12}>
                    <div className={style.menu_heading}>
                      <h1 className="mb-5">{menuItem.sectionName}</h1>
                    </div>
                  </Col>
                  {menuItem.items.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        id={item.itemId}
                        img={item.itemImg}
                        price={item.itemPrice}
                        name={item.itemName}
                        description={item.itemDescription}
                        count={item.itemCount}
                        itemTotalPrice={item.itemTotalPrice}
                      />
                    );
                  })}
                </Row>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Menu;
