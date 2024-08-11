module.exports = {

"[project]/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
"[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "clsx": ()=>clsx,
    "default": ()=>__TURBOPACK__default__export__
});
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;

})()),
"[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/utils.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "enrichTweet": ()=>enrichTweet,
    "formatNumber": ()=>formatNumber,
    "getMediaUrl": ()=>getMediaUrl,
    "getMp4Video": ()=>getMp4Video,
    "getMp4Videos": ()=>getMp4Videos
});
const getTweetUrl = (tweet)=>`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
const getUserUrl = (usernameOrTweet)=>`https://twitter.com/${typeof usernameOrTweet === 'string' ? usernameOrTweet : usernameOrTweet.user.screen_name}`;
const getLikeUrl = (tweet)=>`https://twitter.com/intent/like?tweet_id=${tweet.id_str}`;
const getReplyUrl = (tweet)=>`https://twitter.com/intent/tweet?in_reply_to=${tweet.id_str}`;
const getFollowUrl = (tweet)=>`https://twitter.com/intent/follow?screen_name=${tweet.user.screen_name}`;
const getHashtagUrl = (hashtag)=>`https://twitter.com/hashtag/${hashtag.text}`;
const getSymbolUrl = (symbol)=>`https://twitter.com/search?q=%24${symbol.text}`;
const getInReplyToUrl = (tweet)=>`https://twitter.com/${tweet.in_reply_to_screen_name}/status/${tweet.in_reply_to_status_id_str}`;
const getMediaUrl = (media, size)=>{
    const url = new URL(media.media_url_https);
    const extension = url.pathname.split('.').pop();
    if (!extension) return media.media_url_https;
    url.pathname = url.pathname.replace(`.${extension}`, '');
    url.searchParams.set('format', extension);
    url.searchParams.set('name', size);
    return url.toString();
};
const getMp4Videos = (media)=>{
    const { variants } = media.video_info;
    const sortedMp4Videos = variants.filter((vid)=>vid.content_type === 'video/mp4').sort((a, b)=>{
        var _b_bitrate, _a_bitrate;
        return ((_b_bitrate = b.bitrate) != null ? _b_bitrate : 0) - ((_a_bitrate = a.bitrate) != null ? _a_bitrate : 0);
    });
    return sortedMp4Videos;
};
const getMp4Video = (media)=>{
    const mp4Videos = getMp4Videos(media);
    // Skip the highest quality video and use the next quality
    return mp4Videos.length > 1 ? mp4Videos[1] : mp4Videos[0];
};
const formatNumber = (n)=>{
    if (n > 999999) return `${(n / 1000000).toFixed(1)}M`;
    if (n > 999) return `${(n / 1000).toFixed(1)}K`;
    return n.toString();
};
function getEntities(tweet) {
    const textMap = Array.from(tweet.text);
    const result = [
        {
            indices: tweet.display_text_range,
            type: 'text'
        }
    ];
    addEntities(result, 'hashtag', tweet.entities.hashtags);
    addEntities(result, 'mention', tweet.entities.user_mentions);
    addEntities(result, 'url', tweet.entities.urls);
    addEntities(result, 'symbol', tweet.entities.symbols);
    if (tweet.entities.media) {
        addEntities(result, 'media', tweet.entities.media);
    }
    fixRange(tweet, result);
    return result.map((entity)=>{
        const text = textMap.slice(entity.indices[0], entity.indices[1]).join('');
        switch(entity.type){
            case 'hashtag':
                return Object.assign(entity, {
                    href: getHashtagUrl(entity),
                    text
                });
            case 'mention':
                return Object.assign(entity, {
                    href: getUserUrl(entity.screen_name),
                    text
                });
            case 'url':
            case 'media':
                return Object.assign(entity, {
                    href: entity.expanded_url,
                    text: entity.display_url
                });
            case 'symbol':
                return Object.assign(entity, {
                    href: getSymbolUrl(entity),
                    text
                });
            default:
                return Object.assign(entity, {
                    text
                });
        }
    });
}
function addEntities(result, type, entities) {
    for (const entity of entities){
        for (const [i, item] of result.entries()){
            if (item.indices[0] > entity.indices[0] || item.indices[1] < entity.indices[1]) {
                continue;
            }
            const items = [
                {
                    ...entity,
                    type
                }
            ];
            if (item.indices[0] < entity.indices[0]) {
                items.unshift({
                    indices: [
                        item.indices[0],
                        entity.indices[0]
                    ],
                    type: 'text'
                });
            }
            if (item.indices[1] > entity.indices[1]) {
                items.push({
                    indices: [
                        entity.indices[1],
                        item.indices[1]
                    ],
                    type: 'text'
                });
            }
            result.splice(i, 1, ...items);
            break; // Break out of the loop to avoid iterating over the new items
        }
    }
}
/**
 * Update display_text_range to work w/ Array.from
 * Array.from is unicode aware, unlike string.slice()
 */ function fixRange(tweet, entities) {
    if (tweet.entities.media && tweet.entities.media[0].indices[0] < tweet.display_text_range[1]) {
        tweet.display_text_range[1] = tweet.entities.media[0].indices[0];
    }
    const lastEntity = entities.at(-1);
    if (lastEntity && lastEntity.indices[1] > tweet.display_text_range[1]) {
        lastEntity.indices[1] = tweet.display_text_range[1];
    }
}
const enrichTweet = (tweet)=>({
        ...tweet,
        url: getTweetUrl(tweet),
        user: {
            ...tweet.user,
            url: getUserUrl(tweet),
            follow_url: getFollowUrl(tweet)
        },
        like_url: getLikeUrl(tweet),
        reply_url: getReplyUrl(tweet),
        in_reply_to_url: tweet.in_reply_to_screen_name ? getInReplyToUrl(tweet) : undefined,
        entities: getEntities(tweet),
        quoted_tweet: tweet.quoted_tweet ? {
            ...tweet.quoted_tweet,
            url: getTweetUrl(tweet.quoted_tweet),
            entities: getEntities(tweet.quoted_tweet)
        } : undefined
    });

})()),
"[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/tweet-media.module.css [app-ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "grid2Columns": "tweet-media-module__1BuFiW__grid2Columns",
  "grid2x2": "tweet-media-module__1BuFiW__grid2x2",
  "grid3": "tweet-media-module__1BuFiW__grid3",
  "image": "tweet-media-module__1BuFiW__image",
  "mediaContainer": "tweet-media-module__1BuFiW__mediaContainer",
  "mediaLink": "tweet-media-module__1BuFiW__mediaLink",
  "mediaWrapper": "tweet-media-module__1BuFiW__mediaWrapper",
  "root": "tweet-media-module__1BuFiW__root",
  "rounded": "tweet-media-module__1BuFiW__rounded",
  "skeleton": "tweet-media-module__1BuFiW__skeleton",
});

})()),
"[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/tweet-media-video.module.css [app-ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "anchor": "tweet-media-video-module__C5sE2q__anchor",
  "videoButton": "tweet-media-video-module__C5sE2q__videoButton",
  "videoButtonIcon": "tweet-media-video-module__C5sE2q__videoButtonIcon",
  "viewReplies": "tweet-media-video-module__C5sE2q__viewReplies",
  "watchOnTwitter": "tweet-media-video-module__C5sE2q__watchOnTwitter",
});

})()),
"[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/tweet-media-video.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TweetMediaVideo": ()=>TweetMediaVideo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/tweet-media.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2d$video$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/tweet-media-video.module.css [app-ssr] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
const TweetMediaVideo = ({ tweet, media })=>{
    const [playButton, setPlayButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ended, setEnded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mp4Video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMp4Video"])(media);
    let timeout = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("video", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image,
                poster: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMediaUrl"])(media, 'small'),
                controls: !playButton,
                muted: true,
                preload: "none",
                tabIndex: playButton ? -1 : 0,
                onPlay: ()=>{
                    if (timeout) window.clearTimeout(timeout);
                    if (!isPlaying) setIsPlaying(true);
                    if (ended) setEnded(false);
                },
                onPause: ()=>{
                    // When the video is seeked (moved to a different timestamp), it will pause for a moment
                    // before resuming. We don't want to show the message in that case so we wait a bit.
                    if (timeout) window.clearTimeout(timeout);
                    timeout = window.setTimeout(()=>{
                        if (isPlaying) setIsPlaying(false);
                        timeout = 0;
                    }, 100);
                },
                onEnded: ()=>{
                    setEnded(true);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("source", {
                    src: mp4Video.url,
                    type: mp4Video.content_type
                })
            }),
            playButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2d$video$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].videoButton,
                "aria-label": "View video on X",
                onClick: (e)=>{
                    const video = e.currentTarget.previousSibling;
                    e.preventDefault();
                    setPlayButton(false);
                    setIsPlaying(true);
                    video.play();
                    video.focus();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                    viewBox: "0 0 24 24",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2d$video$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].videoButtonIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("g", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                            d: "M21 12L4 2v20l17-10z"
                        })
                    })
                })
            }),
            !isPlaying && !ended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2d$video$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].watchOnTwitter,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                    href: tweet.url,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2d$video$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].anchor,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: playButton ? 'Watch on X' : 'Continue watching on X'
                })
            }),
            ended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                href: tweet.url,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2d$video$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].anchor, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$media$2d$video$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewReplies),
                target: "_blank",
                rel: "noopener noreferrer",
                children: "View replies"
            })
        ]
    });
};

})()),
"[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/tweet-actions.module.css [app-ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "actions": "tweet-actions-module__aoCzpa__actions",
  "copy": "tweet-actions-module__aoCzpa__copy",
  "copyIcon": "tweet-actions-module__aoCzpa__copyIcon",
  "copyIconWrapper": "tweet-actions-module__aoCzpa__copyIconWrapper",
  "copyText": "tweet-actions-module__aoCzpa__copyText",
  "like": "tweet-actions-module__aoCzpa__like",
  "likeCount": "tweet-actions-module__aoCzpa__likeCount",
  "likeIcon": "tweet-actions-module__aoCzpa__likeIcon",
  "likeIconWrapper": "tweet-actions-module__aoCzpa__likeIconWrapper",
  "reply": "tweet-actions-module__aoCzpa__reply",
  "replyIcon": "tweet-actions-module__aoCzpa__replyIcon",
  "replyIconWrapper": "tweet-actions-module__aoCzpa__replyIconWrapper",
  "replyText": "tweet-actions-module__aoCzpa__replyText",
});

})()),
"[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/tweet-actions-copy.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TweetActionsCopy": ()=>TweetActionsCopy
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$actions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/tweet-actions.module.css [app-ssr] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const TweetActionsCopy = ({ tweet })=>{
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyAllText, setCopyAltText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(tweet.url);
        setCopied(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (copied) {
            const timeout = setTimeout(()=>{
                setCopied(false);
                setCopyAltText(true);
            }, 6000);
            return ()=>clearTimeout(timeout);
        }
    }, [
        copied
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
        type: "button",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$actions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copy,
        "aria-label": "Copy link",
        onClick: handleCopy,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$actions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyIconWrapper,
                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                    viewBox: "0 0 24 24",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$actions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("g", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                            d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        })
                    })
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                    viewBox: "0 0 24 24",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$actions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("g", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                            d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$tweet$2d$actions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyText,
                children: copied ? 'Copied!' : copyAllText ? 'Copy link to Tweet' : 'Copy link'
            })
        ]
    });
};

})()),
"[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-container.module.css [app-ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "article": "quoted-tweet-container-module__TCyXfa__article",
  "root": "quoted-tweet-container-module__TCyXfa__root",
});

})()),
"[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-container.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "QuotedTweetContainer": ()=>QuotedTweetContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$quoted$2d$tweet$2f$quoted$2d$tweet$2d$container$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-tweet@3.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-container.module.css [app-ssr] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const QuotedTweetContainer = ({ tweet, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$quoted$2d$tweet$2f$quoted$2d$tweet$2d$container$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root,
        onClick: (e)=>{
            e.preventDefault();
            window.open(tweet.url, '_blank');
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("article", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$tweet$40$3$2e$2$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$tweet$2f$dist$2f$twitter$2d$theme$2f$quoted$2d$tweet$2f$quoted$2d$tweet$2d$container$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].article,
            children: children
        })
    });

})()),

};

//# sourceMappingURL=_8e82b6._.js.map