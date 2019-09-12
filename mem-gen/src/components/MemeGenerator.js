import React from 'react'

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      botText: "",
      randImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log("handle change")
  }

  handleSubmit(event) {
    console.log("handle submit")
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="topText" 
          value={this.state.topText}
          onChange={this.handleChange} 
          placeholder="Top Text"/>
        <input 
          type="text" 
          name="botText" 
          value={this.state.botText}
          onChange={this.handleChange} 
          placeholder="Bottom Text"/>
        <button>Gen</button>
        <br/>
        <img src={this.state.randImg} alt="Trolll"/>
      </form>
    )
  }
}

export default MemeGenerator