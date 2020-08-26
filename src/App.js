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
                <option value={device.device}>{device.label}</option>  
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
              <option value={c.color}>{c.label}</option>
            ))}
          </select>
          </div>
        </div>

      </div>
    )
  }

  renderDevice() {
    const mode = devices.filter(d => d.device == this.state.device)[0].mode;
    console.log(mode);
    return (
      <div className={'device ' + this.state.device + ' ' + this.state.color} style={{display: 'inline-block', marginRight: 100}}>
        <div class="device-frame iframe-parent">
          <iframe class="device-content" frameborder="0" scrolling="no" style={{
          border: 'none', display: 'inline-block'}} src={'http://localhost:8100/?mode='+mode} />
        </div>
        <div class="device-stripe"></div>
        <div class="device-header"></div>
        <div class="device-sensors"></div>
        <div class="device-btns"></div>
        <div class="device-power"></div>
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
