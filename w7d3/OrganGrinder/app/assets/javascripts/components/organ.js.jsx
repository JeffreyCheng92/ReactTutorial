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
        {
          Object.keys(TONES).map(function(tone) {
            return (<key note={tone} key={tone} />);
          })
        }
      </div>
    )
  },

  _onChange: function() {
    this.setState({ keys: KeyStore.all() });
  }

});
