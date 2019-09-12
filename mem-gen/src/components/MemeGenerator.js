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

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({
          allMemeImgs: memes
        })
      })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    // refresh our page
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    this.setState({
      randImg: this.state.allMemeImgs[randNum].url
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="meme-form">
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
        </form>
        <div className="meme">
          <img src={this.state.randImg} alt="Trolll"/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.botText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator