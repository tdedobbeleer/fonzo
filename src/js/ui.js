(function ($) {
    var LANG_EN = {
        'nav.philosophy': 'Philosophy',
        'nav.book': 'Book your table',
        'nav.home': 'Home',
        'nav.menu': 'Menu',
        'nav.contact': 'Contact & book',
        'text.monday': "Monday",
        'text.tuesday': "Tuesday",
        'text.wednesday': "Wednesday",
        'text.thursday': "Thursday",
        'text.friday': "Friday",
        'text.saturday': "Saturday",
        'text.sunday': "Sunday",
        'text.closed': 'Closed',
        'text.opening.hours': 'Opening hours',
        'text.quotes' : [
            {"text" : "What a wonderful and surprising restaurant. After a few days of some average Malaga restaurants we decided to venture slightly further out from the old town and we’re rewarded with a wonderful evening filled with exquisite food, insightful descriptions and ‘one more please!’ cocktails. The care and passion from Piet and Julie is clear in every part of Fonzo. A unique night out and highly, highly recommended.", "source" : "Declan C. via Google", "url" : "https://goo.gl/maps/ereg91Ea9MtQ1RFt9"},
            {"text" : "Absolutely wonderful on every level - amazing food, delicious wine, gorgeous decor, excellent service. Couldn't fault this place at all! We had the kofta, dumplings, a cous cous stew, and then shared a dessert. It was all exceptional! Both the food and the wine were really fairly priced, so you're getting a lot for your money! If we are ever back in Malaga we will definitely be coming back here.", "source" : "Rachel R. via Google", "url" : "https://goo.gl/maps/67EiEWYL5wzwW4vz9"},
            {"text" : "Beautifully decorated little restaurant, delicious food make sure to try the lasagne (that's not lasagne) for desert the frozen hummus, never tried vermouth before and unsure which one to have but owner recommended one after a little chat, will definitely be having again. Have to mention the best decorated,and cleanest restroom in malaga. Make sure to book.", "source" : "Margie F. via Google", "url" : "https://goo.gl/maps/cFAgqShVRfozBGZC6"}
        ]
    };

    var PROPERTIES = {
        'title': 'Fonzo, cosy eatery - Málaga',
        'address.street': 'Calle Mariblanca 4',
        'address.city': 'Málaga',
        'address.postal': '29012',
        'address.country': 'Spain',
        'tel': '+34 653 20 35 86',
        'whatsapp': 'https://wa.me/message/DHE4A3W3TPP2P1',
        'signal' : 'http://signal.me/#p/+34653203586',
        'email': 'fonzomalaga@gmail.com',
        'facebook': 'https://www.facebook.com/fonzomalaga/',
        'instagram': 'https://www.instagram.com/fonzomalaga/',
        'map': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.9215589477885!2d-4.42244498471226!3d36.724445079964326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7bf07bccf93%3A0x1275bcd023df0785!2sCalle+Mariblanca%2C+4%2C+29012+M%C3%A1laga%2C+Spanje!5e0!3m2!1snl!2sbe!4v1526496334857',
        'download.menu' : 'https://drive.google.com/uc?export=download&id=15n1BZol9-RlKCJOi2D4Taq7ZgAL8dy9Z',
        'download.carta' : 'https://drive.google.com/uc?export=download&id=19jJ2Av6VDkMbHgufm-HkYZHIe08WC6va',
        'download.drinks' : 'https://drive.google.com/uc?export=download&id=1GgADTtPWS2h-YSEpk7K2hMma5fY5yaec',
        'download.vinos' : 'https://drive.google.com/uc?export=download&id=1Is6l3-UbnuUbXAJHhH6thH8_9wB2eQyL',
        'see.menu' : 'https://drive.google.com/file/d/15n1BZol9-RlKCJOi2D4Taq7ZgAL8dy9Z/view?usp=sharing',
        'see.carta' : 'https://drive.google.com/file/d/19jJ2Av6VDkMbHgufm-HkYZHIe08WC6va/view?usp=sharing',
        'see.wine' : 'https://drive.google.com/file/d/1Is6l3-UbnuUbXAJHhH6thH8_9wB2eQyL/view?usp=sharing',
        'see.drinks' : 'https://drive.google.com/file/d/1GgADTtPWS2h-YSEpk7K2hMma5fY5yaec/view?usp=sharing',
        'openinghours.monday': [],
        'openinghours.tuesday': [],
        'openinghours.wednesday': [],
        'openinghours.thursday': [{'open': '19:30', 'closed': '23:00'}],
        'openinghours.friday': [{'open': '19:30', 'closed': '23:00'}],
        'openinghours.saturday': [{'open': '19:30', 'closed': '23:00'}],
        'openinghours.sunday': [{'open': '14:00', 'closed': '16:30'}, {'open': '20:00', 'closed': '23:00'}],
    };

    var DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var NL = 'nl';
    var EN = 'en';
    var ES = 'es';

    //Init
    initializeSignature();
    setOpeningHours();
    setContactDetails();
    setMap();
    initializeLang();
    moveIfRequested();
    //initializeLangButtons();

    //always init lastly
    setLinks();
    setPoperties();

    //show modal
    $('#bookModal').modal('show');

    function initializeSignature() {
        console.log("" +
            "               _______.\n" +
            "    ______    | .   . |\\\n" +
            "   /     /\\   |   .   |.\\\n" +
            "  /  '  /  \\  | .   . |.'|\n" +
            " /_____/. . \\ |_______|.'|\n" +
            " \\ . . \\    /  \\ ' .   \\'|\n" +
            "  \\ . . \\  /    \\____'__\\|\n" +
            "   \\_____\\/ " +
            "\n\nCreated by Tom De Dobbeleer (https://github.com/tdedobbeleer)");
    }

    function setOpeningHours() {
        $(".openinghours").each(function () {
            var e = $(this).find("[data-openinghours]").first();
            var day = e.data('openinghours');
            var oh = PROPERTIES['openinghours.' + day];

            //Set today
            var today = DAYS[new Date().getDay()];
            if (today === day) {
                e.closest('.openinghours').addClass('bold');
            }
            if (oh.length > 0) {
                oh.forEach(function (o) {
                    e.append("<p class=\"openinghour\">" + o['open'] + '-' + o['closed'] + "</p>");
                });
            }
            else {
                e.append("<p class=\"openinghour\" data-translate='text.closed'></p>")
            }
        });
    }

    function setPoperties() {
        $("[data-property]").each(function () {
            $(this).text(PROPERTIES[$(this).data('property')]);
        });
    }

    function setLinks() {
        $("[data-property-href]").each(function () {
            var href = $(this).attr("href");
            if (href === "#") {
                $(this).attr("href", PROPERTIES[$(this).data('property-href')]);
            } else {
                $(this).attr("href", href + PROPERTIES[$(this).data('property-href')]);
            }
        });
    }

    function setTranslations() {
        $("[data-translate]").each(function () {
            var lang = localStorage.getItem('lang');
            var l = {};
            if (lang === NL) {
                l = LANG_NL;
            } else if (lang === EN) {
                l = LANG_EN;
            } else {
                l = LANG_ES;
            }
            $(this).html(getLocalizedMessage($(this).data('translate')));
        });
    }

    function getLocalizedMessage(code) {
        var lang = localStorage.getItem('lang');
        var l = {};
        if (lang === NL) {
            l = LANG_NL;
        } else if (lang === EN) {
            l = LANG_EN;
        } else {
            l = LANG_ES;
        }
        return l[code];
    }

    function setMap() {
        $(".map > iframe").each(function () {
            $(this).attr('src', PROPERTIES['map']);
        });
    }

    function setContactDetails() {
        $(".instagram").each(function () {
            $(this).attr('href', PROPERTIES['instagram']);
        });

        $(".facebook").each(function () {
            $(this).attr('href', PROPERTIES['facebook']);
        });
    }

    function initializeLang() {
        /**
        var currentLang = getUrlParameter('lang') || localStorage.getItem('lang') || navigator.language || EN;
        if (currentLang.startsWith(EN)) {
            currentLang = EN;
        } else if (currentLang.startsWith(NL)) {
            currentLang = NL;
        } else if (currentLang.startsWith(ES)) {
            currentLang = ES;
        }
        else {
            currentLang = EN;
        }

        setLang(currentLang, true);
         **/
        setLang(EN, true)
    }

    function setLang(lang, init) {
        localStorage.setItem('lang', lang);
        $(".lang-select").each(function () {
            if ($(this).text().toLowerCase() === lang.toLowerCase()) {
                $(this).addClass('active');
            }
            else {
                $(this).removeClass('active');
            }
        });
        setTranslations();
        setQuotes();
    }

    function moveIfRequested() {
        var pathName = window.location.pathname;
        switch (pathName) {
            case "/qr-menu":
                $('#qr-modal').modal('show')
                break;
            case "/menu":
                window.location.assign(PROPERTIES['download.menu']);
                break;
            case "/carta":
                window.location.assign(PROPERTIES['download.carta']);
                break;
            case "/drinks":
                window.location.assign(PROPERTIES['download.drinks']);
                break;
            case "/vinos":
                window.location.assign(PROPERTIES['download.vinos']);
                break;
            default:
                if (!pathName.endsWith('/') && !pathName.includes('#'))
                $(document).scrollTop( $(pathName.replace('/', "#")).offset().top );
                break;
        }


    }

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function setQuotes() {
        var a = getLocalizedMessage("text.quotes") || [];
        if (a.length > 0) {
            var quotes = [];
            var quotesDiv = $('#quotes');
            quotesDiv.empty();
            while (quotes.length < 3) {
                var index = Math.floor(Math.random() * a.length);
                var rand = a[index];
                quotes.push(rand);
                a.splice(index, 1);
            }

            $.each(quotes, function (i, obj) {
                var c = (i % 2) === 0 ? "col-md-4 offset-md-7" : "col-md-4 offset-md-3";

                var quote = $("<div/>", {"class": "row"}).append($("<div/>", {
                    "class": c,
                    "data-aos": "fade-up",
                    "data-aos-duration": "3000"
                })
                    .append($("<blockquote/>")
                        .append($("<p/>").text(obj.text))
                        .append($("<small/>").append($("<a/>", {"href": obj.url}).text(obj.source)))));

                quotesDiv.append(quote);
            });
        }

    }

    function initializeLangButtons() {
        $(".lang-select").click(function () {
            localStorage.setItem('lang', $(this).data("lang"));
            location.reload();
        })
    }

})(jQuery);
