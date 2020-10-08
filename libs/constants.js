/**Función que permite a través de un TAG obtener el valor en string*/
function define(name, value) {
	Object.defineProperty(exports, name, {
    value: value,
    enumerable: true,
    writable: false,
    configurable:false
	});
}

/**Se declaran las constante de todos los mensajes genéricos posibles */
define("OK", {"code": "200", "message": "Success", "str": "OK"});
define("CREATED", {"code": "201", "message": "Created", "str": "CREATED"});
define("NO_CONTENT", {"code": "204", "message": "Success", "str": "OK"});
define("BAD_REQUEST", {"code": "400", "message": "Bad Request", "str": "BAD_REQUEST"});
define("UNAUTHORIZED", {"code": "401", "message": "Unauthorized", "str": "UNAUTHORIZED"});
define("NOT_FOUND", {"code": "404", "message": "Not Found", "str": "NOT_FOUND"});
define("CONFLICT", {"code": "409", "message": "Conflict", "str": "CONFLICT"});
define("INTERNAL_ERROR", {"code": "500", "message": "Internal Error", "str": "INTERNAL_ERROR"});
define("PASSWORD_SENT", {"code": "1001", "message": "Password Sent", "str": "PASSWORD_SENT"});
define("PASSWORD_CHANGE", {"code": "1002", "message": "Password Change", "str": "PASSWORD_CHANGE"});
define("PASSWORD_UNMATCHED", {"code": "1003", "message": "Password Unmatched", "str": "PASSWORD_UNMATCHED"});
define("PASSWORD_SET", {"code": "1004", "message": "Password Set", "str": "PASSWORD_SET"});
define("PARAMETERS_MISMATCH", {"code": "1005", "message": "Parameters Mismatch", "str": "PARAMETERS_MISMATCH"});
define("DUPLICATED", {"code": "1010", "message": "Duplicated", "str": "DUPLICATED"});
define("PENDING", {"code": "1020", "message": "Pending", "str": "PENDING"});
define("PROCESS_SEND", {"code": "1021", "message": "Process send", "str": "PROCESS_SEND"});
define("PERMITS", {"code": "1022", "message": "Permits", "str": "PERMITS"});