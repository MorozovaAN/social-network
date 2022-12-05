import React from "react";

export class ProfileStatus extends React.Component<any, any> {
  state = {
    editMode: false,
    status: this.props.status,
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
  changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        {this.state.editMode && (
          <input
            value={this.state.status}
            autoFocus={true}
            onChange={this.changeStatus}
            onBlur={this.deactivateMode}
          />
        )}

        {!this.state.editMode && (
          <p onDoubleClick={this.activateMode}>
            <b>{this.state.status || "no status"}</b>
          </p>
        )}
      </>
    );
  }
}
