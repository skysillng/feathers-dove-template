"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationClient = exports.locationMethods = exports.locationPath = void 0;
exports.locationPath = 'location';
exports.locationMethods = [
/** 'find', 'get', 'create', 'patch', 'remove'*/
];
const locationClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.locationPath, connection.service(exports.locationPath), {
        methods: exports.locationMethods
    });
};
exports.locationClient = locationClient;
//# sourceMappingURL=location.shared.js.map