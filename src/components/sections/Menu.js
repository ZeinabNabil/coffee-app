import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "../../css/sections/AboutUS.module.css";
import SectionTitle from "../SectionTitle";
import menuItemOne from "../../img/menu-1.jpg";
import menuItemTwo from "../../img/menu-2.jpg";
import menuItemThree from "../../img/menu-3.jpg";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems = [
    {
      sectionName: "Hot Coffee",
      items: [
        {
          itemImg: menuItemOne,
          itemPrice: "$5",
          itemName: "Black Coffee",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        },
        {
          itemImg: menuItemTwo,
          itemPrice: "$7",
          itemName: "Chocolete Coffee",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        },
        {
          itemImg: menuItemThree,
          itemPrice: "$9",
          itemName: "Coffee With Milk",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        },
      ],
    },
    {
      sectionName: "Cold Coffee",
      items: [
        {
          itemImg: menuItemOne,
          itemPrice: "$5",
          itemName: "Black Coffee",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        },
        {
          itemImg: menuItemTwo,
          itemPrice: "$7",
          itemName: "Chocolete Coffee",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        },
        {
          itemImg: menuItemThree,
          itemPrice: "$9",
          itemName: "Coffee With Milk",
          itemDescription:
            "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
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
          {menuItems.map((menuItem) => {
            return (
              <Col lg={6}>
                <Row>
                  <Col lg={12}>
                    <div className={style.menu_heading}>
                      <h1 class="mb-5">{menuItem.sectionName}</h1>
                    </div>
                  </Col>
                  {menuItem.items.map((item) => {
                    return (
                      <MenuItem
                        img={item.itemImg}
                        price={item.itemPrice}
                        name={item.itemName}
                        description={item.itemDescription}
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
