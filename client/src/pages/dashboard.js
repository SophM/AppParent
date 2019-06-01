// this is the main dashbaord after the user login
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Activity from "../components/activity";
import WritePost from "../components/write-post";
import AllMembers from "../components/allMembers";
import MyProfile from "../components/myProfile";
import NavBar from "../components/nav";
import API from "../utils/API";
import "../style/dashboard.css";
// import { stat } from "fs";

class Dashboard extends Component {
  //Setting all default values 
  state = {
    // ----------- start Sophie
    // remove the results variable
    // ----------- end Sophie
    // members: [],
    pageWanted: "dashboard",
    loggedInUser: []
  };

  componentDidMount() {

    // ----------- start Sophie
    // remove the call to get all the posts
    // ----------- end Sophie

    // ----------- start Namita
    // remove the call to get all members
    // ----------- end Namita

    //Retrives Logged in USer Info 
    API.findOne()
      .then(res => {
        this.setState({
          loggedInUser: res.data
        })
      }
      )
      .catch(err => console.log(err));

  }

  handleClickOnSideBar = event => {
    event.preventDefault();

    this.setState({
      pageWanted: event.target.attributes.getNamedItem("data-content").value
    });
    console.log("This is the result", this.state.results)

  }

  //Write a post 

  handleCreatePost = () => {
    // ----------- start Sophie
      this.setState({
        pageWanted: "dashboard"
      })
    // ----------- end Sophie
  }

  handleLogOut = () => {
    API.logout().then(
      res => {
        console.log("Logged Out")
      }
    )
  }

  redirectProfilePage = () => {
    this.setState({
      pageWanted: "myProfile"
    })

  }
  render() {

    {/* display the page with the activity component */ }
    if (this.state.pageWanted === "dashboard") {
      return (
        <div>
          <NavBar
            logout={this.handleLogOut}
          />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
            logout={this.handleLogOut}
          />
          <div id="page-wrap">

            <h1 className="mt-2 text-dark welcome-text">Welcome {this.state.loggedInUser.userName}</h1>
            {/* ------- start Sophie */}
            <Activity />
            {/* ------- end Sophie */}
          </div>
        </div>
      );

      {/* display the page with the myProfile component */ }
    } else if (this.state.pageWanted === "myProfile") {
      return (
        <div>
          <NavBar
            logout={this.handleLogOut}
          />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
            logout={this.handleLogOut}
          />
          <div id="page-wrap">

            <h1 className="mt-2 text-dark welcome-text">Welcome {this.state.loggedInUser.userName}</h1>

            {/* Logged in User Details along with their kid info within  */}
            <MyProfile
              userName={this.state.loggedInUser.userName}
              email={this.state.loggedInUser.email}
              city={this.state.loggedInUser.city}
              state={this.state.loggedInUser.state}
              photoLink={this.state.loggedInUser.photoLink}
              redirectPage={this.redirectProfilePage}
            >

            </MyProfile>

          </div>
        </div>
      );

      {/* display the page with the allMembers component */ }
    } else if (this.state.pageWanted === "allMembers") {
      return (
        <div>
          <NavBar
            logout={this.handleLogOut}
          />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
            logout={this.handleLogOut}
          />
          <div id="page-wrap">

            <h1 className="mt-2 text-dark welcome-text">Welcome {this.state.loggedInUser.userName}</h1>
            {/* Displays all the Members on the website expect for the logged in USer  */}
            <AllMembers />

          </div>
        </div>
      );

      {/* display the page with the writePost component */ }
    } else if (this.state.pageWanted === "writePost") {
      return (
        <div>
          <NavBar
            logout={this.handleLogOut}
          />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
            logout={this.handleLogOut}
          />
          <div id="page-wrap">

            <h1 className="mt-2 text-dark welcome-text">Welcome {this.state.loggedInUser.userName}</h1>

            <WritePost
              handleCreatePost={this.handleCreatePost}
            />

          </div>
        </div>
      );

      {/* display the page with the aboutUs component */ }
    } else if (this.state.pageWanted === "aboutUs") {
      return (
        <div>
          <NavBar
            logout={this.handleLogOut}
          />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
            logout={this.handleLogOut}
          />
          <div id="page-wrap">

            <h1 className="mt-2 text-dark welcome-text">Welcome {this.state.loggedInUser.userName}</h1>
            <div className="container mt-4 mb-4">
              <div className="card">
                <h3 className="card-header">About us!</h3>
                <div className="card-body">
                  <p className="card-text">Parenthood is great but let's face it, it can also be very challenging! For every moment along the way, <strong style={{"color": "#176d88"}}>APP@rent</strong> is there to network/connect with other parents, help each other out, share tips, events.... </p>
                  <p className="card-text"><strong style={{"color": "#176d88"}}>APP@rent</strong> was built by Namita - a happy-parent of a little boy and inspiration of the project - and Sophie, Kevin and Samuel - parents in training... with their pets!!</p>
                  <img className="img-thumbnail img-fluid m-3" src="https://avatars2.githubusercontent.com/u/39390897?s=460&v=4" alt="namita-picture"/>
                  <img className="img-thumbnail img-fluid m-3" src="https://avatars1.githubusercontent.com/u/47410186?s=460&v=4" alt="sophie-picture"/>
                  <img className="img-thumbnail img-fluid m-3" src="https://avatars3.githubusercontent.com/u/41413295?s=400&v=4" alt="kevin-picture"/>
                  <img className="img-thumbnail img-fluid m-3" src="https://avatars2.githubusercontent.com/u/45929868?s=460&v=4" alt="samuel-picture"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
