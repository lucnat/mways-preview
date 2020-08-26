import React from 'react';
import './App.css';
import './devices/devices.scss';

const devices = [
  {
    device: 'device-iphone-8',
    label: 'iPhone 8',
    mode: 'ios',
    colors: [
      { label: 'light', color: 'device-light'},
      { label: 'gold', color: 'device-gold'},
      { label: 'spacegray', color: 'device-spacegray'}
    ]
  },
  // {
  //   device: 'device-iphone-x',
  //   label: 'iPhone X',
  //   mode: 'ios',
  //   colors: [
  //     { label: 'light', color: 'device-light'},
  //   ]
  // },
  {
    device: 'device-google-pixel',
    label: 'Google Pixel',
    mode: 'md',
    colors: [
      { label: 'silver', color: 'device-silver'},
      { label: 'black', color: 'device-black'},
      { label: 'blue', color: 'device-blue'},
    ]
  }
  // {
  //   device: 'device-ipad-pro',
  //   label: 'iPad',
  //   mode: 'iOS',
  //   colors: [
  //     { label: 'silver', color: 'device-silver'},
  //     { label: 'gold', color: 'device-gold'},
  //     { label: 'rosegold', color: 'device-rosegold'},
  //     { label: 'spacegray', color: 'device-spacegray'},
  //   ]
  // },
]

let previewurl = (window.location.search.split('previewurl=')[1]||'').split('&')[0];
if(!previewurl) previewurl = 'https://mways.io';
console.log('previewurl',previewurl)

class App extends React.Component {

  state = {
    device: devices[0].device,
    color: devices[0].colors[0].color
  }

  renderControls() {
    const device = devices.filter(d => d.device == this.state.device)[0];
    return (
      <div style={{display: 'inline-block', fontSize: 15, marginTop: 40}}>

        <div style={{display: 'flex', width: 300}}>
          <div style={{flex: 1}}>
            <p style={{display: 'inline-block'}}>Device</p>
          </div>
          <div style={{flex: 1}}>
            <select value={this.state.device} name="device" style={{width: 200}} onChange={e => {
              const newDevice = devices.filter(d => d.device == e.target.value)[0];
                this.setState({
                  device: newDevice.device,
                  color: newDevice.colors[0].color
                });
              }}>
              {devices.map(device => 
                <option key={device.device} value={device.device}>{device.label}</option>  
              )}
            </select>
          </div>
        </div>

        <div style={{display: 'flex', width: 300}}>
          <div style={{flex: 1}}>
            <p style={{display: 'inline-block'}}>Color</p>
          </div>
          <div style={{flex: 1}}>
          <select value={this.state.color} style={{width: 200}} onChange={e => this.setState({color: e.target.value})}>
            {device.colors.map(c => (
              <option key={c.color} value={c.color}>{c.label}</option>
            ))}
          </select>
          </div>
        </div>
        <div style={{marginTop: 20, textAlign: 'right'}} >
          <a target="_blank" className="App-link" href="https://github.com/lucnat/mways-preview"> <img style={{width: 20, marginRight: 20, position: 'absolute', marginLeft: -30, filter: 'invert(1)'}} src="github.png" />View on GitHub</a>
        </div>
      </div>
    )
  }

  renderDevice() {
    const mode = devices.filter(d => d.device == this.state.device)[0].mode;
    console.log(mode);
    return (
      <div className={'device ' + this.state.device + ' ' + this.state.color} style={{display: 'inline-block', marginRight: 100}}>
        <div className="device-frame iframe-parent">
          <iframe className="device-content" frameBorder="0" scrolling="no" style={{
          border: 'none', display: 'inline-block'}} src={previewurl +'?mode='+mode} />
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    )
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{textAlign: 'right', marginRight: 50}}>
            <img src="logo.png" style={{marginTop: 50}} className="App-logo" alt="logo" />
          </div>
          <div style={{textAlign: 'center'}}>
            {this.renderDevice()}
            {this.renderControls()}
          </div>
        </header>
      </div>
    )
  }
}

export default App;
