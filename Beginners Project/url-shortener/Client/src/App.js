import './App.css';
import SendIcon from '@material-ui/icons/Send';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
import React from 'react';

class App extends React.Component {
   
  constructor(props) 
  {
      super(props)

      this.state = { inputvalue : '', shortUrl : '' }

      this.inputChange = this.inputChange.bind(this)
      this.formSubmit = this.formSubmit.bind(this)
      // this.copyUrl = this.copyUrl(this)

  }

  inputChange(event) { 
      this.setState({ inputvalue : event.target.value })
  }

  async formSubmit(event) {
      event.preventDefault()
      const longUrl = this.state.inputvalue;

      this.setState({ inputvalue : '' });
      const url = process.env.REACT_APP_URL + '/v1/enterurl/'

      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              longUrl: longUrl
          })
      })

      const data = await response.json();
      this.setState({shortUrl : data.shortUrl});
      
    }

  render () { return (
      <div className="app">
        <div className = "content">
          <div className = "header">
              <img
                className = "logo" 
                src = "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              />
              <span className = "name">Shrink</span>
              <div className = "links">
                <a href = "https://github.com/VaibhavPaliwal0007" className = "link">GitHub</a>
                <a href = "https://www.linkedin.com/in/vaibhav-paliwal-47325b207/" className = "link">Linkedin</a>
              </div>
          </div>
          <div className = "heading">
            <h1>Shrink your links <span className="go">faster</span>.</h1>
          </div>
          <div className = "input__box">
            <form className = "input__form">
              <input className = "input__box__input" onChange = { this.inputChange } value = { this.state.inputvalue } type="text" placeholder="Paste your long url"/>
              <button onClick = { this.formSubmit } className="input__button"><SendIcon/></button>
            </form>
          </div>
          {
            this.state.shortUrl ? <div className="input__success">
              <h3 style = {{color:"green",marginRight:"20px"}}>Success !!! This is the shorten url : </h3>
              <div>
                <a className = "final__url" href={process.env.REACT_APP_URL+"/"+this.state.shortUrl}>{process.env.REACT_APP_URL+"/"+this.state.shortUrl}</a>
                {/* <FileCopyIcon className = "copy__icon" onClick={this.copyUrl}/> */}
              </div>
            </div>:<div/>
          }
        </div>
      </div>
  );
  }
}

export default App;
