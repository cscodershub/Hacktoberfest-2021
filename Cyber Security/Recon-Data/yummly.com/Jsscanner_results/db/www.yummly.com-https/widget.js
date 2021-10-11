(function(doc) {
    var
        postProtocol = doc.location.protocol,
        scriptFullSrc = (function() {
            var
                c = doc.currentScript,
                i, l, p, r, s;

            // most browsers
            if (c && c.src) {
                return c.src;
            }

            // IE
            p = doc.getElementsByTagName('script');
            r = /https?:\/\/[\w.]+yummly[\w.:]+\/js\/widget\.js/;
            for (i = 0, l = p.length; i < l; i++) {
                s = p[i].src;
                if (s && (r).test(s)) {
                    return s;
                }
            }

            // default, should never reach this
            return 'https://www.yummly.com/js/widget.js?other';
        }()),
        queryType = scriptFullSrc.split('?')[1],
        strippedSrc = scriptFullSrc.split('?')[0],
        thisScriptTLD = strippedSrc.split('//')[1].split('/')[0],
        yumButtonUrl,
        postTitle,
        postUrl,
        postImg;

    function getCanonicalUrl() {
        var
            links = document.head.getElementsByTagName('link');

        for (var i = 0; i < links.length; i++) {
            if (links[i].getAttribute('rel') === 'canonical') {
                var
                    testUrl = links[i].getAttribute('href'),
                    testReg = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

                if (testUrl.match(testReg)) {
                    return testUrl;
                }
            }
        }
    }

    function getBloggerImage(elem) {
        var
            mTags = elem.getElementsByTagName('meta');

        for (var i = 0; i < mTags.length; i++) {
            if (mTags[i].getAttribute('itemprop') === 'image_url') {
                return mTags[i].getAttribute('content');
            }
        }

        if (elem.getElementsByTagName('img').length) {
            return elem.getElementsByTagName('img')[0].getAttribute('src');
        }

    }

    function getBloggerTitle(elem) {
        var
            allTags = elem.children;

        for (var i = 0; i < allTags.length; i++) {
            var
                childElem = allTags[i];
            if ((childElem.getAttribute('itemprop') === 'name') || (childElem.className.split(' ').indexOf('post-title') > -1) || (childElem.className.split(' ').indexOf('entry-title') > -1)) {
                if (childElem.getElementsByTagName('a').length) {
                    return childElem.getElementsByTagName('a')[0].innerHTML;
                } else {
                    return childElem.innerHTML;
                }
            }
        }
    }

    function getBloggerUrl(elem) {
        var
            allTags = elem.children;

        for (var i = 0; i < allTags.length; i++) {
            var
                childElem = allTags[i];

            if ((childElem.getAttribute('itemprop') === 'name') || (childElem.className.split(' ').indexOf('post-title') > -1) || (childElem.className.split(' ').indexOf('entry-title') > -1)) {
                if (childElem.getElementsByTagName('a').length) {
                    return childElem.getElementsByTagName('a')[0].getAttribute('href');
                }
            }
        }
    }

    function findBloggerPostElem(elem) {

        while (elem && (elem.getAttribute('itemprop') !== 'blogPost') && (elem.className.split(' ').indexOf('post') === -1) && (elem.className.split(' ').indexOf('hentry') === -1)) {
            elem = elem.parentElement;
        }

        return elem;
    }

    function getMetaImage() {
        var
            metaTags = doc.getElementsByTagName('META'),
            imageUrl = null;

        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute('property') && metaTags[i].getAttribute('property').toLowerCase() === 'og:image') {
                imageUrl = metaTags[i].getAttribute('content');
                break;
            }
        }
        return imageUrl;
    }

    function getMicroFormatImage() {
        var
            recipeMicro = doc.getElementsByClassName('h-recipe')[0] || doc.getElementsByClassName('hRecipe')[0];

        if (recipeMicro) {
            return recipeMicro.getElementsByClassName('u-photo')[0] || recipeMicro.getElementsByClassName('photo')[0];
        } else {
            return null;
        }
    }

    function getFirstImage() {
        var
            images = doc.getElementsByTagName('img'),
            imageUrl = null;

        for (var i = 0; i < images.length; i++) {
            if (images[i].width >= 220 && images[i].height >= 220) {
                imageUrl = images[i].src;
                break;
            }
        }

        return imageUrl;
    }

    function getImage() {
        return getMetaImage() || getMicroFormatImage() || getFirstImage() || '';
    }

    function convertText() {
        var
            yumButtons = doc.getElementsByClassName('YUMMLY-YUM-BUTTON'),
            yumButtonCount = yumButtons.length;

        while (yumButtonCount--) {
            yumButtons[yumButtonCount].style.visibility = 'hidden';
        }
    }

    convertText();

    setTimeout(function() {

        var
            yumButtons = doc.getElementsByClassName('YUMMLY-YUM-BUTTON'),
            yumButtonCount = yumButtons.length;

        while (yumButtonCount--) {
            var
                yumButton = yumButtons[yumButtonCount],
                yumButtonContainer = yumButton && yumButton.parentElement,
                yIFrame = doc.createElement('iframe');

            yIFrame.setAttribute('class', 'YUMMLY-YUM-IFRAME');
            yIFrame.setAttribute('scrolling', 'no');
            yIFrame.setAttribute('style', 'width: 100px; height: 20px;');
            yIFrame.setAttribute('frameBorder', '0');
            yIFrame.setAttribute('allowtransparency', 'true');

            if (yumButton && yumButtonContainer) {
                if (queryType === 'blogger') {
                    var
                        postElem = findBloggerPostElem(yumButton);

                    if (postElem) {
                        postTitle = getBloggerTitle(postElem);
                        postImg = getBloggerImage(postElem);
                        postUrl = getBloggerUrl(postElem);
                    }

                } else if (queryType === 'wordpress') {


                }

                postTitle = postTitle || doc.title;
                postUrl = postUrl || getCanonicalUrl() || doc.URL;
                postImg = postImg || getImage();

                yumButtonUrl = postProtocol + '//' + thisScriptTLD + '/urb/yum?url=' + encodeURIComponent(postUrl) + '&title=' + encodeURIComponent(postTitle) + '&image=' + encodeURIComponent(postImg);

                yIFrame.setAttribute('src', yumButtonUrl);

                yumButtonContainer.replaceChild(yIFrame, yumButton);
            }
        }
    }, 100);

}(window.document));
