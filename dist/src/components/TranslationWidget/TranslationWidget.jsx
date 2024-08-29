"use strict";
'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const script_1 = __importDefault(require("next/script"));
const TranslationWidget = () => {
    (0, react_1.useEffect)(() => {
        const gtranslateSettings = window.gtranslateSettings || {};
        gtranslateSettings["43217984"] = {
            default_language: "en",
            languages: [
                "si", "af", "sq", "am", "en", "fa", "ar", "ps", "ja", "zh-TW", "zh-CN", "ceb", "ny",
                "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "ny", "co", "hr", "cs", "da",
                "nl", "eo", "et", "tl", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha",
                "haw", "iw", "hi", "hmn", "hu", "is", "ig", "id", "ga", "it", "jw", "kn", "kk", "km",
                "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi",
                "mr", "mn", "my", "ne", "no", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st",
                "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tg", "ta", "te", "th",
                "tr", "uk", "ur", "uz", "vi", "cy", "xh", "yi", "yo", "zu",
            ],
            wrapper_selector: "#gt-mordadam-43217984",
            native_language_names: 1,
            flag_style: "2d",
            flag_size: 24,
            horizontal_position: "inline",
            flags_location: "/flags/",
        };
        window.gtranslateSettings = gtranslateSettings;
    }, []);
    return (<div id="gt-mordadam-43217984">
      <script_1.default src="/utils/gt.min.js" strategy="afterInteractive" onLoad={() => {
            // Additional actions after script load
        }} data-gt-widget-id="43217984"/>
    </div>);
};
exports.default = TranslationWidget;
