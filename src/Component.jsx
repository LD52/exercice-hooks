import './App.css';
class Component extends 'react' {

  state = {
   color: false,
  }

 handleClick = () => {
    this.setState({
       color : !this.state.color
    })
  }
  render () {
    return (
    <div className='root'>

       <div className={this.state.color ? "container color" : "container"}>
      <div className ='top'>
        <div className='top-top'> Basic 
        </div>
        <div className='top-bottom'> <h1>$19.99</h1>
        </div>
      </div>
      <div className='middle-first'> 500 GB Storage</div>
      <div className='middle-second'>2 Users Allowed</div>
      <div className='middle-third'>Send up to 3 GB</div>
        <div className='bottom' onClick={this.handleClick}><h4>LEARN MORE</h4></div>
      
</div>

      <div className={color ? "container color" : "container"}>
      <div className ='top'>
        <div className='top-top'> Professional 
        </div>
        <div className='top-bottom'> <h1>$24.99</h1>
        </div>
      </div>
      <div className='middle-first'>1 TB Storage </div>
      <div className='middle-second'> 5 Users Allowed</div>
      <div className='middle-third'>Send up to 10 GB</div>
      <div className='bottom' onClick={this.handleClick}> <h4>LEARN MORE</h4></div>
      </div>

      <div className={color ? "container color" : "container"}>
      <div className ='top'>
        <div className='top-top'> Master 
        </div>
        <div className='top-bottom'> <h1>$39.99</h1> 
        </div>
      </div>
      <div className='middle-first'>2 TB Storage</div>
      <div className='middle-second'>10 Users Allowed</div>
      <div className='middle-third'>Send up to 20 GB</div>
      <div className='bottom' onClick={this.handleClick}> <h4>LEARN MORE</h4></div>
    </div>
</div>
    )
  }

}


  



export default Component;
