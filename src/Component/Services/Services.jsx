import React from "react";
import "./Services.css";
import AllComponent from "../../AllComponent/AllComponent";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
import { PiCopyFill } from "react-icons/pi";
import { AiFillSwitcher } from "react-icons/ai";
import { AiOutlineGroup } from "react-icons/ai";
import { BiCommand } from "react-icons/bi";

const Services = () => {
  const allService = [
    {
      id: 1,
      icon: <FaBarsStaggered />,
      title: "Web Development",
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 2,
      icon: <PiCopyFill />,
      title: "UI/UX Design",
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 3,
      icon: <IoIosCopy />,
      title: "Digital Marketing",
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 4,
      icon: <AiFillSwitcher />,
      title: "Graphic Design",
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 5,
      icon: <AiOutlineGroup />,
      title: "Web Design",
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      id: 6,
      icon: <BiCommand />,
      title: "Motion Design",
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
  ];
  return (
    <>
      <div className="service__bg">
        <div className="container">
          <div className="sercive__header">
            <AllComponent
              title={"Our Services"}
              text={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}
              Output="className"
            />

            <div className="ServiceBox__head">
              {allService?.map((item) => (
                <div className="service__box" key={item.id}>
                  <span className="service__icons">
                    {item.icon ? item.icon : "Your icon is Err !"}
                  </span>
                  <h1 className="sercive__title">
                    {item.title ? item.title : "Your title is Err !"}
                  </h1>
                  <p className="service__texts">
                    {item.text ? item.text : "Your text is Err !"}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
