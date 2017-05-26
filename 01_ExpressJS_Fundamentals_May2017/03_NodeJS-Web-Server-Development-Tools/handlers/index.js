const homePageHandler = require('./home-page');
const staticFilesHandler = require('./static-files');
const addImagePageHandler = require('./addImage-page');
const allImagesPageHandler = require('./allImages-page');
const imageDetailsPageHandler = require('./image-details-page');
const faviconHandler = require('./favicon');

module.exports = [
    homePageHandler,
    staticFilesHandler,
    addImagePageHandler,
    allImagesPageHandler,
    imageDetailsPageHandler,
    faviconHandler
]