(function ($) {
    var LANG_EN = {
        'nav.philosophy': 'Philosophy',
        'nav.book': 'Book your table',
        'nav.home': 'Home',
        'nav.menu': 'Menu',
        'nav.contact': 'Contact & book',
        'text.title' : 'Fonzo',
        'text.subtitle' : 'Flavour above everything',
        'text.modal.qr.title' : 'Discover our flavours',
        'text.modal.book.title' : 'Book your table',
        'text.modal.book.body' : '<p>Welcome on the website of Fonzo, a gastronomic restaurant that offers a casual dining concept with sharing plates.</p>' +
        '<p>Due to the high elaboration of our dishes and small venue and kitchen, we only work with reservations in advance and we can only accept tables of 2 persons.</p>' +
        '<p>Please also note that we are not able to take reservations by phone during service! Thank you for understanding!</p>' +
        '<p>We recommend to book your table a few days in advance if you wish to dine with us because we have very limited seating and make everything fresh. You can choose from the following tables:</p>' +
        '<p>Thursday till Sunday</p>' +
        '<p>Dinner: 18h00 - 19h00 - 20h00 - 21h00</p>' +
        '<p>Sunday lunch<br/>' +
        '(Only with bookings at least 24h in advance)' +
        '</p>' +
        '<p>13h00 - 14h00 - 15h00</p>' +
        '<p>We only work with reservations so please let us know something at least 24h in advance if you can’t make it!</p>' +
        '<p>To book, send us a message with <a data-property-href="whatsapp" href="#" rel="nofollow" aria-label="Send a Whatsapp message">WhatsApp</a> or <a data-property-href="signal" href="#" rel="nofollow" aria-label="Send a Signal message">WhatsApp</a></p>' +
        '<p><a class="tel" data-property="tel" data-property-href="tel" href="tel:" rel="nofollow" aria-label="Call us"></a></p>' +
        '<p>Please leave your name, phone number & number of guests.</p>'
        ,
        'text.philosophy.title' : 'About',
        'text.philosophy.subtitle' : 'What do we stand for?',
        'text.philosophy.bullet.1.title' : 'Fresh',
        'text.philosophy.bullet.1.body' : 'Our kitchen is built around fresh vegetables, fresh herbs and tasteful spices. We start from pure ' +
        'ingredients and make almost everything ourselves, always avoiding processed food. We love to work with local and ecological ingredients, top quality ' +
        'products with great taste.'
        ,
        'text.philosophy.bullet.2.title' : 'Dishes to share',
        'text.philosophy.bullet.2.body' : 'So you can savour a bit of everything and above all, share the tasting experience in the company of your ' +
        'friends or family. We bring you slow food that takes time to prepare and we also want you to truly appreciate all the flavors so they are served one ' +
        'dish at a time. We would like to offer you a casual dining experience in Málaga.'
        ,
        'text.philosophy.bullet.3.title' : 'Authentic creations',
        'text.philosophy.bullet.3.body' : 'All of our dishes are made in our little kitchen with love, passion, craft and eye for detail. We enjoy making original ' +
        'and creative dishes that you will not find elsewhere, using different techniques. We are constantly innovating, ' +
        'always searching for perfection so our menu is always evolving.'
        ,
        'text.philosophy.bullet.4.title' : 'Sustainability',
        'text.philosophy.bullet.4.body' : 'We are very concerned with the well being of people, animals and our environment. That is why we want to be part of a positive movement and have chosen to serve plant ' +
        'based creations. We truly believe that what we eat & how we live determines our health & the preservation of our planet for future generations! We don’t compromise on ' +
        'flavour and create a unique gastronomic plant-based experience to remember.'
        ,
        'text.philosophy.bullet.5.title' : 'Quality drinks&nbsp;<i class="icofont-soft-drinks">',
        'text.philosophy.bullet.5.body' : '<p>"Looking for an aperitif?" Enjoy our selection of Spanish vermuts, sparkling wines, gins or homemade aperitifs. ' +
        '"Love to wine and dine?" Perfect, just like us! That is why we are always looking for interesting grapes and wines from small bodegas. ' +
        '"Prefer something without alcohol?" No problem, try our homemade lemonades with fresh fruits or cold brewed iced teas.</p>' +
        '<p>Be welcome, relax and enjoy our world of flavours.</p>'
        ,
        'text.philosophy.footer' : '<p>Everything we serve has been approved by our taste buds!</p><p>Piet & Julie</p>',
        'text.menu.title' : 'Menu',
        'text.menu.subtitle' : 'Discover our flavours',
        'text.menu.dishes' : 'Dishes to share',
        'text.menu.drinks' : 'Drinks',
        'text.menu.wine' : 'Wine',
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
    }
    var LANG_ES = {
        'nav.philosophy': 'Filosofía',
        'nav.book': 'Reserva su mesa',
        'nav.home': 'Domicilio',
        'nav.menu': 'La carta',
        'nav.contact': 'Contacta & reserva',
        'text.title' : 'Fonzo',
        'text.subtitle' : 'Sabor por encima de todo',
        'text.modal.qr.title' : 'Descubre nuestros sabores',
        'text.modal.book.title' : 'Reserva su mesa',
        'text.modal.book.body' : '<p>Bienvenido a la página web de Fonzo, un restaurante gastronómica que ofrece un concepto de casual dining con platos para compartir.</p>' +
        '<p>Debido a la alta elaboración de nuestros platos, nuestro local y nuestra cocina pequeña, solo trabajamos con reserva previa y solo podemos aceptar mesas de 2 personas.</p>' +
        '<p>También no podemos coger reservaciones por teléfono durante el servicio. Gracias por su comprensión.</p>' +
        '<p>Recomendamos de reservar su mesa con unos días de antelación si quiera cenar con nosotros porque tenemos asientos muy limitados y solo trabajamos con alimentos frescos. Se puede elegir entre las mesas siguientes:</p>' +
        '<p>Jueves a Domingo</p>' +
        '<p>Cena: 18h00 - 19h00 - 20h00 - 21h00</p>' +
        '<p>Domingo almuerzo<br/>' +
        '(solo con reservas con 24h de antelación)' +
        '</p>' +
        '<p>13h00 - 14h00 - 15h00</p>' +
        '<p>Solo trabajamos con reservaciones entonces por favor avísanos con al menos 24h de antelación si no puede venir!</p>' +
        '<p>Para reservar, mándanos un mensaje con <a data-property-href="whatsapp" href="#" rel="nofollow" aria-label="Send a Whatsapp message">WhatsApp</a> o <a data-property-href="signal" href="#" rel="nofollow" aria-label="Send a Signal message">WhatsApp</a>.</p>' +
        '<p><a class="tel" data-property="tel" data-property-href="tel" href="tel:" rel="nofollow" aria-label="Call us"></a></p>' +
        '<p>Por favor déjanos su nombre, numero de teléfono y numero de personas.</p>'
        ,
        'text.philosophy.title' : 'Sobre nosotros',
        'text.philosophy.subtitle' : '¿Qué hacemos?',
        'text.philosophy.bullet.1.title' : 'Fresco',
        'text.philosophy.bullet.1.body' : 'Nuestra cocina se basa en verduras frescas, hierbas frescas y especias de buen gusto. Empezamos de ingredientes puros y elaboramos ' +
        'casi todo nosotros mismos, evitando siempre los alimentos procesados. Nos encanta trabajar con ' +
        'ingredientes locales y ecológicos, productos de primera calidad con mucho sabor.'
        ,
        'text.philosophy.bullet.2.title' : 'Platos para compartir',
        'text.philosophy.bullet.2.body' : 'Para que puedas saborear un poco de todo y sobre todo, compartir la experiencia de cata en compañía de tus amigos o familiares. Te traemos comida ' +
        'lenta que lleva tiempo preparar y también queremos que realmente aprecies todos los sabores por eso sirvamos un plato a la vez. Nos gustaría ofrecerte ' +
        'una experiencia gastronómica informal en Málaga.'
        ,
        'text.philosophy.bullet.3.title' : 'Creaciones auténticas',
        'text.philosophy.bullet.3.body' : 'Todos nuestros platos se elaboran en nuestra pequeña cocina con amor, pasión, artesanía y atención a los detalles. Disfrutamos elaborando ' +
        'platos originales y creativos que no encontrarás en otros lugares, utilizando diferentes técnicas. Estamos constantemente innovando, siempre ' +
        'buscando la perfección por lo que nuestro menú siempre está en evolución.'
        ,
        'text.philosophy.bullet.4.title' : 'Sostenibilidad',
        'text.philosophy.bullet.4.body' : 'Estamos muy preocupados por el bienestar de las personas, los animales y nuestro medio ambiente. Por eso queremos ser parte de un movimiento ' +
        'positivo y hemos optado por servir creaciones basadas en plantas. ¡Realmente creemos que lo que comemos y cómo vivimos determina nuestra salud y la preservación de nuestro planeta para las ' +
        'generaciones futuras! No comprometemos el sabor y creamos una experiencia gastronómica única a base de plantas para recordar.'
        ,
        'text.philosophy.bullet.5.title' : '¿Algo de beber?&nbsp;<i class="icofont-soft-drinks">',
        'text.philosophy.bullet.5.body' : '<p>"¿Buscas un aperitivo?" Disfrute de nuestra selección de vermuts españoles, vinos espumosos, ginebras o aperitivos caseros. ' +
        '"Te encanta el vino y la cena?" ¡Perfecto, como nosotros! Es por eso que siempre estamos buscando uvas y vinos interesantes de pequeñas bodegas. ' +
        '"¿Prefieres algo sin alcohol?" No hay problema, pruebe nuestras limonadas caseras con frutas frescas o tés helados fríos.</p>' +
        '<p>Sea bienvenido, relájese y disfrute de nuestro mundo de sabores.</p>'
        ,
        'text.philosophy.footer' : '<p>¡Todo lo que servimos ha sido aprobado por nuestras papilas gustativas!</p><p>Piet & Julie</p>',
        'text.menu.title' : 'Menú',
        'text.menu.subtitle' : 'Descubre nuestros sabores',
        'text.menu.dishes' : 'Platos para compartir',
        'text.menu.drinks' : 'Bebidas',
        'text.menu.wine' : 'Vinos',
        'text.monday': "Lunes",
        'text.tuesday': "Martes",
        'text.wednesday': "Miércoles",
        'text.thursday': "Jueves",
        'text.friday': "Viernes",
        'text.saturday': "Sábado",
        'text.sunday': "Domingo",
        'text.closed': 'Cerrado',
        'text.opening.hours': 'Horario de apertura',
        'text.quotes' : [
            {"text" : 'Qué maravilloso y sorprendente restaurante. Después de unos días en algunos restaurantes promedio de Málaga, decidimos aventurarnos un poco más lejos del casco antiguo y somos recompensados con una maravillosa velada llena de comida exquisita, descripciones perspicaces y cócteles "¡uno más, por favor!". El cuidado y la pasión de Piet y Julie están claros en cada parte de Fonzo. Una noche única y muy, muy recomendable.', "source" : "Declan C. via Google", "url" : "https://goo.gl/maps/ereg91Ea9MtQ1RFt9"},
            {"text" : "Absolutamente maravilloso en todos los niveles: comida increíble, vino delicioso, decoración preciosa, servicio excelente. No me puedo quejar de este lugar en absoluto! Teníamos kofta, albóndigas, un estofado de cuscús y luego compartimos un postre. ¡Fue todo excepcional! Tanto la comida como el vino tenían un precio realmente razonable, ¡así que obtienes mucho por tu dinero! Si alguna vez volvemos a Málaga, definitivamente volveremos aquí.", "source" : "Rachel R. via Google", "url" : "https://goo.gl/maps/67EiEWYL5wzwW4vz9"},
            {"text" : "Pequeño restaurante bellamente decorado, comida deliciosa, asegúrese de probar la lasaña (eso no es lasaña) para el postre el hummus congelado, nunca antes probé el vermú y no estoy seguro de cuál tomar, pero el propietario me recomendó uno después de una pequeña charla, definitivamente lo volveré a tener. Tengo que mencionar el baño mejor decorado y más limpio de Málaga. Asegúrate de reservar.", "source" : "Margie F. via Google", "url" : "https://goo.gl/maps/cFAgqShVRfozBGZC6"}
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
        'openinghours.thursday': [{'open': '18:00', 'closed': '23:00'}],
        'openinghours.friday': [{'open': '18:00', 'closed': '23:00'}],
        'openinghours.saturday': [{'open': '18:00', 'closed': '23:00'}],
        'openinghours.sunday': [{'open': '13:00', 'closed': '16:00'}, {'open': '18:00', 'closed': '23:00'}],
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
    initializeLangButtons();

    //always init lastly
    setLinks();
    setProperties();

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

    function setProperties() {
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
            $(this).html(getLocalizedMessage($(this).data('translate')));
        });
    }

    function getLocalizedMessage(code) {
        var lang = getLang();
        var l = {};
        if (lang === EN) {
            l = LANG_EN;
        } else {
            l = LANG_ES;
        }
        return l[code];
    }

    function getLang() {
        return localStorage.getItem('lang');
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
        if (currentLang.startsWith(ES)) {
            currentLang = ES;
        }
        else {
            currentLang = EN;
        }
        var otherLang = currentLang == EN ? ES : EN;
        $(".lang-select").text(otherLang);
        $(".lang-select").data("lang", otherLang);
        setLang(currentLang, true);
    }

    function setLang(lang, init) {
        localStorage.setItem('lang', lang);
        /**
        $(".lang-select").each(function () {
            if ($(this).text().toLowerCase() === lang.toLowerCase()) {
                $(this).addClass('active');
            }
            else {
                $(this).removeClass('active');
            }
        });
        **/
        setTranslations();
        setQuotes();
        setLocalizedElements();
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

    function setLocalizedElements() {
        $("[data-localization-show]").each(function () {
            var lang = $(this).data('localization-show').trim();
            if (lang === getLang()) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    }

})(jQuery);
