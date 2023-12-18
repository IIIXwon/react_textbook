const Audio = props => {
    if (props.second === 0 && props.status !== 'cancel') {
        document.querySelector('#end-of-time').play();
    }
    return React.createElement('audio', { id: 'end-of-time', src: '/timer/flute_c_long_01.wav', preload: 'audio' });
};