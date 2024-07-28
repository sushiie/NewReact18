import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <div>
          LoggedIn User:
          {
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <span className="font-bold m-2">{loggedInUser}</span>
              )}
            </UserContext.Consumer>
          }
        </div>
        <UserClass
          name={"Susheel"}
          location={"Shimla"}
          contact={"contact me here"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <UserClass
//         name={"Susheel"}
//         location={"Shimla"}
//         contact={"contact me here"}
//       />
//     </div>
//   );
// };

export default About;
