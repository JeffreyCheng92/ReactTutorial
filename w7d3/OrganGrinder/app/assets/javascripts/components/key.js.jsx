var Key = React.createClass({
  getInitialState: function() {
    return { pressed: this.keyPressed };
  },

  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addChangeListener(this._onChange);
  },

  keyPressed: function() {
    var keys = KeyStore.all();
    return keys.indexOf(this.props.note) !== -1;
  },

  _onChange: function() {
    var pressed = this.keyPressed;
    if (pressed) {
      this.note.stop();
    } else {
      this.note.start();
    }
    this.setState({ pressed: pressed });
  },

  render: function() {

    return (
      <div>
        { this.props.note }
      </div>
    )
  },


});
