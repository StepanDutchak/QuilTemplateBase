/* eslint-disable max-lines-per-function */
/* eslint-disable func-style */

import * as React from 'react';
import Svg, {
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
    <Svg
        width={375}
        height={536}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <Circle
            cx={189} cy={268} r={267.5}
            stroke='url(#a)'
        />
        <Circle
            opacity={0.8} cx={189} cy={268}
            r={188.5} stroke='url(#b)'
        />
        <Circle
            opacity={0.5} cx={189} cy={268}
            r={123.5} stroke='url(#c)'
        />
        <Path
            d='M138.157 190.663c8.066 7.135 8.661 19.639 1.328 27.927-7.332 8.288-19.815 9.222-27.881 2.087-8.065-7.136-8.66-19.639-1.328-27.928 7.333-8.288 19.816-9.222 27.881-2.086Z'
            fill='#9169FF'
        />
        <Path
            d='M139.118 190.432c7.98 7.06 8.596 19.401 1.374 27.563-7.221 8.163-19.545 9.057-27.525 1.997-7.981-7.06-8.596-19.401-1.375-27.564 7.222-8.163 19.545-9.056 27.526-1.996Z'
            fill='url(#d)'
        />
        <Path
            d='M125.771 194.077c.592-.287 1.338.425 1.033.994-.174.465-.872.574-1.237.208-.387-.351-.278-1.026.204-1.202Zm-6.423.525c.36-.136.828.195.799.575.048.415-.471.708-.846.503-.496-.194-.456-.959.047-1.078Zm13.21 1.382c-.569-.078-.678-.94-.135-1.101.42-.189.817.193.888.581-.082.328-.362.624-.753.52Zm-11.687 1.287c.6-.357 1.48.213 1.401.89-.016.686-.954 1.062-1.499.587-.525-.376-.465-1.21.098-1.477Zm9.289.597c.257-.667 1.355-.663 1.678-.001.317.516-.045 1.138-.584 1.3-.718.113-1.418-.651-1.094-1.299Zm-5.055 1.125c-.018-.578.519-.997 1.089-1.024.381.082.797.246.968.617.314.514.06 1.206-.482 1.427-.247.129-.544.072-.817.051-.42-.206-.78-.6-.758-1.071Zm-9.556.631c.549-.317 1.311.299 1.114.875-.105.499-.802.688-1.21.359-.435-.31-.383-1.03.096-1.234Zm20.561.452c.463-.341 1.25.08 1.206.651.043.522-.62.901-1.094.622-.52-.234-.589-.998-.112-1.273Zm-8.27.856c.771-.251 1.702.091 2.16.767.602.828.319 2.063-.578 2.511-.927.532-2.31.033-2.68-.985-.414-.912.135-2.031 1.098-2.293Zm-4.56-.012c.853-.372 2.02-.018 2.455.839.508.836.155 1.977-.711 2.384-.867.46-2.112.069-2.556-.826-.494-.868-.098-2.022.812-2.397Zm-4.534 1.402c.053-.533.569-.869 1.097-.893.571.079 1.035.514 1.109 1.07-.025.548-.454 1.074-1.059 1.058-.663.04-1.261-.609-1.147-1.235Zm13.473-.504c.674-.367 1.635.21 1.621.964.065.801-.972 1.341-1.662.857-.715-.406-.684-1.505.041-1.821Zm-10.717 2.58c.793-.194 1.714.188 2.122.903.444.72.291 1.704-.364 2.21-.837.746-2.42.404-2.898-.649-.544-.968.062-2.236 1.14-2.464Zm8.652.187c.771-.197 1.69.111 2.122.801.569.79.331 1.945-.479 2.428-.847.564-2.187.228-2.681-.693-.595-.954-.047-2.273 1.038-2.536Zm-13.769.583c.684-.235 1.465.514 1.2 1.165-.157.596-1.03.798-1.493.346-.54-.426-.364-1.345.293-1.511Zm18.718 1.368a.977.977 0 0 1 .96-1.046c.474.083.942.459.915.953.058.654-.751 1.081-1.336.761-.274-.139-.419-.41-.539-.668Zm-22.102-1.12c.411-.165.932.192.847.634-.011.501-.777.677-1.069.252-.257-.297-.117-.743.222-.886Zm26.165.568c.288-.194.76-.04.883.291.204.363-.145.846-.566.777-.588.038-.798-.83-.317-1.068Zm-15.33 2.07c1.085-.249 2.279.652 2.31 1.734.095 1.095-1.04 2.039-2.163 1.761-.867-.152-1.563-.968-1.553-1.807-.02-.804.593-1.536 1.406-1.688Zm4.324.093c1.102-.274 2.33.645 2.337 1.751.083 1.074-1.017 1.986-2.116 1.749-1.033-.151-1.817-1.256-1.55-2.211.13-.638.675-1.147 1.329-1.289Zm-8.323.482c.764-.109 1.501.73 1.206 1.423-.211.742-1.335.919-1.848.299-.599-.599-.185-1.66.642-1.722Zm12.683.312c.677-.26 1.529.328 1.493 1.04.045.787-.98 1.306-1.659.833-.766-.429-.655-1.638.166-1.873Zm3.62 3.499c-.278-.486.194-1.112.75-1.011.276.002.474.215.654.395.043.285.111.626-.13.84-.324.398-1.082.266-1.274-.224Zm-20.338-1.342c.51-.321 1.267.19 1.163.77-.05.514-.719.794-1.169.492-.483-.276-.482-1.031.006-1.262Zm10.257 1.304c.671-.273 1.548.314 1.5 1.031.067.795-.989 1.321-1.662.83-.746-.426-.65-1.627.162-1.861Zm-4.716.959c.571-.28 1.357.242 1.318.863.029.511-.479.935-1.005.848-.434-.019-.725-.399-.872-.758-.001-.388.155-.816.559-.953Zm9.6.221c.587-.34 1.442.185 1.401.849.03.696-.914 1.12-1.477.651-.543-.37-.497-1.229.076-1.5Zm1.758 4.007c-.273-.39.028-.847.455-.925.347.075.717.333.653.716-.039.519-.827.662-1.108.209Zm-13.26-.626c.098-.303.346-.6.721-.513.545.05.723.841.253 1.074-.422.268-.927-.123-.974-.561Zm6.401.49c.094-.448.696-.654 1.101-.406.267.115.351.401.424.645-.034.125-.063.25-.092.375-.16.183-.366.365-.639.352-.505.046-.974-.514-.794-.966Z'
            fill='#DED2FD'
        />
        <Path
            d='M268.06 195.132c4.539 11.147 20.532 64.519 21.61 100.078.487 16.078-11.541 28.019-26.4 34.181l-19.712 8.174-89.902 31.976c-5.869 2.087-11.884 3.882-18.08 4.516-6.962.713-13.939.186-15.6-5.906-7.206-34.85-19.91-96.969-22.131-126.255l-.357-6.445a14.002 14.002 0 0 1 7.264-13.059l8.023-4.385c24.827-13.075 76.321-36.679 107.57-44.065 5.409-1.278 10.315-.684 14.589 1.291 21.15.417 29.998 12.216 33.126 19.899Z'
            fill='url(#e)'
        />
        <Path
            d='M240.504 175.741c.453 0 .952.064 1.484.182 5.935.887 16.698 4.19 21.925 12.031 5.699 8.549 12.213 31.381 14.757 41.728l8.651 42.746c1.697 7.803 3.97 25.953-.509 36.131-4.478 10.177-14.757 16.793-19.337 18.828l-27.479 11.196-27.48 9.668-68.19 24.427c-5.937 1.187-18.523 2.849-21.373 0-2.85-2.85-3.223-4.92-3.053-5.598 4.58-4.071 12.706-7.336 19.337-10.178 7.125-3.053 20.186-7.633 25.953-10.177l38.675-14.758 29.515-11.704 22.391-10.178c4.071-1.017 12.417-4.987 13.231-12.722 1.018-9.668 1.018-17.811 0-24.935-.814-5.699-3.392-19.677-4.58-25.953l-6.107-25.444-4.58-16.284c-1.866-7.294-7.633-23.001-15.775-27.48l-3.053-2.035 5.597.509Z'
            fill='url(#f)'
        />
        <Path
            d='M180.342 131.635c-4.206 10.989-17.278 16.199-29.195 11.637-11.918-4.562-18.168-17.169-13.962-28.158 4.207-10.989 17.278-16.199 29.196-11.637 11.917 4.563 18.168 17.169 13.961 28.158Z'
            fill='#D6BE83'
        />
        <Path
            d='M181.286 129.776c-4.173 10.9-17.343 15.989-29.417 11.367-12.073-4.622-18.478-17.205-14.306-28.104 4.173-10.9 17.343-15.99 29.417-11.367 12.073 4.622 18.479 17.205 14.306 28.104Z'
            fill='url(#g)'
        />
        <Path
            d='M151.172 124.839a.846.846 0 0 1 .566-.166l19.118 1.134c.35.02.503.397.243.597l-3.971 3.059a.848.848 0 0 1-.566.166l-19.119-1.134c-.349-.02-.502-.397-.242-.597l3.971-3.059ZM151.899 112.581a.878.878 0 0 1 .566-.166l19.118 1.134c.35.021.503.398.243.598l-3.971 3.059a.848.848 0 0 1-.566.166l-19.119-1.134c-.349-.021-.502-.398-.242-.598l3.971-3.059ZM167.711 119.63a.854.854 0 0 0-.542-.232l-19.119-1.134c-.349-.02-.545.336-.311.565l3.582 3.507a.851.851 0 0 0 .542.232l19.118 1.134c.35.021.546-.335.312-.565l-3.582-3.507Z'
            fill='#FCFBDD'
        />
        <Path
            d='M293.481 103.282c3.048 13.337-6.919 26.992-22.262 30.498-15.343 3.507-30.252-4.463-33.3-17.8-3.048-13.338 6.919-26.992 22.262-30.499 15.343-3.506 30.252 4.463 33.3 17.801Z'
            fill='#9169FF'
        />
        <Path
            d='M292.426 100.228c3.048 13.338-6.919 26.993-22.262 30.499-15.343 3.507-30.252-4.463-33.3-17.8-3.048-13.338 6.919-26.993 22.262-30.5 15.343-3.506 30.252 4.464 33.3 17.801Z'
            fill='url(#h)'
        />
        <Path
            d='m271.266 91.99-16.685 9.954 11.822.612 4.863-10.566ZM266.405 102.557l-11.822-.612 7.602 9.782 4.22-9.17Z'
            fill='#CAB6FF'
        />
        <Path
            d='m274.559 111.141-3.293-19.149-4.862 10.566 8.155 8.583Z'
            fill='#DED2FD'
        />
        <Path
            d='m262.183 111.728 12.376-.587-8.155-8.583-4.221 9.17Z'
            fill='#DED2FD'
        />
        <Path
            d='m253.816 103.611 4.301 16.955 3.303-7.177-7.604-9.778Z'
            fill='#CAB6FF'
        />
        <Path
            d='m261.42 113.388-3.303 7.176 15.683-7.757-12.38.581Z'
            fill='#DED2FD'
        />
        <Path
            d='m135.166 364.027-1.527 2.036.509 2.036 2.545 1.017 4.071-.509c18.319-6.615 57.401-20.66 67.172-23.917 12.213-4.071 52.923-19.337 62.083-26.462 5.362-4.17 9.198-9.228 11.368-15.2 1.913-5.265 1.441-11.012.607-16.551l-5.868-38.983c-2.375-11.874-8.549-39.184-14.249-53.433-5.699-14.248-19.337-18.15-25.444-18.319 21.882 7.124 24.426 41.728 27.48 47.834 3.053 6.107 8.651 41.22 10.686 48.853 2.036 7.633.509 23.917 0 29.006-.407 4.071-7.972 10.178-11.704 12.722l-26.462 10.687-61.574 23.917-39.693 15.266Z'
            fill='url(#i)'
        />
        <Path
            d='m221.75 260.039-3.128-5.421c4.071 5.292 10.178 6.955 12.722 7.124 7.634-2.714 24.834-8.752 32.569-11.195 7.735-2.442 17.471 4.071 21.373 7.633l.509 4.58c-1.837-2.755-11.964-7.583-18.41-8.125-1.29-.108-2.566.192-3.793.607l-28.795 9.722a11 11 0 0 1-13.047-4.925Z'
            fill='url(#j)'
        />
        <Path
            d='M250.173 214.416c13.027-4.071 22.73 2.376 25.953 6.107l5.089 18.828 4.071 19.338c-3.955-4.747-12.01-6.931-18.189-7.509-3.117-.292-6.211.394-9.169 1.417l-24.42 8.441c-6.641 2.296-13.824-1.579-15.552-8.39l-2.963-11.677c-1.458-5.746 1.149-11.76 6.458-14.4 8.398-4.178 19.647-9.319 28.722-12.155Z'
            fill='url(#k)'
        />
        <Path
            d='m274.599 252.583-10.178-38.167c2.443-.814 8.312 3.393 11.705 5.598l5.089 19.337 4.071 19.338c-.407-1.222-7.295-4.58-10.687-6.106Z'
            fill='url(#l)'
        />
        <Path
            d='M246.241 238.916c1.414 6.656-2.893 13.21-9.62 14.638-6.726 1.429-13.325-2.81-14.738-9.466-1.414-6.656 2.893-13.21 9.62-14.638 6.726-1.429 13.325 2.809 14.738 9.466Z'
            fill='url(#m)'
        />
        <Path
            d='M244.524 237.664c1.413 6.656-2.894 13.21-9.62 14.638-6.727 1.428-13.325-2.81-14.739-9.466-1.413-6.656 2.894-13.21 9.62-14.638 6.727-1.429 13.326 2.809 14.739 9.466Z'
            fill='url(#n)'
        />
        <Path
            d='M243.302 237.923c1.271 5.989-2.604 11.885-8.656 13.17-6.051 1.286-11.988-2.527-13.26-8.516-1.272-5.989 2.603-11.885 8.655-13.171 6.052-1.285 11.989 2.528 13.261 8.517Z'
            fill='url(#o)'
        />
        <Path
            d='M121.632 297.298c5.197 10.557.128 23.684-11.321 29.319-11.45 5.636-24.943 1.646-30.14-8.911-5.196-10.557-.127-23.684 11.322-29.319 11.449-5.636 24.943-1.646 30.139 8.911Z'
            fill='#D6BE83'
        />
        <Path
            d='M120.911 295.342c5.154 10.472-.07 23.589-11.669 29.298-11.6 5.709-25.18 1.849-30.335-8.622-5.154-10.472.07-23.589 11.67-29.298 11.599-5.709 25.18-1.849 30.334 8.622Z'
            fill='url(#p)'
        />
        <Path
            d='M103.378 297.211c-1.569-1.899-3.865-1.293-6.325.17l-1.888-2.857-1.796 1.274 1.845 2.776c-.472.339-.954.69-1.425 1.05l-1.856-2.786-1.795 1.273 1.888 2.836c-.39.289-.77.566-1.139.832l-.01-.009-2.483 1.769 1.233 1.848s1.312-.965 1.303-.933c.728-.521 1.237-.275 1.538.032l2.151 3.252c.051-.036.113-.084.206-.124-.062.047-.123.095-.195.134l3.012 4.546c.112.241.208.694-.295 1.047.031.007-1.303.932-1.303.932l1.016 2.33 2.35-1.662c.441-.305.862-.607 1.293-.9l1.91 2.875 1.796-1.273-1.889-2.857c.493-.341.986-.682 1.448-1.009l1.887 2.835 1.796-1.273-1.91-2.875c2.917-2.326 4.551-4.561 2.985-7.479-1.247-2.35-2.98-2.574-4.966-1.756.719-1.265.765-2.635-.382-4.018Zm1.568 7.95c1.43 2.144-2.561 4.623-3.782 5.485l-2.532-3.814c1.221-.862 4.83-3.925 6.314-1.671Zm-4.411-4.802c1.299 1.967-2.044 3.997-3.06 4.713l-2.293-3.459c1.016-.716 4-3.289 5.353-1.254Z'
            fill='#FCFBDD'
        />
        <Defs>
            <LinearGradient
                id='a'
                x1={189}
                y1={0}
                x2={189}
                y2={536}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#622FED' stopOpacity={0.1} />
                <Stop offset={1} stopColor='#622FED' stopOpacity={0.06} />
            </LinearGradient>
            <LinearGradient
                id='b'
                x1={189}
                y1={79}
                x2={189}
                y2={457}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#622FED' stopOpacity={0.2} />
                <Stop offset={1} stopColor='#622FED' stopOpacity={0.06} />
            </LinearGradient>
            <LinearGradient
                id='c'
                x1={189}
                y1={144}
                x2={189}
                y2={392}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#622FED' stopOpacity={0.2} />
                <Stop offset={1} stopColor='#622FED' stopOpacity={0.06} />
            </LinearGradient>
            <LinearGradient
                id='d'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9A77FC' />
                <Stop offset={1} stopColor='#926BFE' />
            </LinearGradient>
            <LinearGradient
                id='e'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9B8CF8' />
                <Stop offset={1} stopColor='#9384F3' />
            </LinearGradient>
            <LinearGradient
                id='f'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9A8BF7' />
                <Stop offset={1} stopColor='#9A8BF7' />
            </LinearGradient>
            <LinearGradient
                id='g'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#EFD390' />
                <Stop offset={1} stopColor='#F0D48F' />
            </LinearGradient>
            <LinearGradient
                id='h'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9C79FC' />
                <Stop offset={1} stopColor='#9169FF' />
            </LinearGradient>
            <LinearGradient
                id='i'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8371F0' />
                <Stop offset={1} stopColor='#7160DA' />
            </LinearGradient>
            <LinearGradient
                id='j'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#7966F3' />
                <Stop offset={1} stopColor='#6D59E3' />
            </LinearGradient>
            <LinearGradient
                id='k'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#8674F8' />
                <Stop offset={1} stopColor='#7865F3' />
            </LinearGradient>
            <LinearGradient
                id='l'
                x1={246.371}
                y1={216.545}
                x2={24.155}
                y2={224.891}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#7664E8' />
                <Stop offset={1} stopColor='#826FF6' stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id='m'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#9786FF' />
                <Stop offset={1} stopColor='#6B5AD1' />
            </LinearGradient>
            <LinearGradient
                id='n'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#C4BAFD' />
                <Stop offset={1} stopColor='#8474EA' />
            </LinearGradient>
            <LinearGradient
                id='o'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#D3CBFF' />
                <Stop offset={1} stopColor='#9788F8' />
            </LinearGradient>
            <LinearGradient
                id='p'
                x1={185.475}
                y1={81.601}
                x2={185.475}
                y2={374.302}
                gradientUnits='userSpaceOnUse'
            >
                <Stop stopColor='#EFD390' />
                <Stop offset={1} stopColor='#F0D48F' />
            </LinearGradient>
        </Defs>
    </Svg>
);

export default SvgComponent;
