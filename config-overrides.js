const { aliasWebpack, aliasJest } = require("react-app-alias");

const aliasMap = {
  "@assets": "src/assets",
  "@components": "src/components",
  "@config": "src/config",
  "@constants": "src/config",
  "@context": "src/context",
  "@hooks": "src/hooks",
  "@layouts": "src/layouts",
  "@network": "src/network",
  "@pages": "src/pages",
  "@services": "src/services",
  "@utils": "src/utils",
  "@root": "src",
};

const options = {
  alias: aliasMap,
};

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);
