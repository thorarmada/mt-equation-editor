(function (window, document) {
    let frame = document.createElement('iframe');
    frame.src = `https://mathquake.live/document.html${ window.location.hash }`;

    document.body.append(frame);
})(window, document);
