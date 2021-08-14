"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Seo;

var _react = _interopRequireDefault(require("react"));

var _Head = _interopRequireDefault(require("@docusaurus/Head"));

var _themeCommon = require("@docusaurus/theme-common");

var _useBaseUrl = _interopRequireDefault(require("@docusaurus/useBaseUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Seo({
  title,
  description,
  keywords,
  image
}) {
  const {
    image: defaultImage
  } = (0, _themeCommon.useThemeConfig)();
  const pageTitle = (0, _themeCommon.useTitleFormatter)(title);
  const pageImage = (0, _useBaseUrl.default)(image || defaultImage, {
    absolute: true
  });
  return <_Head.default>
      {title && <title>{pageTitle}</title>}
      {title && <meta property="og:title" content={pageTitle} />}

      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}

      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(',') : keywords} />}

      {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta name="twitter:image" content={pageImage} />}
    </_Head.default>;
}