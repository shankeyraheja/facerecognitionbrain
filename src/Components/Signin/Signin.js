import React from "react";

class Signin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      signinemail: "",
      signinpass: ""
    }
  }
  onEmailChange = (event) => {
    this.setState({signinemail:event.target.value})
  }
  onPassChange = (event) => {
    this.setState({signinpass:event.target.value})
  }
  Onsubmitsignin = () => {
    fetch("https://shrouded-beyond-76422.herokuapp.com/signin", {
      method:"post",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        email: this.state.signinemail,
        password: this.state.signinpass
      })
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === "success"){
          this.props.loaduser(data.info)
          this.props.onPageChange("home")
        }
      })


  }
  render(){
    const {onPageChange} = this.props
    return(
    <article className="mw6 center br5 pa1 pa1-ns mv6 ba3 b--black-10 shadow-5">
      <main className="pa4 black-80">
      <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f3 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw5 lh-copy f5">Email</label>
            <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mv3">
            <label className="db fw5 lh-copy f5">Password</label>
            <input onChange={this.onPassChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="password" name="password"  id="password"/>
          </div>
        </fieldset>
        <div className="">
          <input onClick={this.Onsubmitsignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign in"/>
        </div>
        <div className="lh-copy mt3">
          <p onClick={() =>onPageChange("register")} className="f6 link dim black db pointer">Not Registered? Register here</p>
        </div>
      </div>
    </main>
    </article>
    );
  }

}
export default Signin
