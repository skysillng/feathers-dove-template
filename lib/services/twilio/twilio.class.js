"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.TwilioService = void 0;
const libphonenumber_js_1 = require("libphonenumber-js");
const twilio = __importStar(require("twilio"));
// This is a skeleton for a custom service class. Remove or add the methods you need here
class TwilioService {
    constructor(options) {
        this.options = options;
        this.accountSid = this.options.app.get('twilio')?.accountSID ?? '';
        this.authToken = this.options.app.get('twilio')?.authToken ?? '';
        this.sid = this.options.app.get('twilio')?.serviceSID ?? '';
        this.client = new twilio.Twilio(this.accountSid, this.authToken, {
            logLevel: 'debug'
        });
    }
    async create(data, _params) {
        return [];
    }
    async message(data, params) {
        const mobile = (0, libphonenumber_js_1.parsePhoneNumber)(data['mobile'], 'NG').number;
        const channel = data['channel'] ?? 'whatsapp';
        console.log(data);
        const from = channel !== 'whatsapp' ? '+12569987639' : 'whatsapp:+12569987639';
        const to = channel !== 'whatsapp' ? mobile : 'whatsapp:' + mobile;
        console.log('mmmm');
        // Initiate user mobile verification here
        const messageInstance = await this.client.messages.create({
            body: data.message,
            from,
            to
        });
        console.log(messageInstance);
        return { status: messageInstance.body };
    }
    async sendVerification(data, params) {
        const mobile = (0, libphonenumber_js_1.parsePhoneNumber)(data['mobile'], 'NG').number;
        const channel = data['channel'];
        // Initiate user mobile verification here
        const verification = await this.client.verify.v2
            .services(this.sid)
            .verifications.create({ to: mobile, channel: channel });
        console.log(verification);
        return { status: verification.status };
    }
    async verify(data, params) {
        const mobile = (0, libphonenumber_js_1.parsePhoneNumber)(data['mobile'], 'NG').number;
        const otp = data['otp'];
        // Initiate user mobile verification here
        const verification = await this.client.verify.v2
            .services(this.sid)
            .verificationChecks.create({ to: mobile, code: otp });
        const status = verification.status;
        if (status === 'approved') {
            return {
                status: 'successful'
            };
        }
        return { status };
    }
}
exports.TwilioService = TwilioService;
const getOptions = (app) => {
    return { app };
};
exports.getOptions = getOptions;
//# sourceMappingURL=twilio.class.js.map