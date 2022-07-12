import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 4281 1009" {...props}>
      <path
        d="M 495.43839,0.56161431 C 493.17172,10.08251 493.94612,19.03628 489.77226,28.294947 c -16.16107,35.854401 -50.85334,63.874671 -77.49227,91.733343 -47.14027,49.29919 -92.37227,94.96959 -106.22933,164.26666 -4.4064,22.03733 -6.03307,46.18453 -1.09227,68.26667 7.46667,33.36639 32.3456,59.39839 57.14667,81.23199 42.25066,37.19467 96.99306,69.65334 124.4704,120.368 6.96426,12.85227 11.904,27.28427 14.784,41.6 2.68053,13.32374 2.92906,26.98774 2.59626,40.53333 -0.6624,27.05707 -22.96,44.48534 -47.984,49.27467 -38.94506,7.45493 -81.3056,-9.40267 -114.13333,-29.2256 -34.83093,-21.03147 -63.52,-52.18773 -75.70667,-91.51573 -8.32533,-26.8704 -9.22133,-55.32907 -18.52693,-82.13333 -11.17013,-32.17387 -29.66613,-60.43094 -51.4624,-86.4 -10.91627,-13.00694 -23.57227,-31.54773 -38.83733,-39.46667 1.54346,17.6832 8.82453,35.55733 11.4432,53.33333 10.25173,69.59147 12.6528,149.48907 -40.2592,203.73334 -11.376,11.66293 -24.02251,21.75146 -38.384007,29.53706 -18.41877,9.98507 -39.19499,17.49653 -59.73333,21.65867 -9.94646,2.016 -20.10656,1.52853 -29.86667066,4.27093 6.99813096,14.31893 37.86112066,21.23733 52.26667066,24.928 41.18496,10.5536 88.741337,5.01547 130.133337,-1.92533 15.61386,-2.61867 33.28533,-9.81227 49.06666,-9.65547 11.95627,0.11947 28.83734,13.0752 39.46667,18.38933 26.01173,13.00587 52.93867,24.4928 81.06667,32.1024 92.07893,24.90774 188.93546,7.9104 252.17493,-68.1056 29.11573,-34.9984 46.1856,-75.39946 31.008,-120.53333 -10.2528,-30.4864 -31.2864,-56.71893 -51.63093,-81.06666 -34.6176,-41.42934 -74.18347,-78.43307 -108.02774,-120.53333 -23.78453,-29.5872 -45.91253,-72.14827 -12.4096,-103.91574 24.8672,-23.57866 58.1024,-18.3968 89.41867,-14.6496 11.1552,1.3344 25.92747,2.03734 35.08373,9.3792 3.80054,3.04747 3.83894,8.464 7.73974,11.20427 3.55413,2.496 10.29013,1.168 12.5024,5.47947 2.1824,4.25173 -3.35787,9.80266 0.784,13.72053 3.8944,3.6832 10.90773,1.0368 14.9184,4.89173 4.26666,4.10027 -2.92054,10.25387 1.0976,14.43627 4.02346,4.18773 12.00426,0.88 15.72053,5.5168 3.2896,4.10347 -2.3392,9.56907 0.72107,13.72053 4.0416,5.4848 13.9136,1.0432 18.7808,5.6448 3.9808,3.7632 -1.456,9.5264 1.48266,13.84214 3.77494,5.54666 13.95627,1.392 18.73067,5.6448 4.10347,3.65653 -2.03093,9.3952 0.51093,13.6832 3.14347,5.3024 13.07094,2.5728 17.9296,5.04853 6.94934,3.54133 -1.04853,10.04587 2.30934,15.0048 3.33973,4.9312 13.14773,2.0192 17.91466,5.0016 4.8736,3.04853 0.576,8.08 1.6224,12.37333 1.27147,5.21707 9.43467,4.496 13.4848,4.50667 2.06187,7.10826 8.51414,6.75413 14.93334,6.304 12.67946,-0.88854 25.53813,-6.11947 37.33333,-10.51734 40.25173,-15.00586 79.3312,-35.08693 115.2,-58.72319 8.87472,-5.84747 31.41972,-15.88587 34.49392,-26.66774 2.2037,-7.73013 -12.4406,-15.32693 -17.4272,-19.06026 -20.12485,-15.06987 -41.11899,-29.37174 -62.93339,-41.89547 -91.60853,-52.58987 -198.608,-83.24267 -304,-91.57333 C 551.86506,102.77719 542.54452,65.511798 522.30666,32.561618 515.70506,21.813667 506.85279,6.4868093 495.43839,0.56161431 M 1579.1716,365.36162 v 376.53332 h 85.3334 l 2.1333,-110.93333 c 25.6747,20.70507 49.312,49.89653 71.1573,74.66667 9.312,10.54933 21.7814,28.8416 34.4427,35.17013 4.7253,2.36267 11.9253,1.09653 17.0667,1.09653 h 38.4 136.5333 c 0,-37.71413 0.128,-75.43253 1.056,-113.06666 0.4907,-20.2016 -1.7707,-42.97067 6.7413,-61.86667 16.576,-36.76266 62.0694,-51.8304 88.928,-16 6.3787,8.50667 2.4747,29.14134 2.4747,39.46667 0,34.90133 1.0667,69.62986 1.0667,104.53333 v 34.13333 c 0,3.17867 -1.1414,9.4432 1.7066,11.70347 4.5547,3.60213 18.2614,1.09653 23.8934,1.09653 h 64 c 0,-49.9552 1.376,-100.608 -2.0374,-150.39999 -1.5253,-22.21867 1.472,-44.66987 -6.1653,-66.13334 -3.8293,-10.75413 -9.12,-21.08586 -16.4907,-29.8656 -45.504,-54.23786 -121.0453,-28.88 -165.1733,11.73227 v -36.26667 h -85.3333 l -1.0667,269.86667 -94.8907,-96 -48.0426,-49.06667 v -1.06666 l 22.4,-21.152 68.2666,-63.21067 40.5334,-37.23733 v -1.06667 l -71.4667,-1.06667 -28.8,1.09654 -27.7333,26.6368 -44.8,43.73333 -28.8,27.73333 V 365.36162 h -85.3334 m 1117.8667,0 v 141.86666 c -21.056,-14.82987 -35.168,-33.616 -61.8667,-38.98773 -17.4293,-3.50614 -36.8853,-4.048 -54.4,-0.88854 -48.6293,8.77014 -77.92,55.6 -86.6133,100.67627 -13.12,68.016 9.4933,161.9232 87.68,177.6544 15.104,3.04 31.7653,2.52906 46.9333,0.1856 29.3014,-4.5248 45.408,-24.13547 68.2667,-40.24 v 36.26666 h 85.3333 V 365.36162 h -85.3333 M 734.37172,393.09495 v 348.79999 h 85.33334 c 0,-36.26133 1.0528,-72.62933 1.06666,-108.8 0.009,-21.98399 -2.10453,-48.01173 7.74294,-68.26666 16.72426,-34.39893 64.72,-50.75307 88.68055,-12.8 2.8117,4.4544 1.7099,10.96 1.7099,16 v 37.33333 c 0,45.43893 2.1333,91.10507 2.1333,136.53333 h 88.53319 c 0,-42.36586 -1.0666,-84.61333 -1.0666,-126.93333 0,-26.41173 2.5269,-57.68106 -5.0358,-83.2 -17.51669,-59.10613 -77.56789,-79.7472 -132.56414,-59.00373 -19.20534,7.2448 -34.43094,20.66027 -50.13334,33.40373 l -1.06666,-134.39999 c -27.02294,7.72479 -55.8528,30.67839 -85.33334,21.33333 M 2947.705,465.01388 c -38.9227,5.1264 -74.016,16.32853 -101.152,46.48107 -43.3494,48.1632 -41.9094,143.18079 1.0666,190.93333 36.3307,40.3616 95.072,51.49653 147.0187,44.4992 37.5467,-5.0592 73.7067,-23.344 96.5547,-54.0992 34.4746,-46.39787 33.4933,-126.2464 0.053,-172.8 -31.2853,-43.57013 -91.6373,-61.8496 -143.5413,-55.0144 m -1884.8,77.4144 c 9.344,-3.89013 18.048,-8.86827 27.7333,-12.00533 29.4187,-9.52534 64.2453,-13.81547 94.9333,-9.18507 16.0214,2.41813 33.312,11.46347 39.0507,27.5904 2.176,6.09707 1.4827,12.83307 1.4827,19.2 -16.6827,0 -33.472,1.36213 -50.1334,2.09173 -39.008,1.70774 -81.4933,0.93974 -113.0656,28.09494 -40.1152,34.49813 -27.0506,112.70186 17.0656,136.94719 31.6267,17.38134 76.384,17.53387 108.8,1.43147 14.528,-7.2192 25.984,-18.54933 37.3334,-29.89867 v 35.2 h 89.6 c 0,-47.63626 -0.992,-95.38773 -1.0667,-142.93333 -0.053,-34.4544 -1.1947,-73.85813 -26.7093,-100.2624 -40.5014,-41.9232 -110.4214,-34.7296 -163.1574,-31.0336 -14.304,1.00374 -28.576,2.39787 -42.6666,5.216 -4.736,0.94614 -11.936,1.15627 -15.4027,4.93867 -4.0437,4.42773 -2.5344,12.224 -2.7723,17.67467 -0.6858,15.6512 -1.025,31.2192 -1.025,46.93333 m 389.3333,-28.8 v -42.66667 h -86.4 v 270.93333 h 85.3333 c 0,-32.2848 1.7494,-64.7904 2.1334,-97.06666 0.2453,-21.26827 -2.7307,-45.62453 4,-66.13333 7.5946,-23.16907 30.6986,-42.1216 54.6666,-45.54667 19.936,-2.848 37.4934,4.27307 56.5334,8.21333 l -2.1334,-75.73333 c -27.0613,0 -56.5546,-1.0976 -80,14.6656 -13.408,9.0144 -23.0933,21.79413 -34.1333,33.3344 m 755.2,28.8 c 8.992,-3.744 17.3333,-8.73173 26.6667,-11.7024 7.7013,-2.44907 15.552,-4.42133 23.4666,-6.00427 32.288,-6.45973 98.016,-16.1472 111.8934,25.17334 1.9093,5.712 1.1733,12.19093 1.1733,18.13333 -16.6827,0 -33.472,1.36213 -50.1333,2.09173 -39.1467,1.71414 -81.3547,0.9088 -113.0667,28.09494 -40.1707,34.43946 -27.3813,112.84159 17.0667,136.95039 50.4426,27.36107 107.712,9.9232 146.1333,-28.4704 v 35.2 h 89.6 c 0,-47.28533 -1.0667,-94.66986 -1.0667,-141.86666 0,-34.81813 -1.2053,-74.5088 -26.7626,-101.31733 -40.1174,-42.08107 -110.6774,-34.72 -163.104,-31.04534 -13.9734,0.9792 -27.7974,2.4832 -41.6,4.97707 -5.088,0.9184 -12.7467,1.1968 -16.5227,5.1776 -3.6053,3.80907 -3.0933,11.6736 -3.5627,16.608 -1.4933,15.73653 -0.1813,32.19093 -0.1813,48 m 748.8,-15.69173 c 86.56,-11.27574 95.5307,148.90879 14.9333,159.38346 -64,8.3168 -74.3146,-75.3088 -59.36,-120.22506 6.7307,-20.18347 22.72,-36.33067 44.4267,-39.1584 m -328.5333,1.06346 c 13.0666,-1.60426 30.5066,-1.13066 41.6,6.77547 21.3546,15.22453 25.6,42.42347 25.6,66.51947 0,27.14986 -0.512,62.73279 -27.7334,78.54613 -7.3706,4.2784 -16.2133,5.488 -24.5333,6.48213 -61.248,7.32587 -68.992,-72.19093 -57.9947,-114.89493 5.7387,-22.28373 19.232,-40.5024 43.0614,-43.42827 m -1401.6,92.49494 c 0,13.26079 0.6826,26.06506 -5.0987,38.39999 -13.9733,29.79307 -56.0213,48.82134 -83.424,23.35574 -17.5467,-16.31574 -13.12,-45.9776 9.5893,-54.8608 10.6987,-4.18773 21.92,-3.7504 33.0667,-5.06667 15.0187,-1.77173 30.7307,-1.82826 45.8667,-1.82826 m 1144.5333,0 c 0,13.43466 0.224,25.78879 -5.1947,38.39999 -13.0133,30.2848 -56.64,48.5152 -83.328,23.36747 -16.2026,-15.27893 -14.9653,-44.95147 7.456,-54.20053 11.3387,-4.67627 23.328,-4.32747 35.2,-5.88587 14.8907,-1.9552 30.848,-1.68106 45.8667,-1.68106 z"
        fill="#fff"
      />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);