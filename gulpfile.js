var gulp = require("gulp");
var server = require("gulp-webserver");
var data = require("./src/json/data.json");
gulp.task("default", function() {
    gulp.src("src")
        .pipe(server({
            port: 3356,
            open: true,
            livereload: true,
            host: "localhost",
            middleware: function(req, res, next) {
                if (req.url === '/getdata')
                    res.end(JSON.stringify(data));


                next();
            }

        }))
})