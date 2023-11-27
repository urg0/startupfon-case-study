/* eslint-disable */

import Lottie from 'react-lottie';
export default function LottiePlayer({ animationData, style, loop = true, autoplay = true }) {
    const defaultOptions = {
        loop: loop,
        autoplay: autoplay,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} style={style} />;
}
