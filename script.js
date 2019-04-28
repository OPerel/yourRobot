class WhichRobot extends React.Component {
    constructor () {
        super ();
        this.state = {
            textField: ''
        };
    };

    onChangeText = (event) => {
        this.setState({ textField: event.target.value });
    }

    setPhoto = (st) => {
        const id = this.state.textField;
        return st ? `https://robohash.org/${id}?size=220x220` : 'ph.png';
    }

    render () {
        const text = this.state.textField;
        return (
            <div className='tc'>
                <Card
                text={text}
                photo={this.setPhoto(text)}
                />

                <Type
                changeText={this.onChangeText}
                />
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

const Card = ({ text, photo }) => {
    return (
        <div className='center tc bg-light-green w5 ma50 br3 pa3 grow bw2 shadow-5'>
            <img src={photo} />
            <div>
                <h2 className='code fw2'>{text}</h2>
            </div>
        </div>
    )
}

const text = document.getElementById('content');
ReactDOM.render(<WhichRobot />, text);
