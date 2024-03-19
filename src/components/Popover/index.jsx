import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FcTwoSmartphones, FcAddressBook } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function PopoverContact() {
  const [placement, setPlacement] = useState("bottom");

  useEffect(() => {
    const updatePlacement = () => {
      if (window.innerWidth >= 1000) {
        setPlacement("right");
      } else {
        setPlacement("bottom");
      }
    };

    window.addEventListener("resize", updatePlacement);
    updatePlacement();

    return () => window.removeEventListener("resize", updatePlacement);
  }, []);

  return (
    <>
      <OverlayTrigger
        trigger="click"
        key={placement}
        placement={placement}
        style={{ width: "300px" }}
        overlay={
          <Popover id="popover-basic">
            <Popover.Body className="fs-3 p-0 d-flex flex-column">
              <ul className="mt-2 d-flex flex-wrap ">
                <li className="mb-1 d-flex flex-wrap">
                  <strong>
                    <FcAddressBook
                      style={{ fontSize: "30px", marginBottom: "10px" }}
                    />
                    Email:{" "}
                  </strong>
                  <p style={{ wordBreak: "break-all" }}>
                    {" "}
                    Mikael.selstad@gmail.com
                  </p>
                </li>
                <li className="mb-1">
                  <strong>
                    <FaGithub
                      style={{ fontSize: "30px", marginBottom: "10px" }}
                    />
                    Github:{" "}
                  </strong>
                  <a
                    href="https://github.com/Miksel90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Miksel90
                  </a>
                </li>
                <li className="mb-1">
                  <strong>
                    <IoLogoLinkedin
                      style={{ fontSize: "30px", marginBottom: "8px" }}
                    />
                    LinkedIn:{" "}
                  </strong>
                  <a
                    href="https://www.linkedin.com/in/mikael-selstad-921251279"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mikael Selstad
                  </a>
                </li>
              </ul>
            </Popover.Body>
          </Popover>
        }
      >
        <Button
          variant="primary p-2 m-1 fs-3 align-items-center mb-5"
          className="shadowText"
          style={{
            color: "white",
            backgroundColor: "transparent",
            border: "2px white solid",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)",
          }}
        >
          Contact Me
          <FcTwoSmartphones
            style={{ fontSize: "40px", marginBottom: "5px", color: "white" }}
          />
        </Button>
      </OverlayTrigger>
    </>
  );
}

export default PopoverContact;
