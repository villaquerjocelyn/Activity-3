var $activity3 = {
    el: function (el) {

        return {
            on: function (evt, callback) {

                // split elements with ,
                var multiElements = el.split(", ");

                // loop each elements
                Array.from(multiElements).forEach((e) => {

                    var obj;

                    if (e[0] == "#") {
                        var obj = document.getElementById(e.substring(1, e.length));
                        obj.addEventListener(evt, callback);
                    } else if (e[0] == ".") {
                        var obj = document.getElementsByClassName(e.substring(1, e.length));
                        // add event listener for each class
                        Array.from(obj).forEach((o) => {
                            o.addEventListener(evt, callback);
                        });
                    } else {
                        obj = document.getElementsByTagName(el);
                        // add event listener for each element tag
                        Array.from(obj).forEach((o) => {
                            o.addEventListener(evt, callback);
                        });
                    }

                });
            },
            set: function(val) {
                document.getElementById(el.substring(1, el.length)).innerHTML = val;
            }
        }
    }
}
