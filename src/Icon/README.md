# import 와 export 방식 및 개수 별 용량 차이 분석

## (1) import, export 둘다 존재 (33개 icon)

export { ReactComponent as facebook } from './facebook.svg';

import { ReactComponent as facebook } from './facebook.svg'; (for list of icons)
export default { facebook, ... }

- main.bundle
  stat size: 5.17 MB
  parsed size: 2.58 MB
  gzipped size: 800.22 KB

- icon
  stat size: 242.7 KB
  parsed size: 132.09 KB
  gzipped size: 13.63 KB

- icons stories (+ 35 modules)
  stat size: 242.7 KB
  parsed size: 132.09 KB
  gzipped size: 13.63 KB

## (2) import { ReactComponent} 한번으로 named, default 모두 export (33개 icon)

import { ReactComponent as facebook } from './facebook.svg';
export { facebook, ... }, export default { facebook, ... }

- main.bundle
  stat size: 5.17 MB
  parsed size: 2.58 MB
  gzipped size: 800.22 KB

- icon
  stat size: 241.46 KB
  parsed size: 132.09 KB
  gzipped size: 13.63 KB

- icons stories (+ 35 modules)
  stat size: 241.46 KB
  parsed size: 132.09 KB
  gzipped size: 13.63 KB

## (2 - 1) import { ReactComponent} 한번으로 named 만 export (33개 icon)

import { ReactComponent as facebook } from './facebook.svg';
export { facebook, ... }

- main.bundle
  stat size: 5.17 MB
  parsed size: 2.58 MB
  gzipped size: 800.03 KB

- icon
  stat size: 241.17 KB
  parsed size: 131.66 KB
  gzipped size: 13.42 KB

- icons stories (+ 35 modules)
  stat size: 241.17 KB
  parsed size: 131.66 KB
  gzipped size: 13.42 KB

## (3) list of icons, facebook 한개만 import (1개 icon)

- main.bundle
  stat size: 5.14 MB
  parsed size: 2.56 MB
  gzipped size: 799.12 KB

- icon
  stat size: 210.67 KB
  parsed size: 113.64 KB
  gzipped size: 12.44 KB

- icons stories (+ 35 modules)
  stat size: 210.67 KB
  parsed size: 113.64 KB
  gzipped size: 12.44 KB

## (3 - 1) facebook 한개만 import (1개 icon)

- main.bundle
  stat size: 4.96 MB
  parsed size: 2.47 MB
  gzipped size: 788.6 KB

- icon
  stat size: 26.68 KB
  parsed size: 17.64 KB
  gzipped size: 2.65 KB

- icons stories (+ 2 modules)
  stat size: 26.68 KB
  parsed size: 17.64 KB
  gzipped size: 2.65 KB

<br />

# 결과 분석

1. export { ReactComponent as facebook } from './facebook.svg';
   import { ReactComponent as facebook } from './facebook.svg';
   export default { facebook }
   방식으로 단일 아이콘을 위한 named export 와 list of icons를 위해 export default로
   두번 ReactComponent as ~ 를 하는 것은 (1)번과 (2)번의 결과를 비교해 볼 때 stat size 242.7KB - 241.46KB = 1.24KB, 1.24KB/33 = 30B 의 차이가 존재하나, webpack에 의해 tree shaking 된 parsed size는 132.09 KB로 동일함을 확인할 수 있다.
   다만, tree shaking 전 약간의 용량 이득과 (2)번의 방식처럼<br />
   import { ReactComponent as facebook } from './facebook.svg';<br />
   export { facebook, ... }, export default { facebook, ... }<br /><br />
   한번만 ReactComponent as ~를 해주는 것이 코드 상 더 깔끔하므로 한번 import 후 named와 default 모두 export 하는 2방식을 사용했다.

2. 33개의 icon을 import할 때 (2)번과 1개의 icon을 import 할 때 (3)번 용량 차이는 132.09KB- 113.64KB = 18.45KB, 18.45KB/33 = 550B로 실제 icon의 용량(300~600B)과 유사한 차이가 존재함을 확인할 수 있다.

3. list of icons를 import 할 때 (3)번과 list of icons가 없을 때 (3 - 1)번의 차이는 113.64KB - 17.64KB = 96KB 이다.
