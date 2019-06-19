import React, { Component } from "react";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol ,MDBInput} from "mdbreact";

export default class ModalWrapper extends Component {
    state = {
        modal: false
    };

    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue
        });
        //console.log(this.state);
    }

    onSubmit = () => {
        //e.preventDafault();
        const newAgedum = {
            //id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
            time: this.state.time,
            title: this.state.title,
            location: this.state.location,
            description: this.state.description,
            value: this.var > 5 ? "Its's grater then 5" : "Its lower or equal 5"
        };
        console.log(newAgedum);
        this.props.onSubmitAgenda(newAgedum);
        this.togggleModalState();
        this.setState({
            time: "",
            title: "",
            location: "",
            description: ""
        });
    };

    togggleModalState = () => {
        this.setState({ modal: !this.state.modal })
    }

    render = () => {

        return (
            <>
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                    <MDBBtn color="info" rounded onClick={this.togggleModalState}>
                        Add Event
                                </MDBBtn>
                </MDBCol>
                {/* Modal code below  */}
                <MDBModal isOpen={this.state.modal} toggle={this.togggleModalState}>
                    <MDBModalHeader
                        className="text-center"
                        titleClass="w-100 font-weight-bold"
                        toggle={this.togggleModalState}
                    >
                        Add new event
                    </MDBModalHeader>

                    <MDBModalBody>
                        <form className="mx-3 grey-text">
                            <MDBInput
                                name="time"
                                label="Time"
                                icon="clock"
                                hint="12:30"
                                group
                                type="text"
                                getValue={this.handleInputChange("time")}
                            />
                            <MDBInput
                                name="title"
                                label="Title"
                                icon="edit"
                                hint="Briefing"
                                group
                                type="text"
                                getValue={this.handleInputChange("title")}
                            />
                            <MDBInput
                                name="location"
                                label="Location (optional)"
                                icon="map"
                                group
                                type="text"
                                getValue={this.handleInputChange("location")}
                            />
                            <MDBInput
                                name="description"
                                label="Description (optional)"
                                icon="sticky-note"
                                group
                                type="textarea"
                                getValue={this.handleInputChange("description")}
                            />
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <MDBBtn
                            color="info"
                            onClick={this.onSubmit}
                        >
                            Add
                   </MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </>
        )
    }
}


