import React from "react"
import { MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from "react-redux";
import Event from "./event";
import ModalWrapper from "./modalWrapper";
import { addAgendum } from "../actions/agenda"


const EventList = (props) => {

    return (
        <React.Fragment>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="9" className="mb-r">
                        <h2 className="text-uppercase my-3">Today :</h2>
                        <div id="schedule-items">
                            {
                                props.events.map((event) => (
                                    <Event
                                        key={event.id}
                                        {...event}
                                        onDelete={false}
                                    />
                                ))}
                                </div>
                        <MDBRow className="mb-4">
                            <ModalWrapper onSubmitAgenda={(agendum) => {
                                props.dispatch(addAgendum(agendum));
                            }} />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="3">
                        <h3 className="text-uppercase my-3">Schedule</h3>
                        <h6 className="my-3">
                            It's going to be busy that today. You have{" "}
                            <b>{props.events.length} events </b> today.
                            </h6>
                        <h1 className="my-3">
                            <MDBRow>
                                <MDBCol xs="3" className="text-center">
                                    <MDBIcon icon="sun" fixed />
                                </MDBCol>
                                <MDBCol xs="9">Sunny</MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol xs="3" className="text-center">
                                    <MDBIcon icon="thermometer-three-quarters" fixed />
                                </MDBCol>
                                <MDBCol xs="9">23°C</MDBCol>
                            </MDBRow>
                        </h1>
                        <p>
                            Don't forget your sunglasses. Today will dry and sunny, becoming
                            warm in the afternoon with temperatures of between 20 and 25
                            degrees.
              </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>);
}

const mapStateToProps = (state) => {
    return { events: state };
}

export default connect(mapStateToProps)(EventList)
