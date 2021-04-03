import React from "react";

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      name: ""
    }
  }
  onNameChange = (event) => {
    this.setState({name:event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email:event.target.value})
  }
  onPassChange = (event) => {
    this.setState({password:event.target.value})
  }
  Onsubmitsignin = () => {
    fetch("https://shrouded-beyond-76422.herokuapp.com/register", {
      method:"post",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
      })
      .then(response => response.json())
      .then(user => {
        if(user.id){
          this.props.loaduser(user)
          this.props.onPageChange("home")
        }
      })


  }
  render(){
    return(
    <article className="mw6 center br5 pa1 pa1-ns mv6 ba3 b--black-10 shadow-5">
      <main className="pa4 black-80">
      <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f3 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw5 lh-copy f5">Name</label>
            <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="text" name="name"  id="name"/>
          </div>
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
          <input onClick={this.Onsubmitsignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Submit"/>
        </div>
        <div className="lh-copy mt3">
          <p onClick={() => this.props.onPageChange("Signin")} className="f6 link dim black db pointer">Already Registered?Sign In</p>
        </div>

      </div>
    </main>
    </article>
    );
  }
}
export default Register
