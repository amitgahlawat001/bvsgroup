import React, { useMemo, useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'

import data1 from './businessGuidLinesData'
import data2 from './businessGuidLinesData'

import styles from './styles.module.css'

export default function BusinessData() {
    const [open, set] = useState(false)
    const [type, setType] = useState('export')

    const springApi = useSpringRef()
    const { size: sizeE, ...restE } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '25%', background: '#ffca69',top:'40%',left:'30%' },
        to: {
            size: open && type === 'export' ? '100%' : '25%',
            background: open && type === 'export' ? 'white' : '#ffca69',
            top:open && type === 'export' ? '3%':'40%',
            left:open && type === 'export' ? '11%':'30%',
        },
    })

    const { size: sizeI, ...restI } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '25%', background: '#ffca69',top:'40%',right:'30%'  },
        to: {
            size: open && type === 'import' ? '100%' : '25%',
            background: open && type === 'import' ? 'white' : '#ffca69',
            top:open && type === 'import' ? '3%':'40%',
            right:open && type === 'import' ? '9%':'30%',
            zIndex: open && type === 'export' ? '-1':'1'
        },
    })


    const data = useMemo(() => type === 'export' ? data1 : data2, [type])

    const transApi = useSpringRef()
    const transition = useTransition(open ? data : [], {
        ref: transApi,
        trail: 400 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])


    return (
        <div className={styles.wrapper}>
            <animated.div
                className={open && type === 'export' ? styles.container1 : styles.container1close}
                style={{ ...restE, width: sizeE, height: sizeE }}
                onClick={() => {
                    set(open => !open)
                    setType('export')
                }}>Import Business Guidlines
                {type === 'export' && transition((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{ ...style, background: item.css }}
                    ><a href={item.path} download target="_blank">{item.name}</a></animated.div>
                ))}
            </animated.div>
            <animated.div
                style={{ ...restI, width: sizeI, height: sizeI }}
                className={open && type === 'import' ? styles.container1 : styles.container1close}
                onClick={() => {
                    set(open => !open)
                    setType('import')
                }}>Export Business Guidlines
                {type === 'import' && transition((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{ ...style, background: item.css }}
                    ><a href={item.path} download target="_blank">{item.name}</a></animated.div>
                ))}
            </animated.div>
        </div>
    )
}
