import React from "react"
import { connect } from 'react-redux';
import { deleteAgendum } from "../actions/agenda"
import {  MDBIcon, MDBBadge } from "mdbreact";

const Event = (props) => {

    return (
        <React.Fragment>
            <div className="media mt-1">
                <h3 className="h3-responsive font-weight-bold mr-3">{props.time}</h3>
                <div className="media-body mb-3 mb-lg-3">
                    <MDBBadge color="danger" className="ml-2 float-right"
                        onClick={() => props.dispatch(deleteAgendum(props.id))}
                    >
                        -
                        </MDBBadge>
                    <h6 className="mt-0 font-weight-bold">{props.title}</h6>{""}
                    <hr className="hr-bold my-2" />
                    {props.location && (
                        <React.Fragment>
                            <p className="font-smaller mb-0">
                                <MDBIcon icon="location-arrow" />  {props.location}
                            </p>
                        </React.Fragment>)}
                </div>
            </div>
            {props.description && (

                <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
                    {props.description}
                </p>

            )}
        </React.Fragment >
    );
}

export default connect()(Event);