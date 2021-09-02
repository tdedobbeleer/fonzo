(function ($) {
    var LANG_EN = {
        'nav.philosophy': 'Philosophy',
        'nav.book.now': 'Book now',
        'nav.home': 'Home',
        'nav.menu': 'Menu',
        'nav.contact': 'Contact',
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
            {"text" : "What a nice place! Tasted delicious food, great setting, felt as being in a cosy livingroom.", "source" : "Ann D. via Facebook", "url" : "https://www.facebook.com/ann.depoorter.927/posts/2060467344206003:0"},
            {"text" : "The only way to know why we love this place, is to go there and enjoy!", "source" : "Agnes D. via Facebook", "url" : "https://www.facebook.com/agnes.deboeck.5/posts/2253377521339779"},
            {"text" : "This is unique in Málaga. The owners are very passionate to create the best and most original tapas.", "source" : "Moniek V. via Google", "url" : "https://www.google.com/maps/contrib/113732323421234179423/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@36.7244451,-4.4202563,17z/data=!4m6!1m5!8m4!1e1!2s113732323421234179423!3m1!1e1?hl=en"},
            {"text" : "It has become one of my favorite places. Very hospitable and a very good service. Ideal to drink a vermouth.", "source" : "María O. via Google", "url" : "https://www.google.com/maps/contrib/116689621246882345984/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@44.0876685,0.3440576,5z/data=!4m6!1m5!8m4!1e1!2s116689621246882345984!3m1!1e1?hl=nl-BE"},
            {"text" : "Very picturesque place with a nice variety of rich and healthy flavors. Strongly recommended.", "source" : "Javi C. via Google", "url" : "https://www.google.com/maps/contrib/100582116992476836427/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@39.8160002,-6.7148075,7z/data=!4m4!1m3!8m2!1e1!2s100582116992476836427?hl=nl-BE"},
            {"text" : "Small, quirky, very friendly and just a fantastic vibe. The best place to grab a drink and a bite of tapas in Málaga.", "source" : "Patrick R. via Facebook", "url" : "https://www.facebook.com/patrick.redmond01/posts/10156556001002856"}
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
        'email': 'fonzomalaga@gmail.com',
        'facebook': 'https://www.facebook.com/fonzomalaga/',
        'instagram': 'https://www.instagram.com/fonzomalaga/',
        'map': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.9215589477885!2d-4.42244498471226!3d36.724445079964326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7bf07bccf93%3A0x1275bcd023df0785!2sCalle+Mariblanca%2C+4%2C+29012+M%C3%A1laga%2C+Spanje!5e0!3m2!1snl!2sbe!4v1526496334857',
        'download.menu' : 'https://drive.google.com/uc?export=download&id=19jJ2Av6VDkMbHgufm-HkYZHIe08WC6va',
        'download.drinks' : 'https://drive.google.com/uc?export=download&id=1GgADTtPWS2h-YSEpk7K2hMma5fY5yaec',
        'download.vinos' : 'https://drive.google.com/uc?export=download&id=1Is6l3-UbnuUbXAJHhH6thH8_9wB2eQyL',
        'openinghours.monday': [],
        'openinghours.tuesday': [],
        'openinghours.wednesday': [{'open': '20:00', 'closed': '23:30'}],
        'openinghours.thursday': [{'open': '20:00', 'closed': '23:30'}],
        'openinghours.friday': [{'open': '20:00', 'closed': '23:30'}],
        'openinghours.saturday': [{'open': '20:00', 'closed': '23:30'}],
        'openinghours.sunday': [{'open': '20:00', 'closed': '23:30'}]
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

    function initializeMenuModal() {


    }

    function moveIfRequested() {
        var pathName = window.location.pathname;
        switch (pathName) {
            /**
            case "/menu":
                window.location.assign(PROPERTIES['download.menu']);
                break;

            case "/drinks":
                window.location.assign(PROPERTIES['download.drinks']);
                break;
            case "/vinos":
                window.location.assign(PROPERTIES['download.vinos']);
                break;
                       **/
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
            while (quotes.length < 4) {
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
