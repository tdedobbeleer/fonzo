const critical = require('critical');

critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: true,

    // Your base directory
    base: 'src/',

    // HTML source file
    src: 'index-uncritical.html',

    // Your CSS Files (optional)
    css: [
        'src/css/override.css',
        'theme/assets/vendor/icofont/icofont.min.css',
        'src/theme/assets/css/style.css',
        'src/theme/assets/vendor/bootstrap/css/bootstrap.min.css',
        'src/theme/assets/vendor/animate.css/animate.min.css',
        'src/theme/assets/vendor/aos/aos.css'
    ],

    // Output results to file
    target: {
        css: 'critical.css',
        html: 'index.html',
        uncritical: 'uncritical.css',
    },

    // Minify critical-path CSS when inlining
    minify: true,

    // Extract inlined styles from referenced stylesheets
    extract: true,
});