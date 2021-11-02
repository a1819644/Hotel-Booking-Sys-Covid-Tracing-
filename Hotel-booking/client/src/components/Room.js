import React, { useState , useEffect } from "react";
import { Modal, Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import Map from "./Map";

function Room({ room, fromdate, todate }) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row m-3 p-3 bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="img-fluid" />
      </div>
      <div className="col-md-8">
        <h1>{room.name}
          <button className="btn btn-info btn-sm m-2">4.5/5</button> <button className="btn btn-info btn-sm m-1">map</button>
        </h1>
        <p style={{ color: "green" }}>
          4 km from centre
        </p>
        <p>Parking , Reception , Free Wifi</p>
        <p>
          Max Count : {room.maxcount}
        </p>
        <p>
          Contact : {room.phonenumber}
        </p>
        <p>
          Type : {room.type} 
        </p>

        <p>
          Covid-19 Safety Index : 98/100
        </p>

        <div style={{ float: "right" }}>
        <Map />
          {(fromdate && todate) && (<Link to={`/book/${room._id}/${fromdate}/${todate}`}>
            <button className="btn btn-dark m-2">Book Now</button>
          </Link>)}

          <button className="btn btn-danger m-2"  onClick={handleShow}>
            View
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" data--aos='zoom-in'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Carousel nextLabel="" prevLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    src={url}
                    className="img-fluid"
                    style={{ height: "350px" }}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>Description</p>
          <p>{room.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
