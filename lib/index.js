"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const logger_1 = require("./logger");
const port = app_1.app.get('port');
const host = app_1.app.get('host');
process.on('unhandledRejection', (reason) => logger_1.logger.error('Unhandled Rejection %O', reason));
app_1.app.listen(port).then(() => {
    logger_1.logger.info(`Feathers app listening on http://${host}:${port}`);
});
('SHA256:wKnWx6mkUZ/VziZuZ20CQHmy1V9Mm3t+6U9V8PqzvCU asaajay775@gmail.com');
//# sourceMappingURL=index.js.map