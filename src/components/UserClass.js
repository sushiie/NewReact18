import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Did Mount");
  }

  componentDidUpdate() {
    console.log("Child did update")
  }

  componentWillUnmount() {
    console.log("component will unmount")
  }

  render() {
    console.log("Child Render");
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE YOUR STATE VARIABLES DIRECTLY
            this.setState({
              count: count + 1,
            });

            //if we had other properties in the state we will only update this property and leave others as is
          }}
        >
          count increase
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h2>contact: {contact}</h2>
      </div>
    );
  }
}

export default UserClass;
