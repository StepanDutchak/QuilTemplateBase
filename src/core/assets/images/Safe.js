/* eslint-disable max-lines-per-function */
/* eslint-disable func-style */
import * as React from 'react';
import Svg, { Circle, Path, Defs, LinearGradient, Stop, Ellipse, G, Rect, Mask, RadialGradient } from 'react-native-svg';

const SvgComponent = (props) => (
    <Svg
        width={210}
        height={208}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <Path
            d='M132.099 66.867h-2.495a6 6 0 0 1-6-6V43.072a6 6 0 0 1 6-6h2.495a6 6 0 0 1 6 6v17.795a6 6 0 0 1-6 6ZM132.099 158.666h-2.495a6 6 0 0 1-6-6v-17.795a6 6 0 0 1 6-6h2.495a6 6 0 0 1 6 6v17.795a6 6 0 0 1-6 6Z'
            stroke='#000'
        />
        <Path
            d='M123.345 201.213 113.551 203l7.992-15.289 10.008-.711-4.461 11.151a5 5 0 0 1-3.745 3.062Z'
            fill='#6452D1'
        />
        <Path
            d='m101.259 199.127-4.708-12.12 25.518.705-4.312 11.642a6 6 0 0 1-5.986 3.905l-5.278-.316a6.002 6.002 0 0 1-5.234-3.816Z'
            fill='#725FE7'
        />
        <G filter='url(#a)'>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='m125.84 199.967-8.79.533h-15.038a6 6 0 0 0 4.481 2.443l5.278.316a5.99 5.99 0 0 0 2.534-.397l9.04-1.649a4.995 4.995 0 0 0 2.495-1.246Z'
                fill='url(#b)'
            />
        </G>
        <Path
            d='M170.532 190.163 163.551 192l3.5-12h9.5l-2.6 7.056a4.999 4.999 0 0 1-3.419 3.107Z'
            fill='#5845D3'
        />
        <Path
            d='M150.059 189.656 145.551 179l23.5 1-3.51 9.749a4 4 0 0 1-3.912 2.643l-8.034-.298a4 4 0 0 1-3.536-2.438Z'
            fill='#6A58DD'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M166.171 188h-16.813l-3.807-9 23 .979v1.41l-2.38 6.611Z'
            fill='url(#c)'
        />
        <Mask
            id='e'
            style={{
                maskType : 'alpha'
            }}
            maskUnits='userSpaceOnUse'
            x={122}
            y={0}
            width={88}
            height={188}
        >
            <Path
                d='M209.769 152.06V34.233c0-14.387-10.903-26.433-25.219-27.862L122.827.211 127.551 188l58.136-8.215c13.813-1.952 24.082-13.775 24.082-27.725Z'
                fill='url(#d)'
            />
        </Mask>
        <G mask='url(#e)'>
            <Path
                d='M209.769 152.06V34.36c0-14.441-10.981-26.513-25.357-27.876l-56.861-5.39V188l58.136-8.216c13.813-1.952 24.082-13.774 24.082-27.724Z'
                fill='url(#f)'
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M209.769 147.89v4.577c0 .843-.037 1.678-.111 2.503-1.798 14.045-12.832 21.664-19.107 23.922l-63 9.108c7.5-2.699 21.8-13.055 19-32.892l63-9.108c.09.64.163 1.27.218 1.89Z'
                fill='url(#g)'
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M123.566 1.2c8.624 2.292 23.485 8.843 23.485 28.3l62.719 6.471v-1.675c0-14.414-10.943-26.473-25.289-27.868L146.263 2.71 123.557.758l.009.442Z'
                fill='url(#h)'
            />
        </G>
        <Path
            d='M90.335 189.603 79.551 192l5.5-13h11.5l-2.581 7.374a4.999 4.999 0 0 1-3.635 3.229Z'
            fill='#5845D3'
        />
        <Path
            d='M67.97 189.07 63.55 178l23 1.037-3.443 10.136a4 4 0 0 1-3.944 2.71l-7.634-.3a4 4 0 0 1-3.558-2.513Z'
            fill='#6A58DD'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='m65.55 183.009 2.42 6.061.025.059 14.777.777a3.99 3.99 0 0 0 .335-.733l1.444-4.249V183h-19v.009Z'
            fill='url(#i)'
        />
        <Path
            d='M49.862 195.724 39.55 198.5l5.5-12.5 10.5-1-2.2 7.333a5 5 0 0 1-3.49 3.391Z'
            fill='#6452D1'
        />
        <Path
            d='M28.06 193.705 26.05 185l20 1-2.588 8.414a6 6 0 0 1-6.195 4.218l-3.821-.294a6 6 0 0 1-5.386-4.633Z'
            fill='#725FE7'
        />
        <G filter='url(#j)'>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='m45.767 186-1.563 6H27.666l-1.367-7 19.468 1Z'
                fill='url(#k)'
            />
        </G>
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='m122.55 186-2.086 6H98.585l-2.664-7.024L122.55 186Z'
            fill='url(#l)'
        />
        <Path
            d='m26.93 185.866 91.361 3.495c15.872.607 29.071-12.096 29.071-27.979V28.469c0-15.646-12.821-28.256-28.465-27.997L27.535 1.99C12.255 2.243 0 14.702 0 29.985v127.902c0 15.047 11.893 27.404 26.93 27.979Z'
            fill='url(#m)'
        />
        <Path
            d='m40.084 172.459 64 1.067c15.645.26 28.467-12.35 28.467-27.997V41.764c0-15.611-12.767-28.207-28.377-27.997l-64 .861c-15.316.206-27.623 12.68-27.623 27.998v101.837c0 15.282 12.253 27.741 27.533 27.996Z'
            fill='#725FE7'
        />
        <G filter='url(#n)'>
            <Path
                d='m97.959 176.263-71.41-2.088A6.177 6.177 0 0 1 20.55 168l93.5-5.5c0 2.436-1.25 5.362-2.784 7.91-2.766 4.592-7.95 6.01-13.308 5.853Z'
                fill='url(#o)'
            />
        </G>
        <Rect
            x={116.308}
            y={35.001}
            width={77.371}
            height={102.758}
            rx={7}
            transform='rotate(19.77 116.308 35.001)'
            fill='#F4F4FA'
        />
        <Rect
            x={105.552} y={49} width={24}
            height={90} rx={12} fill='url(#p)'
        />
        <G filter='url(#q)'>
            <Path fill='#5F5F5F' fillOpacity={0.2} d='M108.551 42h15v102h-15z' />
        </G>
        <Rect
            x={112.234}
            y={78.499}
            width={25.387}
            height={7.253}
            rx={3.627}
            transform='rotate(19.77 112.234 78.499)'
            fill='#725FE7'
            fillOpacity={0.26}
        />
        <Rect
            x={141.814}
            y={89.131}
            width={24.178}
            height={7.253}
            rx={3.627}
            transform='rotate(19.77 141.814 89.13)'
            fill='#725FE7'
            fillOpacity={0.26}
        />
        <Path
            d='m129.949 56.176-.465 1.293.698.251c.217.078.407.082.57.012.163-.07.28-.205.353-.407a.654.654 0 0 0-.02-.54c-.084-.164-.231-.284-.441-.36l-.695-.249Zm-.764 2.126-.584 1.624-1.181-.424 1.669-4.641 2.042.734c.543.195.918.484 1.127.866.21.38.228.81.057 1.288-.105.292-.27.532-.495.72-.224.185-.48.288-.768.308l.28 2.131-1.325-.476-.211-1.91-.611-.22ZM135.658 61.392l-.341.948-3.181-1.143 1.668-4.641 3.181 1.143-.341.949-2-.72-.333.927 1.881.677-.312.868-1.882-.676-.341.949 2.001.719ZM138.305 63.556c-.695-.25-1.164-.665-1.408-1.247-.244-.581-.229-1.25.043-2.008.272-.757.685-1.281 1.241-1.573.558-.293 1.186-.315 1.882-.064.384.138.704.342.96.614.259.27.43.578.514.925.084.345.07.692-.044 1.041l-1.135-.408a.986.986 0 0 0-.648-1.188.95.95 0 0 0-.906.114c-.277.193-.498.516-.66.969-.164.454-.199.846-.106 1.175.092.328.3.55.624.667.255.092.497.094.724.006a.995.995 0 0 0 .528-.49l1.133.408c-.211.525-.572.886-1.084 1.085-.511.196-1.064.188-1.658-.026ZM143.175 60.527c.572-.291 1.207-.31 1.906-.06.699.252 1.176.671 1.429 1.259.255.585.247 1.254-.024 2.007-.271.755-.692 1.278-1.261 1.57-.569.289-1.203.308-1.902.057-.704-.253-1.182-.672-1.437-1.258-.254-.587-.245-1.258.026-2.013.271-.753.692-1.274 1.263-1.562Zm1.555.918a1.001 1.001 0 0 0-.935.115c-.293.195-.519.515-.68.961-.161.448-.19.84-.089 1.178a.996.996 0 0 0 .648.683c.328.118.639.08.932-.116.292-.195.519-.516.681-.965.16-.446.188-.837.084-1.175a.986.986 0 0 0-.641-.68ZM149.068 67.283l-1.493-.537.173-5.179 1.354.487-.337 3.736.061.022 2.093-3.105 1.274.458-3.125 4.118ZM154.828 68.282l-.341.949-3.181-1.143 1.668-4.642 3.182 1.144-.341.948-2.001-.719-.333.927 1.882.676-.313.868-1.881-.676-.341.949 2 .719ZM158.023 66.267l-.465 1.293.698.25c.216.078.406.082.569.013.163-.07.281-.206.354-.407a.658.658 0 0 0-.02-.541c-.084-.164-.232-.283-.442-.359l-.694-.25Zm-.765 2.126-.583 1.624-1.181-.424 1.668-4.642 2.043.735c.542.194.918.483 1.127.866.209.38.228.81.056 1.288a1.64 1.64 0 0 1-.494.719 1.324 1.324 0 0 1-.769.309l.28 2.13-1.325-.476-.21-1.91-.612-.22ZM162.522 72.119l-1.177-.423.573-1.596-.507-3.621 1.258.452.223 2.219.061.022 1.578-1.572 1.258.452-2.693 2.471-.574 1.596ZM130.931 64.024l2.033.73c.499.18.849.475 1.047.886.201.41.212.865.033 1.363-.176.49-.479.829-.909 1.013-.428.183-.902.18-1.421-.006l-.782-.28-.489 1.36-1.18-.425 1.668-4.641Zm.854 1.331-.533 1.483.534.192c.253.091.472.098.657.022.185-.077.321-.235.407-.475.087-.242.085-.451-.007-.627-.092-.176-.264-.31-.517-.4l-.541-.195ZM138.044 71.822l-1.178-.424.673-1.871-1.849-.665-.673 1.872-1.181-.425 1.669-4.641 1.18.424-.654 1.82 1.849.666.655-1.821 1.177.423-1.668 4.642ZM141.666 68.888l-.465 1.294.698.25c.217.078.406.082.569.013.164-.07.281-.206.354-.407a.654.654 0 0 0-.02-.541c-.084-.164-.231-.283-.441-.359l-.695-.25Zm-.764 2.127-.584 1.624-1.181-.424 1.669-4.642 2.042.734c.543.195.918.484 1.127.867.209.38.228.81.056 1.288a1.631 1.631 0 0 1-.494.719c-.224.186-.48.289-.769.309l.281 2.13-1.326-.476-.21-1.91-.611-.22ZM146.815 74.974l.077-1.123-1.515-.545-.666.912-1.17-.42 3.225-4.082 1.444.519-.108 5.202-1.287-.463Zm.222-3.98-1.13 1.544 1.068.384.123-1.907-.061-.022ZM149.156 74.323l1.126.405a.555.555 0 0 0 .108.496c.121.155.304.276.548.364.221.08.418.096.59.049a.465.465 0 0 0 .339-.3.37.37 0 0 0-.057-.365c-.084-.117-.249-.25-.496-.4l-.567-.342c-.396-.232-.661-.501-.795-.809-.134-.307-.136-.643-.005-1.007.164-.455.462-.758.894-.91.435-.154.933-.13 1.493.071.542.195.937.488 1.183.88.247.391.299.803.155 1.236l-1.09-.392a.561.561 0 0 0-.088-.482.897.897 0 0 0-.465-.345c-.208-.075-.391-.089-.551-.042a.454.454 0 0 0-.318.3.386.386 0 0 0 .053.367c.08.119.235.246.462.38l.557.332c.427.252.708.524.844.815.137.291.139.622.007.99-.174.485-.485.803-.932.955-.446.15-.973.115-1.582-.104-.588-.211-1.009-.509-1.263-.893-.252-.384-.302-.8-.15-1.25ZM156.986 77.558l-.341.95-3.181-1.144 1.668-4.641 3.181 1.143-.341.949-2.001-.72-.333.927 1.882.676-.312.869-1.882-.676-.341.948 2.001.72Z'
            fill='#725FE7'
        />
        <Rect
            x={107.737}
            y={91.013}
            width={25.387}
            height={7.253}
            rx={3.627}
            transform='rotate(19.77 107.737 91.013)'
            fill='#725FE7'
            fillOpacity={0.26}
        />
        <Rect
            x={137.315}
            y={101.645}
            width={24.178}
            height={7.253}
            rx={3.627}
            transform='rotate(19.77 137.315 101.645)'
            fill='#725FE7'
            fillOpacity={0.26}
        />
        <Rect
            x={103.647}
            y={102.39}
            width={25.387}
            height={7.253}
            rx={3.627}
            transform='rotate(19.77 103.647 102.39)'
            fill='#725FE7'
            fillOpacity={0.26}
        />
        <Rect
            x={133.227}
            y={113.021}
            width={24.178}
            height={7.253}
            rx={3.627}
            transform='rotate(19.77 133.227 113.021)'
            fill='#725FE7'
            fillOpacity={0.26}
        />
        <Rect
            x={99.149}
            y={114.904}
            width={25.387}
            height={7.253}
            rx={3.627}
            transform='rotate(19.77 99.15 114.904)'
            fill='#725FE7'
            fillOpacity={0.26}
        />
        <Rect
            x={128.729}
            y={125.536}
            width={24.178}
            height={7.253}
            rx={3.627}
            transform='rotate(19.77 128.729 125.536)'
            fill='#725FE7'
            fillOpacity={0.26}
        />
        <Path
            d='M120.551 151.049c0 13.62-11.322 24.511-24.933 23.982l-61.766-2.401c-9.662-.376-17.301-8.318-17.301-17.987V32.454c0-9.645 7.602-17.576 17.239-17.984L68.55 13l27.078-1.041c13.607-.524 24.923 10.365 24.923 23.982v115.108Z'
            fill='#6452D1'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M119.551 157.93c-3.05 10.214-12.714 17.537-23.933 17.101l-24.067-.936V156h48v1.93Z'
            fill='url(#r)'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M120.533 35H85.551V12.346l10.077-.387c13.292-.512 24.398 9.867 24.905 23.041Z'
            fill='url(#s)'
        />
        <Ellipse
            cx={115.551} cy={69} rx={2}
            ry={10} fill='url(#t)'
        />
        <Ellipse
            cx={115.551} cy={98} rx={2}
            ry={10} fill='url(#u)'
        />
        <Ellipse
            cx={115.551} cy={128} rx={2}
            ry={10} fill='url(#v)'
        />
        <Ellipse
            cx={115.051} cy={63} rx={2.5}
            ry={5} fill='url(#w)'
        />
        <Ellipse
            cx={115.051} cy={93} rx={2.5}
            ry={5} fill='url(#x)'
        />
        <Ellipse
            cx={115.051} cy={123} rx={2.5}
            ry={5} fill='url(#y)'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M113.551 63c0 2.761.895 5 2 5h6V58h-6c-1.105 0-2 2.239-2 5Z'
            fill='#9283F3'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M115.546 68c-1.102-.007-1.995-2.243-1.995-5 0-.343.014-.677.04-1h7.96v6h-6.005Z'
            fill='url(#z)'
        />
        <Ellipse
            cx={121.551} cy={63} rx={2}
            ry={5} fill='#9284E9'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M113.551 93c0 2.761.895 5 2 5h6V88h-6c-1.105 0-2 2.239-2 5Z'
            fill='#9283F3'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M115.546 98c-1.102-.007-1.995-2.243-1.995-5 0-.343.014-.677.04-1h7.96v6h-6.005Z'
            fill='url(#A)'
        />
        <Ellipse
            cx={121.551} cy={93} rx={2}
            ry={5} fill='#9284E9'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M113.551 123c0 2.761.895 5 2 5h6v-10h-6c-1.105 0-2 2.239-2 5Z'
            fill='#9283F3'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M115.546 128c-1.102-.007-1.995-2.243-1.995-5 0-.342.014-.677.04-1h7.96v6h-6.005Z'
            fill='url(#B)'
        />
        <Ellipse
            cx={121.551} cy={123} rx={2}
            ry={5} fill='#9284E9'
        />
        <G filter='url(#C)'>
            <Path
                d='m12.55 45 .23-13.565c.153-8.962 7.237-16.267 16.19-16.693L55.05 13.5'
                stroke='#715FDE'
                strokeOpacity={0.5}
                strokeWidth={2}
                strokeLinecap='round'
            />
        </G>
        <G filter='url(#D)'>
            <Path
                d='m11.55 142 .238 14.036c.151 8.961 7.233 16.265 16.185 16.693L54.551 174'
                stroke='#6F5ED6'
                strokeOpacity={0.6}
                strokeWidth={2}
                strokeLinecap='round'
            />
        </G>
        <Path
            d='M110.551 150.989c0 13.643-11.358 24.542-24.99 23.98l-55.752-2.3c-9.645-.398-17.258-8.332-17.258-17.985V32.444c0-9.64 7.597-17.57 17.23-17.983l55.742-2.389c13.646-.584 25.028 10.32 25.028 23.979v114.938Z'
            fill='url(#E)'
        />
        <G filter='url(#F)'>
            <Rect
                x={7.551} y={46} width={6}
                height={19} rx={3} fill='url(#G)'
            />
        </G>
        <Ellipse
            cx={13.55} cy={66.544} rx={4}
            ry={0.578} fill='#6E5DE2'
        />
        <Path
            d='M9.552 66.544V44.29l3.567.258c.288.02.577.02.865 0l3.567-.258v22.255h-8Z'
            fill='url(#H)'
        />
        <Ellipse
            cx={13.551} cy={44.289} rx={4}
            ry={0.289} fill='#6755DA'
        />
        <G filter='url(#I)'>
            <Rect
                x={7.551} y={125} width={6}
                height={19} rx={3} fill='url(#J)'
            />
        </G>
        <Ellipse
            cx={13.55} cy={145.544} rx={4}
            ry={0.578} fill='#6655D6'
        />
        <Path
            d='M9.552 145.544v-22.255l3.567.258c.288.021.577.021.865 0l3.567-.258v22.255h-8Z'
            fill='url(#K)'
        />
        <Ellipse
            cx={13.551} cy={123.289} rx={4}
            ry={0.289} fill='#6F5CE2'
        />
        <Ellipse
            rx={29}
            ry={31.5}
            transform='matrix(-1 0 0 1 56.55 93.5)'
            fill='url(#L)'
        />
        <Ellipse
            rx={16}
            ry={17}
            transform='matrix(-1 0 0 1 52.55 94)'
            fill='url(#M)'
        />
        <Ellipse
            rx={13.5}
            ry={14}
            transform='matrix(-1 0 0 1 52.05 94)'
            fill='url(#N)'
        />
        <Circle transform='matrix(-1 0 0 1 51.55 94)' fill='#8C7DEB' r={11} />
        <Ellipse
            rx={10.476}
            ry={11}
            transform='matrix(-1 0 0 1 51.027 94)'
            fill='url(#O)'
        />
        <Path
            d='m55.55 67.5-1 5.5'
            stroke='#9183EA'
            strokeWidth={2}
            strokeLinecap='round'
        />
        <Path
            d='m51.05 119-.5-5'
            stroke='#8070E8'
            strokeWidth={2}
            strokeLinecap='round'
        />
        <Path
            d='M73.55 93h7M30.55 92h3'
            stroke='#8A79F1'
            strokeWidth={2}
            strokeLinecap='round'
        />
        <Path
            d='m70.225 107.802-2.602-1.467'
            stroke='#8778EB'
            strokeWidth={2}
            strokeLinecap='round'
        />
        <Path
            d='m39.518 78.467-1.929-2.2M70.225 77.149l-2.36 1.793'
            stroke='#9284EA'
            strokeWidth={2}
            strokeLinecap='round'
        />
        <Path
            d='m36.628 108.078 2.142-2.019'
            stroke='#8778EB'
            strokeWidth={2}
            strokeLinecap='round'
        />
        <Defs>
            <LinearGradient
                id='b'
                x1={126.551}
                y1={199}
                x2={102.551}
                y2={201}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#725FE7' />
                <Stop offset={1} stopColor='#9181F3' stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id='c'
                x1={157.051}
                y1={179}
                x2={157.051}
                y2={188}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#4533B3' />
                <Stop offset={1} stopColor='#6A58DD' />
            </LinearGradient>
            <LinearGradient
                id='d'
                x1={166.298}
                y1={0.21}
                x2={166.298}
                y2={188.217}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#816FF0' />
                <Stop offset={1} stopColor='#725FE7' />
            </LinearGradient>
            <LinearGradient
                id='f'
                x1={166.298}
                y1={0.21}
                x2={166.298}
                y2={188.216}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#816FF0' />
                <Stop offset={1} stopColor='#725FE7' />
            </LinearGradient>
            <LinearGradient
                id='g'
                x1={168.66}
                y1={146}
                x2={168.66}
                y2={188}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#7967EB' />
                <Stop offset={1} stopColor='#604CDA' />
            </LinearGradient>
            <LinearGradient
                id='h'
                x1={166.663}
                y1={0.758}
                x2={166.663}
                y2={35.971}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9F90FC' />
                <Stop offset={1} stopColor='#7B69EC' stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id='i'
                x1={75.051}
                y1={183}
                x2={75.051}
                y2={189.906}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#332589' />
                <Stop offset={1} stopColor='#725FE7' />
            </LinearGradient>
            <LinearGradient
                id='k'
                x1={36.033}
                y1={185}
                x2={36.033}
                y2={192}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#6856D8' />
                <Stop offset={1} stopColor='#6D5AE0' />
            </LinearGradient>
            <LinearGradient
                id='l'
                x1={109.236}
                y1={184.976}
                x2={109.236}
                y2={192}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#5D4BCB' />
                <Stop offset={1} stopColor='#725FE7' />
            </LinearGradient>
            <LinearGradient
                id='m'
                x1={73.681}
                y1={-0.775}
                x2={73.681}
                y2={190.473}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9B8CF9' />
                <Stop offset={1} stopColor='#9283F3' />
            </LinearGradient>
            <LinearGradient
                id='o'
                x1={67.301}
                y1={162.5}
                x2={67.301}
                y2={176.5}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#5742DE' />
                <Stop offset={1} stopColor='#9383F3' />
            </LinearGradient>
            <LinearGradient
                id='r'
                x1={95.551}
                y1={156}
                x2={95.551}
                y2={175.049}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#6452D1' stopOpacity={0.51} />
                <Stop offset={1} stopColor='#503CC9' stopOpacity={0.47} />
            </LinearGradient>
            <LinearGradient
                id='s'
                x1={103.042}
                y1={23}
                x2={103.042}
                y2={35}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8674F1' />
                <Stop offset={1} stopColor='#6452D1' stopOpacity={0.29} />
            </LinearGradient>
            <LinearGradient
                id='t'
                x1={115.551}
                y1={59}
                x2={115.551}
                y2={79}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#4D3DAF' />
                <Stop offset={1} stopColor='#5E4EC1' stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id='u'
                x1={115.551}
                y1={88}
                x2={115.551}
                y2={108}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#4939AC' />
                <Stop offset={1} stopColor='#5E4EC1' stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id='v'
                x1={115.551}
                y1={118}
                x2={115.551}
                y2={138}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#4535A8' />
                <Stop offset={1} stopColor='#5E4EC1' stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id='w'
                x1={115.051}
                y1={58}
                x2={115.051}
                y2={68}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#7A69E2' />
                <Stop offset={1} stopColor='#5D4CC5' stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id='x'
                x1={115.051}
                y1={88}
                x2={115.051}
                y2={98}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#7664E0' />
                <Stop offset={1} stopColor='#5D4CC5' stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id='y'
                x1={115.051}
                y1={118}
                x2={115.051}
                y2={128}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#5D4CC5' stopOpacity={0} />
                <Stop offset={1} stopColor='#5E4EBB' />
            </LinearGradient>
            <LinearGradient
                id='z'
                x1={117.571}
                y1={64}
                x2={117.571}
                y2={68}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9283F3' />
                <Stop offset={1} stopColor='#6453CD' />
            </LinearGradient>
            <LinearGradient
                id='A'
                x1={117.571}
                y1={94}
                x2={117.571}
                y2={98}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9283F3' />
                <Stop offset={1} stopColor='#6453CD' />
            </LinearGradient>
            <LinearGradient
                id='B'
                x1={117.571}
                y1={124}
                x2={117.571}
                y2={128}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9283F3' />
                <Stop offset={1} stopColor='#6453CD' />
            </LinearGradient>
            <LinearGradient
                id='E'
                x1={61.551}
                y1={176}
                x2={61.551}
                y2={11}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#725FE7' />
                <Stop offset={1} stopColor='#8371F0' />
            </LinearGradient>
            <LinearGradient
                id='G'
                x1={10.551}
                y1={46}
                x2={10.551}
                y2={65}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8675F0' />
                <Stop offset={1} stopColor='#806EEF' />
            </LinearGradient>
            <LinearGradient
                id='H'
                x1={13.551}
                y1={44.289}
                x2={13.551}
                y2={66.544}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#7765EC' />
                <Stop offset={0} stopColor='#7663EE' />
                <Stop offset={1} stopColor='#6F5EE2' />
            </LinearGradient>
            <LinearGradient
                id='J'
                x1={10.551}
                y1={125}
                x2={10.551}
                y2={144}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8675F0' />
                <Stop offset={1} stopColor='#806EEF' />
            </LinearGradient>
            <LinearGradient
                id='K'
                x1={13.551}
                y1={123.289}
                x2={13.551}
                y2={145.544}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#6F5DE2' />
                <Stop offset={1} stopColor='#6855E0' />
            </LinearGradient>
            <LinearGradient
                id='M'
                x1={16}
                y1={0}
                x2={16}
                y2={34}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9283F3' />
                <Stop offset={1} stopColor='#7F6EE9' />
            </LinearGradient>
            <LinearGradient
                id='N'
                x1={13.5}
                y1={0}
                x2={13.5}
                y2={28}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8271ED' />
                <Stop offset={1} stopColor='#6E5ED0' />
            </LinearGradient>
            <LinearGradient
                id='O'
                x1={10.476}
                y1={0}
                x2={10.476}
                y2={22}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#CBC2FF' />
                <Stop offset={1} stopColor='#7D6CE8' />
            </LinearGradient>
            <RadialGradient
                id='p'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='matrix(0 45 -12 0 117.552 94)'
            >
                <Stop stopColor='#5B49C9' />
                <Stop offset={1} stopColor='#A194F2' stopOpacity={0} />
            </RadialGradient>
            <RadialGradient
                id='L'
                cx={0}
                cy={0}
                r={1}
                gradientUnits='userSpaceOnUse'
                gradientTransform='matrix(0 31.5 -29 0 29 31.5)'
            >
                <Stop stopColor='#7A69E3' />
                <Stop offset={1} stopColor='#6A58D9' />
            </RadialGradient>
        </Defs>
    </Svg>
);

export default SvgComponent;
