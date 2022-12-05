import React from "react";

export class ProfileStatus extends React.Component<any, any> {
  state = {
    editMode: false,
  };
  activateMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <>
        {this.state.editMode && (
          <input autoFocus={true} onBlur={this.deactivateMode} />
        )}

        {!this.state.editMode && (
          <p onDoubleClick={this.activateMode}>
            <b>статус</b>
          </p>
        )}
      </>
    );
  }
}
