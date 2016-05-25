System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ZippyService;
    return {
        setters:[],
        execute: function() {
            ZippyService = (function () {
                function ZippyService() {
                }
                ZippyService.prototype.getData = function () {
                    return [
                        {
                            name: 'Varun',
                            title: 'tweet1',
                            tweet: 'I"m Awesome !',
                            isFavorite: true,
                            imgUrl: "http://lorempixel.com/100/100/people/?10"
                        },
                        {
                            name: 'Joshi',
                            title: 'tweet2',
                            tweet: 'Oh Common',
                            isFavorite: false,
                            imgUrl: "http://lorempixel.com/100/100/people/?22"
                        },
                        {
                            name: 'Batman',
                            title: 'tweet3',
                            tweet: 'Shut up Superman',
                            isFavorite: true,
                            imgUrl: "http://lorempixel.com/100/100/people/?33"
                        },
                    ];
                };
                return ZippyService;
            }());
            exports_1("ZippyService", ZippyService);
        }
    }
});
//# sourceMappingURL=zippy.service.js.map