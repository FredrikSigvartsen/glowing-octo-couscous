import React from 'react';
import { inject, observer } from 'mobx-react';
import Counter from '../../components/Counter';
import Cage from '../../components/Cage';

// @observer
@inject('shopStore')
@observer
class PositioningSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
    };
  }

  onStart = () => {
    this.setState(prevState => ({ activeDrags: prevState.activeDrags + 1 }));
  };

  onStop = () => {
    this.setState(prevState => ({ activeDrags: prevState.activeDrags - 1 }));
  };

  render() {
    return (
      <>
        <section className="section is-large">
          <div className="container">
            <div id="drag-and-drop">
              {this.props.shopStore.cagesActive.map(cage => {
                return (
                  <Cage
                    key={cage.title}
                    className="box"
                    title={cage.title}
                    onStart={this.onStart}
                    onStop={this.onStop}
                  />
                );
              })}
            </div>
            <div>
              <h1>Place your box above</h1>
              <h3>
                <strong>Box {this.props.shopStore.compassDirection}</strong>
              </h3>

              <Counter
                title="Compass"
                counter={this.props.shopStore.compassDirection}
                onIncrement={() =>
                  this.props.shopStore.IncrementCompassDirection()
                }
                onDecrement={() =>
                  this.props.shopStore.DecrementCompassDirection()
                }
              />

              <h3>
                <strong>Cage</strong>
              </h3>
              <Counter
                title="Active"
                counter={this.props.shopStore.cagesActive.length}
                onIncrement={() => this.props.shopStore.AddActiveCage()}
                onDecrement={() => this.props.shopStore.RemoveLastActiveCage()}
              />
              <Counter
                title="Inactive"
                counter={this.props.shopStore.cagesInactive.length}
                onIncrement={() => this.props.shopStore.AddInactiveCage()}
                onDecrement={() =>
                  this.props.shopStore.RemoveLastInactiveCage()
                }
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PositioningSite;
