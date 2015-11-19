var Organ = React.createClass({
  getInitialState: function() {
    return { keys: KeyStore.all() };
  },

  _notes: function(note) {
    var note_button = {'C3': 'A',
                'C_3': 'W',
                'D3': 'S',
                'D_3': 'E',
                'E3': 'D',
                'F3': 'F',
                'F_3': 'T',
                'G3': 'J',
                'G_3': 'I',
                'A3': 'K',
                'A_3': 'O',
                'B3': 'L',
                'C4': ';'
              };
    return note_button[note];
  },

  componentDidMount: function () {
    KeyStore.addChangeListener(this._onChange);
  },

  render: function() {
    return(
      <div className="content">
        <h1> Origano </h1>
          <div>
          {
            Object.keys(TONES).map(function(tone) {
              return (<Key note={tone}
                           key={tone}
                           button={this._notes(tone) }/>);
            }.bind(this))
          }
          </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState({ keys: KeyStore.all() });
  }

});
