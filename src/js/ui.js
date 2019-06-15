(function ($, aos) {
    var LANG_EN = {
        'text.loading': 'Loading...',
        'text.home.where': 'Where are we located?',
        'nav.home': 'Home',
        'nav.food': 'Food and drinks',
        'nav.about': 'About us',
        'nav.contact': 'Contact',
        'title.food': 'Food and drinks',
        'text.food': 'In our bar you can enjoy our delicious and original home-made dishes. We try to work exclusively with fresh products. We also have a nice selection of wines, vermouths, artisanal beers, gins and liqueurs. Feel free to drop by for a drink or a bite to eat!<br/> <br/> Our drinks menu can already be downloaded <a href="/files/menu_fonzo.pdf" download> here</a>.',
        'title.about': "About us",
        'text.about': 'Welcome to our website! We are Julie Impens and Pieter De Dobbeleer, owners of Fonzo. For years we have been passionate about delicious and healthy food we want everyone to enjoy at an affordable price. <br/> <br/> Fonzo is a colorful, quirky, surprising space full of trinkets where there is always something to discover. The name of the bar is an ode to our father(-in-law) Fons De Dobbeleer, who died too young. He still watches over the bar with his photo at the entrance.',
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
    var LANG_NL = {
        'text.loading': 'Laden...',
        'text.home.where': 'Waar vind je ons?',
        'nav.home': 'Home',
        'nav.food': 'Eten en drinken',
        'nav.about': 'Over ons',
        'nav.contact': 'Contacteer ons',
        'title.food': 'Eten en drinken',
        'text.food': 'In onze bar kunnen jullie genieten van onze heerlijke en originele huisgemaakte gerechten. We proberen uitsluitend te werken met verse producten. Daarnaast hebben we ook een mooie selectie aan wijnen, vermouts, artisanale bieren, gins en likeuren. Kom gerust eens langs voor een hapje en een drankje en vraag naar de Nederlandstalige menukaart!\n<br/><br/>Onze drankkaart kan je alvast <a href="/files/menu_fonzo.pdf" download>hier downloaden</a>.',
        'title.about': "Over ons",
        'text.about': 'Hartelijk welkom op onze website! Wij zijn Julie Impens en Pieter De Dobbeleer, uitbaters van Fonzo. Al jaren zijn we gepassioneerd door lekker en gezond eten en we willen dat iedereen kan genieten aan een betaalbare prijs.<br/><br/>Fonzo is een kleurrijke, eigenzinnige, verrassende ruimte vol snuisterijen waar er telkens iets te ontdekken valt. De naam van de bar is een ode aan onze te jong gestorven (schoon)vader Fons De Dobbeleer - Hij waakt nog steeds over de bar met zijn foto aan de ingang.',
        'text.monday': "Maandag",
        'text.tuesday': "Dinsdag",
        'text.wednesday': "Woensdag",
        'text.thursday': "Donderdag",
        'text.friday': "Vrijdag",
        'text.saturday': "Zaterdag",
        'text.sunday': "Zondag",
        'text.closed': 'Gesloten',
        'text.opening.hours': 'Openingsuren',
        'text.quotes' : [
            {"text" : "Wat een leuke plek! Heerlijk eten geproefd in fantastische setting. Voelde aan als een gezellige woonkamer.", "source" : "Ann D. via Facebook", "url" : "https://www.facebook.com/ann.depoorter.927/posts/2060467344206003:0"},
            {"text" : "The enige manier om te weten waarom we van deze plek houden, is er naartoe gaan en er zelf van te genieten!", "source" : "Agnes D. via Facebook", "url" : "https://www.facebook.com/agnes.deboeck.5/posts/2253377521339779"},
            {"text" : "Dit is uniek in Málaga. Deze eigenaars zijn zeer gedreven om de beste en origineelste tapas te maken.", "source" : "Moniek V. via Google", "url" : "https://www.google.com/maps/contrib/113732323421234179423/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@36.7244451,-4.4202563,17z/data=!4m6!1m5!8m4!1e1!2s113732323421234179423!3m1!1e1?hl=nl-BE"},
            {"text" : "Het is een van mijn favoriete plekken geworden. Zeer gastvrij en zeer goede service. Ideaal om een ​​vermout te drinken.", "source" : "María O. via Google", "url" : "https://www.google.com/maps/contrib/116689621246882345984/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@44.0876685,0.3440576,5z/data=!4m6!1m5!8m4!1e1!2s116689621246882345984!3m1!1e1?hl=nl-BE"},
            {"text" : " Zeer pittoreske plaats met een zeer goede variëteit aan rijke en gezonde smaken. Sterk aanbevolen.", "source" : "Javi C. via Google", "url" : "https://www.google.com/maps/contrib/100582116992476836427/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@39.8160002,-6.7148075,7z/data=!4m4!1m3!8m2!1e1!2s100582116992476836427?hl=nl-BE"},
            {"text" : "Klein, eigenzinnig en gewoon een fantastische vibe. De beste plek om een hapje en drankje te verkrijgen in Málaga.", "source" : "Patrick R. via Facebook", "url" : "https://www.facebook.com/patrick.redmond01/posts/10156556001002856"}
        ]
    };

    var LANG_ES = {
        'text.loading': 'Loading...',
        'text.home.where': '¿Dónde estamos?',
        'text.home.description': 'Something Spanish',
        'nav.home': 'Home',
        'nav.food': 'Bebidas y tapas',
        'nav.about': 'Sobre nosotros',
        'nav.contact': 'Contacto',
        'title.food': 'Bebidas y tapas',
        'text.food': 'En nuestro bar podrá disfrutar de nuestros deliciosos y originales platos caseros. Intentamos trabajar exclusivamente con productos frescos. También tenemos una buena selección de vinos, vermuts, cervezas artesanales, ginebras y licores. No dude en venir a tomar un aperitivo y una bebida<br /> <br/> Nuestra tarjeta de bebida ya se puede descargar <a href="/files/menu_fonzo.pdf" download> aquí</a>.',
        'title.about': "Sobre nosotros",
        'text.about': '¡Bienvenido a nuestro sitio web! Somos Julie Impens y Pieter De Dobbeleer, dueños de Fonzo. Durante años hemos sido apasionados por la comida deliciosa y saludable y queremos que todos disfruten de un precio asequible. <br/> <br/> Fonzo es un espacio colorido, extravagante, sorprendente lleno de baratijas donde siempre hay algo por descubrir. El nombre del bar es una oda a nuestro padre/suegro Fons De Dobbeleer, que murió demasiado joven. Todavía vigila la barra con su foto en la entrada.',
        'text.monday': "Lunes",
        'text.tuesday': "Martes",
        'text.wednesday': "Miércoles",
        'text.thursday': "Jueves",
        'text.friday': "Viernes",
        'text.saturday': "Sábado",
        'text.sunday': "Domingo",
        'text.closed': 'Cerrado',
        'text.opening.hours': 'Horas de apertura',
        'text.quotes' : [
            {"text" : "Que lindo lugar Sabía deliciosa comida, excelente ambiente, se sentía como estar en un acogedor salón.", "source" : "Ann D. via Facebook", "url" : "https://www.facebook.com/ann.depoorter.927/posts/2060467344206003:0"},
            {"text" : "¡La única manera de saber por qué amamos este lugar es ir allí y disfrutar!", "source" : "Agnes D. via Facebook", "url" : "https://www.facebook.com/agnes.deboeck.5/posts/2253377521339779"},
            {"text" : "Esto es único en Málaga. A los propietarios les apasiona crear las mejores y más originales tapas.", "source" : "Moniek V. via Google", "url" : "https://www.google.com/maps/contrib/113732323421234179423/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@36.7244451,-4.4202563,17z/data=!4m6!1m5!8m4!1e1!2s113732323421234179423!3m1!1e1?hl=es"},
            {"text" : "Se ha convertido en uno de mis sitios favoritos. Muy acogedor y muy buena atención. Ideal para tomar un vermú.", "source" : "María O. via Google", "url" : "https://www.google.com/maps/contrib/116689621246882345984/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@44.0876685,0.3440576,5z/data=!4m6!1m5!8m4!1e1!2s116689621246882345984!3m1!1e1?hl=es"},
            {"text" : "Lugar muy pintoresco con una muy buena variedad de sabores ricos y saludables. Muy recomendable.", "source" : "Javi C. via Google", "url" : "https://www.google.com/maps/contrib/100582116992476836427/place/ChIJd_8ghKP3cg0R5x5rXGr9tJE/@39.8160002,-6.7148075,7z/data=!4m4!1m3!8m2!1e1!2s100582116992476836427?hl=es"},
            {"text" : "Pequeño, peculiar, muy amigable y un fantástico ambiente. El mejor lugar para tomar una copa y un bocado o tapas en Málaga.", "source" : "Patrick R. via Facebook", "url" : "https://www.facebook.com/patrick.redmond01/posts/10156556001002856"}
        ]
    };

    var PROPERTIES = {
        'title': 'Fonzo, bar de tapas - Málaga',
        'address.street': 'Calle Mariblanca 4',
        'address.city': 'Málaga',
        'address.postal': '29012',
        'address.country': 'Spain',
        'tel': '+34 653 20 35 86',
        'email': 'fonzomalaga@gmail.com',
        'facebook': 'https://www.facebook.com/fonzomalaga/',
        'instagram': 'https://www.instagram.com/fonzomalaga/',
        'map': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.9215589477885!2d-4.42244498471226!3d36.724445079964326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7bf07bccf93%3A0x1275bcd023df0785!2sCalle+Mariblanca%2C+4%2C+29012+M%C3%A1laga%2C+Spanje!5e0!3m2!1snl!2sbe!4v1526496334857',
        'carousel-images': [
            'img/carousel_1.jpg',
            'img/carousel_2.jpg',
            'img/carousel_3.jpg',
            'img/carousel_5.jpg',
            'img/carousel_6.jpg',
            'img/carousel_7.jpg',
            'img/carousel_8.jpg',
            'img/carousel_9.jpg',
            'img/carousel_10.jpg',
            'img/carousel_11.jpg',
            'img/carousel_12.jpg',
            'img/carousel_13.jpg',
            'img/carousel_14.jpg',
            'img/carousel_15.jpg',
            'img/carousel_16.jpg',
            'img/carousel_17.jpg',
            'img/carousel_18.jpg'
        ],
        'openinghours.monday': [],
        'openinghours.tuesday': [{'open': '19:00', 'closed': '00:00'}],
        'openinghours.wednesday': [{'open': '19:00', 'closed': '00:00'}],
        'openinghours.thursday': [{'open': '19:00', 'closed': '00:00'}],
        'openinghours.friday': [{'open': '19:00', 'closed': '00:00'}],
        'openinghours.saturday': [{'open': '13:30', 'closed': '16:30'}, {'open': '19:00', 'closed': '00:00'}],
        'openinghours.sunday': []
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
    setPoperties();
    setCarousel();
    setLinks();
    initializeLang();
    initializeLangButtons();
    initializeNavBarFix();

    //Init 3d party libs
    aos.init();

    function initializeNavBarFix() {
        var menu = $('.menu-toggle');
        var sidebar = $('.sidebar-nav');
        $(document).mouseup(function (e) {
            if (!menu.is(e.target) // if the target of the click isn't the container...
                && menu.has(e.target).length === 0
                && !sidebar.is(e.target) // if the target of the click isn't the container...
                && sidebar.has(e.target).length === 0
                && menu.hasClass('active')) // ... nor a descendant of the container
            {
                menu.click();
            }
        });
    }

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
            $(this).attr("href", PROPERTIES[$(this).data('property-href')]);
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

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function setCarousel() {
        function setActive(i) {
            return i === 0 ? 'active' : '';
        }

        var n = '#food-carousel';
        var e = $(n);
        PROPERTIES['carousel-images'].forEach(function (img, i) {
            //e.find(".carousel-indicators").first().append('<li data-target="' + n + '" data-slide-to="' + i + '"></li>');
            e.find(".carousel-inner").first().append('<div class="carousel-item ' + setActive(i) + '"><img class="carousel-img" src="' + img + '"></div>')
        });

        e.find('.item').first().addClass('active');
        e.find('.carousel-indicators > li').first().addClass('active');

        //e.carousel();
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
                var c = (i % 2) === 0 ? "col-md-4 offset-md-6" : "col-md-4 offset-md-3";

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

})(jQuery, AOS);
