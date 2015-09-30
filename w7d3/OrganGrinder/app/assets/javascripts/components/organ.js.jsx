var Organ = React.createClass({
  getInitialState: function() {
    return { keys: KeyStore.all() };
  },

  componentDidMount: function () {
    KeyStore.addChangeListener(this._onChange);
  },

  render: function() {
    return(
      <div>
      <h1> Organ Grinding Magic </h1>
        {
          Object.keys(TONES).map(function(tone) {
            return (<Key note={tone} key={tone} />);
          })
        }
      </div>
    )
  },

  _onChange: function() {
    this.setState({ keys: KeyStore.all() });
  }

});
