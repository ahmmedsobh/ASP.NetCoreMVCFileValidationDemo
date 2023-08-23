
jQuery.validator.addMethod("extension",
    function (value, element, param) {

        var AllowedExtensions = $(element).attr("data-val-allowed-extensions").split(",");

        if (value != "") {
            if (AllowedExtensions.includes(value.split(".").pop())) {
                return true;
            }
            else {
                return false;
            }
        }

        return true;

    });

jQuery.validator.unobtrusive.adapters.addBool("extension");

jQuery.validator.addMethod("size",
    function (value, element, param) {

        var size = Number($(element).attr("data-val-max-size"));

        if (element != null) {
            if (element.files.length > 0) {
                if (element.files[0].size > size) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }

        return true;

    });

jQuery.validator.unobtrusive.adapters.addBool("size");

