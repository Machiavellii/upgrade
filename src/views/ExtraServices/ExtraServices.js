/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  BookNow,
  BookContent,
  BookTitle,
  NextButton,
  BookTab,
  Flex,
  FlexBetween,
  CollapseHidden,
  CollapseArrow,
  Price,
  CheckboxChecked,
} from "./ExtraServicesStyled";
import arrow from "../../assets/icons/arrow.svg";
import check from "../../assets/icons/check.svg";

import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";

import ServicesContext from "../../context/services/servicesContext";
import Spinner from "../../components/layout/Spinner";

const ExtraServices = () => {
  const [isCheck, setIsCheck] = useState([]);
  const [collapse, setCollapse] = useState([]);

  const servicesContext = useContext(ServicesContext);

  const {
    loading,
    services: { data },
    getServices,
  } = servicesContext;

  useEffect(() => {
    getServices();
    //eslint-disable-next-line
  }, []);

  const toggleCollapse = (i) => {
    let collapseCopy = [...collapse];
    collapseCopy[i] = !collapseCopy[i];
    setCollapse(collapseCopy);
  };

  const toggleCheck = (i) => {
    let checkCopy = [...isCheck];
    checkCopy[i] = !checkCopy[i];
    setIsCheck(checkCopy);
  };

  // console.log(data, loading);

  return (
    <BookNow>
      <Sidebar />
      <BookContent>
        <BookTitle>Do you need some extra services?</BookTitle>

        <>
          {loading || data === undefined ? (
            <Spinner />
          ) : (
            data.map((service, i) => (
              <BookTab key={i}>
                <FlexBetween>
                  <Flex
                    id="arrow"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleCollapse(i)}
                  >
                    <img
                      src={service.image_url}
                      alt="Area"
                      style={{ width: "2rem" }}
                    />
                    <p style={{ marginLeft: 20 }} className="arrow">
                      {service.name}
                    </p>
                    <CollapseArrow
                      src={arrow}
                      alt="arrow"
                      className="ml-3"
                      collapsed={collapse[i]}
                    />
                  </Flex>
                  <Flex>
                    <CheckboxChecked onClick={() => toggleCheck(i)}>
                      {isCheck[i] && <img src={check} alt="Area" />}
                    </CheckboxChecked>
                  </Flex>
                </FlexBetween>

                <Collapse isOpen={collapse[i]}>
                  <CollapseHidden>
                    <p>{service.description}</p>

                    <Price>${service.price}</Price>
                  </CollapseHidden>
                </Collapse>
              </BookTab>
            ))
          )}
        </>

        <Link to="/AdditionalQuestions">
          <NextButton>next</NextButton>
        </Link>
      </BookContent>
    </BookNow>
  );
};

// const TabCollapse = (props) => {
//   return (
//     <BookTab>
//       <FlexBetween>
//         <Flex>
//           <img src={props.icon} alt="Area" />
//           <p style={{ marginLeft: 20 }}>{props.title}</p>
//           <CollapseArrow
//             collapsed={false}
//             src={arrow}
//             alt="arrow"
//             className="ml-3"
//           />
//         </Flex>
//         <Flex>
//           <Checkbox></Checkbox>
//         </Flex>
//       </FlexBetween>
//     </BookTab>
//   );
// };

export default ExtraServices;
