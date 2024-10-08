const fs = require('fs');
const { crc32 } = require('crc');

const systemLanguage = {
  zh_CN: 'zh-CN',
  zh_HK: 'zh-HK',
  en_GB: 'en-GB'
};
// 读取已经存在在en.json文件的词条
const existJsonData = fs.readFileSync('./scan/en-GB.json');
let existData = {};
try {
  existData = JSON.parse(existJsonData);
} catch {
  existData = {};
}

const keyList = Object.keys(existData);

module.exports = {
  input: [
    'src/**/*.{js,jsx,tsx,ts}',
    // 不需要扫描的文件加!
    '!src/locales/**',
    '!**/node_modules/**'
  ],
  output: './scan', // 输出目录
  options: {
    debug: true,
    func: false,
    trans: false,
    lngs: [systemLanguage.zh_CN, systemLanguage.zh_HK, systemLanguage.en_GB],
    defaultLng: systemLanguage.en_GB,
    resource: {
      loadPath: './newJson/{{lng}}.json', // 输入路径 (手动新建目录)
      savePath: './newJson/{{lng}}.json', // 输出路径 (输出会根据输入路径内容自增, 不会覆盖已有的key)
      jsonIndent: 2,
      lineEnding: '\n'
    },
    removeUnusedKeys: true,
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  },
  // 这里我们要实现将中文转换成crc格式, 通过crc格式key作为索引, 最终实现语言包的切换.
  transform: function (file, enc, done) {
    // 自己通过该函数来加工key或value
    const { parser } = this;
    const content = fs.readFileSync(file.path, enc);
    parser.parseFuncFromString(content, { list: ['t'] }, (key, options) => {
      options.defaultValue = key;
      const hashKey = `K${crc32(key).toString(16)}`; // crc32转换格式
      // 如果词条不存在，则写入
      if (!keyList.includes(hashKey)) {
        parser.set(hashKey, options);
      }
    });
    done();
  }
};
