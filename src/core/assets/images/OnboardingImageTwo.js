/* eslint-disable max-lines-per-function */
/* eslint-disable func-style */
import * as React from 'react';
import Svg, { Circle, Path, Defs, LinearGradient, Stop, Ellipse, G } from 'react-native-svg';

const SvgComponent = (props) => (
    <Svg
        width={375}
        height={536}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <Circle
            cx={191} cy={268} r={267.5}
            stroke='url(#a)'
        />
        <Circle
            opacity={0.8} cx={191} cy={268}
            r={188.5} stroke='url(#b)'
        />
        <Circle
            opacity={0.5} cx={193} cy={268}
            r={123.5} stroke='url(#c)'
        />
        <Ellipse
            cx={187.5} cy={366.895} rx={115.678}
            ry={13.22} fill='#7968DE'
        />
        <Path d='M71.822 366.894v-25.118h231.356v25.118H71.822Z' fill='#7968DE' />
        <Ellipse
            cx={187.281}
            cy={341.136}
            rx={115.458}
            ry={12.007}
            fill='#A092F4'
        />
        <G opacity={0.5} filter='url(#d)'>
            <Ellipse
                cx={190.144} cy={338.47} rx={103.78}
                ry={9.915} fill='url(#e)'
            />
        </G>
        <Ellipse
            cx={188.822}
            cy={334.105}
            rx={102.458}
            ry={12.085}
            fill='#7968DE'
        />
        <Path d='M86.364 334.816v-21.327H291.28v21.327H86.364Z' fill='#7968DE' />
        <Ellipse
            cx={188.822}
            cy={313.489}
            rx={102.458}
            ry={11.374}
            fill='url(#f)'
        />
        <G filter='url(#g)'>
            <Ellipse
                rx={57.508}
                ry={5.949}
                transform='matrix(1 0 0 -1 188.822 313.352)'
                fill='#ACA3DF'
                fillOpacity={0.5}
            />
        </G>
        <G opacity={0.3} filter='url(#h)'>
            <Ellipse
                cx={187.5} cy={313.352} rx={49.576}
                ry={5.949} fill='url(#i)'
            />
        </G>
        <Circle
            cx={129.144}
            cy={261.649}
            r={32.145}
            fill='url(#j)'
            stroke='#B195FF'
            strokeWidth={2}
        />
        <Path
            d='m128.76 242.78-12.902 18.795 12.902-5.148V242.78ZM128.762 256.428l-12.902 5.148 12.902 6.696v-11.844Z'
            fill='#CAB6FF'
        />
        <Path
            d='m141.666 261.578-12.904-18.796v13.648l12.904 5.148Z'
            fill='#DED2FD'
        />
        <Path
            d='m128.762 268.274 12.904-6.696-12.904-5.148v11.844Z'
            fill='#DED2FD'
        />
        <Path
            d='m115.86 263.727 12.902 15.962v-9.269l-12.902-6.693Z'
            fill='#CAB6FF'
        />
        <Path
            d='M128.762 270.418v9.269l12.911-15.962-12.911 6.693Z'
            fill='#DED2FD'
        />
        <Circle
            cx={188.934}
            cy={147.144}
            r={32.145}
            fill='url(#k)'
            stroke='#B195FF'
            strokeWidth={2}
        />
        <Path
            d='M202.06 143.087c.56-3.867-2.328-5.961-6.313-7.349l1.299-5.256-3.135-.796-1.253 5.119a85.143 85.143 0 0 0-2.53-.591l1.254-5.142-3.134-.797-1.276 5.234c-.694-.16-1.366-.319-2.015-.478v-.023l-4.343-1.092-.828 3.413s2.328.546 2.283.569c1.276.318 1.5 1.183 1.455 1.865l-1.477 5.984c.089.023.201.046.336.114-.112-.023-.224-.045-.336-.091l-2.06 8.373c-.156.387-.559.978-1.432.751.022.045-2.284-.569-2.284-.569l-1.567 3.663 4.097 1.047c.761.205 1.5.387 2.238.591l-1.298 5.302 3.134.796 1.298-5.256c.851.228 1.702.455 2.508.66l-1.276 5.233 3.134.797 1.298-5.302c5.373 1.024 9.402.615 11.081-4.323 1.366-3.959-.067-6.257-2.888-7.758 2.082-.478 3.627-1.866 4.03-4.688Zm-7.186 10.239c-.963 3.959-7.544 1.82-9.671 1.275l1.724-7.031c2.127.546 8.977 1.615 7.947 5.756Zm.985-10.307c-.896 3.618-6.358 1.775-8.126 1.32l1.567-6.371c1.768.455 7.477 1.297 6.559 5.051Z'
            fill='#DED2FD'
        />
        <Circle
            cx={244.142}
            cy={261.4}
            r={32.145}
            fill='url(#l)'
            stroke='#B195FF'
            strokeWidth={2}
        />
        <Path
            d='M242.801 242.428c.92-.446 2.08.662 1.605 1.546-.271.722-1.355.892-1.924.324-.601-.546-.432-1.596.319-1.87Zm-9.988.817c.561-.211 1.287.303 1.243.895.074.644-.733 1.1-1.316.782-.77-.302-.709-1.492.073-1.677Zm20.541 2.149c-.886-.122-1.056-1.461-.211-1.711.653-.295 1.271.298 1.381.902-.127.511-.564.971-1.17.809Zm-18.172 2c.932-.554 2.3.332 2.178 1.385-.025 1.066-1.484 1.651-2.331.912-.816-.584-.723-1.881.153-2.297Zm14.443.929c.398-1.036 2.106-1.03 2.609-.002.492.803-.07 1.771-.909 2.021-1.115.177-2.205-1.011-1.7-2.019Zm-7.86 1.749c-.029-.899.807-1.55 1.694-1.591.591.126 1.238.382 1.503.959.489.799.095 1.875-.748 2.219-.384.201-.846.112-1.27.078-.654-.32-1.213-.932-1.179-1.665Zm-14.858.981c.852-.492 2.038.466 1.731 1.361-.163.777-1.246 1.07-1.881.558-.676-.482-.595-1.602.15-1.919Zm31.968.704c.721-.531 1.944.123 1.876 1.011.067.812-.964 1.401-1.701.967-.808-.364-.916-1.551-.175-1.978Zm-12.858 1.331c1.199-.392 2.646.14 3.358 1.192.937 1.288.497 3.207-.898 3.904-1.442.827-3.592.051-4.167-1.531-.644-1.419.21-3.158 1.707-3.565Zm-7.09-.019c1.326-.579 3.141-.028 3.817 1.304.79 1.301.241 3.074-1.106 3.707-1.347.715-3.283.108-3.973-1.285-.769-1.348-.152-3.144 1.262-3.726Zm-7.05 2.179c.083-.828.885-1.35 1.706-1.388.887.122 1.609.799 1.724 1.663-.039.852-.706 1.671-1.646 1.645-1.032.063-1.96-.947-1.784-1.92Zm20.949-.783c1.049-.571 2.542.327 2.521 1.499.1 1.245-1.512 2.085-2.585 1.332-1.112-.631-1.064-2.339.064-2.831Zm-16.664 4.011c1.234-.301 2.666.293 3.299 1.405.692 1.119.453 2.649-.565 3.436-1.302 1.16-3.763.628-4.506-1.01-.846-1.505.097-3.476 1.772-3.831Zm13.453.291c1.2-.305 2.627.173 3.3 1.245.884 1.229.515 3.025-.745 3.776-1.318.876-3.401.355-4.168-1.077-.925-1.485-.073-3.535 1.613-3.944Zm-21.408.907c1.063-.366 2.278.798 1.866 1.812-.245.926-1.603 1.24-2.323.537-.84-.663-.566-2.092.457-2.349Zm29.102 2.126a1.52 1.52 0 0 1 1.494-1.625c.737.128 1.464.713 1.423 1.481.09 1.018-1.168 1.68-2.078 1.183-.426-.215-.652-.636-.839-1.039Zm-34.365-1.74c.64-.257 1.45.299 1.318.985-.018.779-1.209 1.053-1.663.391-.399-.461-.182-1.155.345-1.376Zm40.684.882c.447-.301 1.181-.062 1.372.453.318.564-.225 1.316-.88 1.207-.914.06-1.24-1.289-.492-1.66Zm-23.837 3.219c1.688-.388 3.544 1.015 3.591 2.697.149 1.701-1.615 3.169-3.362 2.738-1.348-.238-2.43-1.506-2.415-2.811-.031-1.249.923-2.388 2.186-2.624Zm6.724.144c1.713-.425 3.623 1.003 3.634 2.723.128 1.67-1.581 3.088-3.29 2.719-1.606-.234-2.825-1.953-2.411-3.438.203-.991 1.05-1.782 2.067-2.004Zm-12.942.75c1.188-.17 2.335 1.135 1.875 2.213-.327 1.153-2.076 1.429-2.873.464-.931-.931-.288-2.58.998-2.677Zm19.72.486c1.054-.405 2.379.508 2.322 1.617.07 1.223-1.523 2.03-2.579 1.294-1.192-.667-1.019-2.547.257-2.911Zm5.63 5.44c-.433-.756.301-1.729 1.166-1.572.429.003.736.334 1.017.613.066.444.172.974-.202 1.306-.504.62-1.683.414-1.981-.347Zm-31.624-2.088c.794-.498 1.97.297 1.809 1.199-.078.799-1.117 1.234-1.818.764-.751-.429-.75-1.603.009-1.963Zm15.948 2.028c1.045-.424 2.408.489 2.333 1.604.105 1.236-1.537 2.054-2.585 1.29-1.159-.662-1.009-2.53.252-2.894Zm-7.332 1.492c.888-.435 2.11.376 2.05 1.341.045.795-.746 1.454-1.563 1.318-.674-.028-1.127-.62-1.356-1.178-.002-.602.241-1.268.869-1.481Zm14.928.343c.911-.529 2.241.289 2.177 1.321.047 1.081-1.421 1.74-2.296 1.011-.845-.574-.773-1.91.119-2.332Zm2.733 6.231c-.425-.607.043-1.317.707-1.439.539.117 1.114.518 1.015 1.113-.06.808-1.285 1.029-1.722.326Zm-20.618-.974c.153-.47.538-.933 1.121-.797.847.077 1.125 1.308.393 1.669-.655.417-1.44-.191-1.514-.872Zm9.953.763c.146-.698 1.082-1.018 1.712-.632.415.179.544.624.658 1.002-.052.195-.098.389-.143.584-.248.285-.569.568-.993.548-.785.071-1.514-.8-1.234-1.502Z'
            fill='#DED2FD'
        />
        <Path
            d='m169.942 265.776.21.205c8.31 8.091 21.605 7.913 29.696-.396l1.426-1.464m0 0 .098 7.339m-.098-7.339-7.339.097'
            stroke='url(#m)'
            strokeWidth={4}
            strokeMiterlimit={4.819}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='m244.013 211.852.147-.254c5.799-10.044 2.357-22.888-7.687-28.687l-1.77-1.022m0 0 7.09-1.899m-7.09 1.899 1.9 7.09'
            stroke='url(#n)'
            strokeWidth={4}
            strokeMiterlimit={4.819}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='m136.935 180.072-.254.147c-10.044 5.799-13.485 18.642-7.686 28.686l1.021 1.77m0 0-7.089-1.9m7.089 1.9 1.9-7.09'
            stroke='url(#o)'
            strokeWidth={4}
            strokeMiterlimit={4.819}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Defs>
            <LinearGradient
                id='a'
                x1={191}
                y1={0}
                x2={191}
                y2={536}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#622FED' stopOpacity={0.1} />
                <Stop offset={1} stopColor='#622FED' stopOpacity={0.06} />
            </LinearGradient>
            <LinearGradient
                id='b'
                x1={191}
                y1={79}
                x2={191}
                y2={457}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#622FED' stopOpacity={0.2} />
                <Stop offset={1} stopColor='#622FED' stopOpacity={0.06} />
            </LinearGradient>
            <LinearGradient
                id='c'
                x1={193}
                y1={144}
                x2={193}
                y2={392}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#622FED' stopOpacity={0.2} />
                <Stop offset={1} stopColor='#622FED' stopOpacity={0.06} />
            </LinearGradient>
            <LinearGradient
                id='e'
                x1={191.849}
                y1={325.308}
                x2={191.849}
                y2={354.534}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#AE70ED' />
                <Stop offset={1} stopColor='#803EC0' stopOpacity={0.42} />
            </LinearGradient>
            <LinearGradient
                id='f'
                x1={188.822}
                y1={302.115}
                x2={188.822}
                y2={324.863}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#A092F4' />
                <Stop offset={1} stopColor='#A092F4' />
            </LinearGradient>
            <LinearGradient
                id='i'
                x1={188.315}
                y1={305.454}
                x2={188.315}
                y2={322.99}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#AE70ED' />
                <Stop offset={1} stopColor='#803EC0' stopOpacity={0.42} />
            </LinearGradient>
            <LinearGradient
                id='j'
                x1={129.144}
                y1={228.504}
                x2={129.144}
                y2={294.793}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9C79FC' />
                <Stop offset={1} stopColor='#9169FF' />
            </LinearGradient>
            <LinearGradient
                id='k'
                x1={188.934}
                y1={114}
                x2={188.934}
                y2={180.289}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9C79FC' />
                <Stop offset={1} stopColor='#9169FF' />
            </LinearGradient>
            <LinearGradient
                id='l'
                x1={244.142}
                y1={228.256}
                x2={244.142}
                y2={294.545}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9C79FC' />
                <Stop offset={1} stopColor='#9169FF' />
            </LinearGradient>
            <LinearGradient
                id='m'
                x1={201.515}
                y1={264.003}
                x2={169.957}
                y2={266.462}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9C79FC' />
                <Stop offset={1} stopColor='#9169FF' />
            </LinearGradient>
            <LinearGradient
                id='n'
                x1={235.942}
                y1={180.264}
                x2={245.369}
                y2={211.822}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9C79FC' />
                <Stop offset={1} stopColor='#9169FF' />
            </LinearGradient>
            <LinearGradient
                id='o'
                x1={128.131}
                y1={211.464}
                x2={135.746}
                y2={179.42}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9C79FC' />
                <Stop offset={1} stopColor='#9169FF' />
            </LinearGradient>
        </Defs>
    </Svg>
);

export default SvgComponent;