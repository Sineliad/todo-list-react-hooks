import React from "react";

class ReactNormal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      lastname: "Normal",
      width: window.innerWidth
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = `${this.state.name} ${this.state.lastname}`;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentWillUpdate() {
    document.title = `${this.state.name} ${this.state.lastname}`;
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleLastnameChange(e) {
    this.setState({ lastname: e.target.value });
  }

  render() {
    return (
      <div>
        {" "}
        <h1>ReactNormal Component</h1>
        <input value={this.state.name} onChange={this.handleNameChange} />
        <input
          value={this.state.lastname}
          onChange={this.handleLastnameChange}
        />
        <p>Tamaño de la ventana: {this.state.width}</p>
      </div>
    );
  }
}

export default ReactNormal;
