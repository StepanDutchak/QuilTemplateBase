/* eslint-disable max-lines-per-function */
/* eslint-disable func-style */

import * as React from 'react';
import Svg, {
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
    G
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
    <Svg
        width={375}
        height={418}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <Circle
            cx={188} cy={209} r={56}
            fill='url(#a)'
        />
        <Path
            d='m164 210.6 17.6 17.6L212 193'
            stroke='#fff'
            strokeWidth={8}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Circle
            opacity={0.7} cx={188} cy={209}
            r={101.5} stroke='url(#b)'
        />
        <Circle
            opacity={0.7} cx={188} cy={209}
            r={158.5} stroke='url(#c)'
        />
        <Circle
            cx={188} cy={209} r={208.5}
            stroke='url(#d)'
        />
        <Circle
            cx={95.308}
            cy={110.101}
            r={6}
            transform='rotate(45 95.308 110.101)'
            fill='url(#e)'
            fillOpacity={0.4}
        />
        <Circle
            cx={282.691}
            cy={297.484}
            r={6}
            transform='rotate(45 282.691 297.484)'
            fill='url(#f)'
            fillOpacity={0.4}
        />
        <G opacity={0.7}>
            <Circle
                cx={29} cy={205} r={5}
                fill='url(#g)'
            />
            <Circle
                cx={347} cy={205} r={5}
                fill='url(#h)'
            />
        </G>
        <G opacity={0.6}>
            <Circle
                opacity={0.9}
                cx={282.192}
                cy={111.192}
                r={6.5}
                transform='rotate(135 282.192 111.192)'
                fill='url(#i)'
            />
            <Circle
                opacity={0.9}
                cx={95.309}
                cy={298.191}
                r={6.5}
                transform='rotate(135 95.309 298.191)'
                fill='url(#j)'
            />
        </G>
        <Defs>
            <LinearGradient
                id='a'
                x1={188}
                y1={153}
                x2={188}
                y2={265}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#513CD6' />
                <Stop offset={1} stopColor='#A94DD6' />
            </LinearGradient>
            <LinearGradient
                id='b'
                x1={188}
                y1={107}
                x2={188}
                y2={311}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#DCD6FF' />
                <Stop offset={1} stopColor='#DCD6FF' stopOpacity={0.32} />
            </LinearGradient>
            <LinearGradient
                id='c'
                x1={188}
                y1={50}
                x2={188}
                y2={368}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#DCD6FF' />
                <Stop offset={1} stopColor='#DCD6FF' stopOpacity={0.32} />
            </LinearGradient>
            <LinearGradient
                id='d'
                x1={188}
                y1={0}
                x2={188}
                y2={418}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#DCD6FF' />
                <Stop offset={1} stopColor='#DCD6FF' stopOpacity={0.32} />
            </LinearGradient>
            <LinearGradient
                id='e'
                x1={95.308}
                y1={104.101}
                x2={95.308}
                y2={116.101}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#573DD6' />
                <Stop offset={1} stopColor='#A54CD6' />
            </LinearGradient>
            <LinearGradient
                id='f'
                x1={282.691}
                y1={291.484}
                x2={282.691}
                y2={303.484}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#573DD6' />
                <Stop offset={1} stopColor='#A54CD6' />
            </LinearGradient>
            <LinearGradient
                id='g'
                x1={29}
                y1={200}
                x2={29}
                y2={210}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#573DD6' stopOpacity={0.2} />
                <Stop offset={1} stopColor='#A54CD6' stopOpacity={0.42} />
            </LinearGradient>
            <LinearGradient
                id='h'
                x1={347}
                y1={200}
                x2={347}
                y2={210}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#573DD6' stopOpacity={0.2} />
                <Stop offset={1} stopColor='#A54CD6' stopOpacity={0.42} />
            </LinearGradient>
            <LinearGradient
                id='i'
                x1={282.192}
                y1={104.692}
                x2={282.192}
                y2={117.692}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#B1A1FF' />
                <Stop offset={1} stopColor='#E0A8FF' />
            </LinearGradient>
            <LinearGradient
                id='j'
                x1={95.309}
                y1={291.691}
                x2={95.309}
                y2={304.691}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#B1A1FF' />
                <Stop offset={1} stopColor='#E0A8FF' />
            </LinearGradient>
        </Defs>
    </Svg>
);

export default SvgComponent;
