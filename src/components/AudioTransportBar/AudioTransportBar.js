import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
import TransportBarButton from '../TransportBarButton/TransportBarButton';
import CurrentTimeIndicator from '../CurrentTimeIndicator/CurrentTimeIndicator';
import './AudioTransportBar.scss';

class AudioTransportBar extends Component {
  static propTypes = {
    /** Boolean value for the current playing state */
    isPlaying: PropTypes.bool.isRequired,
    /** Handler for play button */
    onPlay: PropTypes.func.isRequired,
    /** Handler for pause button */
    onPause: PropTypes.func.isRequired,
    /** Handler for next button */
    onNextBubble: PropTypes.func.isRequired,
    /** Handler for previous button */
    onPreviousBubble: PropTypes.func.isRequired,
    /** Handler for scrubbing ahead button */
    onScrubAhead: PropTypes.func.isRequired,
    /** Handler for scrubbing backwards button */
    onScrubBackwards: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="audio-transport-bar">
        <CurrentTimeIndicator />
        <div className="audio-transport-bar__buttons">
          <TransportBarButton
            onClick={this.props.onPreviousBubble}
            iconClass="fas fa-caret-left"
          />
          <TransportBarButton
            onClick={this.props.onScrubBackwards}
            iconClass="fas fa-angle-double-left"
          />
          <TransportBarButton
            iconClass={this.props.isPlaying ? 'fas fa-pause' : 'fas fa-play'}
            onClick={
              this.props.isPlaying ? this.props.onPlay : this.props.onPause
            }
          />
          <TransportBarButton
            onClick={this.props.onScrubAhead}
            iconClass="fas fa-angle-double-right"
          />
          <TransportBarButton
            onClick={this.props.onNextBubble}
            iconClass="fas fa-caret-right"
          />
        </div>
        <VolumeSlider />
      </div>
    );
  }
}

export default AudioTransportBar;