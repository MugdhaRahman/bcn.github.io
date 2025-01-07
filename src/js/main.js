// Import our custom CSS
import '../scss/styles.scss'
import { animate, scroll } from "motion"


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert'

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'

animate(
    ".hero-img",
    { rotate: 360 },
    { type: "spring", repeat: Infinity, repeatDelay: 0.5 }
)

const animation = animate(
    ".grey-bg",
    { transform: ["none", "rotate(100deg)"] },
    { ease: "linear" }
)

scroll(animation)