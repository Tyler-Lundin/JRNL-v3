import { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

const fadeInFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
`

export { fadeIn, fadeOut, fadeInFromLeft }
