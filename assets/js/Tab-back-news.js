var titles = {
    leave: '不要走！再看看嘛！',
    back: '♪ Welcome Back ♪ ',
    origin: "Chifishish's Website"
};

var titleTime;

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = titles.leave;
        clearTimeout(titleTime);
        titleTime = setTimeout(function () {
            document.title = titles.origin;
        }, 1500);
    } else {
        document.title = titles.back + titles.origin;
        titleTime = setTimeout(function () {
            document.title = titles.origin;
        }, 1500);
    }
});