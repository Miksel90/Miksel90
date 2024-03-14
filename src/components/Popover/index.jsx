import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FcTwoSmartphones } from "react-icons/fc";

function PopoverContact() {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key="right"
        placement="right"
        overlay={
          <Popover id="popover-positioned-right">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        }
      >
        <Button
          variant="primary p-1 m-1 fs-3 align-items-center"
          className="shadowText"
          style={{
            color: "white",
            backgroundColor: "transparent",
            border: "2px white solid",
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
