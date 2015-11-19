var Key = React.createClass({
  getInitialState: function() {
    return { pressed: this.keyPressed(), divbg: null };
  },

  componentDidMount: function () {
    if (this.props.note[1] === "_") {
      this.setState({ divbg: "black-box" });
    } else {
      this.setState({ divbg: 'white-box' });
    }
    this.note = new Note(TONES[this.props.note]);
    KeyStore.addChangeListener(this._onChange);
  },

  keyPressed: function() {
    var keys = KeyStore.all();
    return keys.indexOf(this.props.note) !== -1;
  },

  _onChange: function() {
    var pressed = this.keyPressed();
    if (pressed) {
      this.note.start();
    } else {
      this.note.stop();
    }
    this.setState({ pressed: pressed });
  },

  _pressed: function() {
    if (this.state.pressed) {
      return "red-key";
    }
  },

  render: function() {
    return (
      <div className={ this._pressed() + " " + this.state.divbg + " key"}>
        <div className="key-content"> { this.props.button } </div>
      </div>
    );
  },


});
