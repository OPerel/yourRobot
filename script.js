class WhichRobot extends React.Component {
  constructor () {
    super ();
    this.state = {
      textField: '',
      creature: '',
    };
  };

  onChangeText = (event) => {
    this.setState({ textField: event.target.value });
  }

  setPhoto = (st) => {
    const id = this.state.textField;
    return st ? `https://robohash.org/${id}?${this.state.creature}size=220x220` : 'ph.png';
  }

  clickMenuCard = (e, creature) => {
    console.log('click')
    this.setState({ creature })
  }

  getTitle = () => {
    return {
      '': 'robot',
      'set=set2&': 'monster',
      'set=set3&': 'new robot',
      'set=set4&': 'cat'
    }
  }

  render () {
    const text = this.state.textField;
    return (
      <div style={{ height: '100vh' }}>

        <h1 className='tc code fw1'>
          What kind of <span style={{ color: '#7013c1', textDecoration: 'underline' }}>
              {`${this.getTitle()[`${this.state.creature}`]}`}
          </span> are you?
        </h1>

        <div className='flex justify-center'>

          <div className="tc flex justify-center">
            <div className="mh4" style={{ cursor: 'pointer', height: 'fit-content' }} onClick={(e) => this.clickMenuCard(e, '')}>
              <Card text="Robots" photo={`https://robohash.org/a?size=50x40`} w={4} />
            </div>
            <div className="mh4" style={{ cursor: 'pointer', height: 'fit-content' }} onClick={(e) => this.clickMenuCard(e, 'set=set2&')}>
              <Card text="Monsters" photo={`https://robohash.org/a?set=set2&size=50x40`} w={4} />
            </div>
          </div>

          <div>
            <Card
              text={text}
              photo={this.setPhoto(text)}
              w={5}
            />

            <Type changeText={this.onChangeText} />
          </div>

          <div className="tc flex justify-center">
            <div className="mh4" style={{ cursor: 'pointer', height: 'fit-content' }} onClick={(e) => this.clickMenuCard(e, 'set=set3&')}>
              <Card text="New Robots" photo={`https://robohash.org/a?set=set3&size=50x40`} w={4} />
            </div>
            <div className="mh4" style={{ cursor: 'pointer', height: 'fit-content' }} onClick={(e) => this.clickMenuCard(e, 'set=set4&')}>
              <Card text="Cats" photo={`https://robohash.org/a?set=set4&size=50x40`} w={4} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

const Type = ({ changeText }) => {
    return (
        <input
        className='code'
        type='text'
        placeholder='Enter your name'
        onChange={changeText}
        />
    );
};

const Card = ({ text, photo, w, }) => {
  return (
    <div className={`center tc bg-light-green w${w} ma50 br3 pa3 grow bw2 shadow-5`}>
      <img src={photo} />
      <div>
        <h2 className='code fw2'>{text}</h2>
      </div>
    </div>
  )
}

const Menu = () => {
  return (
    <div className="absolute l3">
      <Card text="Robots" photo={`https://robohash.org/a?size=120x120`} />
    </div>
  )
}

const text = document.getElementById('content');
ReactDOM.render(<WhichRobot />, text);


/****
 * TODO:
 * 1. throttle img fetching till end of typing
 * 2. REFACTOR a lot
 * 3. fix menu cards sizes
 * 4. cancel grow on main card
 * 5. fix heading width (only creature changes)
 * */ 

