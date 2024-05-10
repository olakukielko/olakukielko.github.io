var cookie_first_visit = "is_first_visit";
var cookie_first_visit = "is_first_visit";

export var getCookie = function(cookieName) { 
    let cookieKey = cookieName + "=";
    var _cookie = document.cookie.split(';');
    for(var i=0;i < _cookie.length;i++) {
        var c = _cookie[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(cookieKey) == 0) return c.substring(cookieKey.length,c.length);
    }
    return null;
};
var setCookie = function(cookieName, cookieValue) { 
    document.cookie = cookieName + "=" + (cookieValue || "") + "; path=/";
};
var deleteCookie = function(cookieName) { 
    document.cookie = cookieName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
export var isFirstVisit = function() { 
    let cookieVal = getCookie(cookie_first_visit);
    if (cookieVal == null || cookieVal.toString() == "true"){
        setCookie(cookie_first_visit, "false")
        return true;
    }
    else {
        return false;
    }
};

