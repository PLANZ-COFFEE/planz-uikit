// external imports
const fs = require('fs');
const path = require('path');

fs.writeFile('./resources/icons/index.ts', '', err => {
  if (err) {
    throw err;
  }
  //echo print
  console.log(' 파일 저장 완료!');
});

// 디렉토리내에 모든 파일목록
fs.readdir(path.join(__dirname, '../resources/icons'), 'utf8', (err, files) => {
  console.log(files);

  // 파일명 추출단계
  for (let i = 0; i < files.length; ++i) {
    const file = files[i];
    // CamelCase 추출
    const dotSuffix = file.slice(file.length - file.length, file.indexOf('.'));
    const componentSuffix = camelCase(dotSuffix);

    // 경로 파일 명 추출 | ex) ".svg"
    const srcSuffix = file.slice(file.indexOf('.'), file.length);

    // svg파일 아닌경우 skip
    if (srcSuffix != '.svg') {
      continue;
    }

    //echo print
    console.log('camelCase: ', componentSuffix);
    console.log('src 이름: ', srcSuffix);

    fs.appendFile(
      './resources/icons/index.ts',
      `export { ReactComponent as ${componentSuffix} } from './${dotSuffix}${srcSuffix}';\n`,
      err => {
        if (err) {
          throw err;
        }
      },
    );
  }
});

// CamelCase converting
const camelCase = (function() {
  const DEFAULT_REGEX = /[-_]+(.)?/g;

  function toUpper(match, group1) {
    return group1 ? group1.toUpperCase() : '';
  }

  return function(str, delimiters) {
    return str.replace(delimiters ? new RegExp(`[${delimiters}]+(.)?`, 'g') : DEFAULT_REGEX, toUpper);
  };
})();
