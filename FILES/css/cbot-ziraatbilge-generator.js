
        var answerisnotdefined_message = 'Şu anda yardımcı olamıyorum. 2'
        var botlanguage = "tr"
        var clients = {};
        var CLIENT = "ziraatbilge"; 
        var CBOT_CUSTOM_CSS_IS_ACTIVE = true;
        var interval = setInterval(function () {
            if (window.jQuery) {
                clearInterval(interval);
                clients = {
 "opening_delay": 0,
 "theme": "flat",
 "title": " {{site.name}}Asistan",
 "color": "#db1414",
 "title_font_color": "#FFFFFF",
 "welcome_message": "",
 "help_text": "<h3 style=\"margin-top: 0;\">Sizin için neler yapabilirim?</h3><ul style=\"list-style: none;margin-top: 16px;padding: 0;\">\t<li onclick=\"cbotHelpTextToDialog(&quot;Kredi hesaplaması yapabilir ve başvurunuzu alabilirim.&quot;)\" style=\"display: block; cursor: pointer;\">\t<p style=\"margin: 14px;\">Kredi hesaplaması yap ve krediye başvur</p>\t</li>\t<li onclick=\"cbotHelpTextToDialog(&quot;Hesaplarınız hakkında bilgi verebilirim.&quot;)\" style=\"display: block; cursor: pointer;\">\t<p style=\"margin: 14px;\">Hesaplarım hakkında bilgi ver</p>\t</li>\t<li onclick=\"cbotHelpTextToDialog(&quot;Size en yakın ATM’mizi gösterebilirim.&quot;)\" style=\"display: block; cursor: pointer;\">\t<p style=\"margin: 14px;\">Bana en yakın ATM&#39;leri göster</p>\t</li>\t<li onclick=\"cbotHelpTextToDialog(&quot;Döviz kurları hakkında bilgi verebilirim.&quot;)\" style=\"display: block; cursor: pointer;\">\t<p style=\"margin: 14px;\">Döviz kurları hakkında bilgi ver</p>\t</li>\t<li onclick=\"cbotHelpTextToDialog(&quot;Mevduat getirisi hesaplaması yapabilirim.&quot;)\" style=\"display: block; cursor: pointer;\">\t<p style=\"margin: 14px;\">Mevduat getirisi hesapla</p>\t</li></ul><h3 style=\"margin-top: 30px;\">Genel Bilgi</h3><br />Konuşma sırasında &quot;Vazgeç&quot;, &quot;Vazgeçtim&quot;, &quot;İptal&quot;, &quot;Çık&quot; gibi anahtar kelimeleri kullanarak yeni bir diyalog başlatabilirsiniz.",
 "trigger_messages": [
  "genesys"
 ],
 "avatar": "https://ebulten.ziraatbank.com.tr/trimages/cbot/ZB_beyaz.svg",
 "icon": "https://ebulten.ziraatbank.com.tr/trimages/cbot/firm-ziraat/img/zb-chat-bot-img.png",
 "widget_urls": [
  {
   "url": "",
   "delay": 0
  }
 ],
 "file_upload_mimetypes": [],
 "static_address": "https://api.ziraatbank.com.tr/inbound/cbot/static-files/bireysel",
 "root_address": "https://api.ziraatbank.com.tr/inbound/cbot/core",
 "gateway_custom_headers": [
  {
   "key": "Authorization",
   "value": "${tokenType} ${accessToken}"
  },
  {
   "key": "cbot-userchanged",
   "value": "${cbotUserChanged}"
  }
 ],
 "clear_after_close_page": {
  "DEFAULT": true,
  "MOBILE": true,
  "ZIRAATMOBILE": true,
  "SELAMLAMA": false,
  "INTERNETBANKACILIGILOGIN": false,
  "ZIRAATIBLOGIN": false,
  "ZIRAATMOBILELOGIN": false
 },
 "clear_after_close_bot": {
  "DEFAULT": true,
  "MOBILE": true,
  "ZIRAATMOBILE": true,
  "SELAMLAMA": false,
  "INTERNETBANKACILIGILOGIN": false,
  "ZIRAATIBLOGIN": false,
  "ZIRAATMOBILELOGIN": false
 },
 "link_list": {
  "DEFAULT": [
   "_blankpage"
  ],
  "ZIRAATMOBILE": [
   "ziraatmobilecustomurlscheme"
  ],
  "ZIRAATIBLOGIN": [
   "MainPage.aspx"
  ],
  "ZIRAATMOBILELOGIN": [
   "ziraatmobilecustomurlscheme"
  ],
  "INTERNETBANKACILIGILOGIN": []
 },
 "user_timeout": {
  "DEFAULT": {}
 },
 "feedback": {},
 "user_timeout_minute": "30",
 "remotestorage_is_active": true,
 "is_dynamic_user_id": true,
 "custom_width": "",
 "custom_height": "",
 "custom_css_is_active": true,
 "login_field": "",
 "login_token": "hztHxVUZ1xvs13t0bGwjtrgOxJFk11i1",
 "placeholder_message": "Mesajınızı buraya yazınız!",
 "chat_avatar_activation": true,
 "chat_avatar": "https://api.ziraatbank.com.tr/inbound/cbot/static-files/bireysel/firm-ziraat/img/Logo2.svg",
 "chat_agent_avatar": "https://api.ziraatbank.com.tr/inbound/cbot/static-files/bireysel/firm-ziraat/img/cbot-livechat.png",
 "dont_clear_after_another_page": {
  "DEFAULT": false,
  "MOBILE": false,
  "ZIRAATMOBILE": false,
  "SELAMLAMA": false,
  "INTERNETBANKACILIGILOGIN": false,
  "ZIRAATIBLOGIN": false,
  "ZIRAATMOBILELOGIN": false
 },
 "messages_sending_time": {
  "DEFAULT": false,
  "MOBILE": false,
  "ZIRAATMOBILE": false,
  "SELAMLAMA": false,
  "INTERNETBANKACILIGILOGIN": false,
  "ZIRAATIBLOGIN": false,
  "ZIRAATMOBILELOGIN": false
 },
 "leave_livechat_after_close_bot": {
  "DEFAULT": false,
  "MOBILE": false,
  "ZIRAATMOBILE": false,
  "SELAMLAMA": false,
  "INTERNETBANKACILIGILOGIN": false,
  "ZIRAATIBLOGIN": false,
  "ZIRAATMOBILELOGIN": false
 },
 "close_widget_after_leave_livechat": {
  "DEFAULT": false,
  "MOBILE": false,
  "ZIRAATMOBILE": false,
  "SELAMLAMA": false,
  "INTERNETBANKACILIGILOGIN": false,
  "ZIRAATIBLOGIN": false,
  "ZIRAATMOBILELOGIN": false
 },
 "custom_css_url": "https://api.ziraatbank.com.tr/inbound/cbot/static-files/bireysel/css/cbot-ziraatbilge-custom.css",
 "bot_name": " {{site.name}}Bilge"
};
                var head = document.getElementsByTagName('head')[0];
                var s = document.createElement("script");
                s.type = "text/javascript";
                var i = 0;
                cbot_init(clients.icon, clients.icon, clients.color + '', clients.title, clients.color + ' !important', 'ziraatbilge', undefined, clients.opening_delay, clients.welcome_message, clients.help_text, (clients.trigger_messages || []), true, 100, 1500);


        }
}, 100);

/**
 * CBot Widget
 * */

var LIVE_CHAT = "true";
LIVE_CHAT = LIVE_CHAT == "true";

var USER_CONTROL_IS_ACTIVE = "true";
var SEND_ENDCHAT = "false" == "true";

var CSP_BLOCK_UNSAFE_INLINE = "true" == "true";
var cbot_voice_bot_is_active=false
var tts_is_active=false
var mute_tts = false;
var chartjs_is_active=false
var is_interactive_response_active=false
var interactive_actions=undefined

USER_CONTROL_IS_ACTIVE = USER_CONTROL_IS_ACTIVE == "true";

var rootAddress = "https://api.ziraatbank.com.tr/inbound/cbot/core";
var staticAddress = "https://api.ziraatbank.com.tr/inbound/cbot/static-files/bireysel";
var soc_connect = "https://livechat.ziraatbank.com.tr";
var vc_url = "127.0.0.1:8080";

var user_chat_input_states = {
  "DISABLED": "DISABLED",
  "ENABLED": "ENABLED"
}

var user_chat_input_state = user_chat_input_states.ENABLED;

var conversations = [];

var emojies = [":)", ":-)", ":D", ":-D", ":-(", ":()", ":(", "<3", ":>", "0_0", "0_o", "o_o", "o_0", ":p", ";)"];
var emojiIcons = ["😊", "😊", "😂", "😂", "😞", "😮", "😞", "❤️", "😊", "👀", "👀", "👀", "👀", "😋", "😉"];

var dialogCloseSurveyShowed = false; // Popup yönetmek için
var isWidgetOpen = false;

var ratingSelector = 0;
var ratingGroup = 0;

var firstLoad = false;
var newMsgCount = 0;
var hasSurveyShowAsPopUp = false;
var closing_popup_is_showing = false;
var hasSurveyFeedback = false;
var sentSurveyFeedback = false;
var cbotInputKeyboardClicked = false;
var cbotKeyboardScrollInitialized = false;
var cbotShowMessageArea = "show";
var version;
var agent_name;
var lang_vars = {
  "LIVECHAT_CLOSE_MESSAGE": "Hoşçakalın, iyi günler dilerim."
};

var timeoutNotifySecPeriod = 0;

var data_owl = getParameterFromScript("data-owl");
var data_owl_margin = getParameterFromScript("data-owl-margin");
var widget_lang = getParameterFromScript("widget-lang") || "tr";
var scriptVars = getQueryVariable(getParameterFromScript("src"));
var data_clear_session = getParameterFromScript("data-clear-session");

if (scriptVars.v) {
  version = scriptVars.v;
}


/* ATTACHMENTS */
var bool_attachments = false;

var welcomeMessage = ""
var welcomeMessageSent = false;
var data_full_page;
var elCbotDialogRegularButton;
var elCbotDialog;
var previousURL = localStorage.getItem(getDynamicLSName("currentURL"));
var currentURL = window.location.href;
localStorage.setItem(getDynamicLSName("currentURL"), currentURL);
var cbot_messages_sending_time = false;
var currentTime
var hours
var minutes
var data_owl_variable = "false"
var minimize_icon_is_active = "false"


var IS_TYPING = false;
var stopped_by_customer = false;

var data_static_url = getParameterFromScript("data-static-url");
if (data_static_url) {
  staticAddress = data_static_url;
}

addCssFile('cbot-' + CLIENT + "-custom", version);

// addCssFile('cbot-fonts');
/* addFontFile("Proxima1");
addFontFile("Proxima2");
addFontFile("Proxima3"); */

/* THEMEING */
const default_messages = {
  "tr": {
    TYPING: "Yazıyor"
  },
  "en": {
    TYPING: "Typing"
  },
  "ar": {
    TYPING: "الكتابة"
  }
}
var user_message_bubble_color = "";
var user_message_text_color = "";
var bot_message_text_title_color = "";
var bot_message_text_color = "";
var bot_message_bubble_color = "";
var bot_button_background_color = "";
var bot_button_text_color = "";
var cbotRightBeforeFocused = false;
var voiceRecordingEnabled = false;
var recognition;
var recorder;
var login_user_display_name;
const lang_map = {
  "en": "en-EN",
  "tr": "tr-TR",
  "ar": "ar-AR",
  "es": "es-ES"
}

var triple_button_css = "";
var triple_button_class = "";
var suggestion_button_style = "";
var text_button_class = "";
var button_payload;
const browser_engine = detectBrowser();

/* do not comment it */
window.dataLayer = window.dataLayer || [];

if (!String.prototype.includes) {
  String.prototype.includes = function (val) {
    return this.indexOf(val) > -1;
  }
}

if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

setTimeout(function () {
  if (!window.jQuery) {
    var jqueryScript = document.createElement('script');
    jqueryScript.type = "text/javascript";
    jqueryScript.src = staticAddress + "/js/jquery-3.6.0.min.js";
    jqueryScript.async = true;
    document.getElementsByTagName('head')[0].insertBefore(jqueryScript, document.getElementsByTagName('head')[0].firstChild);
  }



  if (data_owl && data_owl_variable == "false") {
    var interval = null;

    interval = setInterval(function () {
      if (window.$) {
        clearInterval(interval)
        loadDataOwl()
      }
    }, 200)
  }
}, 2000);

window.addEventListener("CBOT_LOAD", function () {
  if (!window.jQuery) {
    var jqueryScript = document.createElement('script');
    jqueryScript.type = "text/javascript";
    jqueryScript.src = staticAddress + "/js/jquery-3.6.0.min.js";
    jqueryScript.async = true;
    document.getElementsByTagName('head')[0].insertBefore(jqueryScript, document.getElementsByTagName('head')[0].firstChild);
  }
  if (data_owl && data_owl_variable == "CBOT_LOAD") {
    loadDataOwl()
    addCssFile("owl.carousel", version)
  }
});

window.addEventListener('storage', (event) => {
  // console.log('event_key:', event.key, 'oldVal:', event.oldValue, 'newVal:', event.newValue);
  switch (event.key) {
    case getDynamicLSName("isLive"):
      isLive = getisLiveFLS();
      break;
    case getDynamicLSName("firstmessagesent"):
      firstMessageSent = (getFromLocalStorage(getDynamicLSName("firstmessagesent")) === "true" || getFromLocalStorage(getDynamicLSName("firstmessagesent")) === "false") ? JSON.parse(getFromLocalStorage(getDynamicLSName("firstmessagesent"))) : firstMessageSent;
      break;
    case getDynamicLSName("userid"):
      cbotUserId = getFromLocalStorage(getDynamicLSName("userid"));
      break;
    case getDynamicLSName("sessionId"):
      cbotSessionId = getFromLocalStorage(getDynamicLSName("sessionId"));
      break;
    default:
      break;
  }
});

function getFromLocalStorage(key, currentValue) {
  if (key === getDynamicLSName("userid") || key === getDynamicLSName("sessionId")) {
    if (
      socket &&
      localStorage[getDynamicLSName("userid")] !== 'null' &&
      localStorage[getDynamicLSName("sessionId")] !== 'null' &&
      (localStorage[getDynamicLSName("userid")] !== cbotUserId || (localStorage[getDynamicLSName("userid")] === cbotUserId && !cbotSessionId))
    ) {
      socket.emit('new_client', { userId: localStorage[getDynamicLSName("userid")], sessionId: localStorage[getDynamicLSName("sessionId")] });
    }
  }
  try {
    return localStorage[key];
  } catch (err) {
    // console.log("[getFromLocalStorage] ERR", err.message);
    return currentValue;
  }
}

function toggleJitsiMeet() {
  if ($('#cbot-meet iframe').length == 0 && $('.cbot-start-meeting').text() != 'Görüntülü görüşme talebi iletildi. Yanıt bekleniyor... ⏱️') {
    // Agent'a görüntülü görüşme talebi ilet.
    socket_widget('Sizinle görüntülü görüşmek istiyorum.');
    appendMessageToDialogBox('Sizinle görüntülü görüşmek istiyorum.', 'cbot-self');
    // Buton stilini değiştir.
    $('.cbot-start-meeting').text('Görüntülü görüşme talebi iletildi. Yanıt bekleniyor... ⏱️');
    $('.cbot-start-meeting').css('background', '#32a1b4');
  } else if ($('.cbot-start-meeting').text() == 'Görüntülü görüşme talebi iletildi. Yanıt bekleniyor... ⏱️') {
    // do nothing
  } else {
    closeMiniWeb();
    $('#cbot-meet iframe').remove();
    // Buton stilini değiştir.
    $('.cbot-start-meeting').text('Görüntülü Görüşme Talep Et 🖥️');
    $('.cbot-start-meeting').css('background', '#18bc39');
  }
}

function forceCloseJitsiMeet() {
  if ($('#cbot-meet iframe').length == 1) {
    closeMiniWeb();
    $('#cbot-meet iframe').remove();
    // Buton stilini değiştir.
    $('.cbot-start-meeting').text('Görüntülü Görüşme Talep Et 🖥️');
    $('.cbot-start-meeting').css('background', '#18bc39');
  }
}

function addAvatarLetters(username) {
  let nameSplit = username.toUpperCase().split(' ');
  if (nameSplit.length == 1) {
    initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
  } else {
    initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
  }
  $('#cbot-chat').append('<style nonce="8IBTHwOdqNKAWeKl7plt8g==">.cbot-self::after{content:"' + initials + '"}</style>')
}


function runGAScript(UAId) {
  var gaScript = document.createElement('script');
  gaScript.type = "text/javascript";
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + UAId;
  document.getElementsByTagName('head')[0].insertBefore(gaScript, document.getElementsByTagName('head')[0].firstChild);
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());

  gtag('config', UAId);
}


function gtag() { window.dataLayer.push(arguments); }

function numberToString(data) {
  if (data && typeof data == "number") {
    return data.toString();
  }
  if (!data || data == null || data == undefined) {
    return "";
  }
  return data;
}

function sendUrlsToGA(text) {
  text = numberToString(text)
  var urls = (text || "").match(/(http[^\s'"]*)/g);
  for (var j = 0; urls && j < urls.length; j++) {
    gtag('event', 'cbot', {
      'event_category': 'cbot-link',
      'event_action': urls[j],
      'event_label': urls[j]
    });
  }
}

function clickTheURLs(el) {
  var url = el.getAttribute('href');
  // console.log("clickTheURLs", url);
  gtag('event', 'cbot', {
    'event_category': 'cbot-link',
    'event_action': "click",
    'event_label': url
  })
}

var FIRST_LIVE_MESSAGE = false;

/* if (LIVE_CHAT) {
    var socketIO = document.createElement('script');
    socketIO.type = "text/javascript";
    socketIO.src = staticAddress + "/js/socket.io.js";
    document.getElementsByTagName('head')[0].insertBefore(socketIO, document.getElementsByTagName('head')[0].firstChild);
} */

var cbotUserId;
var CHANNEL = "WIDGET";

var cbotSessionId;
var trigger_messages;
var lastMessageReceiveDate = null;
var firstMessageSent = false;
var surveyTimeout, sentSurvey = false,
  showedSurvey = null
var surveyInterval, lastRequestTime, isSurveyShowed = false;
var exitSurvey = null;

var cbot_config = {};
var intents = [];
var isOpen = false;
var interval;
var ua = navigator.userAgent;
var iOS = /iPad|iPhone|iPod/.test(ua);
var iOS11 = /OS 11(_[0-3])*/.test(ua);
var isIE = /MSIE|Trident/.test(ua);
var loginId;
var focookie;
var socket;
var $;
var data_vip;
var data_livechat;
var data_user;
var data_do_not_preload_load_font;
var data_script_qs = {};
var queryStringVars = {};
var data_user_fls;
var data_cdn_url;
var data_function;
var storageCount = 0;
var cbot_custom_positioning = {}
var interactive_recommends;
var ia_display_popup_state;
var ia_open_widget_state;
var ia_take_attention_state;
var ia_take_attention_state_timer;
var cbot_dynamic_id;

var cbotIsMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (cbotIsMobile.Android() || cbotIsMobile.BlackBerry() || cbotIsMobile.iOS() || cbotIsMobile.Opera() || cbotIsMobile.Windows());
  }
};


CHANNEL = getParameterFromScript("data-channel");
if (!CHANNEL && cbotIsMobile.any()) // kanal ayarı set edilmemiş ise mobil olabilir
  CHANNEL = "MOBILE"

if (!CHANNEL)
  CHANNEL = "WIDGET";


function cbot_init(robotImageURL, dialogImageURL, dialogButtonColor, dialogTitle, chooseButtonColor, client, justLink, time, welcomeMessageParam, helpText, trigger_messages, scrollProp, scrollTop, inputMaxLen, dataOpen) {
  if (isIE) return;
  welcomeMessage = welcomeMessageParam;
  // let scrollTopForScroll = $(window).scrollTop();
  // $(window).scroll(function () {
  //     if (scrollTopForScroll != $(window).scrollTop() && cbotIsMobile.any()) {
  //         scrollTopForScroll = $(window).scrollTop();
  //         if (cbotKeyboardScrollInitialized) {
  //             cbotKeyboardScrollInitialized = false;
  //             $("#cbot-form-message").blur();
  //         }
  //     }
  // });



  // $(window).scroll(function(e){ e.preventDefault()});

  dialogTitle = dialogTitle /*  || "Cbot" */;
  user_message_bubble_color = clients.user_message_bubble_color ? "background-color: " + clients.user_message_bubble_color + ";" : "";
  user_message_text_color = clients.user_message_text_color ? "color: " + clients.user_message_text_color + ";" : "";
  bot_message_bubble_color = clients.bot_message_bubble_color ? "background-color: " + clients.bot_message_bubble_color + ";" : "";
  bot_message_text_title_color = clients.bot_message_text_title_color ? "color: " + clients.bot_message_text_title_color + ";" : "";
  bot_message_text_color = clients.bot_message_text_color ? "color: " + clients.bot_message_text_color + ";" : "";
  bot_button_background_color = clients.bot_button_background_color ? "background-color: " + clients.bot_button_background_color + ";" : "";
  bot_button_text_color = clients.bot_button_text_color ? "color: " + clients.bot_button_text_color + ";" : "";
  clients.remotestorage_is_active = clients.remotestorage_is_active && !isIE;
  if (clients.remotestorage_is_active) {
    appendLocalStorageIFrame(rootAddress + "/localstorage" + "?client=" + CLIENT, function () {
      getVarsFromLocalStorageIFrame(client);
    });
  }
  chatEndNotifier();
  interval = setInterval(function () {
    if ((!clients.remotestorage_is_active || !xdLocalStorage.checkIFrameLocalStorage() || storageCount >= 5) && window.jQuery) {
      if (typeof $ !== "function") $ = window.jQuery;
      var openWidget = true;
      var dataOpen = checkLastMessageDate(client) && getFirstMessageSentFLS(client);
      if (clients.widget_url_activation) {
        var activeUrl = checkURLs(clients.widget_urls);
        if (activeUrl && !dataOpen) {
          time = activeUrl.delay || time;
        } else if (!dataOpen) {
          openWidget = false; // URL'ler arasında yok, widget çıkmayacak.
        }
      }
      if (clients.chat_avatar_activation) {
        var cbot_other_icon = $('<style nonce="8IBTHwOdqNKAWeKl7plt8g==">.cbot-other:before { content: "";width: 35px;height: 35px;position: absolute;left: 16px;border: 1px solid #DCDCDC;border-radius: 24px;background-image: url(../img/cbot-chat-icon.svg);background-repeat: no-repeat;background-size: 100% 100%;background-position-x: center;background-position-y: center;} .cbot-chat li {display:flex; padding: 0 20px; position: relative;} .cbot-other .cbot-msg {margin-left: 44px;margin-top: 2px;}</style>');
        $('head').append(cbot_other_icon);

        if (clients.chat_avatar) {
          let custom_cbot_other_icon = $(`<style nonce="8IBTHwOdqNKAWeKl7plt8g==">.cbot-other:before { content: "";width: 35px;height: 35px;position: absolute;left: 16px;top: 0;border: 1px solid #DCDCDC;border-radius: 24px;display: flex;justify-content: center;align-items: center;background-image: url(${clients.chat_avatar});background-repeat: no-repeat;background-position-x: center;background-position-y: center;}</style>`);
          $('head').append(custom_cbot_other_icon);
        }

      }
      if (openWidget) {
        init(robotImageURL, dialogImageURL, dialogButtonColor, dialogTitle, chooseButtonColor, client, justLink, time, welcomeMessage, helpText, trigger_messages, scrollProp, scrollTop, inputMaxLen, dataOpen);
      }
      clearInterval(interval);
      interval = null;
    } else { }
  }, 1000);

}

function init(robotImageURL, dialogImageURL, dialogButtonColor, dialogTitle, chooseButtonColor, client, justLink, time, welcomeMessage, helpText, param_trigger_messages, scrollProp, scrollTop, inputMaxLen, dataOpen) {
  trigger_messages = param_trigger_messages;
  if (!time) time = 0;


  if (client) CLIENT = client;

  firstMessageSent = getFirstMessageSentFLS(client);

  var open = getParameterByName("open"); // URL - widget instantly opens after loaded
  var data_open = getParameterFromScript("data-open")/*  || dataOpen; */ // widget instantly opens after loaded
  data_full_page = getParameterFromScript("data-full-page"); // optional hide help when mobile app is on
  var data_not_set_cookie_redirect_url = getParameterFromScript("data-not-set-cookie-redirect-url");
  var data_cookie_name = getParameterFromScript("data-cookie-name");
  var data_banner_img = getParameterFromScript("data-banner-img");
  var data_banner_url = getParameterFromScript("data-banner-url");
  data_function = getParameterFromScript("data-function");
  data_vip = getParameterFromScript("data-vip");
  data_livechat = getParameterFromScript("data-livechat");
  data_user = getParameterFromScript("data-user");
  data_do_not_preload_load_font = getParameterFromScript("data-do-not-preload-font");
  data_script_qs = getQueryVariable(window.location.href);
  queryStringVars = getQueryVariable(window.location.href);

  // INTERACTIVE START
  if (is_interactive_response_active) {
    interactive_recommends = interactive_class.recommend();
    interactive_class.setStats();
  }
  ia_open_widget_state = interactive_actions_executer.checkOpenWidget();
  if (ia_open_widget_state) data_open = true;
  ia_display_popup_state = interactive_actions_executer.checkDisplayPopup();
  ia_take_attention_state = interactive_actions_executer.checkTakeAttention();
  if (ia_take_attention_state.status) {
    ia_take_attention_state.is_executed = false;
    ia_take_attention_state_timer = setTimeout(() => {
      ia_take_attention_state.is_executed = true;
      dialogButtonRegular((userId, message) => {
        dialog(userId, message, () => { }, undefined, false, undefined, () => { }, true);
      })
    }, ia_take_attention_state.delay * 1000);
  }
  // INTERACTIVE END

  if (window.dataLayer["cbot_repeat"] && !isIE) {
    queryStringVars.cbot_repeat = window.dataLayer["cbot_repeat"];
    window.dataLayer["cbot_repeat"] = false;
  }

  if (window.dataLayer["cbot_message"]) {
    queryStringVars.cbot_message = window.dataLayer["cbot_message"];
    window.dataLayer["cbot_message"] = null;
  }

  if (queryStringVars.cbot_dynamic_id) {
    cbot_dynamic_id = queryStringVars.cbot_dynamic_id;
  } else {
    cbot_dynamic_id = getParameterFromScript("dynamic-id");
  }

  if (!data_open && queryStringVars.widget_open == "true") {
    data_open = queryStringVars.widget_open;
  }
  getCustomHeaders(!data_function);

  if (hasAttributeOnScript("data-user")) {
    var dataUserInterval = setInterval(function () {
      if (!!getParameterFromScript("data-user")) {
        data_user = getParameterFromScript("data-user");
        clearInterval(dataUserInterval);
        data_user_fls = getUserInfoFLS();


        // if ((!data_user.trim() && data_user_fls) || (!data_user_fls && data_user.trim())) { // olurda boşluklu gönderilirse
        //   // session ataması aşağıda yapılacak
        //   setSessionIdTLS(null);

        // }

        setUserInfoTLS("successful")
      }
    }, 100);
  } else {
    data_user_fls = getUserInfoFLS();


    // if ((!data_user.trim() && data_user_fls) || (!data_user_fls && data_user.trim())) { // olurda boşluklu gönderilirse
    //   // session ataması aşağıda yapılacak
    //   setSessionIdTLS(null);

    // }

    setUserInfoTLS("successful")
  }



  data_cdn_url = getParameterFromScript("data-cdn-url");

  var data_mobileapp = getParameterFromScript("data-mobileapp"); // for mobile apps


  robotImageURL = (robotImageURL || "").replace(/staticAddress/g, staticAddress);
  dialogImageURL = (dialogImageURL || "").replace(/staticAddress/g, staticAddress);

  // addCssFile('cbot-' + CLIENT + "-custom", Math.random());

  // if (!(data_do_not_preload_load_font == "true")) {
  //     addFontFile("Proxima4");
  //     addFontFile("Proxima5");
  // }

  if (chartjs_is_active) addChartJs();

  cbot_custom_positioning = getCustomPositionings();

  if (data_full_page == "true") {
    data_full_page = true;
    addCssFile('cbot-fullpage-flat-style', version);
  }


  isLive = getisLiveFLS();
  if (data_open == "true" || open == "true" || data_open || queryStringVars.cbot_repeat == "true" || (!cbotIsMobile.any() && isLive)) {
    isWidgetOpen = true;
    data_open = true;
  }
  else data_open = false;

  if (queryStringVars.cbot_repeat != "true") {
    setLastMessageTLS([]);
  }

  if (data_vip == "true") {
    data_vip = true;
  } else {
    data_vip = false;
  }

  if (data_livechat == "true") {
    data_livechat = true;
  } else {
    data_livechat = false;
  }

  if (clients.attachments_is_active)
    bool_attachments = true;

  loginId = getParameterFromScript("data-session");


  if (data_cookie_name)
    focookie = getCookie(data_cookie_name); //FOSecurity

  if (data_cookie_name && !focookie && data_not_set_cookie_redirect_url) {
    window.location.replace(data_not_set_cookie_redirect_url);
  }

  isLive = setIsLive(data_vip || data_livechat);

  //CSS dosyası ekleniyor
  // if (CUSTOM_CSS)
  //     addCssFile('cbot-style-' + CLIENT, Math.random());

  if (data_owl && data_owl_variable == "false")
    addCssFile("owl.carousel", version)

  if (data_mobileapp == "true") {
    data_open = true;
    data_mobileapp = true;
  }
  else data_mobileapp = false;

  // if (data_mobileapp)
  // addCssFile("cbot-mobileapp-flat-style-" + CLIENT, Math.random());

  if (data_vip)
    addCssFile('cbot-vip-flat-' + CLIENT, version);

  var helpContent = (helpText || "")

  cbotUserId = getUserIDFLS();
  isLive = getisLiveFLS();


  cbotSessionId = getSessionIdFLS();
  if (!cbotSessionId) {
    isLive = setIsLive(false);
    setisLiveTLS(isLive);
  }

  if (!checkLastMessageDate()) {
    cbotSessionId = null;
    isLive = setIsLive(false);
    setisLiveTLS(isLive);
    setSessionIdTLS(cbotSessionId);
    clearLastMessageSentDateTLS();
  }

  let is_close_icon_pressed = getCloseIconPressed();
  if (getChannelValue(clients.clear_after_close_bot, CHANNEL) && is_close_icon_pressed == "true") {
    removeCloseIconPressed();
    reset(true);
  }

  if (getChannelValue(clients.dont_clear_after_another_page, CHANNEL)) {
    if (getChannelValue(clients.clear_after_close_page, CHANNEL) && !isLive && checkPageTransition()) {
      cbotClearUserDialog(true);
    }
  } else {
    if (getChannelValue(clients.clear_after_close_page, CHANNEL) && !isLive) {
      sendToEndChat();
      cbotClearUserDialog(true);
    }
  }

  if (getChannelValue(clients.messages_sending_time, CHANNEL)) {
    cbot_messages_sending_time = true
  }


  // getConversations();



  setTimeout(function () {

    cbot_config = {
      robotImageURL: robotImageURL,
      dialogImageURL: dialogImageURL,
      dialogButtonColor: dialogButtonColor,
      chooseButtonColor: chooseButtonColor,
      dialogTitle: dialogTitle,
      client: CLIENT
    };
    clients.placeholder_message = clients.placeholder_message || "Mesajınızı buraya yazınız!"
    clients.send_survey_button_is_active = clients.send_survey_button_is_active || false
    if (clients.send_survey_button_is_active) {
      clients.send_survey_placeholder_message = clients.send_survey_placeholder_message || "Görüşlerinizi bizimle paylaşın..."
      clients.send_survey_button = clients.send_survey_button || "Anketi gönder"
    }

    var display_none = "display: none;"
    var display_block = "display: block;";
    //Dialog elementleri sayfaya ekleniyor!


    /* WIDGET SIZING */
    var custom_width_height = "";
    if (clients.custom_width && clients.custom_height)
      custom_width_height = "; width: " + clients.custom_width + "; height: " + clients.custom_height;

    if (cbot_custom_positioning.height && cbot_custom_positioning.width) { // overriding
      custom_width_height = "; width: " + cbot_custom_positioning.width + "; height: " + cbot_custom_positioning.height;
    }


    /* WIDGET ICON POSITIONING */
    var custom_positioning = "";


    if (clients.custom_top) custom_positioning = "; top: " + clients.custom_top;

    if (cbot_custom_positioning.right) { // parametrik gelenler öncelikli
      custom_positioning += "; right: " + cbot_custom_positioning.right;
    }
    else {
      if (clients.custom_right && !clients.slide_from_right && !clients.slide_from_left) custom_positioning += "; right: " + clients.custom_right;
    }

    if (cbot_custom_positioning.bottom) { // parametrik gelenler öncelikli
      custom_positioning += "; bottom: " + cbot_custom_positioning.bottom;
    }
    else {
      if (clients.custom_bottom) custom_positioning += "; bottom: " + clients.custom_bottom;
    }

    if (cbot_custom_positioning.left) { // parametrik gelenler öncelikli
      custom_positioning += "; left: " + cbot_custom_positioning.left
    }
    else {

      if (clients.custom_left && !clients.slide_from_right && !clients.slide_from_left) custom_positioning += "; left: " + clients.custom_left;
    }

    /* WIDGET DIALOG POSITIONING AUTOMATICALLY */
    var custom_positioning_dialog = ""
    if (custom_positioning.indexOf("left") > -1) custom_positioning_dialog = "; left: 20px";
    if (custom_positioning.indexOf("right") > -1) custom_positioning_dialog = "; right: 20px";

    if (clients.slide_from_left) {

      custom_positioning_dialog += "; left: 20px";
      // custom_positioning += "; left: 20px";
    }

    var custom_popup_positioning = "";
    var custom_width_int = parseInt((clients.custom_width || "61px").replace(/[^0-9]/g, ""));



    var custom_height_int = parseInt((clients.custom_height || "61px").replace(/[^0-9]/g, ""));
    if (cbot_custom_positioning.height)
      custom_height_int = parseInt((cbot_custom_positioning.height || "61px").replace(/[^0-9]/g, ""));


    var custom_top_int = parseInt((clients.custom_top || "").replace(/[0-9]/g, "")) || 0;
    var custom_right_int = parseInt((clients.custom_right || "").replace(/[^0-9]/g, "")) || 0;
    var custom_bottom_int = parseInt((clients.custom_bottom || "20px").replace(/[^0-9]/g, "")) || 0;
    var custom_left_int = parseInt((clients.custom_left || "").replace(/[^0-9]/g, "")) || 0;

    custom_popup_positioning = "; bottom: " + (10 + custom_height_int) + "px; "
    if (custom_left_int > 0 && !clients.slide_from_right && !clients.slide_from_left)
      custom_popup_positioning += "; left: 0px; "
    if (custom_right_int > 0 && !clients.slide_from_right && !clients.slide_from_left)
      custom_popup_positioning += "; right: 0px; "

    var custom_animation = ""
    if (clients.bounce)
      custom_animation = "cbot-bounce";
    if (clients.slide_from_right)
      custom_animation = "cbot-slide-right";
    if (clients.slide_from_left)
      custom_animation = "cbot-slide-left";

    if (CSP_BLOCK_UNSAFE_INLINE) {
      $.htmlPrefilter = function (html) {
        // Really it have to be more complicated for replacing a tag's attributes only,
        // not just plain text replacement:
        return (html + '').replace(/ style=/gi, ' data-style=');
      };
    }
    var appendHtmL = "";
    appendHtmL += `
        <div class="cbot-spinner-overlay" id="spinnerContainer">
            <div class="cbot-spinner"></div>
        </div>`
    appendHtmL +=
      '<div class="cbot-survey-fadebg"></div>' +
      // '<div id="close-scroll" class="cbot-dialog-button-close" style="' + ((data_open && !data_mobileapp) ? display_block : display_none) + '; background-color:' + cbot_config.dialogButtonColor + custom_positioning_dialog + '"></div>' +
      '<div id="close-scroll" class="cbot-dialog-button-close"></div>' + // bu alan hiç gözükmeyecek
      '<div class="cbot-animation-holder ' + custom_animation + '" style="' + custom_positioning + '">' +
      '<div class="cbot-count-badge" id="cbot-count-badge">' + newMsgCount + '</div>' +
      '<div class="cbot-dialog-button-regular" aria-label= "' + (clients.icon_voice_over || 'chatbot icon') + '" style="' + (data_open ? display_none : display_block) +
      'background-size: 100% 100%; margin-top:10px; background-image: url(' + cbot_config.dialogImageURL + ');' +
      custom_width_height +
      '">' +

      '<div class="cbot-dialog-end-survey" style="' + custom_positioning_dialog + '"><span>Anketimize katılmak ister misiniz?</span> <button class="cbot-survey-yes">Evet</button> <button class="cbot-survey-no">Hayır</button></div>' +

      '</div>';



    if (clients.popup_is_active || (ia_display_popup_state && ia_display_popup_state.res)) {
      var ia_popup = false;
      if (ia_display_popup_state && ia_display_popup_state.res) ia_popup = true;
      var popup_message;
      if (ia_popup && ia_display_popup_state.popup.message) {
        popup_message = ia_display_popup_state.popup.message
      } else {
        popup_message = clients.popup_text || 'Ben kişisel asistanınız ' + clients.bot_name + ',  size nasıl yardımcı olabilirim?';
      }
      var popup_background_color = clients.popup_background_color || cbot_config.dialogButtonColor || "#000";
      var popup_text_color = clients.popup_text_color || cbot_config.title_font_color || "#FFF";
      var colors = "background: " + popup_background_color + "; color: " + popup_text_color + ";";
      var slidefromleftselected = ""
      if (clients.slide_from_left)
        slidefromleftselected += "; left: 20px";
      appendHtmL += '' +
        '<div class="cbot-dialog-button-help-message"' +
        'style="' + colors + display_none + custom_popup_positioning + slidefromleftselected + '">' + popup_message;
      if (ia_popup && ia_display_popup_state.popup.buttons && ia_display_popup_state.popup.buttons.length > 0) {
        appendHtmL += '<div class="cbot-ia-popup-buttons">'
        appendHtmL += '<div class="generic-template">'
        appendHtmL += '<div class="cbot-buttons">'
        for (let i = 0; i < ia_display_popup_state.popup.buttons.length; i++) {
          const button = ia_display_popup_state.popup.buttons[i];
          appendHtmL += '<button class="cbot-button postback" ';
          appendHtmL += 'data-payload="' + button.payload + '" ';
          appendHtmL += '>'
          appendHtmL += button.title;
          appendHtmL += '</button>';
        }
        appendHtmL += '</div>'
        appendHtmL += '</div>'
        appendHtmL += '</div>'
      }
      appendHtmL += '</div>'

      var opening_delay;
      if (ia_popup && ia_display_popup_state.popup.opening_delay) {
        opening_delay = ia_display_popup_state.popup.opening_delay * 1000
      } else {
        opening_delay = parseInt((clients.popup_initial_delay || 1) * 1000)
      }
      var popup_duration;
      if (ia_popup && ia_display_popup_state.popup.duration) {
        popup_duration = ia_display_popup_state.popup.duration * 1000
      } else {
        popup_duration = parseInt((clients.popup_show_time || 4) * 1000);
      }
      if (ia_popup) clients.popup_infinite_hold = false;

      setTimeout(() => {

        if (!isWidgetOpen)
          $(".cbot-dialog-button-help-message").fadeIn();

        if (!clients.popup_infinite_hold)
          setTimeout(() => {
            $(".cbot-dialog-button-help-message").fadeOut();
          }, popup_duration); // POC-55 // POC-71

      }, opening_delay);
    }
    appendHtmL += "</div>"


    // cbot_config.robotImageURL 
    appendHtmL +=
      '<div class="cbot-survey-fadebg"></div>' +
      '<div id="cbot-modal" class="cbot-modal">' +
      '<span class="cbot-modal-close">&times;</span>' +
      '<img class="cbot-modal-content" id="cbot-modal-image">' +
      '</div >' +
      '<div class="notranslate cbot-dialog" style="' + (data_open ? display_block : display_none) + "; " + custom_positioning_dialog + '">' +
      '<div id="cbot-web-area" style="display: none; opacity: 0;">' +
      '<div class="cbot-web-area-header" style="background: ' + dialogButtonColor + '">' +
      '<div class="cbot-web-reload"></div>' +
      '<div class="cbot-web-close"></div>' +
      '</div>' +
      '<div class="cbot-web-area-content" id="cbot-meet" ></div>' +
      '</div>' +
      '<div class="cbot-overlay" style="' + (data_open ? display_block : display_none) + 'display:none;transition:.5s;position:relative;width:100%;height:calc(100% - 67px);position: absolute;z-index: 999;background: rgba(0,0,0,0.5);border-radius:5px;">'
      +

      '<div id="cbot-overlay-text" class="cbot-overlay-text cbot-overlay-help-collapse-on" style="' +
      'overflow: auto;' +
      'background: rgb(255, 255, 255);' +
      'bottom: 0px;' +
      'position: absolute;' +
      'border-radius: 5px;' +
      'padding: 20px 20px 10px;' +
      'width: calc(100% - 40px);' +
      'margin-top: 0px;' +
      'margin-bottom: 0px;' +
      'overflow: hidden;' +
      '">' +

      '</div>' +


      '</div>' +


      '<div class="cbot-head-cover" style="' + (data_mobileapp ? display_none : display_block) + '">' +
      '<div class="cbot-dialog-sozlesme">' +
      '<div id="help-back-icon" style="background: url(' + staticAddress + '/img/flat/cbot-back.svg);' +
      'background-size: 15px;' +
      // 'background-color: lightgray;' +
      'background-position: center;' +
      'background-repeat: no-repeat;">' +
      // 'height: 55px;' +
      // 'background-position: 12px;' +
      // 'cursor: pointer;">' +
      '</div><span style="font-size: 16px;' +
      'line-height: 55px;' +
      '/* padding-left: 49px; */' +
      'user-select: none;' +
      'color: ' + clients.title_font_color + ';' +
      'text-align: center;' +
      'width: 100%;' +
      'display: block;">' + (clients.help_text_title || "Yardım") + '</span>' +
      '</div><div class="cbot-dialog-head" style="background: ' + dialogButtonColor + ';">';
    // if (!data_full_page) {
    //     appendHtmL += '<div class="cbot-triple-dot" cbot-tooltip="Web"></div>';
    // }


    if (!data_full_page) {
      appendHtmL += '<div class="cbot-close-icon-new"  cbot-tooltip="' + (clients.close_text_message || "Kapat") + '" id="cbot-close-icon-new"></div>';
      if (minimize_icon_is_active != "false") {
        appendHtmL += '<div class="cbot-minimize-icon"  cbot-tooltip="' + (clients.minimize_text_message || "Küçült") + '" id="cbot-minimize-icon"></div>';
      }
      if (tts_is_active) {
        appendHtmL += '<div class="cbot-mute-icon"  cbot-tooltip="' + (clients.tts_mute_message || "Ses") + '" id="cbot-mute-icon"></div>';
      }
    }
    appendHtmL += '<div class="cbot-cog-icon" id="cbot-cog-icon" cbot-tooltip="' + (clients.help_text_message || "Yardım") + '"></div>' +
      '<div class="cbot-avatar"><img alt="cbot logo" src="' + "https://ebulten.ziraatbank.com.tr/trimages/cbot/ZB_beyaz.svg" + '" draggable="false"/><span style="color: ' + (clients.title_font_color || "white") + '">' +
      (cbot_config.dialogTitle || "") + '</span></div></div></div>' +
      '' +
      '' +
      '<div class="cbot-help"  style="height: 100%;display:none;" id="cbot-help">' +
      '<div class="cbot-help-text">' +
      helpContent +
      '</div>' +
      '</div>' +
      '<div class="cbot-livechat-close">Görüşmeyi Sonlandır' +
      '<img src="' + staticAddress + '/img/cbot-livechat-close-icon.png" style="width:16px; box-shadow:none;"></div>' +
      '<div class="cbot-start-meeting">Görüntülü Görüşme Talep Et 🖥️</div>' +
      '<div class="cbot-alert-welcome-message"></div>' +
      '<ul class="notranslate cbot-chat" id="cbot-chat" ' + (data_mobileapp ? 'style="height: calc(100% - 116px);"' : '') + '>' +
      '<div class="cbot-survey"><div class="cbot-survey-text">Yapmış olduğunuz görüşmeyi değerlendirebilir misiniz?</div></div>' +
      '</ul> ' +
      '<div class="cbot-dialog-end-timer" style="display:none;"></div>' +
      '<div class="ripple_effect" style="display:none;">' +
      '<div class="cbot-boxContainer"><div class="cbot-box cbot-box1"></div><div class="cbot-box cbot-box2"></div><div class="cbot-box cbot-box3"></div><div class="cbot-box cbot-box4"></div><div class="cbot-box cbot-box5"></div></div>' +
      '</div>' +
      '<form id="cbot-form" action="" onsubmit="return false;">' +
      '<div class="cbot-form-message-area" id="cbot-form-message-area">' +
      '<span id="cbot-illusion-placeholder" class="cbot-illusion-placeholder">' + (clients.placeholder_message) + '</span>' +
      '<input type="button" class="cbot-send-button-info" style="display:none;" />' +
      '<textarea class="textarea" autocomplete="off" id="cbot-form-message" type="text" placeholder="' + (clients.placeholder_message) + '"></textarea> ';

    if (!(iOS && iOS11)) {
      appendHtmL += '<button id="cbot-send-button" class="cbot-send-button"></button>';
    }
    if (clients.send_survey_button_is_active) {
      appendHtmL += '<button id="cbot-send-survey-button" class="cbot-send-survey-button postback"></button>';
    }
    /* ATTACHMENT AREA */

    appendHtmL += "<input id='cbot-attachment-file-input' type='file' accept='' hidden/>";
    appendHtmL += '<div id="cbot-attachment-area" class="cbot-attachment-area" style="display: ' + (bool_attachments && isLive ? "block" : "none") + '">' +
      '<div class="cbot-attachment-container">' +
      // '<div class="cbot-attachment-block cbot-attachment-location"><img src="' + staticAddress + '/img/cbot-location-image.png" /> <span>Konum</span></div>' +
      // '<div class="cbot-attachment-block cbot-attachment-image"><img src="' + staticAddress + '/img/cbot-gallery.png" /> <span>Resim</span></div>' +
      // '<div class="cbot-attachment-block cbot-attachment-video"><img src="' + staticAddress + '/img/cbot-gallery.png" /> <span>Video</span></div>' +
      '<div class="cbot-attachment-block cbot-attachment-file"><img alt="file icon" title="file icon" src="' + staticAddress + '/img/cbot-file-icon.png" /> <span>Dosya</span></div>' +
      '</div>' +
      '</div>';
    setTimeout(() => {
      if (cbot_voice_bot_is_active) {
        $("#cbot-attachment-area").css("right", "77px");
      }
    }, 50);
    /* ATTACHMENT AREA */

    /* VOICE AREA */
    if (cbot_voice_bot_is_active && typeof initRecorder === "function" && (window.SpeechRecognition || window.webkitSpeechRecognition)) {
      appendHtmL += '<div id="cbot-voice-area" class="cbot-voice-area" style="' + (cbot_voice_bot_is_active ? 'display: block;' : 'display: none;') + '"></div>';
      initRecorder()
    }
    /* VOICE AREA */


    appendHtmL += '</div></form>' +
      '</div>';

    $('body').append(appendHtmL);
    afterAppend();



    setInterval(function () {
      cbotRightBeforeFocused = $("#cbot-form-message").is(":focus")
    }, 100)

    // $("#cbot-chat").scroll(function () {
    //     if (cbotKeyboardScrollInitialized) {
    //         cbotKeyboardScrollInitialized = false;
    //         $("#cbot-form-message").blur();
    //     }
    // });



    if (data_open) {
      dialogOpenFunctions()
    }

    $("#cbot-attachment-area")
      .on("click", function (event) {
        /* event.stopPropagation(); */
        sendCustomPostMessage("CBOT_FILE_UPLOAD_BUTTON_CLICKED", {});
      }).children()
      .on('click', 'div', function (e) {
        e.stopPropagation();
      });



    fileUploadListener();



    $(".cbot-dialog-end-survey").css("background-color", clients.popup_background_color || cbot_config.dialogButtonColor || "#000")
    $(".cbot-dialog-end-survey *").css("color", clients.popup_text_color || cbot_config.title_font_color || "#FFF")
    $(".cbot-dialog-end-survey").css("border-color", clients.popup_text_color || cbot_config.title_font_color || "#FFF")




    $(".cbot-dialog-sozlesme").css("background", dialogButtonColor || "rgb(21, 0, 143)");

    $(".cbot-secondary-button").click(function () {
      cbotHideHelpTextMenu();
      $(".cbot-form-message").focus();
    })
    $(".cbot-primary-button").click(function () {

      cbotHideHelpTextMenu();
      fadeIn(elCbotDialogRegularButton);
      fadeOut(elCbotDialog);
    })
    $(".cbot-dialog-button").animate({
      right: "+=270"
    }, 1000, function () {
      //console.log("cbot-dialog-button animate completed");
    });

    $(".cbot-okudum-anladim-trigger").on("click", function () {

      $(".cbot-okudum-anladim-checkbox").attr("checked", !$(".cbot-okudum-anladim-checkbox").attr("checked"))

    })

    $(".cbot-close-icon-new").on("click", cbotCloseIcon)
    $(".cbot-minimize-icon").on("click", function () {

      isWidgetOpen = false;

      if (!data_full_page) {
        fadeIn(elCbotDialogRegularButton);
        fadeOut(elCbotDialog);
      }

      $(".cbot-dialog-button-regular").removeClass("cbot-slide-right")
      $(".cbot-dialog-button-regular").removeClass("cbot-slide-left")

      if (clients.slide_from_left) {
        $(".cbot-dialog-button-regular").css("left", "20px");
      }
    })
    $("#cbot-mute-icon").on("click", function () {
      cancelTTS();
      tts_is_active = !tts_is_active;
      if (!tts_is_active) {
        $(".cbot-mute-icon").css('background', 'url(../img/flat/cbot-volume-mute.svg) no-repeat')
        $(".cbot-mute-icon").css('background-size', '15px')
        $(".cbot-mute-icon").css('background-position', 'center')
      } else {
        $(".cbot-mute-icon").css('background', 'url(../img/flat/cbot-volume-unmute.svg) no-repeat')
        $(".cbot-mute-icon").css('background-size', '15px')
        $(".cbot-mute-icon").css('background-position', 'center')
      }
    });
    $(document).on("click", "#cbot-close-button", function () {
      isWidgetOpen = false;
      $(".cbot-dialog-button").animate({
        right: "-=270"
      }, 1000, function () {
        fadeIn(elCbotDialogRegularButton);
      });
    });

    $(document).on("click", ".cbot-dropdown-input", function (element) {
      var dropdown = $(this).next();

      $(dropdown).css("display", "block");
      $(".cbot-msg").css("max-height", "60px")

      scrollChatScreen()
    });

    $(document).on("keyup", ".cbot-dropdown-input", function (event) {
      var input, filter, ul, li, a, i;
      input = document.getElementsByClassName("cbot-dropdown-input")[document.getElementsByClassName("cbot-dropdown-input").length - 1];
      input = event.target;
      filter = input.value.toUpperCase();
      div = $(event.target).next();
      a = $(div).find("button");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    })
    $(document).on("click", ".cbot-combobox", function (element) {
      // console.log(element)
      var payload = element.target.getAttribute('data-payload');
      // clickButton("postback", null, payload);
      // console.log("PAYLOAD: ", payload, element.target);
      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': "click",
        'event_label': payload
      });
      $(".cbot-dropdown-input").attr("disabled", "disabled")
      $(".cbot-dropdown-input:last").val(payload)
      dialog(cbotUserId, payload, null, payload);

    });
    $(document).click(function (e) {
      if (e.target.className != "cbot-dropdown-input" && e.target.className != "cbot-dropdown-input") {
        $(".cbot-dropdown-content").css("display", "none");
      }
    });

    $(document).on("click", ".cbot-web-close", function () {
      setTimeout(function () {
        forceCloseJitsiMeet();
        $('.cbot-web-area-content').html("");
      }, 500);

      $("#cbot-web-area").fadeOut();
    });

    $(document).on("click", ".cbot-web-reload", function () {
      // $('#cbot-web-iframe').attr('src', $('#cbot-web-iframe').attr('src'));
      $('.cbot-web-area-content').html($('.cbot-web-area-content').html());
    });

    $(document).on("click", ".cbot-dialog-button-regular", function () {
      dialogButtonRegular();
    });

    $(document).on("click", ".cbot-livechat-close", function () {
      clickToCloseLivechatButton();
    });
    $(document).on("click", ".cbot-start-meeting", toggleJitsiMeet);
    $(document).on("click", "#cbot-mini-web-toggle", toggleMiniWebForMobile);



    $(".cbot-dialog-end-survey").click(function (event) { event.stopPropagation(); });

    $(".cbot-survey-yes").on("click", function () {
      dialogCloseSurveyShowed = false;
      // dialogCloseSurveyAsked = true;
      // surveyTrigger(clients.dialog_end_survey_object, cbotUserId, 1)
      // dialog(cbotUserId, clients.dialog_end_survey_keyword || "CLOSE_DIALOG_SURVEY", null, null, false);
      dialogButtonRegular();
      $(".cbot-dialog-end-survey").fadeOut();
      $(".cbot-survey-fadebg").css("display", "none")
    })

    $(".cbot-survey-no").on("click", function () {
      dialogCloseSurveyShowed = false;
      // dialogCloseSurveyAsked = true;
      $(".cbot-dialog-end-survey").fadeOut();
      $(".cbot-survey-fadebg").css("display", "none")
    })


    var elCbotDialogButton = document.getElementsByClassName('cbot-dialog-button')[0];
    elCbotDialogRegularButton = document.getElementsByClassName('cbot-dialog-button-regular')[0];
    elCbotDialog = document.getElementsByClassName('cbot-dialog')[0];
    // var elCbotDialogButtonClose = document.getElementsByClassName('cbot-dialog-button-close')[0];
    var elCbotDialogHead = document.getElementsByClassName('cbot-dialog-head')[0];
    var elCbotRemove = document.getElementsByClassName('cbot-remove')[0];
    var elCbotForm = document.getElementById('cbot-form');
    var elCbotFormMessage = document.getElementById('cbot-form-message');
    var elCbotChat = document.getElementsByClassName('cbot-chat')[0];
    var elCbotHelpIcon = document.getElementById('cbot-help-icon');
    var elCbotTripleDot = document.getElementsByClassName('cbot-triple-dot')[0];
    var elCbotHelp = document.getElementById('cbot-help');
    var elCbotWebArea = document.getElementById('cbot-web-area');
    var elCbotAttachmentArea = document.getElementById("cbot-attachment-area");
    var elCbotMessageArea = document.getElementById('cbot-form-message-area');


    cbotModal = document.getElementById("cbot-modal");
    if (!queryStringVars.cbot_message) queryStringVars.cbot_message = getParameterFromScript("message");
    welcomeMessage = welcomeMessage;
    welcomeMessageSent = !!queryStringVars.cbot_message;
    if (!queryStringVars.cbot_message && welcomeMessage) {
      appendMessageToDialogBox(welcomeMessage, "cbot-other", null, {}, function () {
      });
    }
    welcomeMessageSent = true;

    // getConversations(function() {
    //     writeConversations();
    // });
    // var open = getParameterByName("open");
    // var data_open = getParameterFromScript("data-open");
    // try {
    //     if (open == "true" || data_open == "true" || IS_OPENED) {
    //         elCbotDialogRegularButton.click();
    //     }
    // } catch (err) {

    // }




    elCbotAttachmentArea.onclick = function (e) {
      $("#cbot-attachment-file-input").click();
      // console.log("Attachment icon is clicked");

    }

    // $(document).click(function (e) {
    //     if (e.target.className != "cbot-attachment-container" && e.target.className != "cbot-attachment-area") {
    //         // console.log("dışarıya bastın", e.target.className);
    //         hideAttachmentMenu();
    //     }
    // })



    // Get the image and insert it inside the modal - use its "alt" text as a caption
    cbotModalImg = document.getElementById("cbot-modal-image");


    var span = document.getElementsByClassName("cbot-modal-close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      cbotModal.style.display = "none";
    }

    $(elCbotFormMessage).bind('input', function () {
      $(this).val() // get the current value of the input field.
      var word = $(this).val();
      if (word && word.length > 0 && word != " ") {
        hideHelperMenu();
        $(".cbot-send-button").addClass("active");
        // $(".cbot-send-button").css("background-image", "url(" + staticAddress + "/img/flat/send-active.png)")
      } else {
        $(".cbot-send-button").removeClass("active");
        // $(".cbot-send-button").css("background-image", "url(" + staticAddress + "/img/flat/send-disabled.png)")

      }
    });

    var cbotSendButtonInfoToggle = true;
    $(".cbot-send-button-info").on("click", function () {

      // $(".cbot-overlay").toggle();
      // $(".cbot-overlay").animate({ backgroundColor: "#FFF" }, 1000, function() { });
      $(".cbot-dialog-help-menu-help").fadeOut();
      $(".cbot-dialog-help-menu-help").css("display", "none");
      toggleHelperMenu();


    })
    $(".cbot-send-button-info").hover(function () {
      $(".cbot-dialog-help-menu-help").css("opacity", "0");
      $(".cbot-dialog-help-menu-help").css("display", "block");
      $(".cbot-dialog-help-menu-help").stop().animate({ opacity: 1 }, 400, function () {

      });


    }, function () {

      $(".cbot-dialog-help-menu-help").stop().animate({ opacity: 0 }, 400, function () {
        $(".cbot-dialog-help-menu-help").css("display", "none");
      });
    })
    function toggleHelperMenu() {

      if (cbotSendButtonInfoToggle) {
        hideHelperMenu();
      }
      else {
        showHelperMenu();
      }
    }
    hideHelperMenu()
    $(".cbot-overlay").click(function (e) {
      if (e.target.className == "cbot-overlay") {
        hideHelperMenu();
      }
    })
    // $(document).click(function (e) {
    //     //if clicked element is not your element and parents aren't your div
    //     if (e.target.id != 'cbot-overlay-text' && $(e.target).parents('#cbot-overlay-text').length == 0 && e.target.id != 'cbot-form-message-area' && $(e.target).parents('#cbot-form-message-area').length == 0) {
    //         //do stuff
    //         hideHelperMenu();
    //     }
    // });

    var sozlesmeToggler = true;
    $(".cbot-cog-icon").on("click", function () {
      cbotShowHelpTextMenu()
      // sendTriggerMessages(trigger_messages)
      // cbotShowHelpTextMenu();

    })
    $(".cbot-dialog-sozlesme").on("click", function () {

      cbotHideHelpTextMenu();

    })
    function showHelperMenu() {

      // $(".cbot-overlay-text").css("transform", "scaleY(0)")
      // $(".cbot-overlay").animate({ "bottom": "-9999px" });
      $(".cbot-overlay").css("display", "block");
      $(".cbot-overlay").css("transition", "transform 0.3s ease-out");
      setTimeout(function () { // bug !!
        $(".cbot-overlay").css("background-color", "rgba(0,0,0,.5)");
      }, 0);
      $(".cbot-overlay").css("transition", ".5s");
      // $(".cbot-overlay").css("display", "block");
      $(".cbot-overlay-text").stop().slideDown(500, function () {
        // console.log("slide down");
      })
      $(".cbot-overlay-text").stop().animate({ scrollTop: /* $('.cbot-overlay-text').prop("scrollHeight") */0 }, 500, function () {
      });
      // $(".cbot-overlay").animate({ "marginTop": "0" });
      // $(".cbot-overlay").animate({ "bottom": "" });
      cbotSendButtonInfoToggle = true;

    }
    function hideHelperMenu() {
      $(".cbot-overlay").css("background-color", "rgba(0,0,0,0)");
      $(".cbot-overlay-text").stop().slideUp(500, function () {
        $(".cbot-overlay").css("display", "none")
        // console.log("slide up")
      })
      cbotSendButtonInfoToggle = false;
    }

    $(".cbot-dialog-button-regular").hover(function () {

      if (closing_popup_is_showing) return;
      if (!dialogCloseSurveyShowed) {

        $(".cbot-dialog-button-help-message").css("opacity", "0");
        $(".cbot-dialog-button-help-message").css("display", "block");
        $(".cbot-dialog-button-help-message").stop().animate({ opacity: 1 }, 400, function () {

        });
      }

    }, function () {
      if (closing_popup_is_showing) return;
      $(".cbot-dialog-button-help-message").stop().animate({ opacity: 0 }, 400, function () {
        $(".cbot-dialog-button-help-message").css("display", "none");
      });

    })


    $(".cbot-new-help-sentences").find("li").each(function (index, item) {
      $(item).click(function () {
        // console.log("li clicked", $(item).text());

        dialog(cbotUserId, $(item).text());
        // $('#cbot-form-message').attr('disabled', true)
        $('#cbot-form-message').val('');
        hideHelperMenu();
      })
    })

    // setTimeout(function() {
    //     $(".cbot-dialog-button-help-message").fadeOut();
    // }, 4 * 1000); // POC-55 // POC-71

    //     if (!data_full_page) {
    //         elCbotTripleDot.onclick = function (event) {
    //             event.stopPropagation();
    //             if ($("#cbot-web-area").css("display") == "none") {
    //                 fadeIn(elCbotWebArea);
    //             } else {
    //                 fadeOut(elCbotWebArea);
    //             }/* 
    //             if (elCbotHelp.style.display == "none") {
    //                 slideIn(elCbotHelp);
    //             } else {
    //                 slideOut(elCbotHelp);
    //             }
    //  */
    //         }
    //     }
    // elCbotHelpIcon.onclick = function () {
    //     // console.log(elCbotHelp.style.display);
    //     if (elCbotHelp.style.display == "none") {
    //         slideIn(elCbotHelp);
    //     } else {
    //         slideOut(elCbotHelp);
    //     }
    //     // slideIn(elCbotHelp);
    // }

    elCbotFormMessage.oninput = function () {


      if (!elCbotFormMessage.value || elCbotFormMessage.value == " ") {
        $(".cbot-illusion-placeholder").html(clients.placeholder_message);
        $('#cbot-form-message').removeAttr('disabled');
        $(".cbot-illusion-placeholder").css("display", "block");
      }
      else {
        $(".cbot-illusion-placeholder").css("display", "none");
      }



    }

    elCbotFormMessage.onfocus = function () {
      cbotInputKeyboardClicked = true;
      cbotKeyboardScrollInitialized = false;
      setTimeout(function () {
        cbotKeyboardScrollInitialized = true;
      }, 1000);

      if (document.getElementById("cbot-chat").scrollTop + parseInt($("#cbot-chat").height()) + 500 > document.getElementById("cbot-chat").scrollHeight) {
        scrollChatScreen(500);
      }

    }
    elCbotFormMessage.onblur = function () {
      // console.log("blurred")
      cbotInputKeyboardClicked = false;

      if (!elCbotFormMessage.value) {

        $(".cbot-illusion-placeholder").html(clients.placeholder_message);
        $('#cbot-form-message').removeAttr('disabled');
        $(".cbot-illusion-placeholder").css("display", "block");
        elCbotFormMessage.value = " "
      }

    }


    setClickEventToInteractiveButtons(cbotUserId);

    $("#cbot-form-message").keypress(function (event) {
      if (event.which == 13) {
        soc_typing(false);
        event.preventDefault();
        var message = elCbotFormMessage.value;
        // console.log("MESSAGE:", message);
        var typing = default_messages[botlanguage].TYPING
        var text_control = new RegExp(`${typing}\\.\\.\\.`, "i");
        if (message != "" && !/^\s+$/.test(message) && !text_control.test(message)) {
          // if (/^([cçÇ]+[ıiİ]*k+([ıiİ]*[sşŞ$]+)?|k+[a@4]*p[a@4]*t+|kend[ıiİ]n[ıiİ] k+[a@4]*p[a@4]*t*)$/i.test(message)) {
          //     elCbotFormMessage.value = "";
          //     /* fadeOut(elCbotDialogButtonClose); */
          //     fadeIn(elCbotDialogButton);
          //     fadeOut(elCbotDialog);
          // } else {
          message = cleanTags(message);
          dialog(cbotUserId, message);
          // elCbotFormMessage.setAttribute('readonly', true);
          if (document.getElementById("cbot-send-button"))
            document.getElementById("cbot-send-button").setAttribute("disabled", true);
          elCbotFormMessage.value = ' ';
          $(".cbot-illusion-placeholder").html(`${typing}...`)
          $('#cbot-form-message').attr('disabled', 'disabled');
          // }
        } else {
          $(".cbot-illusion-placeholder").html(clients.placeholder_message);
          $('#cbot-form-message').removeAttr('disabled');
          elCbotFormMessage.value = " ";
        }
        $(".cbot-illusion-placeholder").css("display", "block");


      }
    });
    $("#cbot-form-message").keyup(function (event) {
      if ((elCbotFormMessage.value || "").length > 0 && elCbotFormMessage.value != " ") {
        soc_typing(true);
      } else {
        soc_typing(false);
      }
    })

    $(document).on("click", "#cbot-send-button", function (event) {
      // console.log('event => ', event);
      event.preventDefault();
      var message = elCbotFormMessage.value;
      // console.log("MESSAGE:", message);
      var typing = default_messages[botlanguage].TYPING
      var text_control = new RegExp(`${typing}\\.\\.\\.`, "i");
      if (message != "" && !/^\s+$/.test(message) && !text_control.test(message)) {
        message = cleanTags(message);
        dialog(cbotUserId, message);
        elCbotFormMessage.value = ' ';
        isRecognitionStopped = true
        if (cbot_voice_bot_is_active && recognition && recognition.stop) recognition.stop();
        $(".ripple_effect").css("display", "none");
        $("#cbot-form-message").css("display", "block");
        $("#cbot-voice-area").removeClass("active");

        $(".cbot-illusion-placeholder").html(clients.placeholder_message);
        $('#cbot-form-message').removeAttr('disabled');
        // elCbotFormMessage.setAttribute('readonly', true);
        if (document.getElementById("cbot-send-button"))
          document.getElementById("cbot-send-button").setAttribute("disabled", true);
        elCbotFormMessage.value = ' ';
        $(".cbot-illusion-placeholder").html(`${typing}...`)
        $(".cbot-illusion-placeholder").css("display", "block");
        $('#cbot-form-message').attr('disabled', 'disabled');
        if (cbotRightBeforeFocused)
          elCbotFormMessage.focus();
      } else {
        elCbotFormMessage.value = " ";
        isRecognitionStopped = true
        if (cbot_voice_bot_is_active && recognition && recognition.stop) recognition.stop();
        $(".ripple_effect").css("display", "none");
        $("#cbot-form-message").css("display", "block");
        $("#cbot-voice-area").removeClass("active");
        $(".cbot-illusion-placeholder").html(clients.placeholder_message);
        $('#cbot-form-message').removeAttr('disabled');
        $(".cbot-illusion-placeholder").css("display", "block");
        if (cbotRightBeforeFocused)
          elCbotFormMessage.focus();
      }
    });

    // ripple effect js
    // class AudioVisualizer {
    //   constructor(audioContext, processFrame, processError) {
    //     this.audioContext = audioContext;
    //     this.processFrame = processFrame;
    //     this.connectStream = this.connectStream.bind(this);
    //     navigator.mediaDevices.getUserMedia({ audio: true, video: false }).
    //       then(this.connectStream).
    //       catch(error => {
    //         if (processError) {
    //           processError(error);
    //         }
    //       });
    //   }

    //   connectStream(stream) {
    //     this.analyser = this.audioContext.createAnalyser();
    //     const source = this.audioContext.createMediaStreamSource(stream);
    //     source.connect(this.analyser);
    //     this.analyser.smoothingTimeConstant = 0.6;
    //     this.analyser.fftSize = 32;

    //     this.rippleEffectRenderLoop(this.analyser);
    //   }

    //   rippleEffectRenderLoop() {
    //     let bufferLength = this.analyser.frequencyBinCount;
    //     const frequencyData = new Uint8Array(bufferLength);

    //     const processFrame = this.processFrame || (() => { });

    //     const renderFrame = () => {
    //       this.analyser.getByteFrequencyData(frequencyData);
    //       processFrame(frequencyData);

    //       requestAnimationFrame(renderFrame);
    //     };
    //     requestAnimationFrame(renderFrame);
    //   }
    // }


    // const visualMainElement = document.querySelector('main');
    // const visualValueCount = 16;
    // let visualElements;
    // const createDOMElements = () => {
    //   let i;
    //   for (i = 0; i < visualValueCount; ++i) {
    //     const elm = document.createElement('div');
    //     visualMainElement.appendChild(elm);
    //   }

    //   visualElements = document.querySelectorAll('main div');
    // };
    // createDOMElements();

    // const ripple_effect = () => {
    //   // Creating initial DOM elements
    //   const audioContext = new AudioContext();
    //   const rippleEffectDOM = () => {
    //     visualMainElement.innerHTML = '';
    //     createDOMElements();
    //   };
    //   rippleEffectDOM();

    //   // Swapping values around for a better visual effect
    //   const dataMap = {
    //     0: 15,
    //     1: 10,
    //     2: 8,
    //     3: 9,
    //     4: 6,
    //     5: 5,
    //     6: 2,
    //     7: 1,
    //     8: 0,
    //     9: 4,
    //     10: 3,
    //     11: 7,
    //     12: 11,
    //     13: 12,
    //     14: 13,
    //     15: 14
    //   };
    //   const processFrame = data => {
    //     const values = Object.values(data);
    //     let i;
    //     var total = 0;
    //     for (i = 0; i < visualValueCount; ++i) {
    //       const value = values[dataMap[i]] / 255;
    //       const elmStyles = visualElements[i].style;
    //       elmStyles.transform = `scaleY( ${value} )`;
    //       elmStyles.opacity = Math.max(.25, value);

    //       var x = values[i];
    //       total += x * x;
    //     }
    //     var rms = Math.sqrt(total / audioContext.createAnalyser().frequencyBinCount);
    //     var db = 20 * (Math.log(rms) / Math.log(10));
    //     db = Math.max(db, 0); // sanity check

    //   };

    //   const processError = () => {
    //     visualMainElement.classList.add('error');
    //     visualMainElement.innerText = 'Please allow access to your microphone.';
    //   };

    //   const a = new AudioVisualizer(audioContext, processFrame, processError);
    // };
    // ripple effect js finish

    elCbotFormMessage.addEventListener("click", function () {
      if (cbotIsMobile.any()) {
        var message = elCbotFormMessage.value;
        var typing = default_messages[botlanguage].TYPING
        var text_control = new RegExp(`${typing}\\.\\.\\.`, "i");
        if (!(message != "" && !/^\s+$/.test(message) && !text_control.test(message))) {
          event.preventDefault();
          elCbotFormMessage.value = "  ";
          $("#cbot-form-message").css("display", "block");
          $("#cbot-voice-area").removeClass("active");
          $(".cbot-illusion-placeholder").html(clients.placeholder_message);
          $('#cbot-form-message').removeAttr('disabled');
          $(".cbot-illusion-placeholder").css("display", "block");
          elCbotFormMessage.focus();
        }
      }
    });

    $(".cbot-voice-area").mousedown(function (event) {
      isRecognitionStopped = false
      startRecording();
      event.preventDefault();
      try {
        // ripple_effect()
      } catch (error) {
        console.log("ripple effect error:", error)
      }
    })
    $(".cbot-voice-area").mouseup(function () {
      if (cbot_voice_bot_is_active && recognition && recognition.stop) recognition.stop();
      isRecognitionStopped = true
      $(".ripple_effect").css("display", "none");
      $("#cbot-form-message").css("display", "block");
      $("#cbot-voice-area").removeClass("active");
    })

    var isDragging = false;

    $(document).on("mousedown", ".cbot-suggestion-button-slider", function (event) {
      var $slider = $(this);
      var startX = event.pageX || event.originalEvent.touches[0].pageX;
      var scrollLeft = $slider.scrollLeft();

      isDragging = false;

      $slider.on("mousemove", function (event) {
        isDragging = true;
        $slider.find("button").css("pointer-events", "none")
        var currentX = event.pageX || event.originalEvent.touches[0].pageX;
        var distance = startX - currentX;
        $slider.scrollLeft(scrollLeft + distance);
      });

      if (isDragging == false) {
        $slider.find("button").css("pointer-events", "auto")
      }
    });

    $(document).on("mouseup", ".cbot-suggestion-button-slider", function () {
      var $slider = $(this);
      $slider.off("mousemove");
    });

    $(document).on('mouseenter', '.cbot-rating-label', function () {
      $(this).prevAll('.cbot-rating-label').addClass('hover');
    });

    $(document).on('mouseleave', '.cbot-rating-label', function () {
      $(this).prevAll('.cbot-rating-label').removeClass('hover');
    });

    $(document).on('touchstart mousedown', '.cbot-survey-yes-no .cbot-button', function () {
      $('.cbot-survey-yes-no .cbot-button.clicked').removeClass('clicked');
      $(this).addClass('clicked');
    });

    // $(document).on('click', '.cbot-survey-yes-no .cbot-button', function () {
    //     $(this).addClass('clicked');
    // });


    $(".cbot-voice-area").on('touchstart', function () {
      isRecognitionStopped = false
      startRecording();
      event.preventDefault();
      try {
        // ripple_effect()
      } catch (error) {
        console.log("ripple effect error:", error)
      }
    });
    $(".cbot-voice-area").on('touchend', function () {
      if (cbot_voice_bot_is_active && recognition && recognition.stop) recognition.stop();
      isRecognitionStopped = true
      $(".ripple_effect").css("display", "none");
      $("#cbot-form-message").css("display", "block");
      $("#cbot-voice-area").removeClass("active");
    });

    // $(document).on("click", "#cbot-send-button", function (event) {
    //     event.preventDefault();
    //     var message = elCbotFormMessage.value;
    //     // console.log("MESSAGE:", message);
    //     if (message != "" && !/^\s+$/.test(message) && !/yazıyor.../i.test(message)) {
    //         message = cleanTags(message);
    //         dialog(cbotUserId, message);
    //         /* elCbotFormMessage.setAttribute('disabled', true);
    //         document.getElementById("cbot-send-button").setAttribute("disabled", true); */
    //         elCbotFormMessage.value = '';
    //     } else {
    //         elCbotFormMessage.value = "";
    //     }
    // });

    /*$('#cbot-form').submit(function (e) {
     var message = $('#cbot-form-message').val();
     if (message != "") {
     message = cleanTags(message);
     console.log(message);
     dialog(cbotUserId, message);
     $('#cbot-form-message').attr('disabled', true)
     $('#cbot-form-message').val('yazıyor...');
     }
     return false;
     });*/


    // ! BU HEP EN ALTTA KALSIN.
    sendCustomPostMessage("CBOT_WIDGET_INITIALIZED", {});

  }, time * 1000);
}

function afterAppend() {
  let tags = Array.from(document.querySelectorAll('[data-style]'));
  for (var tag of tags) {
    var attr = tag.getAttribute('data-style')
    var arr = attr.split(';').map((el, index) => el.trim());
    for (var i = 0, tmp; i < arr.length; ++i) {
      if (! /:/.test(arr[i])) continue;        // Empty or wrong style
      tmp = arr[i].split(':').map((el, index) => el.trim());
      tag.style[camelize(tmp[0])] = tmp.splice(1).join(":");
    }

    tag.removeAttribute("data-style");
  }

  var tagsonclick = document.querySelectorAll('[data-onclick]');
  for (var tag of tagsonclick) {
    var attr = tag.getAttribute('data-onclick')
    var functionName = attr.split("(")[0];
    var parameters = attr.match(/\((.*?)\)/)[1].split(",")
    tag.onclick = (function () {
      var params = parameters
      var funcName = functionName + ""
      return function () {
        window[funcName](...params)
      }
    })()
    tag.removeAttribute("data-onclick");
  }

  $(".clipboard").on("click", function () {
    var value = $(this).attr("data-value");
    navigator.clipboard.writeText(value);
    const copyDiv = $(this).closest(".cbot-list-item-text-wrap").find("[class*=copyAlert]").filter(':not(.animate)');
    if (copyDiv[0]) {
      copyDiv[0].classList.add('animate');
      copyDiv[0].addEventListener('animationend', function () {
        copyDiv[0].classList.remove('animate')
      });
    }
  });

  function camelize(str) {
    return str
      .split('-')
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
  }
}


function dialogButtonRegular(next = () => { }) {
  if (ia_take_attention_state_timer) clearTimeout(ia_take_attention_state_timer);
  if (!welcomeMessageSent && getChannelValue(clients.clear_after_close_bot, CHANNEL)) {
    if (welcomeMessage)
      appendMessageToDialogBox(welcomeMessage, "cbot-other", null, { /* unique_id: "hehe" */ }, function () {
        // setClickEventToFeedbackButtons("hehe");

      });

    sendTriggerMessages(trigger_messages);
  }

  var elCbotDialogRegularButton = document.getElementsByClassName('cbot-dialog-button-regular')[0];
  var elCbotDialog = document.getElementsByClassName('cbot-dialog')[0];

  $(".cbot-survey-fadebg").css("display", "none")
  isWidgetOpen = true;
  newMsgCount = 0;
  toggleBadge(newMsgCount);
  $(".cbot-dialog-end-survey").hide();
  try {
    // force close ad
    $(".modal.fade.ec-modal.in").css("display", "none");
    $(".modal.fade.ec-modal.in").find(".close").click();
  } catch (error) {
    console.log(error)
  }
  fadeOut(elCbotDialogRegularButton);
  // fadeIn(elCbotDialogButtonClose);
  fadeIn(elCbotDialog);
  /* GTM ID NOT CONFIGURATED */
  $(".cbot-dialog-button-help-message").fadeOut();


  // if (conversations.length == 0)
  //     sendTriggerMessages(trigger_messages);

  // sadece widget'a tıklandığında bir defaya mahsus mesaj yükelmelerini yap

  dialogOpenFunctions(next);

  scrollChatScreen(1000);

}

function dialogOpenFunctions(next = () => { }) {
  var elCbotFormMessage = document.getElementById('cbot-form-message');
  if (!firstLoad) {
    firstLoad = true;
    if (LIVE_CHAT) {
      var socketIO = document.createElement('script');
      socketIO.type = "text/javascript";
      socketIO.src = staticAddress + "/js/socket.io.js";
      document.getElementsByTagName('head')[0].insertBefore(socketIO, document.getElementsByTagName('head')[0].firstChild);

      var lvInterval = setInterval(function () {
        if (window.io && cbotSessionId && cbotUserId) {
          if (isLive) {
            if (is_liveagent_typed) {
              toggleCloseChatButton("block");
            }
          }
          socket = io.connect(soc_connect, {
            transports: ["websocket"], secure: true, upgrade: false, auth: {
              session_id: cbotSessionId,
              user_id: cbotUserId
            }
          });
          socket.on('connect', function () {
            sendCustomPostMessage("CBOT_WEBSOCKET_CONNECTED", {});
            clearLostConnectionMsg();
            var newClientInterval = setInterval(function () {
              if (cbotUserId && cbotSessionId) {
                socket.emit('new_client', { userId: cbotUserId, sessionId: cbotSessionId });
                clearInterval(newClientInterval);
              }
            }, 500);

          });
          socket_connection_widget();
          soc_cli_data();
          soc_survey();
          soc_stop();
          soc_client_typing();
          socket_alert();
          socket_delete_message();
          soc_transfer_agent();
          soc_cbot_meet_events();
          soc_error();
          clearInterval(lvInterval);
          soc_queue_data();
        }
      }, 1000);
    }

    $('#cbot-form-message').attr('readonly', true)
    if (data_function) {
      triggerFunction(function (data) {
        triggerGetConversations(next);
      });
    } else {
      triggerGetConversations(next);
    }
  } else {
    triggerFunction();
  }

  function triggerGetConversations(next = () => { }) {

    getConversations(function () {
      browserNotifications();
      if (conversations.length == 0) {
        if (!ia_take_attention_state.is_executed) {
          sendTriggerMessages(trigger_messages);
        }
      }
      else
        writeConversations();

      if (isLive) {
        if (is_liveagent_typed) {
          toggleCloseChatButton("block");
        }
      }

      // yazıları temizle&
      $(".cbot-illusion-placeholder").html(clients.placeholder_message);
      $('#cbot-form-message').removeAttr('disabled');
      elCbotFormMessage.value = " ";
      elCbotFormMessage.removeAttribute('readonly');
      elCbotFormMessage.focus();


      handleMessageArea();

      disablePostbackButtonsInHistory();
      disableLocationButtonsInHistory();

      $(".cbot-dropdown-input").attr("disabled", "disabled");

      scrollChatScreen(100);
    },
      next
    );
  }
}

function disablePostbackButtonsInHistory() {
  var messages = $("#cbot-chat li");
  var lastMessages = messages[[messages.length - 1]]
  // var lastIndexOfUserMsg = messages.toArray().findLastIndex(function(m) { $(m).attr("class").includes("cbot-self"); });
  var lastIndexOfUserMsg = messages.length - 1 - messages.toArray().slice().reverse().findIndex(function (m) {
    if ($(m).attr("class")) {
      $(m).attr("class").includes("cbot-self");
    }
  }) // For Safari!
  if (lastIndexOfUserMsg < messages.length - 1) {
    for (var i = lastIndexOfUserMsg - 1; i >= 0; i--) {
      var buttons = $(messages[i]).find(".cbot-button.postback");

      if (clients.remove_clicked_button_family) {
        e.parentElement.remove();
      }

      for (var j = 0; j < buttons.length; j++) {
        buttons[j].disabled = true;
      }
    }

  } else {
    var elCbotInteractiveButtons = document.querySelectorAll('.postback:not(.cbot-send-survey-button)');
    for (var j = elCbotInteractiveButtons.length - 1; j >= 0; j--) {
      e = elCbotInteractiveButtons[j];

      if (clients.remove_clicked_button_family)
        e.parentElement.remove();

      if (e.getAttribute('data-branch') != "true") {
        e.disabled = true;
      }
      if (lastMessages && lastMessages.getElementsByTagName("button").length > 0) {
        for (var index = lastMessages.getElementsByTagName("button").length; index > 0; index--) {
          elCbotInteractiveButtons[elCbotInteractiveButtons.length - index].disabled = false
        }
      }
    }
  }
}

function disablePostbackButtons(class_name = "postback") {
  $(".cbot-rating-group").addClass("cbot-rating-disabled");
  var elCbotInteractiveButtons = document.getElementsByClassName(class_name);
  for (var j = 0; j < elCbotInteractiveButtons.length; j++) {
    e = elCbotInteractiveButtons[j];
    if (e.getAttribute('data-branch') != "true") {
      e.disabled = true;
    }
  }
}

function sendCustomPostMessage(action, data) {
  try {
    window.postMessage({ action: action, data: data }, getAddr());
    if (window.parent) window.parent.postMessage({ action: action, data: data }, getAddr());
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage({ action: action, data: data }, getAddr());
    } else if (cbotIsMobile.iOS()) {
      if (window.webkit.messageHandlers) {
        window.webkit.messageHandlers.ChatbotEventBridge.postMessage({ action: action, data: data }, getAddr());
      } else if (window.ChatbotEventBridge) {
        window.ChatbotEventBridge.postMessage({ action: action, data: data }, getAddr());
      }
    } else if (cbotIsMobile.Android()) {
      if (ChatbotEventBridge) {
        ChatbotEventBridge.postMessage(JSON.stringify({ action: action, data: data }));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function disableLocationButtonsInHistory() {
  var messages = $("#cbot-chat li");
  var lastMessages = messages[[messages.length - 1]]
  // var lastIndexOfUserMsg = messages.toArray().findLastIndex(function(m) { $(m).attr("class").includes("cbot-self"); });
  var lastIndexOfUserMsg = messages.length - 1 - messages.toArray().slice().reverse().findIndex(function (m) {
    if ($(m).attr("class")) {
      $(m).attr("class").includes("cbot-self");
    }
  }) // For Safari!
  if (lastIndexOfUserMsg < messages.length - 1) {
    for (var i = lastIndexOfUserMsg - 1; i >= 0; i--) {
      var buttons = $(messages[i]).find(".cbot-button.cbot-location");

      if (clients.remove_clicked_button_family) {
        e.parentElement.remove();
      }

      for (var j = 0; j < buttons.length; j++) {
        buttons[j].disabled = true;
      }
    }

  } else {
    var elCbotInteractiveButtons = document.getElementsByClassName('cbot-location');
    for (var j = elCbotInteractiveButtons.length - 1; j >= 0; j--) {
      e = elCbotInteractiveButtons[j];

      if (clients.remove_clicked_button_family)
        e.parentElement.remove();

      if (e.getAttribute('data-branch') != "true") {
        e.disabled = true;
      }
    }
  }
}

let firstTrigger = true;
function triggerFunction(next) {
  if (!next) next = function () { };
  if (data_function && typeof window[data_function] == "function") {
    window[data_function](function (data) {
      if (data.headers) {
        data_script_qs = data.headers;
      }
      getCustomHeaders(firstTrigger);
      firstTrigger = false;
      next(data);
    });
  }
}


function delay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}
function setClickEventToInteractiveButtons(cbotUserId) {
  //console.log("setClickEventToInteractiveButtons");
  var elCbotInteractiveButtons = document.getElementsByClassName('postback');
  var btn;
  for (var i = 0; i < elCbotInteractiveButtons.length; i++) {
    btn = elCbotInteractiveButtons[i];
    btn.onclick = function (event) {
      var e = event.target;
      var elCbotInteractiveButtons = document.getElementsByClassName('postback');
      var payload = e.getAttribute('data-payload');
      var data_full_action = e.getAttribute('data-full-action');

      // console.log("PAYLOAD: ", payload, e);
      if (clients.send_survey_button_is_active) {
        if (e.className == "cbot-rating-label postback") {
          button_payload = payload
          $('.cbot-send-survey-button').removeAttr('disabled');
          $('.cbot-send-survey-button').addClass('clicked');
          return
        } else if (e.className == "cbot-send-survey-button postback clicked") {
          $('.cbot-send-survey-button').css("display", "none");
          $('.cbot-send-button').css("display", "block");
          $(".cbot-illusion-placeholder").html(clients.placeholder_message);
          payload = button_payload
          e.innerText = payload
        }
      }

      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': "click",
        'event_label': payload
      })

      if (clients.remove_clicked_button_family)
        e.parentElement.remove();


      $(".cbot-dropdown-input").attr("disabled", "disabled")
      $(".cbot-rating-group").addClass("cbot-rating-disabled"); // mesaj gönderildiğinde yıldız anketler bloklansın
      $(".cbot-colorful-radio-main-container").addClass("cbot-rating-disabled"); // mesaj gönderildiğinde yıldız anketler bloklansın
      dialog(cbotUserId, e.innerText || payload, null, payload, !e.className.includes("cbot-rating-label") && (e.parentElement.parentElement && !e.parentElement.parentElement.className.includes("cbot-survey-yes-no")), data_full_action);

      for (var j = 0; j < elCbotInteractiveButtons.length; j++) {
        e = elCbotInteractiveButtons[j];
        if (e.getAttribute('data-branch') != "true") {
          e.disabled = true;
        }
      }
    }
  }

  // For file upload
  elCbotInteractiveButtons = document.getElementsByClassName('fileupload');
  var file_btn;
  for (var ii = 0; ii < elCbotInteractiveButtons.length; ii++) {
    file_btn = elCbotInteractiveButtons[ii];
    fileUploadListener(file_btn.attributes[2].nodeValue);
    file_btn.onclick = function (event) {
      var e = event.target;
      var index = e.getAttribute('data-payload');
      $("#cbot-attachment-file-input-" + index).click();


    }
  }

}

var fb_counter = 0;
function setClickEventToFeedbackButtons(unique_id) {

  var feedback_areas = $('.cbot-feedback-id-' + unique_id);

  $(feedback_areas).each(function (index, feedback_area) {

    var voteButtons = $(feedback_area).find('.cbot-feedback-vote-button');
    $(voteButtons).each(function (index, item) {

      $(item).on("click", function (event) {



        $(voteButtons).each(function (index, btn) {
          // $(btn).prop("disabled", true);
          // $(btn).css("pointer-events", "none")
        });
        var cbot_feedback_status = feedback_area.querySelector(".cbot-feedback-status");

        $(item).siblings("button.cbot-feedback-vote-button").eq(0).removeClass("cbot-vote-selected")

        fb_counter++;
        //console.log(fb_counter, '??');

        if (fb_counter % 2 == 1) {
          if ($(item).hasClass("cbot-vote-up-selectable") && !$(item).hasClass("cbot-vote-selected")) {
            //console.log(fb_counter, '*')
            $(item).addClass("cbot-vote-selected");
            /* LIKE REQUEST */
            sendFeedbackPost({
              unique_id: unique_id,
              feedback_like: "Positive"
            }, function () {
              if (clients.feedback.show_vote_result_message) {
                $(cbot_feedback_status).text(clients.feedback.vote_up_message);
                if (clients.feedback.hide_after_user_sent_vote)
                  setTimeout(function () {
                    fadeOut(cbot_feedback_status);
                  }, clients.feedback.hide_after_user_sent_vote_timeout || 1000);
              }
            })
          } else if ($(item).hasClass("cbot-vote-up-selectable") && $(item).hasClass("cbot-vote-selected")) {
            //console.log(fb_counter, '**')
            $(item).removeClass("cbot-vote-selected");
            fadeOut(feedback_area.querySelector(".cbot-feedback-comment-area"))
            //fadeOut(cbot_feedback_comment_area);
            sendFeedbackPost({
              unique_id: unique_id,
              feedback_like: ""
            }, function () {
              // if (clients.feedback.show_vote_result_message) {

              //     $(cbot_feedback_status).text(clients.feedback.vote_up_message);
              //     if (clients.feedback.hide_after_user_sent_vote)
              //         setTimeout(function () {
              //             fadeOut(cbot_feedback_status);
              //         }, clients.feedback.hide_after_user_sent_vote_timeout || 1000);
              // }
            })

          }
          if ($(item).hasClass("cbot-vote-down-selectable") && !$(item).hasClass("cbot-vote-selected")) {
            $(item).addClass("cbot-vote-selected");
            /* DISLIKE REQUEST */
            sendFeedbackPost({
              unique_id: unique_id,
              feedback_like: "Negative"
            }, function () {
              if (clients.feedback.show_vote_result_message) {

                $(cbot_feedback_status).text(clients.feedback.vote_down_message)
                if (clients.feedback.hide_after_user_sent_vote)
                  setTimeout(function () {
                    fadeOut(cbot_feedback_status);
                  }, clients.feedback.hide_after_user_sent_vote_timeout || 1000);
              }
            })
          } else if ($(item).hasClass("cbot-vote-down-selectable") && $(item).hasClass("cbot-vote-selected")) {
            $(item).removeClass("cbot-vote-selected");
            /* DISLIKE REQUEST */
            sendFeedbackPost({
              unique_id: unique_id,
              feedback_like: ""
            }, function () {
              // if (clients.feedback.show_vote_result_message) {

              //     $(cbot_feedback_status).text(clients.feedback.vote_down_message)
              //     if (clients.feedback.hide_after_user_sent_vote)

              //         setTimeout(function () {
              //             fadeOut(cbot_feedback_status);
              //         }, clients.feedback.hide_after_user_sent_vote_timeout || 1000);
              // }
            })
          }

          if (((clients.feedback.positive_comment_is_active && $(item).hasClass("cbot-vote-up-selectable") && $(item).hasClass("cbot-vote-selected")) || (clients.feedback.negative_comment_is_active && $(item).hasClass("cbot-vote-down-selectable") && $(item).hasClass("cbot-vote-selected")))) {
            var cbot_feedback_comment_area = feedback_area.querySelector(".cbot-feedback-comment-area");
            fadeIn(cbot_feedback_comment_area);
            scrollChatScreen(200)
            var textarea = $(feedback_area).find(".cbot-feedback-textarea");
            var send = $(feedback_area).find(".cbot-feedback-form-send");
            $(textarea).keypress(function (e) {
              if (e.which == 13) {
                senderFunction(e);
              }
            });
            function senderFunction(event) {
              $(send).prop("disabled", true)
              $(textarea).prop("disabled", true)
              sendFeedbackPost({
                unique_id: unique_id,
                user_comment: textarea.val()
              }, function () {
                $(feedback_area).find(".cbot-feedback-status-form").text(clients.feedback.form_success_message);
                if (clients.feedback.hide_form_after_user_sent_feedback)
                  setTimeout(function () {
                    fadeOut(cbot_feedback_comment_area)
                    setTimeout(function () {

                      $(send).prop("disabled", false)
                      $(textarea).prop("disabled", false)
                    }, 1000);
                  }, clients.feedback.hide_form_after_user_sent_feedback_timeout || 1000);


              })
            }
            $(send).on("click", senderFunction);
          }
          else {

            var cbot_feedback_comment_area = feedback_area.querySelector(".cbot-feedback-comment-area");
            fadeOut(cbot_feedback_comment_area)
          }
        }
      })
    })
  })
}

function addFontFile(filename, version) {
  var preloadFont = document.createElement('link');
  preloadFont.type = "font/woff2";
  preloadFont.rel = "preload";
  preloadFont.as = "font";
  // preloadFont.crossOrigin = "anonymous"
  if (data_cdn_url) {
    preloadFont.href = data_cdn_url + '/' + filename + '.woff2' + (version ? '?v=' + version : '');
  } else {
    preloadFont.href = staticAddress + '/fonts/' + filename + '.woff2' + (version ? '?v=' + version : '');
  }
  document.getElementsByTagName('head')[0].appendChild(preloadFont);
}

function addChartJs() {
  let script = document.createElement('script');
  // script.src = "https://cdn.jsdelivr.net/npm/chart.js";
  script.src = staticAddress + "/js/chart.js";
  document.getElementsByTagName('head')[0].appendChild(script);
}

function addCssFile(filename, version) {
  var preloadcss = document.createElement('link');
  preloadcss.type = "text/css";
  preloadcss.rel = "preload";
  preloadcss.as = "style";
  preloadcss.href = staticAddress + '/css/' + filename + '.css' + (version ? '?v=' + version : '');
  document.getElementsByTagName('head')[0].appendChild(preloadcss);

  var customstyle = document.createElement('link');
  customstyle.type = "text/css";
  customstyle.rel = "stylesheet";
  customstyle.href = staticAddress + '/css/' + filename + '.css' + (version ? '?v=' + version : '');
  document.getElementsByTagName('head')[0].appendChild(customstyle);
}

function cleanTags(text) {

  return (text || "").replace(/[^\p{L}\p{N}\p{Sc}\p{Emoji} _@.,$€₺:£%+*#&?\-\/='"]/gu, function(match, offset, org){
    // Safari'deki emoji bozulma sorunu sebebiyle aşağıdaki fonksiyon eklendi.
    return isValidUnicodeCharacter(match) ? match : " ";
  });
}

function isValidUnicodeCharacter(str) {
  try {
    // Gelen değeri JSON.parse ile dönüştürmeye çalış
    var parsedValue = JSON.parse('"' + str + '"');
    
    // Dönüştürme başarılı ise ve bir karaktere eşitse, geçerli bir Unicode karakteridir
    if (typeof parsedValue === "string" && parsedValue.length === 1) {
      // ASCII karakter değilse, geçerli bir Unicode karakteridir
      return parsedValue.charCodeAt(0) > 127;
    }
    
    return false;
  } catch (e) {
    // JSON.parse başarısız olursa veya dönüştürülen değer birden fazla karakter içeriyorsa geçerli değil
    return false;
  }
}

function sanitize(text, wrongChars, normalChars) {
  if (typeof text == "string" && wrongChars && normalChars && wrongChars.length == normalChars.length) {

    for (var i = 0; i < wrongChars.length; i++) {
      // console.log(new RegExp(wrongChars[i],"gi"));
      text = text.replace(new RegExp(wrongChars[i].replace(/([^a-zA-ZÖÇŞİĞÜöçşığü0-9\\|])/g, "\\$1"), "gi"), normalChars[i]);
    }

  } else {
    //console.log("sanitize WARNING: wrongChars array's length must be equals to normalChars array");
  }
  return text;
}

function handleAndAddEmoji(userMessage, responseMessage, next) {
  var matches = userMessage.match(new RegExp("(" + emojies.join("|").replace(/([^a-zA-ZÖÇŞİĞÜöçşığü0-9\\|])/g, "\\$1") + ")", "g"));
  var emoji;
  // console.log("handleAndAddEmoji REGEX: ", new RegExp("("+emojies.join("|").replace(/([^a-zA-ZÖÇŞİĞÜöçşığü0-9\\|])/g,"\\$1")+")", "g"));
  //console.log("handleAndAddEmoji MATCHES: ", matches);
  if (matches && matches.length > 0 && typeof responseMessage === "string") {
    emoji = matches[0];
    responseMessage += " " + emoji;
    return responseMessage;
  }
  return responseMessage;
}

var video_conference=false;
var auth;
var kvk;
var isLive = false;
var lastConversationStepValue = false;
var lastCategory;
function dialog(cbotUserId, message, next, payload, showClientMessage, data_full_action, getConversationsCallback = (userId, message) => { }, is_triggered = false) {
  if (!isWidgetOpen) dialogButtonRegular()
  if (!data_full_action || data_full_action == "{}") data_full_action = "";
  if (showClientMessage == undefined) showClientMessage = true;
  if (typeof next !== "function") next = function () { };
  if (showClientMessage) {
    appendMessageToDialogBox(message, "cbot-self", null, {}, function () { });
    appendTypingIconToDialogBox("");
  }
  //$('#cbot-chat').append($('<li>').addClass("cbot-self").html('<div class="avatar"><img src="'+staticAddress+'/img/cbot-user.png" draggable="false"/></div><div class="cbot-msg">'+message+'</div>'));
  //$("#cbot-chat").scrollTop(50000);
  // addMessageToCache({ senderName: "User_" + cbotUserId, userId: cbotUserId, message: message, intents: intents, client: cbot_config.client });
  var elCbotFormMessage = document.getElementById('cbot-form-message');
  // $.post(staticAddress + "/" + CLIENT, { senderName: "User_" + cbotUserId, userId: cbotUserId, message: message, intents: intents, client: cbot_config.client }, function (data) {
  //console.log("Geldi!!!");
  if (isLive || !new RegExp("^(" + emojies.join("|").replace(/([^a-zA-ZÖÇŞİĞÜöçşığü0-9\\|])/g, "\\$1") + ")$", "ig").test(message)) {
    setLastMessageSentDateTLS();
    $(".cbot-dropdown-input").attr("disabled", "disabled");
    firstMessageSent = true;
    setFirstMessageSentTLS(firstMessageSent);
    lastMessageReceiveDate = Date.now();

    $(".cbot-rating-group").addClass("cbot-rating-disabled"); // mesaj gönderildiğinde yıldız anketler bloklansın
    $(".cbot-colorful-radio-main-container").addClass("cbot-rating-disabled"); // mesaj gönderildiğinde yıldız anketler bloklansın
    if (!isLive || FIRST_LIVE_MESSAGE) {
      sendPost({
        senderName: "User_" + cbotUserId,
        userId: cbotUserId,
        sessionId: cbotSessionId,
        message: payload || message,
        data_full_action: data_full_action,
        intents: intents,
        client: cbot_config.client,
        live_chat: isLive,
        is_triggered: is_triggered,
      }, function (data) {


        if (cbotInputKeyboardClicked)
          elCbotFormMessage.focus();

        if (data) {
          socketHandshake();
          if (lastCategory != data.category || (!data.conversationStep && !lastConversationStepValue) || (data.conversationStep && !lastConversationStepValue)) {
            setLastMessageTLS([message]);
          } else {
            var msgFLS = getLastMessageFLS();
            msgFLS.push(message);
            setLastMessageTLS(msgFLS);
          }
          lastConversationStepValue = data.conversationStep;
          lastCategory = data.category;

          isLive = setIsLive(data.live_chat);
          setisLiveTLS(isLive);
          if (isLive) {
            FIRST_LIVE_MESSAGE = true;
            socket_widget(message);
          }


          handleMessageArea();

          intents = data.intents;
          // data.message = handleAndAddEmoji(message, data.message);
          clearTimeout(auth);

          if (data.smsAuth == true) {
            auth = setTimeout(function () {
              appendMessageToDialogBox(data.smsMessage, "cbot-other", data.category, { unique_id: data.unique_id }, function () {
                setClickEventToInteractiveButtons(data.userId);
                setClickEventToFeedbackButtons(data.unique_id);
              });
            }, 180000);
          }
          clearTimeout(kvk);
          if (data.kvkConfirm == true) {
            kvk = setTimeout(function () {
              appendMessageToDialogBox(data.kvkConfirmMessage, "cbot-other", data.category, { unique_id: data.unique_id }, function () {
                setClickEventToInteractiveButtons(data.userId);
                setClickEventToFeedbackButtons(data.unique_id);
                if (data.survey) {
                  surveyTrigger(data.survey, data.userId);
                }
                triggerTimingResponses(data);
              });
            }, 30000);
          }
          appendMessageToDialogBox(data.message, "cbot-other", data.category, { unique_id: data.unique_id, notification: data.speak, survey_response: !showClientMessage, serviceOutput: data.serviceOutput }, function () {
            setClickEventToInteractiveButtons(data.userId);
            setClickEventToFeedbackButtons(data.unique_id);
            // console.log("data", data);
            if (data.survey) {
              if (data.live_chat) {
                if (data.live_chat != true) {
                  surveyTrigger(data.survey, data.userId);
                }
              }
              else {
                surveyTrigger(data.survey, data.userId);
              }

            }
            triggerTimingResponses(data);

            next();
          });


        } else {
          appendMessageToDialogBox("Zaman aşımı", "cbot-other", null, { notification: "Zaman aşımı" }, function () { });
          /*lastRequestTime = parseInt(Date.now() / 1000);
          surveyInterval || (surveyInterval = setInterval(function () {
            parseInt(Date.now() / 1000) - lastRequestTime > 20 && !isSurveyShowed && (clearInterval(surveyInterval), surveyInterval = null, addSurvey(data.userId), isSurveyShowed = true)
          }, 5000));*/
          next();
        }
      });
    } else {
      $(".cbot-typing").remove();
      socket_widget(message);
      setTimeout(function () { // Temizliği yapmadan önce keypress'in çalışmasını beklemek gerek. Yoksa burası önce çalıştığı için karışıyor.
        $(".cbot-illusion-placeholder").html(clients.placeholder_message);
        $('#cbot-form-message').removeAttr('disabled');
        elCbotFormMessage.value = " ";
        elCbotFormMessage.removeAttribute('readonly');
        if (document.getElementById("cbot-send-button")) {
          document.getElementById("cbot-send-button").removeAttribute('disabled');
          $(".cbot-send-button").removeClass("active");
        }
        elCbotFormMessage.focus();
      }, 200);
      // AI öner sistemi için canlı destekte müşterinin son yazışmasının AI cevabı:
      // if (data.message) {
      //     if (!Array.isArray(data.message))
      //         data.message = [data.message];
      //     var resp_answer = data.message;
      //     socket_suggestion(resp_answer[0], data.category, data.userId);
      // }
      next();
    }
  } else { // Sadece emoji gönderildiyse direkt aynı emoji ile cevap ver!
    //console.log("just emoji");
    setTimeout(function () {
      $(".cbot-illusion-placeholder").html(clients.placeholder_message);
      $('#cbot-form-message').removeAttr('disabled');
      elCbotFormMessage.value = " ";
      elCbotFormMessage.removeAttribute('readonly');
      document.getElementById("cbot-send-button").removeAttribute('disabled');
      elCbotFormMessage.focus();
      appendMessageToDialogBox(message, "cbot-other", null, { notification: message }, function () {
        //console.log("#CALLBACK appendMessageToDialogBox 2");
        setClickEventToInteractiveButtons(cbotUserId);
      });
    }, 1500);
    next();

  }
}

function clearMessages() {
  let cbotChatArea = document.getElementById("cbot-chat");

  cbotChatArea.innerHTML = "";
  setSessionIdTLS(null);

  sendTriggerMessages(trigger_messages);
}

function sendPost(jsonData, next, isTimingResponse) {
  if (!(isTimingResponse && (WAITING_FOR_LOGIN || WAITING_FOR_POLLING))) { // polling açıkken timing resp. çalışmamalıdır.
    cancelTTS();
    if (document.querySelector('#cbot-mini-web-toggle')) {
      document.querySelector('#cbot-mini-web-toggle').remove();
      document.querySelector('.cbot-avatar').style.display = 'block';
    }
    jsonData.referrer = CHANNEL || "WIDGET";
    if (focookie) jsonData.focookie = focookie;
    // dinamik olarak data-session üzerinden botun çalıştığı tab bilgisini alma.
    if (!!(getParameterFromScript("data-session"))) { jsonData.loginId = getParameterFromScript("data-session") }
    if (loginId) jsonData.loginId = loginId;
    if (data_user) jsonData.userInfo = data_user;
    if (interactive_recommends) jsonData.interactive_recommends = interactive_recommends;
    jsonData.live_bot = FIRST_LIVE_MESSAGE;
    jsonData = addSurveyRequestData(jsonData);
    jsonData.widget_lang = widget_lang
    // $(".cbot-send-button").css("background-image", "url(" + staticAddress + "/img/flat/send-disabled.png)");
    $(".cbot-send-button").removeClass("active");
    // console.log("giden data", jsonData);

    clearSurveyTimeout();
    if (!isTimingResponse) clearTimingResponseTimeout();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        if (jsonData.is_survey) {
          json.is_survey_message = true
        }
        if (hasSurveyFeedback) {
          json.is_survey_feedback = true
        }
        if (json && json.speak && tts_is_active) {
          if (json.serviceOutput && json.serviceOutput.nestedBots) {
            webkitTTS(json.message[0].message.speak)
          } else {
            webkitTTS(json.speak)
          }
        }
        hasSurveyFeedback = json.survey_feedback;

        if (json.user_display_name) {
          addAvatarLetters(json.user_display_name);
        }

        if (json.action == "CLEAR") {
          clearMessages();
          return next(json);
        }


        if (Array.isArray(json.entities.LONG_POLLING) && json.entities.LONG_POLLING[0] == "true")
          waitForLongPolling();

        if (!showedSurvey && json.exit_survey) {
          exitSurvey = json.exit_survey;
        }

        if (json.send_message) {
          jsonData.message = json.send_message;
          appendTypingIconToDialogBox("");
          jsonData.userId = json.userId || null
          jsonData.sessionId = json.session_id || null
          jsonData.is_triggered = true
          sendPost(jsonData, next);
        }

        if (json.lang_vars) {
          setLangVars(json.lang_vars);
        }

        if (json.serviceOutput && json.serviceOutput.postMessage) {
          window.postMessage(json.serviceOutput, getAddr());
          if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify(json.serviceOutput), getAddr());
          }

          if (json.serviceOutput.send_message) {
            jsonData.message = json.serviceOutput.send_message;
            jsonData.is_triggered = true;
            appendTypingIconToDialogBox("");
            sendPost(jsonData, next);
          }
        }

        setUserIdTLS(json.userId);
        setSessionIdTLS(json.session_id);
        socket_newclient();

        next(json);

        let handleSurveyResult = handleExitSurveyAnswer(json.category, hasSurveyFeedback, json.survey_redirected_intent_id, json.conversationStep)
        if (handleSurveyResult) {
          if (exitSurvey.clear_chat_session_after_this_survey_triggered) {
            reset(false);
          }
        }

      } else if (this.readyState == 4) {
        // console.log("READY STATE", this.readyState);
        // console.log("STATUS", this.status);
        next();
      }
    }
    xhr.open("POST", rootAddress + "/" + CLIENT, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader('CBOT-Token', "hztHxVUZ1xvs13t0bGwjtrgOxJFk11i1");
    xhr.setRequestHeader('CBOT-URL', location.href);

    var customheaders = clients.gateway_custom_headers || [];

    for (var i = 0; i < customheaders.length; i++) {
      var header = customheaders[i];
      xhr.setRequestHeader(header.key, header.value);
    }


    xhr.send(JSON.stringify(jsonData));
    if (jsonData.is_survey == true) {
      sendCustomPostMessage("CBOT_SURVEY_ANSWERED_BY_USER", { message: jsonData.message, survey_id: jsonData.survey_id });
    } else {
      sendCustomPostMessage("CBOT_MESSAGE_SENT", { message: jsonData.message })
    }

    disablePostbackButtons()
    disablePostbackButtons("cbot-location")
  }
}

function sendToEndChat() {
  if (SEND_ENDCHAT) {
    $.ajax({
      url: rootAddress + "/conversations/endchat",
      type: "POST",
      headers: {
        "Content-Type": "application/json",
        "CBot-Token": "hztHxVUZ1xvs13t0bGwjtrgOxJFk11i1",
        "CBOT-URL": location.href
      },
      timeout: 10000,
      data: JSON.stringify({
        client: CLIENT,
        client_id: cbotUserId,
        sessionId: cbotSessionId,
        live_chat: isLive
      }),
      success: function (json) {
        // console.log("sendToEndChat", json);
      },
      error: function (err) {
        console.error(err);
      }
    });
  }
}

function setLangVars(lang_vars_response) {
  let keys = Object.keys(lang_vars_response);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let langVar = lang_vars_response[key];
    lang_vars[key] = langVar;
  }
}

function appendMessageToDialogBox(message, elemClass, category, options, next) {
  if (!next || typeof next != "function") next = function () { };
  if (!options) options = {}
  var elCbotChat = document.getElementById('cbot-chat');


  message = sanitize(message, emojies, emojiIcons)
  if (elemClass === "cbot-self") {
    if (cbot_messages_sending_time) {

      currentTime = new Date();
      hours = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
      minutes = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

      $('#cbot-chat').append('<li class="' + elemClass + '"><div class="cbot-flexible"><div class="cbot-msg" style="' + user_message_bubble_color + user_message_text_color + '">' + generateComponentHTML(message, category, options) + `<div class="cbot-messages-sending-time">${hours}:${minutes}</div></div></div></li>`);
      afterAppend();
    }
    else {
      $('#cbot-chat').append('<li class="' + elemClass + '"><div class="cbot-flexible"><div class="cbot-msg" style="' + user_message_bubble_color + user_message_text_color + '">' + generateComponentHTML(message, category, options) + '</div></div></li>');
      afterAppend();
    }
    if (!options.instantWrite)
      scrollChatScreen(100);

    hideAlertedDialogMessage();
  } else {

    if (options && options.serviceOutput && options.serviceOutput.nestedBots) {
      message = message[0].message.message
    }

    hideAlertedDialogMessage();

    if (options.notification) {
      showNotification(cbot_config.dialogTitle, options.notification);
      sendCustomPostMessage("CBOT_MESSAGE_RECEIVED", options.notification);
    }

    if (!Array.isArray(message)) message = [message];

    message = message.filter(x => !x.message?.includes("NO_MESSAGE"));

    var w = 0;

    $(".cbot-typing").remove();
    appendTypingIconToDialogBox("");
    var is_increased = false
    var interval = setInterval((function selfInterval() {
      if (w < message.length) {

        if (message) {
          if (Array.isArray(message) && message.length > 0 && message[w].message_type == "TEXT" && (message[w].message == "NO_MESSAGE" || message[w].message == "<p>NO_MESSAGE</p>")) {
            w++;
            is_increased = true
            return selfInterval();
          }
        }
        $(".cbot-typing").remove();
        if (message) {
          if (Array.isArray(message) && message.length > 0 && message[w].message_type == "TEXT" && (message[w].message == "NO_MESSAGE" || message[w].message == "<p>NO_MESSAGE</p>")) {
            w++;
            is_increased = true
            var elCbotFormMessage = document.getElementById('cbot-form-message');
            // $(".cbot-illusion-placeholder").html(clients.placeholder_message);
            elCbotFormMessage.value = " ";
            elCbotFormMessage.removeAttribute('readonly');
            if (document.getElementById("cbot-send-button"))
              document.getElementById("cbot-send-button").removeAttribute('disabled');
            elCbotFormMessage.focus();
            return selfInterval();
          }
        }
        var bgNone = data_owl && isGenericComponent(message[w]) ? " cbot-bg-none" : "";
        var cbot_text_component = isTextComponent(message[w]) ? " cbot_text_component" : "";
        var cbot_msg_custom_generic = isGenericComponent(message[w]) ? " cbot-msg-custom-generic" : "";
        var feedbackButtons = "";
        if (w + 1 == message.length)
          feedbackButtons = generateFeedbackButtons(options);
        if (!message[w].from_file || (message[w].from_file && !message[w].auto_open)) {
          if (cbot_messages_sending_time && (message[w].message_type != "DONUT_COMPONENT" && message[w].message_type != "GENERIC_COMPONENT_V3" && message[w].message_type != "GENERIC_COMPONENT_V1")) {

            currentTime = new Date();
            hours = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
            minutes = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

            $('#cbot-chat').append('<li data-message-id="' + message[w].message_id + '" class="' + elemClass + '"><div class="cbot-flexible"><div class="cbot-msg' + bgNone + cbot_text_component + cbot_msg_custom_generic + '" style="' + bot_message_bubble_color + bot_message_text_color + '">' + generateComponentHTML(message[w], category, options) + feedbackButtons + `<div class="cbot-messages-sending-time">${hours}:${minutes}</div></div></div></li>`);
            afterAppend();
          } else {
            $('#cbot-chat').append('<li data-message-id="' + message[w].message_id + '" class="' + elemClass + '"><div class="cbot-flexible"><div class="cbot-msg' + bgNone + cbot_text_component + cbot_msg_custom_generic + '" style="' + bot_message_bubble_color + bot_message_text_color + '">' + generateComponentHTML(message[w], category, options) + feedbackButtons + '</div></div></li>');
            afterAppend();
          }

          if (message[w] && (message[w].message_type === "LIVE_CHAT" && message[w].chat_type == "agent")) {
            let live_chat_started_html = '<div class="cbot-livechat-started"><div class="cbot-agent-started-livechat"> <svg width="98" height="1" viewBox="0 0 98 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5H98" stroke="#DCDCDC"/></svg><svg width="22" height="22" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 13.75C10.9375 13.75 13.75 10.9375 13.75 7.5C13.75 4.0625 10.9375 1.25 7.5 1.25C4.0625 1.25 1.25 4.0625 1.25 7.5C1.25 10.9375 4.0625 13.75 7.5 13.75Z" stroke="#848484" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.84375 7.5002L6.6125 9.26895L10.1562 5.73145" stroke="#848484" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg><p class="cbot-livechat-started-text">Canlı destek başladı</p><svg width="98" height="1" viewBox="0 0 98 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5H98" stroke="#DCDCDC"/></svg></div>'
            $(live_chat_started_html).appendTo($('.cbot-subtitle').closest('#cbot-chat'));
          }
        } else {
          generateComponentHTML(message[w], category, options)
        }

        if (w < message.length)
          appendTypingIconToDialogBox("");

        if (!options.instantWrite)
          scrollChatScreen(100);

        var arrows = document.getElementsByClassName("cbot-arrow");
        if (arrows && arrows.length > 0) {
          for (var j = 0; j < arrows.length; j++) {
            arrows[j].onclick = slide;
          }
        }

        if (bottom_arrows_right && bottom_arrows_right.length > 0) {
          for (var i = 0; i < bottom_arrows_right.length; i++) {
            bottom_arrows_right[i].onclick = carousel_bottom_arrow_slide;
          }
        }
        if (bottom_arrows_left && bottom_arrows_left.length > 0) {
          for (var i = 0; i < bottom_arrows_left.length; i++) {
            bottom_arrows_left[i].onclick = carousel_bottom_arrow_slide;
          }
        }

        if (w == message.length) {
          var elCbotFormMessage = document.getElementById('cbot-form-message');
          $(".cbot-illusion-placeholder").html(clients.placeholder_message);
          $('#cbot-form-message').removeAttr('disabled');
          // elCbotFormMessage.value = " ";
          elCbotFormMessage.removeAttribute('readonly');
          if (document.getElementById("cbot-send-button"))
            document.getElementById("cbot-send-button").removeAttribute('disabled');
          elCbotFormMessage.focus();
          clearInterval(interval);
          next();
        }


      } else {
        clearInterval(interval);

        next();
      }
      if (!is_increased) w++;
      is_increased = false

      if (data_owl && $('.cbot-owl-carousel').owlCarousel)
        $('.cbot-owl-carousel').owlCarousel({
          loop: true,
          nav: true,
          items: 1,
          dots: true,
          margin: data_owl_margin ? parseInt(data_owl_margin) : 10,
          navText: ['<div class="cbot-arrow left"></div>', '<div class="cbot-arrow right cbot-stick-right"></div>'],
          stagePadding: 30
        });

      if (w === message.length) {
        $(".cbot-typing").remove();
        if (clients.send_survey_button_is_active && message[0] && message[0].message_type == "SURVEY_STAR_COMPONENT") {
          $('.cbot-send-survey-button').text(clients.send_survey_button);
          $('.cbot-send-button').css("display", "none");
          $('.cbot-send-survey-button').css("display", "block");
          $('#cbot-form-message').attr('disabled', 'disabled');
          $(".cbot-illusion-placeholder").html(clients.send_survey_placeholder_message);
        } else {
          $('#cbot-form-message').attr('disabled', false)
          $('#cbot-send-button').attr('disabled', false)
          $(".cbot-illusion-placeholder").html(clients.placeholder_message);
          $('#cbot-form-message').focus();
        }
      }
      return selfInterval;
    })(), options.instantWrite ? 1 : 500);

  }

  var arrows = document.getElementsByClassName("cbot-arrow");
  var bottom_arrows_right = document.getElementsByClassName("cbot-bottom-arrow-right");
  var bottom_arrows_left = document.getElementsByClassName("cbot-bottom-arrow-left");
  if (arrows && arrows.length > 0) {
    for (var i = 0; i < arrows.length; i++) {
      arrows[i].onclick = slide;
    }
  }
  if (bottom_arrows_right && bottom_arrows_right.length > 0) {
    for (var i = 0; i < bottom_arrows_right.length; i++) {
      bottom_arrows_right[i].onclick = carousel_bottom_arrow_slide;
    }
  }
  if (bottom_arrows_left && bottom_arrows_left.length > 0) {
    for (var i = 0; i < bottom_arrows_left.length; i++) {
      bottom_arrows_left[i].onclick = carousel_bottom_arrow_slide;
    }
  }
}

function carousel_bottom_arrow_slide() {
  let arrow = $(this);
  let arrow_right = arrow.siblings('.cbot-bottom-arrow-right');
  let arrow_left = arrow.siblings('.cbot-bottom-arrow-left');
  let indicators = arrow.siblings('.cbot-bottom-arrow-indicators');
  let wrapper = $(this).closest('.cbot-carousel-wrapper');
  let carousel = wrapper.children('.cbot-card-carousel');
  let carousel_count = carousel.children('.generic-template').length;
  let carousel_index;
  if (arrow[0].className == 'cbot-bottom-arrow-right') {
    direction = '-=260px';
  } else {
    direction = '+=260px';
  }
  if (!carousel.css("left") || carousel.css("left") == "auto") {
    carousel.css("left", 0);
  }
  let current_position = parseFloat(carousel.css('left'));
  if (current_position == 0) {
    carousel_index = 0;
  } else {
    carousel_index = current_position / 260 * -1;
  }
  if ((carousel_count - 1 <= carousel_index && direction == '-=260px') || (carousel_index == 0 && direction == '+=260px')) {
    // do not animate, you have reached the limits!
  } else {
    for (let index = 0; index < indicators.length; index++) {
      indicators[index].classList.remove('active');
    }
    if (direction == '-=260px') {
      if (indicators[carousel_index + 1]) {
        indicators[carousel_index + 1].classList.add('active');
      }
    } else {
      if (indicators[carousel_index - 1]) {
        indicators[carousel_index - 1].classList.add('active');
      }
    }
    arrow.css('pointer-events', 'none');
    arrow_left.css('pointer-events', 'none');
    arrow_right.css('pointer-events', 'none');
    carousel.animate({
      "left": direction
    }, 600, "swing", function () {
      arrow.css('pointer-events', 'unset');
      arrow_left.css('pointer-events', 'unset');
      arrow_right.css('pointer-events', 'unset');
    });
  }
  let activeIndex = indicators.filter(".active").index();

  if (activeIndex % 5 == 1) {
    let startIndex = activeIndex - 1;
    let endIndex = startIndex + 5;

    indicators.slice(startIndex, endIndex).css("display", "block");
    indicators.not(indicators.slice(startIndex, endIndex)).css("display", "none");
  } else if (activeIndex % 5 == 2) {
    let startIndex = activeIndex - 1;
    let endIndex = startIndex + 4;

    indicators.slice(startIndex, endIndex).css("display", "block");
    indicators.not(indicators.slice(startIndex, endIndex)).css("display", "none");
    indicators.eq(startIndex - 1).css("display", "block");
  } else if (activeIndex % 5 == 3) {
    let startIndex = activeIndex - 1;
    let endIndex = startIndex + 3;

    indicators.slice(startIndex, endIndex).css("display", "block");
    indicators.not(indicators.slice(startIndex, endIndex)).css("display", "none");
    indicators.eq(startIndex - 1).css("display", "block");
    indicators.eq(startIndex - 2).css("display", "block");
  } else if (activeIndex % 5 == 4) {
    let startIndex = activeIndex - 1;
    let endIndex = startIndex + 2;

    indicators.slice(startIndex, endIndex).css("display", "block");
    indicators.not(indicators.slice(startIndex, endIndex)).css("display", "none");
    indicators.eq(startIndex - 1).css("display", "block");
    indicators.eq(startIndex - 2).css("display", "block");
    indicators.eq(startIndex - 3).css("display", "block");
  } else if (activeIndex % 5 == 0) {
    let startIndex = activeIndex - 1;
    let endIndex = startIndex + 1;

    indicators.slice(startIndex, endIndex).css("display", "block");
    indicators.not(indicators.slice(startIndex, endIndex)).css("display", "none");
    indicators.eq(startIndex - 1).css("display", "block");
    indicators.eq(startIndex - 2).css("display", "block");
    indicators.eq(startIndex - 3).css("display", "block");
    indicators.eq(startIndex - 4).css("display", "block");
  }
}


function slide(event) {
  event.preventDefault();
  var el = event.target;
  var element = event.target;
  el.onclick = null;
  if (element.nextSibling) {

    while (element.nextSibling.className != "cbot-card-carousel")
      element = element.nextSibling;
    element = element.nextSibling;

    // console.log("SLIDE!", el.className.indexOf("left"));

    if (el.className.indexOf("left") >= 0) { // Sol oka tıklandı

      if (!$(element).css("left") || $(element).css("left") == "auto") {
        $(element).css("left", 0);
        // console.log("ATTR ATANDI");
      }

      // console.log("CARD: ", $(element).html());
      if (+$(element).css("left").replace("px", "") < 0) {
        $(element).siblings(".cbot-arrow.right").css("display", "block");
        $(element).animate({
          "left": "+=260px"
        }, 600, "swing", function () {
          el.onclick = slide;

          if (Math.abs(+$(element).css("left").replace("px", "")) == 0) {
            $(el).css("display", "none");
          } else {
            $(el).css("display", "block");
          }

        });
      } else {
        el.onclick = slide;

        // console.log("LEFT NOT WORK!", +$(element).css("left").replace("px",""));
      }

    } else { // Sağ oka tıklandı

      if (!$(element).css("left") || $(element).css("left") == "auto") {
        $(element).css("left", 0);
        // console.log("ATTR ATANDI");
      }

      if (Math.abs(+$(element).css("left").replace("px", "")) + 260 < $(element).width()) {
        $(element).siblings(".cbot-arrow.left").css("display", "block");
        $(element).animate({
          "left": "-=260px"
        }, 600, "swing", function () {
          el.onclick = slide;


          if (Math.abs(+$(element).css("left").replace("px", "")) + 260 >= $(element).width()) {
            $(el).css("display", "none");
          } else {
            $(el).css("display", "block");
          }

          var currentIndex = $(element).prop("data-currentIndex") || 0;
          $(element).prop("data-currentIndex", ++currentIndex);


          // console.log(">>>RIGHT", +$(element).css("left").replace("px",""), $(element).width());
        });
      } else {
        el.onclick = slide;
        // console.log("RIGHT NOT WORKING!", +$(element).css("left").replace("px",""), $(element).width());
      }

    }

  }
}

function addMessageToCache(data) {
  var messages = (localStorage[getDynamicLSName("messages")] && localStorage[getDynamicLSName("messages")] != "") ? JSON.parse(localStorage[getDynamicLSName("messages")]) : [];
  //if(!messages) messages = [];

  // console.log(messages);
  if (messages.length > 10) {
    messages.splice(0, 1);
    // console.log(messages.length);
  }

  messages.push(data);

  // localStorage['cbot-messages'] = "";
  localStorage[getDynamicLSName("messages")] = JSON.stringify(messages);
}


function fadeIn(el) {
  el.style.opacity = 0;
  var tick = function () {
    el.style.opacity = +el.style.opacity + 0.1;

    if (el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    } else {
      el.style.display = 'block';
    }
  };

  tick();
}

function fadeOut(el) {
  el.style.opacity = 1;
  var tick = function () {
    el.style.opacity = +el.style.opacity - 0.1;

    if (el.style.opacity > 0.2) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    } else {
      el.style.opacity = 0;
      el.style.display = 'none';
    }
  };

  tick();
}

function slideIn(el) {
  el.style.display = 'block';
  var i = 1;
  var tick = function () {
    i += 5;
    el.style.height = i + '%';

    if (i < 100) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}

function slideOut(el) {
  // el.style.width = '100%';
  var i = 100;
  var tick = function () {
    i -= 5;
    el.style.height = i + '%';

    if (i > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    } else {
      el.style.display = 'none';
    }
  };

  tick();
}


function generateFeedbackButtons(options) {
  if (options.unique_id && clients.feedback && clients.feedback.is_active)
    return '<div class="cbot-feedback-area cbot-feedback-id-' + options.unique_id + '">' +
      '<div class="cbot-feedback-status"></div>' +
      '<button class="cbot-feedback-vote-button cbot-vote-down-selectable"></button>' +
      '<button class="cbot-feedback-vote-button cbot-vote-up-selectable"></button>' +
      '<div class="cbot-clearfix"></div>' +
      '<div class="cbot-feedback-comment-area" style="display:none">' +
      '<textarea class="cbot-feedback-textarea" placeholder=""></textarea>' +
      '<div class="cbot-feedback-status-form"></div>' +
      '<button class="cbot-feedback-form-send"></button>' +
      '<div class="cbot-clearfix"></div>' +
      '</div>' +
      '</div>'
  return "";
}


function sendFeedbackPost(options, next) {

  var jsonData = {
    client: CLIENT,
    userId: cbotUserId,
    unique_id: options.unique_id,
    user_comment: options.user_comment,
    feedback_like: options.feedback_like
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && (this.status == 200 || this.status == 429)) {
      var json = JSON.parse(this.responseText);
      // console.log("XHR",json, typeof json == "object");
      next(json);
    } else if (this.readyState == 4) {
      // console.log("READY STATE", this.readyState);
      // console.log("STATUS", this.status);
      next();
    }
  }
  xhr.open("POST", rootAddress + "/" + CLIENT + "/savecomment", true);
  xhr.setRequestHeader("Accept", "application/json");
  // xhr.setRequestHeader("Accept-Encoding", "gzip");
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('CBOT-Token', "hztHxVUZ1xvs13t0bGwjtrgOxJFk11i1");
  xhr.setRequestHeader('CBOT-URL', location.href);

  var customheaders = clients.gateway_custom_headers || [];

  for (var i = 0; i < customheaders.length; i++) {
    var header = customheaders[i];
    xhr.setRequestHeader(header.key, header.value);
  }


  xhr.send(JSON.stringify(jsonData));
}

var uploadIndex = 1;

function isGenericComponent(component) {
  if (component && component.message_type == "GENERIC_COMPONENT" && component.elements && component.elements.length > 1)
    return true;
  return false;
}

function isTextComponent(component) {
  if (component && component.message_type == "TEXT")
    return true;
  if (component && typeof component == "string")
    return true;
  return false;
}

function locatePieChartsMidText() {
  let chartWidth = $('.cbot-chart-container').width()
  let chartHeight = $('.cbot-chart-container').height()
  let midWidth = $('.cbot-pie-chart-midtext').width()
  let midHeight = $('.cbot-pie-chart-midtext').height()
  let left = (chartWidth - midWidth) / 2 + 10 + 40
  let top = (chartHeight - midHeight) / 2 + 10 + 10
  $('.cbot-pie-chart-midtext').css("left", left + "px");
  $('.cbot-pie-chart-midtext').css("top", top + "px");
  $('.cbot-pie-chart-midtext').css("position", "absolute");
  $('.cbot-pie-chart-midtext').css("display", "block");
}

function createChart(chartid, chartdata, chartcolors, chartlabels, chartValue) {
  const ctx = $('#chart-' + chartid);

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: chartlabels,
      datasets: [{
        data: chartdata,
        backgroundColor: chartcolors,
        hoverOffset: 4
      }]
    },
    options: {
      cutout: 60,
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (tooltipItem, data) {
              var value = chartValue[tooltipItem.dataIndex];
              return value;
            },
          },
        },
      },
    },
  });
}

function generateComponentHTML(component, category, options) {
  if (!options) options = {};
  var html = "";
  var msg;
  category = "";
  // if (!category) category = "";
  // else category += " - ";
  if (!component.is_survey && $('#cbot-meet iframe').length == 0) closeMiniWeb();
  // console.log("COMPONENT: ", component);
  if (typeof component === "object") {
    if (component.message_type == "PIE_CHART_COMPONENT") {
      let chartid = Math.floor(Math.random() * 10000);
      html += '<div class="cbot-pie-chart-wrapper">'
      html += '<div class="cbot-chart-container">'
      html += '<div class="cbot-pie-chartjs">'
      html += '<canvas id="chart-' + chartid + '" class="cbot-canvas"></canvas>'
      html += '</div>'
      html += '<div class="cbot-pie-chart-midtext" style="display:none;">'
      html += '<div class="cbot-pie-chart-headtext">'
      html += component.headText || ""
      html += '</div>'
      html += '<div class="cbot-pie-chart-centertext">'
      html += component.centerText || ""
      html += '</div>'
      html += '</div>'
      html += '</div>'
      html += '</div>'
      html += '<div class="cbot-pie-chart-table-container">'
      html += '<table style="width:100%;">'
      html += '<tbody>'
      for (let index = 0; index < component.elements.length; index++) {
        const element = component.elements[index];
        html += '<tr class="cbot-pie-chart-tr">'
        html += '<td class="cbot-pie-chart-table-index">' + '<div class="cbot-pie-chart-table-index-card" style="background-color:' + element.color + '"></div>' + '</td>'
        html += '<td class="cbot-pie-chart-table-category">' + element.category + '</td>'
        html += '<td class="cbot-pie-chart-table-value">' + element.valueAsString + '</td>'
        html += '</tr>'
      }
      html += '</tbody>'
      html += '</table>'
      html += '</div>'

      setTimeout(() => {
        let chartdata = component.elements.map(x => x.valueAsNumber.replace(/\./g, '').replace(/\,/g, '.'))
        let chartcolors = component.elements.map(x => x.color);
        let chartlabels = component.elements.map(x => x.category);
        let chartvalue = component.elements.map(x => x.valueAsString);

        createChart(chartid, chartdata, chartcolors, chartlabels, chartvalue);
        setTimeout(() => {
          locatePieChartsMidText();
        }, 100);
      }, 100);
    } else if (component.message_type == "GENERIC_COMPONENT") {
      if (component.elements.length > 1) { // Birden fazla kart var!
        var elements = component.elements;
        html += '<div class="cbot-carousel-wrapper">';
        if (data_owl) {
          html += '<div class="cbot-owl-carousel">';
        }
        else {
          if (!component.bottom_arrows) {
            html += '<div class="cbot-arrow left" style="display: none;"></div>' +
              '<div class="cbot-arrow right"></div>' +
              '<div class="cbot-card-carousel" style="width:' + (elements.length * 260) + 'px; position: relative; display:flex">'
          } else {
            html += '<div class="cbot-card-carousel" style="width:' + (elements.length * 260) + 'px; position: relative; display:flex">'
          }
        }
        for (var i = 0; i < elements.length; i++) {
          msg = category + elements[i].title;
          options.button_template = elements[i].button_template;
          if (data_owl) {

            html += '<div class="item">';
            html += '<div class="cbot-component generic-template cbot-owl-item-box">';
          }
          else {
            html += '<div class="cbot-component generic-template" style="float:left; max-width:250px; margin-right:10px;">';
          }
          if (elements[i].image_url)
            html += '<div class="cbot-image"><img src="' + elements[i].image_url + '"></div>';

          if (elements[i].subtitle) {
            elements[i].subtitle = numberToString((elements[i] || {}).subtitle);
            sendUrlsToGA(elements[i].subtitle);
          }

          html += '<div class="cbot-generic-numarator">' + (i + 1) + '</div>' +
            '<div class="cbot-description" style="position: relative;">' +
            '<p class="cbot-title" style="' + bot_message_text_title_color + '">' + msg + '</p>' +
            '<p class="cbot-subtitle">' + elements[i].subtitle.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
          html += generateButtonsHTML(elements[i].buttons, options);

          if (data_owl) {
            html += "</div>";
          }
          html += "</div>";
        }
        html += '</div>';
        if (component.bottom_arrows) {
          html += '<div class="cbot-bottom-arrow-container">';
          html += '<div class="cbot-bottom-arrow-left"></div>';
          for (var i = 0; i < elements.length; i++) {
            if (i == 0) {
              html += '<div class="cbot-bottom-arrow-indicators active"></div>';
            } else {
              if (i >= 5) {
                html += '<div class="cbot-bottom-arrow-indicators" style="display:none;"></div>';
              } else {
                html += '<div class="cbot-bottom-arrow-indicators"></div>';
              }
            }
          }
          html += '<div class="cbot-bottom-arrow-right"></div>';
          html += '</div>';
        }

        html += '</div>';

      } else { // Sadece bir tane kart var!
        var element = component.elements[0];
        options.button_template = component.elements[0].button_template
        html += '<div class="cbot-component generic-template cbot-one-item">';

        if (element.image_url)
          html += '<div class="cbot-image"><img src="' + element.image_url + '"></div>';

        msg = category + element.title;

        if (element.subtitle) {
          element.subtitle = numberToString((element || {}).subtitle);
          sendUrlsToGA(element.subtitle);
        }

        html += '<div class="cbot-description">' +
          '<p class="cbot-title" style="' + bot_message_text_title_color + '">' + msg + '</p>' +
          '<p class="cbot-subtitle">' + element.subtitle.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
        html += generateButtonsHTML(element.buttons, options);
        html += "</div>";
      }
    } else if (component.message_type == "LIVE_CHAT") {
      if (component.elements.length > 1) { // Birden fazla kart var!
        var elements = component.elements;
        html += '<div class="cbot-arrow left"></div>' +
          '<div class="cbot-arrow right"></div>' +
          '<div class="cbot-card-carousel" style="width:' + (elements.length * 255) + 'px; position: relative;">';
        for (var i = 0; i < elements.length; i++) {
          options.button_template = elements[i].button_template
          if (elements[i].title == "") elements[i].title = answerisnotdefined_message || "Answer is not defined";
          msg = elements[i].title;
          html += '<div class="cbot-component generic-template" style="float:left; max-width:250px; margin-right:5px;">';
          if (elements[i].image_url)
            html += '<div class="cbot-image"><img src="' + elements[i].image_url + '"></div>';

          if (elements[i].subtitle) {
            elements[i].subtitle = numberToString((elements[i] || {}).subtitle);
            sendUrlsToGA(elements[i].subtitle);
          }

          html += '<div class="cbot-description">' +
            '<p class="cbot-title" style="' + bot_message_text_title_color + '">' + category + msg + '</p>' +
            '<p class="cbot-subtitle">' + elements[i].subtitle.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
          html += generateButtonsHTML(elements[i].buttons, options);
          html += "</div>";
        }

        html += '</div>';

      } else { // Sadece bir tane kart var!
        var element = component.elements[0];
        options.button_template = component.elements[0].button_template
        html += '<div class="cbot-component generic-template cbot-livechat-starting">';

        if (element.image_url)
          html += '<div class="cbot-image"><img src="' + element.image_url + '"></div>';
        // if (element.title == "") element.title = answerisnotdefined_message || "Answer is not defined";
        msg = element.title;

        if (element.subtitle) {
          element.subtitle = numberToString((element || {}).subtitle);
          sendUrlsToGA(element.subtitle);
        }

        html += '<div class="cbot-description">' +
          '<p class="cbot-title" style="' + bot_message_text_title_color + '">' + category + msg + '</p>' +
          '<p class="cbot-subtitle">' + element.subtitle.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
        html += generateButtonsHTML(element.buttons, options);
        html += "</div>";
        html += "</div>";
      }
    } else if (component.message_type == "IMAGE_COMPONENT") {

      var element = component.elements[0];
      options.button_template = component.elements[0].button_template

      if (component.auto_open && firstMessageSent && element.url && !options.instantWrite)
        openMiniWeb("image", element.url)
      html += '<div class="cbot-component generic-template">';

      if (element.url) {
        if (cbotIsMobile.any()) {
          html += '<div class="cbot-tooltip" style="opacity: 1; z-index: 1;"><div onclick="cbotModalImage(\'' + (element.url || "") + '\')"><div class="cbot-image" style="margin-bottom: 0px !important;"><img src="' + element.url + '"><span class="cbot-tooltiptext">' + (botlanguage == "en" ? "Zoom in" : "Büyüt") + '</span></div></div>';
        }
        else {
          html += '<div class="cbot-tooltip" style="opacity: 1; z-index: 1;"><div onclick="openMiniWeb(\'image\',\'' + (element.url || "") + '\')"><div class="cbot-image" style="margin-bottom: 0px !important;"><img src="' + element.url + '"><span class="cbot-tooltiptext">' + (botlanguage == "en" ? "Zoom in" : "Büyüt") + '</span></div></div>';
        }
      }
      html += generateButtonsHTML(element.buttons, options);
      html += "</div>";

    } else if (component.message_type == "VIDEO_COMPONENT") {
      var element = component.elements[0];
      options.button_template = component.elements[0].button_template
      if (component.auto_open && firstMessageSent && element.url && !options.instantWrite)
        openMiniWeb("video", element.url)
      html += '<div class="cbot-component generic-template">';

      if (element.url) {
        if (element.url.includes('youtube'))
          html += '<div class="cbot-image" style="margin-bottom: 0px !important; max-height:200px"><iframe width="200" height="200" src="' + element.url + '" frameborder="0"></iframe></div>';
        else if (element.url.includes("facebook")) {
          html += `<div class="cbot-image" 
                    style="margin-bottom: 0px !important; max-height:200px">
                    <iframe 
                    src="https://www.facebook.com/plugins/video.php?height=314&href=${element.url}&show_text=false&width=560&t=0" 
                    width="200" 
                    height="200" 
                    style="border:none;overflow:hidden"
                    scrolling="no" 
                    frameborder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>`
        }
        else
          html += '<div class="cbot-image" style="margin-bottom: 0px !important; max-height:200px"><video width="200" height="200" src="' + element.url + '" frameborder="0"></video></div>';
      }
      html += generateButtonsHTML([{ type: "mini_web", data_type: "video", title: "Mini-web'te görüntüle", url: element.url }].concat(element.buttons || []), options);
      html += "</div>";

    } else if (component.message_type == "FILE_COMPONENT") {
      html += '<div class="cbot-component generic-template">' +
        '<a style="cursor:pointer;" href="' + component.url + '" target="_blank">' +
        '<div style="float:left">' +
        '<img alt="file icon" title="file icon" src="' + staticAddress + '/img/cbot-file-icon.png" style="width:16px; box-shadow:none;">' +
        '</div>' +
        '<div style="float:left; padding: 0 5px; color:#fff; max-width:200px;">' + component.filename || component.description + '</div>' +
        '<div style="float:right" style="pointer:cursor;">' +

        '<img src="' + staticAddress + '/img/cbot-download-icon.png" style="width:16px; box-shadow:none;" />' +
        '</div>' +
        '</a>' +
        '</div>';
      // html += '<div class="cbot-image"><img style="cursor: pointer;" src="' + staticAddress + '/img/location.png"></div>';
      // if (element.title == "") element.title = answerisnotdefined_message || "Answer is not defined";


      html += '<div class="cbot-description">';
      if (component.name)
        html += '<p class="cbot-title" style="' + bot_message_text_title_color + '">' + category + "" + (component.name || "") + '</p>';
      if (component.address)
        html += '<p class="cbot-subtitle">' + (component.address || "").replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
      // html += generateButtonsHTML(element.buttons);
      html += "</a></div>";
    } else if (component.message_type == "LOCATION_COMPONENT") {
      if (component.auto_open && firstMessageSent && !options.instantWrite)
        openMiniWeb("location", null, JSON.stringify({ lat: component.lat, lng: component.lng }))

      html += '<div class="cbot-component generic-template"><a href="https://www.google.com.tr/maps/place/' + component.lat + ',' + component.lng + '" target="_blank">';

      html += '<div class="cbot-image"><img alt="location icon" title="location icon" style="cursor: pointer;" src="https://static-maps.yandex.ru/1.x/?lang=tr-TR&ll=' + component.lng + ',' + component.lat + '&z=15&l=map&size=300,200&pt=' + component.lng + ',' + component.lat + ',pmgrm"></div>';
      // html += '<div class="cbot-image"><img style="cursor: pointer;" src="' + staticAddress + '/img/location.png"></div>';
      // if (element.title == "") element.title = answerisnotdefined_message || "Answer is not defined";

      if (component.address) {
        component.address = numberToString((component || {}).address);
        sendUrlsToGA(component.address);
      }

      html += '<div class="cbot-description">';
      if (component.name)
        html += '<p class="cbot-title" style="' + bot_message_text_title_color + '">' + category + "" + (component.name || "") + '</p>';
      if (component.address)
        html += '<p class="cbot-subtitle">' + (component.address || "").replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
      // html += generateButtonsHTML(element.buttons);
      html += "</a>";
      html += generateButtonsHTML([
        { type: "mini_web", data_type: "location", title: "Mini-map'te Görüntüle", url: 'https://www.google.com.tr/maps/place/' + component.lat + ',' + component.lng + '', lng: component.lng, lat: component.lat },
        { type: "web_url", title: "Haritada Görüntüle", url: 'https://www.google.com.tr/maps/place/' + component.lat + ',' + component.lng + '' }], options);
      html += "</div>";
    } else if (component.message_type == "LIST_COMPONENT") {
      var elements = component.elements;
      options.button_template = component.button_template
      html += '<div class="cbot-component list-template">';

      for (var i = 0; i < elements.length; i++) {

        if (i == 0)
          html += '<div class="cbot-list-item" style="border-top:none; margin-top:-10px;">';
        else
          html += '<div class="cbot-list-item">';

        if (elements[i].image_url) {
          html += '<div class="cbot-list-item-description">';
          html += '<div class="cbot-list-item-image"><img src="' + elements[i].image_url + '"></div>';
        } else {
          html += '<div class="cbot-list-item-description" style="width:100%;">';
        }

        msg = category + elements[i].title;

        if (elements[i].subtitle) {
          elements[i].subtitle = numberToString((elements[i] || {}).subtitle)
          sendUrlsToGA(elements[i].subtitle);
        }

        elements[i].subtitle = (elements[i].subtitle || "").replace(/<p>|<\/p>/g, "")

        html += '<p class="cbot-list-item-title">' + msg + '</p>' +
          '<div class="cbot-list-item-text-wrap"><p class="cbot-list-item-text">' + elements[i].subtitle.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
        var buttons = elements[i].buttons;


        // html += '<div class="cbot-buttons">'
        if (elements[i].button_template == "SUGGESTION") {

          html += '<div class="cbot-suggestion-button-slider">'
        }
        for (var j = 0; buttons && j < buttons.length; j++) {
          triple_button_css = "";
          triple_button_class = "";
          suggestion_button_style = "";
          text_button_class = "";

          if (elements[i].button_template == "TEXT BUTTON") {
            text_button_class = " cbot-text-button-class";
          }
          if (elements[i].button_template == "TRIPLE") {

            triple_button_class = " cbot-triple-button-class ";
            if (j == 1) {
              triple_button_css = "; width: calc(50% - 1px); margin-right: 1px; margin-left:0;";
            }
            if (j == 2) {
              triple_button_css = "; width: calc(50% - 1px); margin-left: 1px; margin-right:0;";
            }
          }
          if (elements[i].button_template == "SUGGESTION") {
            suggestion_button_style = "; width: initial; padding-left: 5px; padding-right: 5px; margin-right: 5px; display: inline-block; float: initial;";
          }
          if (buttons[j].type == "web_url") {
            if (firstMessageSent && buttons[j].auto_open && !options.instantWrite)
              openMiniWeb("web_url", buttons[j].url);
            // var target = getUrlTarget(buttons[j].url, CHANNEL);
            // html += '<a ontouchstart="" href="' + buttons[j].url + '" target="' + target + '" class="cbot-list-item-button' + triple_button_class + text_button_class + '" style="' + suggestion_button_style + triple_button_css + '" onclick="clickTheURLs(this)">' + buttons[j].title + '</a>';
            html += renderPostMessageButton(buttons[j].url, buttons[j].title, component.message_type);
          } else if (buttons[j].type == "phone_number") {
            html += '<a ontouchstart="" href="tel:' + (buttons[j].payload || buttons[j].phone_number) + '"class="cbot-list-item-button" style="' + suggestion_button_style + triple_button_css + '" onclick="clickTheURLs(this)">' + buttons[j].title + '</a>';
          } else if (buttons[j].type == "account_link") {
            html += '<div ontouchstart="" class="cbot-button cbot-list-item-button' + triple_button_class + text_button_class + '" style="' + suggestion_button_style + triple_button_css + '" onclick="waitForLogin(); popupwindow(\'' + (buttons[j].web_url || buttons[j].url || "") + '\', \'\', 800, 600)">' + (buttons[j].title || "Giriş için Tıklayın") + '</div>';
            // waitForLogin();
          } else if (buttons[j].type == "location") {
            html += '<button ontouchstart="" class="cbot-button cbot-list-item-button cbot-location' + triple_button_class + text_button_class + '" style="' + suggestion_button_style + triple_button_css + '" data-onclick="shareLocation()">' + buttons[j].title + '</button>';
          } else if (buttons[j].type == "file_download") {
            html += '<a ontouchstart="" href="' + buttons[j].url + '" target="_blank" class="cbot-list-item-button' + triple_button_class + text_button_class + '" style="' + suggestion_button_style + triple_button_css + '" onclick="clickTheURLs(this)">' + buttons[j].title + '</a>';
          } else if (buttons[j].type == "file_upload") {
            html += "<input class='cbot-attachment-file-input' id='cbot-attachment-file-input-" + uploadIndex + "' accept='" + buttons[j].mimetypes.map(function (m) { return m.mimetype }).join(",") + "' type='file' hidden/>" +
              '<button ontouchstart="" class="cbot-button cbot-list-item-button fileupload' + triple_button_class + text_button_class + '" style="' + suggestion_button_style + triple_button_css + '" data-payload="' + uploadIndex + '">' + buttons[j].title + '</button>';
            uploadIndex++;
          } else {
            html += '<button ontouchstart="" class="cbot-button cbot-list-item-button postback' + triple_button_class + text_button_class + '" style="' + suggestion_button_style + triple_button_css + '" data-payload="' + (buttons[j].payload ? buttons[j].payload : buttons[j].title) + '" data-full-action=\'' + JSON.stringify(buttons[j] || {}) + '\'>' + buttons[j].title + '</button>';
          }
        }

        if (options.button_template == "SUGGESTION") {
          html += '</div>'
        }

        // html += '</div>'

        html += '</div><div style="clear:both;"></div></div>';
        // html += generateButtonsHTML(elements[i].buttons);
      }

      html += '</div>';
    } else if (component.message_type == "COMBOBOX_COMPONENT") {

      html += '<span>' + component.message + '</span>';
      html += ' <div class="cbot-dropdown">';
      html += '<input type="text" placeholder="Arama.." class="cbot-dropdown-input">'
      html += '<div id="myDropdown" class="cbot-dropdown-content">'
      component.combobox_items.forEach(function (item) {

        html += '<button type="button" class="cbot-combobox" data-payload="' + item + '">' + item + '</button>'

      })

      html += ' </div> </div> '


    } else if (component.message_type == "BUTTON_COMPONENT") {

      var buttons = component.buttons || [];

      options.button_template = component.button_template
      if (component.from_file) {
        if (!Array.isArray(component.buttons)) component.buttons = [];
        buttons = [{
          type: "mini_web", data_type: "html", title: "Mini-web'te görüntüle", html: b64encode(component.message)
        }].concat(buttons)
        if (firstMessageSent && component.auto_open && !options.instantWrite)
          openMiniWeb("html", null, JSON.stringify({ html: b64encode(component.message) }))
      }

      sendUrlsToGA(component.message);

      if (!component.auto_open) {
        html += '<div class="cbot-component generic-template button-template"><div class="cbot-description"><p class="cbot-subtitle">' + component.message + '</p></div>';
        if (component.is_survey) {
          html += '<div class="cbot-survey-yes-no">' + generateButtonsHTML(buttons, options) + '</div>';
        } else {
          html += generateButtonsHTML(buttons, options);
        }
      }
    } else if (component.message_type == "TRANSACTION_COMPONENT") {

      html += '<div class="cbot-component generic-template"><div class="cbot-description">' + component.message + "</div>";

      html += '<hr class="cbot-dashed-hr" />';
      var elements = component.elements || [];
      for (var i = 0; i < elements.length; i++) {
        var subtitle = (elements[i].subtitle || "").replace(/\n/g, "<br />");
        html += '<div class="cbot-txn-title">' + elements[i].title + '</div>';
        html += '<div class="cbot-txn-subtitle">' + subtitle + '</div>';
        if (elements.length != i + 1) {

          html += '<hr class="cbot-solid-hr" />';
        }
      }
      html += generateButtonsHTML(component.buttons, options);
      html += '</div>';

    } else if (component.message_type == "LIST_NEW_COMPONENT") {
      html += '<div class="cbot-component generic-template"><div class="cbot-description">' + component.message + "</div>";

      html += '<hr class="cbot-dashed-hr" />';
      var elements = component.elements || [];
      for (var i = 0; i < elements.length; i++) {
        var subtitle = (elements[i].subtitle || "").replace(/\n/g, "<br />");
        html += '<div class="cbot-list-new-container">'
        html += '<div style="display:block;float:left">'
        html += '<div class="cbot-list-new-img" style="background-image:url(.' + elements[i].image_url + ')"></div>';
        html += "</div>"

        html += '<div style="display:block;float:left;width:calc(100% - 50px)">'
        html += '<div class="cbot-list-new-title">' + elements[i].title + '</div>';
        html += '<div class="cbot-list-new-subtitle">' + subtitle + '</div>';
        html += "</div>"
        html += '<div style="clear:both"></div>'
        html += "</div>"
        if (elements.length != i + 1) {

        }
        html += '<hr class="cbot-dashed-hr" />';
      }
      // html += '<a href="https://cbot.ai" target="_blank" style="display:block; margin: 0 auto;text-align:center;padding:5px 0;cursor:pointer;color: #2599fc;font-family: "Proxima";font-size: 14px;font-weight: 400;line-height: 15px;"> Tümünü Gör</a>'
      // html += generateButtonsHTML(component.buttons, options.instantWrite);
      html += '</div>';

    } else if (component.message_type == "CURRENCY_COMPONENT") {

      html += '<div class="cbot-component generic-template"><div class="cbot-description"><p class="cbot-subtitle">' + component.message + '</p></div>';
      html += ""

    } else if (component.message_type == "PREVIEW_COMPONENT") {
      var element = component.elements[0];
      return category + (element.message || "").replace(/(\n|\\n)/g, "<br/>");

    } else if (component.message_type == "SURVEY_STAR_COMPONENT") {

      // sendUrlsToGA(component.message);


      html += '<p>' + component.message + '</p>';
      html += '      <div class="cbot-rating-group">';
      html += '      <label class="cbot-rating-label postback" data-payload="0" for="cbot-rating-' + (++ratingSelector) + '" style="display: none;">';
      html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
      html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="0" type="radio" style="display: none;" checked>';
      html += '      <label class="cbot-rating-label postback" data-payload="1" for="cbot-rating-' + (++ratingSelector) + '">';
      html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
      html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="1" type="radio">';
      html += '      <label class="cbot-rating-label postback" data-payload="2" for="cbot-rating-' + (++ratingSelector) + '">';
      html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
      html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="2" type="radio">';
      html += '      <label class="cbot-rating-label postback" data-payload="3" for="cbot-rating-' + (++ratingSelector) + '">';
      html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
      html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="3" type="radio">';
      html += '      <label class="cbot-rating-label postback" data-payload="4" for="cbot-rating-' + (++ratingSelector) + '">';
      html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
      html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="4" type="radio">';
      html += '      <label class="cbot-rating-label postback" data-payload="5" for="cbot-rating-' + (++ratingSelector) + '">';
      html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
      html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="5" type="radio">';
      if (component.type == "1-10") {

        html += '      <label class="cbot-rating-label postback" data-payload="6" for="cbot-rating-' + (++ratingSelector) + '">';
        html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
        html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="6" type="radio">';
        html += '      <label class="cbot-rating-label postback" data-payload="7" for="cbot-rating-' + (++ratingSelector) + '">';
        html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
        html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="7" type="radio">';
        html += '      <label class="cbot-rating-label postback" data-payload="8" for="cbot-rating-' + (++ratingSelector) + '">';
        html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
        html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="8" type="radio">';
        html += '      <label class="cbot-rating-label postback" data-payload="9" for="cbot-rating-' + (++ratingSelector) + '">';
        html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
        html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="9" type="radio">';
        html += '      <label class="cbot-rating-label postback" data-payload="10" for="cbot-rating-' + (++ratingSelector) + '">';
        html += '              <i class="cbot-rating-star cbot-icon-star"></i></label>';
        html += '      <input class="cbot-rating-input" name="rating' + (ratingGroup) + '" id="cbot-rating-' + (ratingSelector) + '" value="10" type="radio">';
      }
      ratingGroup++;
      html += '</div>';
    }
    else if (component.message_type == "SURVEY_COLORFUL_COMPONENT") {



      html += '<p>' + component.message + '</p>';
      html += '<div class="cbot-colorful-radio-main-container"> '
      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-0">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-0 postback" data-payload="0">0</span>';
      html += '</label> ';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-1">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-1 postback" data-payload="1">1</span>';
      html += '</label>';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-2">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-2 postback" data-payload="2">2</span>';
      html += '</label>';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-3">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-3 postback" data-payload="3">3</span>';
      html += '</label>';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-4">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-4 postback" data-payload="4">4</span>';
      html += '</label>';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-5">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-5 postback" data-payload="5">5</span>';
      html += '</label>';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-6">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-6 postback" data-payload="6">6</span>';
      html += '</label>';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-7">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-7 postback" data-payload="7">7</span>';
      html += '</label>';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-8">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-8 postback" data-payload="8">8</span>';
      html += '</label>';

      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-9">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-9 postback" data-payload="9">9</span>';
      html += '</label>';


      html += '<label class="cbot-colorful-radio-container cbot-colorful-radio-container-styling-10">';
      html += '    <input type="radio" name="radio">';
      html += '    <span class="cbot-colorful-radio-span cbot-colorful-radio-span-styling-10 postback" data-payload="10">10</span>';
      html += '</label>';




      html += '   </div>';
      html += '<div style="clear:both"></div>';

    } else if (component.message_type == "TEXT") {
      if (options.survey_response == true) {
        return '<span class="survey-response" width>' + category + component.message + '</span>';
      } else {
        return '<span width>' + category + component.message + '</span>';
      }
    } else if (component.message && component.message.quick_replies) {
      msg = category + component.message.text;
      html += '<div class="cbot-component generic-template"><div class="cbot-description"><p class="cbot-subtitle">' + msg + '</p></div>';
      html += generateButtonsHTML(component.message.quick_replies, options);
    } else if (component.message && component.message.attachment.type === "template") { // Mesaj tipi template ise
      msg = category + component.message.attachment.payload.text;
      if (component.message.attachment.payload.template_type === "button") {

        sendUrlsToGA(msg);

        html += '<div class="cbot-component generic-template"><div class="cbot-description"><p class="cbot-subtitle">' + msg + '</p></div>';
        html += generateButtonsHTML(component.message.attachment.payload.buttons, options);
      } else if (component.message.attachment.payload.template_type === "generic") {
        if (component.message.attachment.payload.elements.length > 1) { // Birden fazla kart var!
          var elements = component.message.attachment.payload.elements;
          html += '<div class="cbot-arrow left"></div>' +
            '<div class="cbot-arrow right"></div>' +
            '<div class="cbot-card-carousel" style="width:' + (elements.length * 260) + 'px; position: relative;">';
          for (var i = 0; i < elements.length; i++) {
            msg = category + elements[i].title;
            html += '<div class="cbot-component generic-template" style="float:left; max-width:250px; margin-right:10px;">';
            if (elements[i].image_url)
              html += '<div class="cbot-image"><img src="' + elements[i].image_url + '"></div>';

            if (elements[i].subtitle) {
              elements[i].subtitle = numberToString((elements[i] || {}).subtitle)
              sendUrlsToGA(elements[i].subtitle);
            }

            html += '<div class="cbot-description">' +
              '<p class="cbot-title">' + msg + '</p>' +
              '<p class="cbot-subtitle">' + elements[i].subtitle.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
            html += generateButtonsHTML(elements[i].buttons, options);
            html += "</div>";
          }

          html += '</div>';

        } else { // Sadece bir tane kart var!
          var element = component.message.attachment.payload.elements[0];
          html += '<div class="cbot-component generic-template">';

          if (element.image_url)
            html += '<div class="cbot-image"><img src="' + element.image_url + '"></div>';

          msg = category + element.title;

          if (element.subtitle) {

            element.subtitle = numberToString((element || {}).subtitle)
            sendUrlsToGA(element.subtitle);
          }

          html += '<div class="cbot-description">' +
            '<p class="cbot-title">' + msg + '</p>' +
            '<p class="cbot-subtitle">' + element.subtitle.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
          html += generateButtonsHTML(element.buttons, options);
          html += "</div>";
        }
      } else if (component.message.attachment.payload.template_type === "list") {
        var elements = component.message.attachment.payload.elements;
        html += '<div class="cbot-component list-template">';
        for (var i = 0; i < elements.length; i++) {
          if (i == 0)
            html += '<div class="cbot-list-item" style="border-top:none; margin-top:-10px;">';
          else
            html += '<div class="cbot-list-item">';

          if (elements[i].image_url) {
            html += '<div class="cbot-list-item-image"><img src="' + elements[i].image_url + '"></div>';
            html += '<div class="cbot-list-item-description">';
          } else {
            html += '<div class="cbot-list-item-description" style="width:100%;">';
          }

          msg = category + elements[i].title;

          if (elements[i].subtitle) {
            elements[i].subtitle = numberToString((elements[i] || {}).subtitle)
            sendUrlsToGA(elements[i].subtitle);
          }

          html += '<p class="cbot-list-item-title">' + msg + '</p>' +
            '<div class="cbot-list-item-text-wrap"><p class="cbot-list-item-text">' + elements[i].subtitle.replace(/(\n|\\n)/g, "<br/>") + '</p></div>';
          var buttons = elements[i].buttons;
          for (var j = 0; buttons && j < buttons.length; j++) {
            if (buttons[j].type == "web_url") {
              // var target = getUrlTarget(buttons[j].url, CHANNEL);
              // html += '<a href="' + buttons[j].url + '" target="' + target + '" class="cbot-list-item-button" onclick="clickTheURLs(this)">' + buttons[j].title + '</a>';
              html += renderPostMessageButton(buttons[j].url, buttons[j].title, component.message.attachment.payload.template_type);
            } else if (buttons[j].type == "phone_number") {
              html += '<a href="tel:' + (buttons[j].payload || buttons[j].phone_number) + '" target="_blank" class="cbot-list-item-button" onclick="clickTheURLs(this)">' + buttons[j].title + '</a>';
            } else if (buttons[j].type == "file_download") {
              html += '<a href="' + buttons[j].url + '" target="_blank" class="cbot-list-item-button" onclick="clickTheURLs(this)">' + buttons[j].title + '</a>';
            } else if (buttons[j].type == "file_upload") {
              html += "<input class='cbot-attachment-file-input' id='cbot-attachment-file-input-" + uploadIndex + "' accept='" + buttons[j].mimetypes.map(function (m) { return m.mimetype }).join(",") + "' type='file' hidden/>" +
                '<button class="cbot-button cbot-list-item-button fileupload" data-payload="' + uploadIndex + '">' + buttons[j].title + '</button>';
              uploadIndex++;
            } else {
              html += '<div class="cbot-button cbot-list-item-button postback">' + buttons[j].title + '</div>';
            }
          }
          html += '</div><div style="clear:both;"></div></div>';
          // html += generateButtonsHTML(elements[i].buttons);
        }

        html += '</div>';
      }
    } else {
      // TODO: Diğer yapılar buraya!
    }
    return html;
  }

  sendUrlsToGA(component);

  return category + (component || "").replace(/(\n|\\n)/g, "<br/>");
}

function appendTypingIconToDialogBox(value) {
  // var e = document.getElementById("cbot-chat");
  // e.innerHTML += '<li class="cbot-other cbot-typing"><div class="cbot-msg"><div class="cbot-typing-loader"></div></div></li>', e.scrollTop = 5e6
  if (value != "" && value != undefined) {
    if (!botlanguage || botlanguage == "tr") {
      // $('#cbot-form-message').attr('disabled', 'disabled');
      $("#cbot-chat").append('<li class="cbot-other cbot-typing ' + (isLive ? "cbot-typing-agent" : "") + '"><div class="cbot-msg" style="height: 30px; border-bottom-left-radius: 0; border-top-left-radius: 15px;' + bot_message_bubble_color + '"><p class="cbot-typing-text">' + value + ' yazıyor </p><div class="cbot-typing-loader"></div></div></li>');
      afterAppend();
    } else {
      // $('#cbot-form-message').attr('disabled', 'disabled');
      $("#cbot-chat").append('<li class="cbot-other cbot-typing ' + (isLive ? "cbot-typing-agent" : "") + '"><div class="cbot-msg" style="height: 30px; border-bottom-left-radius: 0; border-top-left-radius: 15px;' + bot_message_bubble_color + '"><p class="cbot-typing-text">' + value + ' is typing </p><div class="cbot-typing-loader"></div></div></li>');
      afterAppend();
    }
  }
  else {
    if (!isLive) $('#cbot-form-message').attr('disabled', 'disabled');
    $("#cbot-chat").append('<li class="cbot-other cbot-typing ' + (isLive ? "cbot-typing-agent" : "") + '"><div class="cbot-msg" style="height: 20px; border-bottom-left-radius: 0; border-top-left-radius: 15px;' + bot_message_bubble_color + '"><div class="cbot-typing-loader"></div></div></li>');
    afterAppend();
  }
  if (clients.chat_avatar_activation && clients.chat_agent_avatar && isLive) {
    let custom_cbot_other_icon_agent = $(`<style nonce="8IBTHwOdqNKAWeKl7plt8g==">.cbot-typing-agent:before { content: "";width: 35px;height: 35px;position: absolute;left: 16px;top: 0;border: 1px solid #DCDCDC;border-radius: 24px;display: flex;justify-content: center;align-items: center;background-image: url(${clients.chat_agent_avatar});background-repeat: no-repeat;background-position-x: center;background-position-y: center;}</style>`);
    $('head').append(custom_cbot_other_icon_agent);
    afterAppend();
  }
  // console.log("SCROLL 8");
  scrollChatScreen(100);
}

var cbotModal;
var cbotModalImg;

function cbotModalImage(url) {
  cbotModal.style.display = "block";
  cbotModalImg.src = url;
}

function isExitSurveyExists() {
  return !showedSurvey && exitSurvey;
}

function showExitSurvey() {
  if (isExitSurveyExists()) {

    // if (LIVE_CHAT && isLive) {
    //   closeLivechat(true);
    //   return true;
    // }

    surveyTrigger(exitSurvey, cbotUserId, true);

    return true;
  }

  return false;
}

var surveyRedirectedIntentId = null;

function handleExitSurveyAnswer(category, hasSurveyFeedback, redirectedIntentId, conversationStep) {
  if (category == (exitSurvey || {}).id || category == surveyRedirectedIntentId) {

    if (redirectedIntentId) surveyRedirectedIntentId = redirectedIntentId;

    if (!hasSurveyFeedback && !redirectedIntentId && !conversationStep) {
      if (clients.disable_user_chat_input) {
        disableUserMessageArea(clients.disable_user_chat_input_message);
        surveyRedirectedIntentId = null;

        return true;
      }

    }


    // $("#cbot-close-icon-new").click();
    // reset();
    return false;
  }

  return false;
}



function surveyTrigger(survey, cbotUserId, is_live_survey = false) {
  clearSurveyTimeout();
  // console.log("surveyTrigger", survey);


  if (!showedSurvey && survey) {
    hasSurveyShowAsPopUp = survey.show_as_popup;
    surveyTimeout = setTimeout(function () {
      // console.log("TIMEOUT", survey);
      var comp = {};
      if (survey.show_type == "STAR")
        comp = { message_type: "SURVEY_STAR_COMPONENT", type: survey.type, message: survey.question, buttons: [] };
      else if (survey.show_type == "0-10Colorful")
        comp = { message_type: "SURVEY_COLORFUL_COMPONENT", type: survey.type, message: survey.question, buttons: [] };
      else {
        comp = { message_type: "BUTTON_COMPONENT", message: survey.question, buttons: [] };
        for (var i = 0; i < survey.buttons.length; i++) {
          comp.buttons.push({
            type: "postback",
            title: survey.buttons[i],
            payload: survey.buttons[i]
          })
        }
      }
      if (!is_live_survey && isLive) {
        return;
      }
      if (survey.show_as_popup && !isWidgetOpen)
        starAnketShow(survey);

      comp.is_survey = true;

      appendMessageToDialogBox(comp, "cbot-other", "SURVEY", { notification: survey.question }, function () {
        setClickEventToInteractiveButtons(cbotUserId);
        /* ANIMATION RATING */
        // var latest = $(".cbot-rating-group").eq(-1) || [];
        // if (latest.length > 0) {
        //     var items = $(latest).find(".cbot-rating-input");
        //     for (var i = 1; i <= items.length; i++) {
        //         var item = items[i];
        //         setTimeout(function () {
        //             (item || {}).checked = true;
        //         }, i * 100)
        //         if (i == items.length) {
        //             setTimeout(function() {
        //                 items.checked = false;
        //                 items[0].checked = true;
        //             }, i * 100);
        //         }
        //     }
        // }
      });
      // if (!survey.survey_from_agent)
      showedSurvey = survey;
      sentSurveyFeedback = false;
      sendCustomPostMessage("CBOT_SURVEY_SENT_TO_USER", survey);
    }, survey.delay * 1000);
  }
}
function clearSurveyTimeout() {
  if (surveyTimeout) {
    clearTimeout(surveyTimeout);
    surveyTimeout = null;
  }
  // showedSurvey = null;
}
function addSurveyRequestData(jsonData) {
  if (showedSurvey) {
    if (!sentSurvey) { // Anket gönderilmiş ve cevaplanmamışsa, kullanıcı cevabı önce
      jsonData.is_survey = true;
      jsonData.survey_id = showedSurvey.id;
      jsonData.agent_id = agentId || showedSurvey.agent_id;
      sentSurvey = true;
      // agentId = null;
    } else if (hasSurveyFeedback && sentSurvey && !sentSurveyFeedback) { // The survey is sent and answered. But feedback doesn't send.
      sentSurveyFeedback = true;
      jsonData.is_survey_feedback = true;
      jsonData.survey_id = showedSurvey.id;
      jsonData.agent_id = agentId || showedSurvey.agent_id;
    }
  }

  return jsonData;
}

function reset(clear_dialog) {
  cbotClearUserDialog(clear_dialog);
  welcomeMessageSent = true;
  firstLoad = false;
  showedSurvey = null;
  exitSurvey = null;
  sentSurvey = false;
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function hasAttributeOnScript(name) {
  return document.getElementById("cbot-widget-script").hasAttribute(name);
}

function getParameterFromScript(name) {
  var script = document.getElementById("cbot-widget-script");
  if (script && script.getAttribute(name)) {
    return script.getAttribute(name);
  }

  var hiddenInput = document.getElementById("cbot-" + name);
  if (hiddenInput) {
    return hiddenInput.value || "";
  }

  return "";

}

function generateButtonsHTML(buttons, options) {

  if (!options) options = {};
  var html = '<div class="cbot-buttons">';
  if (options.button_template == "SUGGESTION") {

    html += '<div class="cbot-suggestion-button-slider">'
  }
  for (var i = 0; buttons && i < buttons.length; i++) {

    triple_button_css = "";
    triple_button_class = "";
    suggestion_button_style = "";
    text_button_class = "";

    if (options.button_template == "TEXT BUTTON") {
      text_button_class = " cbot-text-button-class";
    }

    buttons[i].theme = buttons[i].theme || "";
    if (options.button_template == "TRIPLE") {

      triple_button_class = " cbot-triple-button-class";
      if (i == 1) {
        triple_button_css = "; width: calc(50% - 1px); margin-right: 1px; margin-left:0;";
      }
      if (i == 2) {
        triple_button_css = "; width: calc(50% - 1px); margin-left: 1px; margin-right:0;";
      }
    }
    if (options.button_template == "SUGGESTION") {
      suggestion_button_style = "; width: initial; float: initial; padding-left: 5px; padding-right: 5px; margin-right: 5px;";
    }
    if (buttons[i].type == "web_url") {
      if (buttons[i].auto_open && firstMessageSent && !options.instantWrite)
        openMiniWeb("web_url", buttons[i].url);
      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': buttons[i].title,
        'event_label': buttons[i].url
      })
      // var target = getUrlTarget(buttons[i].url, CHANNEL);
      // html += '<a ontouchstart="" href="' + buttons[i].url + '" target="' + target + '" onclick="clickTheURLs(this)" style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '" class="cbot-button ' + buttons[i].theme + triple_button_class + text_button_class + '">' + buttons[i].title + '</a>';
      html += renderPostMessageButton(buttons[i].url, buttons[i].title);
    } else if (buttons[i].type == "iframe_button") {
      if (buttons[i].auto_open && firstMessageSent && !options.instantWrite)
        openMiniWeb("web_url", buttons[i].url);

      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': buttons[i].title,
        'event_label': buttons[i].url
      })
      html += '<button ontouchstart="" style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '" class="cbot-button ' + buttons[i].theme + triple_button_class + text_button_class + '"  onclick=' + "openMiniWeb('web_url','" + buttons[i].url + "')" + '>' + buttons[i].title + '</button>';
    } else if (buttons[i].type == "mini_web") {
      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': buttons[i].title,
        'event_label': buttons[i].url
      })
      var options = {};
      if (buttons[i].lng && buttons[i].lat) {
        options.lng = buttons[i].lng;
        options.lat = buttons[i].lat;
      }
      if (buttons[i].html) {
        options.html = buttons[i].html;
      }
      options = JSON.stringify(options)
      html += '<button ontouchstart="" style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '" class="cbot-button ' + buttons[i].theme + triple_button_class + text_button_class + '"  onclick=' + "openMiniWeb('" + buttons[i].data_type + "','" + buttons[i].url + "','" + options + "')" + '>' + buttons[i].title + '</button>';
    } else if (buttons[i].type == "phone_number") {
      if (buttons[i].payload) buttons[i].payload = buttons[i].payload.replace(/\s+/g, "");
      if (buttons[i].phone_number) buttons[i].phone_number = buttons[i].phone_number.replace(/\s+/g, "");

      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': buttons[i].title,
        'event_label': buttons[i].payload || buttons[i].phone_number
      })
      html += '<a ontouchstart="" href="tel:' + (buttons[i].payload || buttons[i].phone_number) + '" onclick="clickTheURLs(this)" style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '" class="cbot-button ' + buttons[i].theme + triple_button_class + text_button_class + '">' + buttons[i].title + '</a>';

    } else if (buttons[i].type == "account_link") {
      // waitForLogin();
      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': buttons[i].title,
        'event_label': buttons[i].url
      })

      html += '<div ontouchstart="" style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '" class="cbot-button ' + buttons[i].theme + triple_button_class + text_button_class + '" onclick="waitForLogin(); popupwindow(\'' + (buttons[i].web_url || buttons[i].url || "") + '\', \'\', 800, 600)">' + (buttons[i].title || "Giriş için Tıklayın") + '</div>';
    } else if (buttons[i].type == "location") {

      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': "SHARE_LOCATION",
        'event_label': buttons[i].title
      })
      html += '<button ontouchstart="" style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '" class="cbot-button cbot-location ' + buttons[i].theme + triple_button_class + text_button_class + '" data-onclick="shareLocation()">' + buttons[i].title + '</button>';
    } else if (buttons[i].type == "file_download") {

      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': buttons[i].title,
        'event_label': buttons[i].url
      })
      var target = getUrlTarget(buttons[i].url, CHANNEL);
      html += '<a ontouchstart="" href="' + buttons[i].url + '" target="' + target + '" onclick="clickTheURLs(this)"><div style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '" class="cbot-button ' + buttons[i].theme + triple_button_class + text_button_class + '">' + buttons[i].title + '</div></a>';

    } else if (buttons[i].type == "file_upload") {

      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': buttons[i].title,
        'event_label': buttons[i].url
      })
      html += "<input class='cbot-attachment-file-input' id='cbot-attachment-file-input-" + uploadIndex + "' accept='" + buttons[i].mimetypes.map(function (m) { return m.mimetype }).join(",") + "' type='file' hidden/>" +
        '<button ontouchstart="" class="cbot-button fileupload ' + buttons[i].theme + triple_button_class + text_button_class + '" data-payload="' + uploadIndex + '" style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '">' + buttons[i].title + '</button>';


      uploadIndex++;
    } else { // postback
      //console.log('<1button class="cbot-button postback" data-payload="' + (buttons[i].payload ? buttons[i].payload : buttons[i].title) + '">' + buttons[i].title + '</button>');
      gtag('event', 'cbot', {
        'event_category': 'cbot-button',
        'event_action': buttons[i].title,
        'event_label': 'postback'
      })
      html += '<button ontouchstart="" style="' + bot_button_text_color + bot_button_background_color + triple_button_css + suggestion_button_style + '" class="cbot-button postback ' + buttons[i].theme + triple_button_class + text_button_class + '" data-branch="' + buttons[i].branch + '" data-payload="' + (buttons[i].payload ? buttons[i].payload : buttons[i].title) + '" data-full-action=\'' + JSON.stringify(buttons[i] || {}) + '\'>' + buttons[i].title + '</button>';
    }
  }

  if (options.button_template == "SUGGESTION") {
    html += '</div>'
  }

  return html + "</div>";
}

/**
 * ALL OF THE SOCKET PROCESSES.
 */
var agentId = null;
// var live_handover = false;

function soc_survey() {
  if (LIVE_CHAT) {
    socket.on('cbot_survey', function (data) {
      exitSurvey = data.exit_survey;
      if (data.client_id == cbotUserId) {
        //console.log("anket23",data.survey[0]);
        if (data.IsSurvey && data.IsSurvey == true) {
          surveyTrigger(data.survey[0], cbotUserId, true);
          sentSurvey = false;
          /* if (data.survey[0].agent_id) {
              agentId = data.survey[0].agent_id;
          } */
          triggerTimingResponses(data);
        }
        else {
          appendMessageToDialogBox(data.survey_message, "cbot-other", null, { notification: data.survey_message }, function () { });
          agentId = null;
        }
        isLive = setIsLive(false);
        setisLiveTLS(isLive);


      }
    });
  }
}

function soc_cbot_meet_events() {
  socket.on('cbot_meet_events', (data) => {
    if (data.eventType == 'participantLeft') {
      forceCloseJitsiMeet();
    } else if (data.eventType == 'windowCloseEvent') {
      forceCloseJitsiMeet();
    } else if (data.eventType == 'videoConferenceLeft') {
      forceCloseJitsiMeet();
    }
  })
}

function moveMiniWebForMobile() {
  document.querySelector('.cbot-web-close').style.display = 'none';
  var widget_position = document.querySelector('.cbot-dialog').getBoundingClientRect();
  document.querySelector('#cbot-web-area').style.right = widget_position.right;
  document.querySelector('#cbot-web-area').style.left = widget_position.left;
  document.querySelector('#cbot-web-area').style.top = widget_position.top;
  document.querySelector('#cbot-web-area').style.bottom = widget_position.bottom;
  document.querySelector('#cbot-web-area').style.width = widget_position.width;
  document.querySelector('#cbot-web-area').style.height = widget_position.height;
  document.querySelector('#cbot-web-area').style.transform = 'unset';
  document.querySelector('.cbot-dialog').style.zIndex = 0;
  document.querySelector('#cbot-web-area').style.zIndex = 999999999999999;
  var web_header_height = document.querySelector('.cbot-web-area-header').getBoundingClientRect().height;
  document.querySelector('.cbot-web-area-content').style.height = `calc(100% - 59px)`;
  document.querySelector('.cbot-web-area-header').insertAdjacentHTML('afterbegin', `
  <div id="cbot-mini-web-toggle" style="
  display: inline;
  border-radius: 10px;
  position: relative;
  left: 144px;
  bottom: -22px;
  padding: 10px;
  background: #5a729e;
  color: white;
  ">
  Widget'a Dön
  </div>`
  )
  // document.querySelector('#cbot-mini-web-toggle').style.left = `calc(50% - ${document.querySelector('#cbot-mini-web-toggle').getBoundingClientRect().width / 2}px)`;
  // document.querySelector('#cbot-mini-web-toggle').style.top = `calc(50% - ${document.querySelector('#cbot-mini-web-toggle').getBoundingClientRect().height / 2}px)`;

}

function toggleMiniWebForMobile() {
  if (document.querySelector('#cbot-mini-web-toggle').innerHTML.includes("Widget'a Dön")) {
    document.querySelector('#cbot-mini-web-toggle').remove();
    document.querySelector('.cbot-dialog-head').insertAdjacentHTML('afterbegin', `
    <div id="cbot-mini-web-toggle" style="
    display: inline;
    border-radius: 10px;
    position: relative;
    left: 130px;
    bottom: 1px;
    padding: 10px;
    background: #5a729e;
    color: white;
    ">
    Mini-web'e Dön
    </div>`
    );
    document.querySelector('.cbot-dialog').style.zIndex = 999999999999999;
    document.querySelector('#cbot-web-area').style.zIndex = 0;
    document.querySelector('#cbot-web-area').style.display = 'none';
    document.querySelector('.cbot-avatar').style.display = 'none';
  } else {
    document.querySelector('#cbot-mini-web-toggle').innerHTML = "Widget'a Dön";
    document.querySelector('#cbot-mini-web-toggle').remove();
    document.querySelector('.cbot-web-area-header').insertAdjacentHTML('afterbegin', `
    <div id="cbot-mini-web-toggle" style="
    display: inline;
    border-radius: 10px;
    position: relative;
    left: 144px;
    bottom: -22px;
    padding: 10px;
    background: #5a729e;
    color: white;
    ">
    Widget'a Dön
    </div>`
    )
    document.querySelector('.cbot-dialog').style.zIndex = 0;
    document.querySelector('#cbot-web-area').style.zIndex = 999999999999999;
    document.querySelector('#cbot-web-area').style.display = 'block';
    document.querySelector('.cbot-avatar').style.display = 'block';
    // document.querySelector('#cbot-mini-web-toggle').style.left = `calc(50% - ${document.querySelector('#cbot-mini-web-toggle').getBoundingClientRect().width / 2}px)`;
    // document.querySelector('#cbot-mini-web-toggle').style.top = `calc(50% - ${document.querySelector('#cbot-mini-web-toggle').getBoundingClientRect().height / 2}px)`;
    // document.querySelector('#cbot-mini-web-toggle').style.left = `calc(50% - ${103 / 2}px)`;
    // document.querySelector('#cbot-mini-web-toggle').style.bottom = `-22px`;


  }
}




var WAITING_FOR_LOGIN = false;
function waitForLogin() {

  if (!WAITING_FOR_LOGIN) {
    var headers = {
      "Content-Type": "application/json",
      "CBot-Token": "hztHxVUZ1xvs13t0bGwjtrgOxJFk11i1",
      "CBOT-URL": location.href
    }

    var customheaders = clients.gateway_custom_headers || [];

    for (var i = 0; i < customheaders.length; i++) {
      var header = customheaders[i];
      headers[header.key] = header.value
    }

    WAITING_FOR_LOGIN = true;
    $.ajax({
      url: rootAddress + "/login/wait/" + CLIENT,
      type: "POST",
      timeout: 240000,
      headers: headers,
      data: JSON.stringify({
        "client": CLIENT,
        "user_id": cbotUserId,
        "session_id": cbotSessionId,
        "referrer": CHANNEL || "WIDGET"
      }),
      success: function (resp) {
        WAITING_FOR_LOGIN = false;
        if (resp && resp.messages) {
          for (var i = 0; i < resp.messages.length; i++) {
            appendMessageToDialogBox(resp.messages[i], "cbot-other", resp.category, { notification: resp.messages[i] }, function () {
              setClickEventToInteractiveButtons(cbotUserId);
            });
          }
        }

        isLive = setIsLive(resp.live_chat);
        setisLiveTLS(isLive);
        if (isLive) {
          FIRST_LIVE_MESSAGE = true;
          socket_widget(resp.message);
        }

        if (resp.send_message) {
          var jsonData = {
            // userId: userId,
            userId: cbotUserId,
            sessionId: cbotSessionId,
            message: resp.send_message,
            is_triggered: true
          };
          sendPost(jsonData, function (resp2) {
            isLive = setIsLive(resp2.live_chat);
            setisLiveTLS(isLive);
            if (isLive) {
              FIRST_LIVE_MESSAGE = true;
              socket_widget(resp2.message.message);
            }



            handleMessageArea();

            appendMessageToDialogBox(resp2.message, "cbot-other", null, { notification: resp2.speak }, function () {
              setClickEventToInteractiveButtons(resp2.userId);
              setClickEventToFeedbackButtons(resp2.unique_id);
            });
          });
        }

      },
      error: function (request, status, err) {
        WAITING_FOR_LOGIN = false;
        if (status == "timeout")
          waitForLogin();
      }
    });
  }
}

var WAITING_FOR_POLLING = false;
function waitForLongPolling() {
  if (!WAITING_FOR_POLLING) {

    var headers = {
      "Content-Type": "application/json",
      "CBot-Token": "hztHxVUZ1xvs13t0bGwjtrgOxJFk11i1",
      "CBOT-URL": location.href
    }

    var customheaders = clients.gateway_custom_headers || [];

    for (var i = 0; i < customheaders.length; i++) {
      var header = customheaders[i];
      headers[header.key] = header.value
    }


    WAITING_FOR_POLLING = true;
    $.ajax({
      url: rootAddress + "/" + CLIENT + "/userdata/wait",
      type: "POST",
      timeout: 240000,
      headers: headers,
      data: JSON.stringify({
        "client": CLIENT,
        "user_id": cbotUserId,
        "session_id": cbotSessionId,
        "referrer": CHANNEL || "WIDGET"
      }),
      success: function (resp) {
        WAITING_FOR_POLLING = false;
        if (resp && resp.messages) {
          for (var i = 0; i < resp.messages.length; i++) {
            if (resp.messages[i] != "NO_MESSAGE") {
              appendMessageToDialogBox(resp.messages[i], "cbot-other", resp.category, { notification: resp.messages[i] }, function () {
                setClickEventToInteractiveButtons(cbotUserId);
              });
            }
          }
        }
        if (resp.send_message) {
          var jsonData = {
            // userId: userId,
            userId: cbotUserId,
            sessionId: cbotSessionId,
            message: resp.send_message,
            is_triggered: true
          };
          sendPost(jsonData, function (resp2) {
            isLive = setIsLive(resp2.live_chat);
            setisLiveTLS(isLive);
            if (isLive) {
              FIRST_LIVE_MESSAGE = true;
              socket_widget(resp2.message.message);
            }



            handleMessageArea();

            appendMessageToDialogBox(resp2.message, "cbot-other", null, { notification: resp2.speak }, function () {
              setClickEventToInteractiveButtons(resp2.userId);
              setClickEventToFeedbackButtons(resp2.unique_id);
            });
          });
        }
      },
      error: function (request, status, err) {
        WAITING_FOR_POLLING = false;
        if (status == "timeout")
          waitForLongPolling();
      }
    });
  }
}

function socket_connection_widget() {
  if (LIVE_CHAT) {
    socket.on("user_" + cbotUserId, function (data) {
      // console.log("user_" + cbotUserId, data);
      isLive = setIsLive(data.live_chat);
      setisLiveTLS(isLive);
      if (isLive) {
        FIRST_LIVE_MESSAGE = true;
        socket_widget(data.message.message);
      }
      if (!JSON.stringify(data.message || {}).includes("account_link")) {
        appendMessageToDialogBox(data.message, "cbot-other", data.category, { notification: data.message }, function () { });
      }
    });
  }
}

function soc_cli_data() {
  if (LIVE_CHAT) {

    socket.on('cbot_agent', function (data, next) {
      if (data.client_id == cbotUserId) {
        if (data.handover) {
          appendMessageToDialogBox(data.handover_message, "cbot-other", null, { notification: data.handover_message }, function () {
            if (next && typeof next == "function") next({ is_delivered: true });
          });
          isLive = setIsLive(false);
          setisLiveTLS(isLive);
          agentId = null;
          // live_handover = true;
          sendPost({
            senderName: "User_" + cbotUserId,
            userId: cbotUserId,
            sessionId: cbotSessionId,
            message: data.message.message || data.message,
            intents: intents,
            client: cbot_config.client,
            live_chat: isLive,
            is_handover: data.handover || false
          }, function (resp) {

            isLive = setIsLive(resp.live_chat);
            setisLiveTLS(isLive);
            if (isLive) {
              FIRST_LIVE_MESSAGE = true;
              socket_widget(data.message.message);
            }

            handleMessageArea();

            appendMessageToDialogBox(resp.message, "cbot-other", null, { notification: resp.speak }, function () {
              if (next && typeof next == "function") next({ is_delivered: true });
              setClickEventToInteractiveButtons(resp.client_id);
              setClickEventToFeedbackButtons(resp.unique_id);
            });
            // socket.emit("hand_stop", { handover_message: true });
          });

        } else if (data.missed) {

          agentId = null;
          toggleCloseChatButton("none");

          appendMessageToDialogBox(data.message, "cbot-other", "", { notification: data.message.message || data.message }, function () {
            if (next && typeof next == "function") next({ is_delivered: true });
            setClickEventToInteractiveButtons(data.client_id);
            setClickEventToFeedbackButtons(data.unique_id);
          });
        } else {
          if (isLive) {
            agentId = data.agent_id;
            if (!data.is_system) {
              toggleCloseChatButton("block");
            }
            // Görüntülü görüşme başlat.
            if (data.message.message == 'Görüntülü görüşme kabul edildi.') {
              openMiniWeb('cbot_meet', 'https://' + vc_url + '/' + (cbotUserId || userId) || getUserIDFLS() + '?lang=tr&userInfo.displayName=' + (cbotUserId || userId) || getUserIDFLS());
            } else if (data.message.message == 'Üzgünüm, görüntülü görüşme gerçekleştirilemiyor.') {
              // Buton stilini değiştir.
              $('.cbot-start-meeting').text('Görüntülü Görüşme Talep Et 🖥️');
              $('.cbot-start-meeting').css('background', '#18bc39');
            }


          }
          if (data.message && data.message.message_id) {
            if (!document.querySelector(`li[data-message-id='${data.message.message_id}']`)) {
              var message_id = data.message.message_id;
              let agentName = ""
              if (agent_name && Array.isArray(agent_name) && agent_name.length > 0) {
                agentName = agent_name[0];
              }

              appendMessageToDialogBox(data.message, "cbot-other", "", { notification: data.message.message || data.message }, function () {
                if (next && typeof next == "function") next({ is_delivered: true });
                setClickEventToInteractiveButtons(data.client_id);
                setClickEventToFeedbackButtons(data.unique_id);
              });
              $(`[data-message-id=${message_id}] .cbot-msg.cbot_text_component`).append(`<div class="cbot-vector"><svg style="margin-top: 18px;" width="321" height="2" viewBox="0 0 321 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H321" stroke="#DCDCDC"/></svg></div><div class="cbot-agent-name-wrapper"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.03125 15.75C4.03125 12.8505 6.38176 10.5 9.28125 10.5C12.1807 10.5 14.5312 12.8505 14.5312 15.75M12.2812 5.25C12.2812 6.90685 10.9381 8.25 9.28125 8.25C7.6244 8.25 6.28125 6.90685 6.28125 5.25C6.28125 3.59315 7.6244 2.25 9.28125 2.25C10.9381 2.25 12.2812 3.59315 12.2812 5.25Z" stroke="#848484" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg><p class="cbot-agent-name">Müşteri temsilcisi</p></div>`);
              if (clients.chat_avatar_activation) {
                let cbot_other_icon_agent = $(`<style nonce="8IBTHwOdqNKAWeKl7plt8g==">[data-message-id="${message_id}"]:before { content: "${agentName}"; width: 35px; height: 35px; position: absolute; left:16px; border: 1px solid #DCDCDC; border-radius: 24px; background-image: unset; background-repeat: no-repeat; background-size: 100% 100%; background-position-x: center; background-position-y: center; }</style>`);
                $('head').append(cbot_other_icon_agent);
                if (clients.chat_agent_avatar) {
                  let custom_cbot_other_icon_agent = $(`<style nonce="8IBTHwOdqNKAWeKl7plt8g==">[data-message-id="${message_id}"]:before { content: "";width: 35px;height: 35px;position: absolute;left: 16px;top: 0;border: 1px solid #DCDCDC;border-radius: 24px;display: flex;justify-content: center;align-items: center;background-image: url(${clients.chat_agent_avatar});background-repeat: no-repeat;background-position-x: center;background-position-y: center;}</style>`);
                  $('head').append(custom_cbot_other_icon_agent);
                }
              }
              let cbot_other_icon_green_dot = $(`<style nonce="8IBTHwOdqNKAWeKl7plt8g==">[data-message-id="${message_id}"]:after { content: url(../img/cbot-other-icon-green-dot.png);position: absolute;top:0;left: 48;transform: translateY(36px); }</style>`);
              $('head').append(cbot_other_icon_green_dot);
            }
          } else {
            appendMessageToDialogBox(data.message, "cbot-other", "", { notification: data.message.message || data.message }, function () {
              if (next && typeof next == "function") next({ is_delivered: true });
              setClickEventToInteractiveButtons(data.client_id);
              setClickEventToFeedbackButtons(data.unique_id);
            });
          }
        }

      }
    });
  }
}

function soc_queue_data() {
  if (LIVE_CHAT) {
    socket.on('cbot_queue', function (data, next) {
      if (next && typeof next == "function") next({ is_delivered: true });
      if (data.client_id == cbotUserId) {
        if (data.message && data.message.message_id) {
          const queueMessageItem = document.querySelector(`li[data-message-id='${data.message.message_id}']`)
          if (!queueMessageItem) {
            var message_id = data.message.message_id;

            appendMessageToDialogBox(data.message, "cbot-other", "", { notification: data.message.message || data.message }, function () {
              setClickEventToInteractiveButtons(data.client_id);
              setClickEventToFeedbackButtons(data.unique_id);
            });
            $(`[data-message-id=${message_id}] .cbot-msg.cbot_text_component`).append(`<div class="cbot-vector"><svg style="margin-top: 18px;" width="321" height="2" viewBox="0 0 321 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H321" stroke="#DCDCDC"/></svg></div><div class="cbot-agent-name-wrapper"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.03125 15.75C4.03125 12.8505 6.38176 10.5 9.28125 10.5C12.1807 10.5 14.5312 12.8505 14.5312 15.75M12.2812 5.25C12.2812 6.90685 10.9381 8.25 9.28125 8.25C7.6244 8.25 6.28125 6.90685 6.28125 5.25C6.28125 3.59315 7.6244 2.25 9.28125 2.25C10.9381 2.25 12.2812 3.59315 12.2812 5.25Z" stroke="#848484" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg><p class="cbot-agent-name">Müşteri temsilcisi</p></div>`);
            afterAppend();
            if (clients.chat_avatar_activation) {
              let cbot_other_icon_agent = $(`<style nonce="8IBTHwOdqNKAWeKl7plt8g==">[data-message-id="${message_id}"]:before { content: ""; width: 35px; height: 35px; position: absolute; left:16px; border: 1px solid #DCDCDC; border-radius: 24px; background-image: url(../img/cbot-chat-agent-icon.svg); background-repeat: no-repeat; background-size: 100% 100%; background-position-x: center; background-position-y: center; }</style>`);
              $('head').append(cbot_other_icon_agent);
              if (clients.chat_agent_avatar) {
                let custom_cbot_other_icon_agent = $(`<style nonce="8IBTHwOdqNKAWeKl7plt8g==">[data-message-id="${message_id}"]:before { content: "";width: 35px;height: 35px;position: absolute;left: 16px;top: 0;border: 1px solid #DCDCDC;border-radius: 24px;display: flex;justify-content: center;align-items: center;background-image: url(${clients.chat_agent_avatar});background-repeat: no-repeat;background-position-x: center;background-position-y: center;}</style>`);
                $('head').append(custom_cbot_other_icon_agent);
              }
            }
            let cbot_other_icon_green_dot = $(`<style nonce="8IBTHwOdqNKAWeKl7plt8g==">[data-message-id="${message_id}"]:after { content: url(../img/cbot-other-icon-green-dot.png);position: absolute;top:0;left: 48;transform: translateY(36px); }</style>`);
            $('head').append(cbot_other_icon_green_dot);
          } else {
            const queueMessage = queueMessageItem.querySelector(".cbot_text_component span");
            if (queueMessage) {
              queueMessage.textContent = data.message.message;
              showNotification(cbot_config.dialogTitle, data.message.message || data.message);
            } else {
              appendMessageToDialogBox(data.message, "cbot-other", "", { notification: data.message.message || data.message }, function () {
                setClickEventToInteractiveButtons(data.client_id);
                setClickEventToFeedbackButtons(data.unique_id);
              });
            }
          }
        }

      }
    });
  }
}

function socket_newclient() {
  if (socket && socket.connected) {
    socket.emit('new_client', { userId: cbotUserId, sessionId: cbotSessionId });
    //  isLive = true;
    //  toggleCloseChatButton("block");
  }
}

async function socket_widget(message, is_triggered = false, optional_data = {}) {
  return new Promise((resolve, reject) => {
    if (isLive && LIVE_CHAT) {
      var sckt = {
        message: message,
        // answer: resp.message,
        client_id: cbotUserId,
        session_id: cbotSessionId,
        referrer: CHANNEL || "WIDGET",
        client: CLIENT,
        is_first: FIRST_LIVE_MESSAGE,
        agent_id: agentId,
        optional_data // ihtiyaç durumunda ek veri göndermek için
      };
      if (is_triggered) {
        sckt.is_triggered = true
      }

      let intrvl = setInterval(() => {
        if (socket) {
          clearInterval(intrvl);
          if (FIRST_LIVE_MESSAGE) {
            FIRST_LIVE_MESSAGE = false;
            socket.emit("chat_live_client", sckt);
            sendCustomPostMessage("CBOT_LIVECHAT_STARTED", {});
          }

          soc_typing(false);
          sendCustomPostMessage("CBOT_MESSAGE_SENT", { message: sckt.message })
          socket.emit("chat_widget", sckt, (resp) => {
            resolve()
          });
        }
      }, 100);


    }
  });

}

function socket_alert() {
  if (LIVE_CHAT) {
    socket.on("cbot_alert", function (data) {
      if (data.message && data.client_id == cbotUserId) {
        alertMessageDialogHead(data.message);

      }
    });
  }
}

function alertMessageDialogHead(message) {
  $(".cbot-alert-welcome-message").html(message);
  $(".cbot-alert-welcome-message").css("display", "block");
}

function hideAlertedDialogMessage() {
  $(".cbot-alert-welcome-message").slideUp();
}

function socket_delete_message() {
  if (LIVE_CHAT) {
    socket.on("cbot_message_delete", function (data) {
      if (data.client_id == cbotUserId) {
        var isRemoved = false;
        $("li.cbot-other").each(function (index, li) {
          if (isRemoved) return;
          var msgId = $(li).attr("data-message-id");
          if (msgId == data.message_id) {
            $(li).remove();
            isRemoved = true;
          }
        });
      }
    });
  }
}

function socket_file_upload(filename) {
  if (isLive && LIVE_CHAT) {

    setLastMessageSentDateTLS();
    var sckt = {
      filename: filename,
      client_id: cbotUserId,
      session_id: cbotUserId,
      referrer: "WIDGET",
      client: CLIENT,
      agent_id: agentId
    };

    socket.emit("chat_file_upload", sckt);
  }
}

function soc_stop() {
  if (LIVE_CHAT) {
    socket.on("cbot_stop_ack", function (data, next) {
      sendCustomPostMessage("CBOT_LIVECHAT_STOPPED", {});
      if (next && typeof next == "function") next({ is_delivered: true });
      if (data.status && data.client_id == cbotUserId) {
        isLive = setIsLive(false);
        setisLiveTLS(isLive);
        agentId = null;

        if (data.clear_session) {
          setCloseIconPressed();
        }

        handleMessageArea();

        if (data.missed) {
          appendMessageToDialogBox(data.message, "cbot-other", "", { notification: data.message.message || data.message }, function () {
            setClickEventToInteractiveButtons(data.client_id);
            // setClickEventToFeedbackButtons(data.unique_id);
          });
        }
      }
    });
  }
}

function socket_suggestion(message, category, cbotUserId) {
  if (isLive && LIVE_CHAT) {
    var sckt = { message: message, client_id: cbotUserId };
    socket.emit("chat_suggestion", sckt);
  }

}

function soc_typing(status) {
  if (LIVE_CHAT && isLive && IS_TYPING != status) {
    IS_TYPING = status;
    socket.emit('chat_typing', { client_id: cbotUserId, status: status, type: "CLIENT" });
  }
}
function soc_client_typing() {
  if (LIVE_CHAT) {
    socket.on('cbot_typing', function (data) {
      if (data.type == "AGENT" && data.client_id == cbotUserId) {
        if (data.status) {
          $(".cbot-typing").remove();
          appendTypingIconToDialogBox(data.agent);
          agent_name = data.agent
        } else {
          $(".cbot-typing").remove();
        }
      }
    })
  }
}

function soc_transfer_agent() {
  if (LIVE_CHAT) {
    socket.on('cbot_customer_list', function (data) {
      if ((data.type == "TRANSFER" || data.type == "TAKEOVER") && cbotUserId == data.customer.client_id) {
        agentId = data.agentId;
      }
    });
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = document.cookie;
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var dialogEndSurveyTimeout = null;
function starAnketShow(survey) {
  if (!survey) survey = {};
  dialogCloseSurveyShowed = true;
  $(".cbot-dialog-end-survey").find("span").text(survey.popup_question || "Anketimize katılmak ister misiniz?");
  $(".cbot-dialog-end-survey").find("button").eq(0).text(survey.popup_question_yes || "Evet");
  $(".cbot-dialog-end-survey").find("button").eq(1).text(survey.popup_question_no || "Hayır");
  $(".cbot-dialog-end-survey").fadeIn();
  if (survey.shadow_background)
    $(".cbot-survey-fadebg").css("display", "block")

}

function fileUpload(URL, fd, next) {
  var typing = default_messages[botlanguage].TYPING
  sendCustomPostMessage("CBOT_FILE_IS_UPLOADING", {})
  $(".cbot-illusion-placeholder").html(`${typing}...`)
  $('#cbot-form-message').attr('disabled', 'disabled');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      sendCustomPostMessage("CBOT_FILE_UPLOADED_SUCCESSFULLY", {})
      next(null, json);
    } else if (this.readyState == 4) {
      // console.log("READY STATE", this.readyState);
      // console.log("STATUS", this.status);
      var json = JSON.parse(this.responseText);
      sendCustomPostMessage("CBOT_FILE_UPLOAD_FAILED", {})
      next(json);
    }
  }
  xhr.open("POST", URL, true);
  xhr.setRequestHeader("Accept", "application/json");
  // xhr.setRequestHeader("Accept-Encoding", "gzip");
  xhr.setRequestHeader('CBOT-Token', "hztHxVUZ1xvs13t0bGwjtrgOxJFk11i1");
  xhr.setRequestHeader('CBOT-URL', location.href);

  var customheaders = clients.gateway_custom_headers || [];

  for (var i = 0; i < customheaders.length; i++) {
    var header = customheaders[i];
    xhr.setRequestHeader(header.key, header.value);
  }
  xhr.send(fd);
}

function fileUploadListener(index) {
  if (index || index == 0) {
    if (!$._data($("#cbot-attachment-file-input-" + index).get(0), "events")) {
      $("#cbot-attachment-file-input-" + index).on("change", function (item) {
        var file = document.getElementById("cbot-attachment-file-input-" + index).files[0];
        var fd = new FormData();
        fd.append("client", CLIENT);
        fd.append("userId", cbotUserId);
        fd.append("referrer", "WIDGET");
        fd.append('cbot_file', file, file.name);

        var elCbotFormMessage = document.getElementById('cbot-form-message');
        if (document.getElementById("cbot-send-button"))
          document.getElementById("cbot-send-button").setAttribute("disabled", true);
        elCbotFormMessage.value = ' ';
        appendTypingIconToDialogBox();
        var typing = default_messages[botlanguage].TYPING
        $(".cbot-illusion-placeholder").html(`${typing}...`)


        fileUpload(rootAddress + "/files/upload", fd, function (err, json) {
          var message = { message_type: "TEXT", message: "" };
          if (err) {
            message.message = err.error.description;
          } else {
            message.message = json.message;
            if (isLive) {
              socket_file_upload(json.filename);
            } else {

              var elCbotFormMessage = document.getElementById('cbot-form-message');
              if (document.getElementById("cbot-send-button"))
                document.getElementById("cbot-send-button").setAttribute("disabled", true);
              elCbotFormMessage.value = ' ';
              $(".cbot-illusion-placeholder").html(`${typing}...`)
              $('#cbot-form-message').attr('disabled', 'disabled');

              sendPost({
                senderName: "User_" + cbotUserId,
                userId: cbotUserId,
                sessionId: cbotSessionId,
                request_type: "DOC",
                data: json.url,
                filename: json.filename,
                live_chat: isLive
              }, function (data) {
                var elCbotFormMessage = document.getElementById('cbot-form-message');
                $(".cbot-illusion-placeholder").html(clients.placeholder_message);
                $(".cbot-illusion-placeholder").html(`${typing}...`)
                $('#cbot-form-message').attr('disabled', 'disabled');
                elCbotFormMessage.value = " ";
                elCbotFormMessage.removeAttribute('readonly');
                if (document.getElementById("cbot-send-button"))
                  document.getElementById("cbot-send-button").removeAttribute('disabled');
                if (document)
                  elCbotFormMessage.focus();
                if (data) {
                  intents = data.intents;
                  var elCbotFormMessage = document.getElementById('cbot-form-message');
                  if (document.getElementById("cbot-send-button"))
                    document.getElementById("cbot-send-button").setAttribute("disabled", true);
                  elCbotFormMessage.value = ' ';
                  appendTypingIconToDialogBox();
                  $(".cbot-illusion-placeholder").html(`${typing}...`)
                  setTimeout(() => {

                    appendMessageToDialogBox(data.message, "cbot-other", null, { notification: data.speak }, function () {

                      var elCbotFormMessage = document.getElementById('cbot-form-message');
                      $(".cbot-illusion-placeholder").html(clients.placeholder_message);
                      elCbotFormMessage.value = " ";
                      elCbotFormMessage.removeAttribute('readonly');
                      if (document.getElementById("cbot-send-button"))
                        document.getElementById("cbot-send-button").removeAttribute('disabled');
                      if (document)
                        elCbotFormMessage.focus();

                      setClickEventToInteractiveButtons(data.userId);
                      if (data.survey) {
                        surveyTrigger(data.survey, data.userId);
                      }
                      triggerTimingResponses(data);
                    });
                  }, 500);
                } else {
                  appendMessageToDialogBox("Zaman aşımı", "cbot-other", null, { notification: "Zaman aşımı" }, function () { });
                }
              });
            }



          }
          appendMessageToDialogBox(message, "cbot-other", "", { notification: message.message }, function () { })
          // console.log("UPLOAD RESULT", json);
          if (!err) {
            $("#cbot-chat").append('<li class="cbot-other cbot-typing"><div class="cbot-msg" style="height: 20px; border-bottom-left-radius: 0; border-top-left-radius: 15px; margin: 0 0 0 10px;' + bot_message_bubble_color + '"><div class="cbot-typing-loader"></div></div></li>');
            $(".cbot-illusion-placeholder").html(`${typing}...`)
            $('#cbot-form-message').attr('disabled', 'disabled');
            afterAppend();

            let elCbotInteractiveButtons = document.getElementsByClassName('fileupload');
            for (var j = 0; j < elCbotInteractiveButtons.length; j++) {
              let e = elCbotInteractiveButtons[j];
              e.disabled = true;
            }
          }
        });

      })
    }
  } else {
    $("#cbot-attachment-file-input").on("change", function (item) {
      var file = document.getElementById("cbot-attachment-file-input").files[0];
      if (!file) return;
      var fd = new FormData();
      fd.append("client", CLIENT);
      fd.append("userId", cbotUserId);
      fd.append("referrer", "WIDGET");
      fd.append('cbot_file', file, file.name);

      fileUpload(rootAddress + "/files/upload", fd, function (err, json) {
        var message = { message_type: "TEXT", message: "" };
        if (err) {
          message.message = err.error.description;
        } else {
          message.message = json.message;

          socket_widget(json.url, undefined, json);

          // sendPost({
          //     senderName: "User_" + cbotUserId,
          //     userId: cbotUserId,
          //     sessionId: cbotSessionId,
          //     request_type: uploadFileType || "DOC",
          //     data: json.url,
          //     live_chat: isLive
          // }, function (data) {
          //     var elCbotFormMessage = document.getElementById('cbot-form-message');
          //     elCbotFormMessage.value = "";
          //     elCbotFormMessage.removeAttribute('disabled');
          //     if (document.getElementById("cbot-send-button"))
          //         document.getElementById("cbot-send-button").removeAttribute('disabled');
          //     elCbotFormMessage.focus();
          //     if (data) {
          //         intents = data.intents;
          //         appendMessageToDialogBox(data.message, "cbot-other", null, { notification: data.speak }, function () {
          //             setClickEventToInteractiveButtons(data.userId);
          //             if (data.survey) {
          //                 surveyTrigger(data.survey, data.userId);
          //             }
          //             triggerTimingResponses(data);
          //         });
          //     } else {
          //         appendMessageToDialogBox("Zaman aşımı", "cbot-other", null, { notification: "Zaman aşımı" }, function () { });
          //     }
          // })

        }
        appendMessageToDialogBox(message, "cbot-other", "", { notification: message.message }, function () { })
        // console.log("UPLOAD RESULT", json);
      });

    })
  }
}

function showAttachmentMenu() {
  $(".cbot-attachment-container").css("display", "block")
}

function hideAttachmentMenu() {
  $(".cbot-attachment-container").css("display", "none")
}

function toggleAttachmentMenu() {

  if ($(".cbot-attachment-container").css("display") == "block")
    $(".cbot-attachment-container").css("display", "none")
  else $(".cbot-attachment-container").css("display", "block")
}
function popupwindow(url, title, w, h) {
  var left = (screen.width / 2) - (w / 2);
  var top = (screen.height / 2) - (h / 2);
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

function shareLocation() {
  var elCbotFormMessage = document.getElementById('cbot-form-message');
  navigator.geolocation.getCurrentPosition(function receiveData(data) {


    var elCbotInteractiveButtons = document.getElementsByClassName('cbot-location');
    for (var j = 0; j < elCbotInteractiveButtons.length; j++) {
      e = elCbotInteractiveButtons[j];
      e.disabled = true;
    }

    var message = { message_type: "LOCATION_COMPONENT", lat: data.coords.latitude, lng: data.coords.longitude };
    if (!lastConversationStepValue) {
      appendMessageToDialogBox(message, "cbot-self", "", {}, function () {

      })
    }

    sendPost({
      userId: cbotUserId,
      sessionId: cbotSessionId,
      message: "",
      data: message,
      live_chat: isLive,
      request_type: "LOCATION",
      client: cbot_config.client
    }, function (data) {

      $(".cbot-illusion-placeholder").html(clients.placeholder_message);
      $('#cbot-form-message').removeAttr('disabled')
      elCbotFormMessage.value = " ";
      elCbotFormMessage.removeAttribute('readonly');
      if (document.getElementById("cbot-send-button"))
        document.getElementById("cbot-send-button").removeAttribute('disabled');
      elCbotFormMessage.focus();
      if (data) {
        intents = data.intents;
        appendMessageToDialogBox(data.message, "cbot-other", null, { notification: data.speak }, function () {
          setClickEventToInteractiveButtons(data.userId);
          if (data.survey) {
            surveyTrigger(data.survey, data.userId);
          }
          triggerTimingResponses(data);
        });
      } else {
        appendMessageToDialogBox("Zaman aşımı", "cbot-other", null, { notification: "Zaman aşımı" }, function () { });
      }
    })
  }, function error(data) {
    if (lastConversationStepValue) {
      let message = { message_type: "LOCATION_COMPONENT", lat: null, lng: null };
      sendPost({
        userId: cbotUserId,
        sessionId: cbotSessionId,
        message: "",
        data: message,
        live_chat: isLive,
        request_type: "LOCATION",
        client: cbot_config.client
      }, function (data) {
        $(".cbot-illusion-placeholder").html(clients.placeholder_message);
        $('#cbot-form-message').removeAttr('disabled')
        elCbotFormMessage.value = " ";
        elCbotFormMessage.removeAttribute('readonly');
        if (document.getElementById("cbot-send-button"))
          document.getElementById("cbot-send-button").removeAttribute('disabled');
        elCbotFormMessage.focus();
        if (data) {
          intents = data.intents;
          appendMessageToDialogBox(data.message, "cbot-other", null, { notification: data.speak }, function () {
            setClickEventToInteractiveButtons(data.userId);
            if (data.survey) {
              surveyTrigger(data.survey, data.userId);
            }
            triggerTimingResponses(data);
          });
        } else {
          appendMessageToDialogBox("Zaman aşımı", "cbot-other", null, { notification: "Zaman aşımı" }, function () { });
        }
      })
    } else {
      appendMessageToDialogBox({ message_type: "TEXT", message: "Hata oluştu,Tarayıcınızın konum bilgisine erişme özelliğini aktifleştirin." }, "cbot-other", "", {}, function () { })
    }

  }/* , function options(...args) { console.log("options", args) } */)

}

var timingResponseTimeouts = [];
function triggerTimingResponses(resp) {
  var timingResponses = resp.timing_response;
  clearTimingResponseTimeout();
  // if (resp.conversationStep) return;
  if (resp.live_chat) return;
  if (!Array.isArray(timingResponses) || timingResponses.length == 0) return;
  if (isLive) return;
  var time = 0;
  for (var i = 0; i < timingResponses.length; i++) {
    if (timingResponses[i].is_active) {
      time += timingResponses[i].time * 1000;
      sendTimingResponse(timingResponses[i], time);
    }
  }

}

function sendTimingResponse(timingResponse, time) {
  var timeout = setTimeout(function () {
    sendPost({
      userId: cbotUserId,
      sessionId: cbotSessionId,
      message: timingResponse.message,
      client: cbot_config.client
    }, function (data) {

      if (document.getElementById("cbot-send-button"))
        document.getElementById("cbot-send-button").removeAttribute('disabled');
      if (data) {
        intents = data.intents;
        appendMessageToDialogBox(data.message, "cbot-other", null, { notification: data.speak }, function () {
          setClickEventToInteractiveButtons(data.userId);
          if (data.survey) {
            surveyTrigger(data.survey, data.userId);
          }
        });
      } else {
        appendMessageToDialogBox("Zaman aşımı", "cbot-other", null, { notification: "Zaman aşımı" }, function () { });
      }
    }, true);
  }, time || timingResponse.time * 1000);
  timingResponseTimeouts.push(timeout);
}

function clearTimingResponseTimeout() {
  for (var i = 0; i < timingResponseTimeouts.length; i++) {
    clearTimeout(timingResponseTimeouts[i]);
  }
}

var is_liveagent_typed = false;

function getConversations(next, getConversationsCallback = () => { }) {
  if (cbotUserId && cbotSessionId) {
    var headers = {
      "Content-Type": "application/json",
      "CBot-Token": "hztHxVUZ1xvs13t0bGwjtrgOxJFk11i1",
      "CBOT-URL": location.href
    }

    var customheaders = clients.gateway_custom_headers || [];

    for (var i = 0; i < customheaders.length; i++) {
      var header = customheaders[i];
      headers[header.key] = header.value;
    }

    $.ajax({
      url: rootAddress + "/conversations",
      type: "POST",
      timeout: 5000,
      headers: headers,
      data: JSON.stringify({
        "client": CLIENT,
        "user_id": cbotUserId,
        "session_id": cbotSessionId,
        "referrer": CHANNEL || "WIDGET",
        "userInfo": data_user
      }),
      success: function (resp) {
        sendCustomPostMessage("CBOT_CONVERSATION_HISTORY_FETCHED", {});
        checkAndSetSessionId(resp.session_id)
        setUserIdTLS(resp.user_id);
        socket_newclient();
        if (resp.userInfo.user_display_name) {
          addAvatarLetters(resp.userInfo.user_display_name);
        }

        if (resp && resp.exit_survey) exitSurvey = resp.exit_survey;

        if (resp && typeof resp == "object" && resp.data && Array.isArray(resp.data)) {
          resp.data.forEach(response => {
            let agent_messages = response.answer.filter(x => x.chat_type == 'agent' && x.agent_id);
            if (agent_messages.length > 0) {
              is_liveagent_typed = true;
            }
          })
          conversations = resp.data;
          conversations.reverse();
        }
        // console.log("CONV RECEIVED", conversations)
        next();
        if (getConversationsCallback && typeof getConversationsCallback === "function") getConversationsCallback(resp.userId, ia_take_attention_state.trigger_message);
      },
      error: function (err) {
        // console.log("conversation history error", err)
        next();
        if (getConversationsCallback && typeof getConversationsCallback === "function") getConversationsCallback(cbotUserId, ia_take_attention_state.trigger_message);
      }
    });
  } else {
    next();
    if (getConversationsCallback && typeof getConversationsCallback === "function") getConversationsCallback(cbotUserId, ia_take_attention_state.trigger_message);
  }
}

function checkAndSetSessionId(val) {
  if (val) {
    // cbotSessionId = Date.now();
    cbotSessionId = val;
    // isLive = setIsLive(false);
    // setisLiveTLS(isLive);
    setSessionIdTLS(cbotSessionId);

  }
}

function sendRepeatedMessages(messages, cbotUserId, i) {
  dialog(cbotUserId, messages[i], function () {
    i++;
    if (i < messages.length) {
      sendRepeatedMessages(messages, cbotUserId, i);
    } else {
      return true;
    }
  });

}

function sendTriggerMessages(trigger_messages) {
  setTimeout(function () {
    var elCbotFormMessage = document.getElementById('cbot-form-message');
    elCbotFormMessage.focus();

    var messages = getLastMessageFLS();
    if (queryStringVars.cbot_repeat && Array.isArray(messages) && messages.length > 0) {
      sendRepeatedMessages(messages, cbotUserId, 0);
    } else if (queryStringVars.cbot_message || (Array.isArray(trigger_messages) && trigger_messages.length > 0 && trigger_messages[0] != "")) {
      // if (trigger_messages[0].indexOf("trigger#") >= 0) {
      var message = queryStringVars.cbot_message || trigger_messages[0]; //trigger_messages[0].split("#")[1];


      $('#cbot-form-message').attr('disabled', true)
      $('#cbot-send-button').attr('disabled', true)

      sendPost({
        senderName: "User_" + cbotUserId,
        userId: cbotUserId,
        sessionId: cbotSessionId,
        message: message,
        is_triggered: true,
        intents: intents,
        live_chat: isLive,
        client: cbot_config.client
      }, function (data) {
        sendCustomPostMessage("CBOT_TRIGGER_MESSAGE_SENT", {})
        setLastMessageSentDateTLS();
        setLastMessageTLS([message]);
        $(".cbot-illusion-placeholder").html(clients.placeholder_message);
        $('#cbot-form-message').removeAttr('disabled')
        elCbotFormMessage.value = " ";
        elCbotFormMessage.removeAttribute('readonly');
        if (document.getElementById("cbot-send-button"))
          document.getElementById("cbot-send-button").removeAttribute('disabled');
        elCbotFormMessage.focus();


        handleMessageArea();

        var element = document.getElementById('cbot-chat');
        if (data) {

          isLive = setIsLive(data.live_chat);
          setisLiveTLS(isLive);
          if (isLive) {
            FIRST_LIVE_MESSAGE = true;
            socket_widget(message);
          }

          intents = data.intents;
          appendMessageToDialogBox(data.message, "cbot-other", null, { notification: data.speak }, function () {
            setClickEventToInteractiveButtons(data.userId);
            if (data.survey) {
              surveyTrigger(data.survey, data.userId);
            }
            toggleCloseChatButton("none")
            triggerTimingResponses(data);
          });
        } else {
          appendMessageToDialogBox("Zaman aşımı", "cbot-other", null, { notification: "Zaman aşımı" }, function () { });
        }
      });
      /* } else {
        loopTrigger(0, trigger_messages);
      } */
    }

    scrollChatScreen(100);

  }, 200);
}

function writeConversations() {
  for (var i = 0; i < conversations.length; i++) {
    if (!conversations[i].is_triggered) // trigger mesajı ise yazma
    {

      var message = "";
      if (conversations[i].data_full_action && conversations[i].data_full_action.title)
        message = conversations[i].data_full_action.title;
      else
        message = conversations[i].message;

      if (message.match(/LOCATION\[STD]/g)) {
        var locations = message.split('LOCATION[STD]:')[1].split(",")
        message = { message_type: "LOCATION_COMPONENT", lat: locations[0].trim(), lng: locations[1].trim() };
      }

      if (typeof message == 'string' && !/^DOC/.test(message.substring(0, 3))) {
        appendMessageToDialogBox(message, "cbot-self", null, { instantWrite: !!1 }, function () {
          // person
        });
      }

    }
    var botAnswer = conversations[i].answer;
    if (botAnswer) {
      if (!conversations[i].live_chat) {
        if (typeof botAnswer == "string") botAnswer = [{ message_type: "TEXT", message: botAnswer }];
        else if (typeof botAnswer == "object") botAnswer == [botAnswer];
        for (var j = 0; j < botAnswer.length; j++) {
          var element = botAnswer[j];
          if (!element.is_deleted)
            appendMessageToDialogBox(element, "cbot-other", null, { instantWrite: !!1 }, function () { // bot
              setClickEventToInteractiveButtons(cbotUserId);
            })

        }
      }
      else {
        if (typeof botAnswer == "string") botAnswer = [{ message_type: "TEXT", message: botAnswer }];
        else if (typeof botAnswer == "object") botAnswer == [botAnswer];
        botAnswer = botAnswer.filter(function (x) { return x.chat_type == "agent" })
        for (var j = 0; j < botAnswer.length; j++) {
          var element = botAnswer[j];
          if (!element.is_deleted)
            appendMessageToDialogBox(element, "cbot-other", null, { instantWrite: !!1 }, function () { // bot
              setClickEventToInteractiveButtons(cbotUserId);
            })

        }
      }
    }
  }

  closeMiniWeb();
}


// FLS > FROM LOCAL STORAGE
// TLS > TO LOCAL STORAGE
function getSessionIdFLS() {
  return localStorage[getDynamicLSName("sessionId")] || 0;
}
function setSessionIdTLS(val) {
  cbotSessionId = val;
  if (!cbotSessionId) {
    localStorage.removeItem(getDynamicLSName("sessionId"));
    xdLocalStorage.removeItem(getDynamicLSName("sessionId"));
  } else {
    localStorage[getDynamicLSName("sessionId")] = val;
    xdLocalStorage.setItem(getDynamicLSName("sessionId"), val);
  }
}

function setUserIdTLS(userId) {
  cbotUserId = userId;
  if (!cbotUserId) {
    localStorage.removeItem(getDynamicLSName("userid"));
    xdLocalStorage.removeItem(getDynamicLSName("userid"));
  } else {
    localStorage[getDynamicLSName("userid")] = cbotUserId;
    xdLocalStorage.setItem(getDynamicLSName("userid"), cbotUserId);

  }
}

function getisLiveFLS() {
  let res = (localStorage[getDynamicLSName("isLive")] === "true" || localStorage[getDynamicLSName("isLive")] === "false") ? JSON.parse(localStorage[getDynamicLSName("isLive")]) : isLive;
  if (res) sendCustomPostMessage("CBOT_LIVECHAT_RECONNECTED", {});
  return res;
}
function setisLiveTLS(val) {
  if (val === true) {
    if (!hasSurveyFeedback) {
      showedSurvey = null;
    }
  }

  localStorage[getDynamicLSName("isLive")] = val;
  xdLocalStorage.setItem(getDynamicLSName("isLive"), val);
}
function setUserInfoTLS(val) {

  localStorage[getDynamicLSName("userInfo")] = val;
  xdLocalStorage.setItem(getDynamicLSName("userInfo"), val);
}
function getUserInfoFLS() {
  return localStorage[getDynamicLSName("userInfo")] || "";
}

/**
 * Eğer X butonuna basıldığında görüşmenin temizlenmesi özelliği aktifse
 * Sayfa yenilenmesi durumunda bu özelliğin çalışabilmesi için localStorage'a bir alan ekleniyor.
 */
function setCloseIconPressed() {
  if (getChannelValue(clients.clear_after_close_bot, CHANNEL)) {
    localStorage.setItem(getDynamicLSName("cbot-close-icon-pressed"), "true");
    xdLocalStorage.setItem(getDynamicLSName("cbot-close-icon-pressed"), "true");
  }
}

function getCloseIconPressed() {
  return localStorage.getItem(getDynamicLSName("cbot-close-icon-pressed"))
}

function removeCloseIconPressed() {
  return localStorage.removeItem(getDynamicLSName("cbot-close-icon-pressed"))
}

function setIsLive(val) {
  if (!val) {

    if ((data_vip || data_livechat) && LIVE_CHAT) {

      if (LIVE_CHAT && val) {
        toggleAttachmentIcon("block");
      } else {
        toggleCloseChatButton("none");
      }

      FIRST_LIVE_MESSAGE = true;
      return true;
    }

    toggleAttachmentIcon("none");
    toggleCloseChatButton("none");

    return val;
  }

  if (LIVE_CHAT && val) {
    toggleAttachmentIcon("block");
  }

  return LIVE_CHAT && val;
}

function clearLastMessageSentDateTLS(client) {
  if (!client) client = CLIENT;
  localStorage[getDynamicLSName("lastmessagedate")] = "0";
  xdLocalStorage.setItem(getDynamicLSName("lastmessagedate"), "0");
}

function setLastMessageSentDateTLS(client) {
  if (!client) client = CLIENT;
  localStorage[getDynamicLSName("lastmessagedate")] = Date.now();
  xdLocalStorage.setItem(getDynamicLSName("lastmessagedate"), Date.now());
}
function getLastMessageSentDateFLS(client) {
  if (!client) client = CLIENT;
  return JSON.parse(localStorage[getDynamicLSName("lastmessagedate")] || 0);
}

function setLastMessageTLS(message, client) {
  if (!client) client = CLIENT;
  localStorage[getDynamicLSName("lastmessages")] = JSON.stringify(message);
  xdLocalStorage.setItem(getDynamicLSName("lastmessages"), JSON.stringify(message));
}
function getLastMessageFLS(client) {
  if (!client) client = CLIENT;
  return JSON.parse(localStorage[getDynamicLSName("lastmessages")] || "[]");
}

function setFirstMessageSentTLS(val) {
  localStorage[getDynamicLSName("firstmessagesent")] = val;
  xdLocalStorage.setItem(getDynamicLSName("firstmessagesent"), val);
}
function getFirstMessageSentFLS(client) {
  if (!client) client = CLIENT;
  return localStorage[getDynamicLSName("firstmessagesent")] == "true";
}

function checkLastMessageDate(client) {
  var lastmessagedate = getLastMessageSentDateFLS(client);
  if (lastmessagedate) {
    lastMessageReceiveDate = parseInt(lastmessagedate);
    return new Date(parseInt(lastmessagedate) + parseInt(clients.user_timeout_minute || clients.user_timeout_notify_second || 30) * 60 * 1000) >= Date.now();
  }
  return false;
}

function openMiniWeb(type, url, options) {

  if (cbotIsMobile.any())
    moveMiniWebForMobile();
  if (options)
    options = JSON.parse(options)
  var elCbotWebArea = document.getElementById('cbot-web-area');
  if (type)
    fadeIn(elCbotWebArea);

  if (type === "web_url") {

    $(".cbot-web-area-content").html('<iframe frameBorder="0" src="' + url + '"></iframe>')
  }
  else if (type === "cbot_meet") {

    $(".cbot-web-area-content").html('<iframe frameBorder="0" allow="camera; microphone; fullscreen; display-capture; autoplay" src="' + url + '"></iframe>')
    // Buton stilini değiştir.
    $('.cbot-start-meeting').text('Görüntülü Görüşmeyi Sonlandır ❌');
    $('.cbot-start-meeting').css('background', 'orange');

  }
  else if (type === "html") {
    $(".cbot-web-area-content").html('<div class="cbot-doc-content">' + b64decode(options.html) + '</div>');

  }
  if (type === "location") {

    $(".cbot-web-area-content").html('<iframe frameBorder="0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyD1Z6ndI5vaUA_aE5OmpGrTvpLYCtc3KpU&center=' + options.lat + ',' + options.lng + '&zoom=15"></iframe>')
  }
  else if (type === "image") {
    $(".cbot-web-area-content").html('<div class="cbot-web-image"><img src="' + url + '"/></div>');

  }
  else if (type === "video") {
    if (url.includes('youtube'))
      $(".cbot-web-area-content").html('<iframe width=100 allow="autoplay;" frameBorder="0" src="' + url + '"></iframe>');
    else if (url.includes('facebook')) {
      const html = `<iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=${url}&show_text=false&width=560&t=0"
            width="560"
            height="314"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`
      $(".cbot-web-area-content").html(html);
    }
    else
      $(".cbot-web-area-content").html('<div class="cbot-web-video-container"><div class="cbot-web-video"><video autoplay width="100%" controls><source src="' + url + '" type="video/mp4">Tarayıcınızda video desteği mevcut değil.</video></div></div>');
    // $(".cbot-web-area-content").html('<video frameBorder="0" src="' + url + '"></video>');



  }
}

function closeMiniWeb() {
  if (document.querySelector('#cbot-mini-web-toggle')) {
    document.querySelector('#cbot-mini-web-toggle').remove();
    document.querySelector('.cbot-avatar').style.display = 'block';
  }
  var elCbotWebArea = document.getElementById('cbot-web-area');
  if ($("#cbot-web-area").css("display") != "none") {
    fadeOut(elCbotWebArea);
  }
}

function b64encode(data) {
  return btoa(unescape(encodeURIComponent(data)));
}
function b64decode(data) {
  return decodeURIComponent(escape(atob(data)));
}

function browserNotifications() {
  if ("Notification" in window) {

    var permission = Notification.permission;
    if (permission === "granted") {
      showNotification();
    } else if (permission === "default") {
      requestAndShowPermission();
    } else {
      // alert("Use normal alert");
    }
  }
}

function showNotification(title, body) {

  if ("Notification" in window) {
    if (!isWidgetOpen) {
      newMsgCount++;
      toggleBadge(newMsgCount);
    }

    if (document.visibilityState === "visible") {
      return;
    }


    // if (body && typeof body == "object") {
    //     if (Array.isArray(body) && body.length > 0) {
    //         if (body[0].message_type == "BUTTON_COMPONENT") {
    //             body = body[0].message || "";
    //         }
    //     }
    // }

    if (typeof body === "string") {
      body = (body || "").replace(/<.+?>/g, ""); // #526
      body = body.replace(/NO_MESSAGE/g, "");
      body = body.trim();
    }

    if (body) {
      icon = cbot_config.dialogImageURL;
      var notification = new Notification(title, { body: body, icon: icon }); // es6
      notification.onclick = function () {
        notification.close();
        window.parent.focus();
        if (!isWidgetOpen) {
          dialogButtonRegular();
        }
      }
    }
  }
}
function requestAndShowPermission() {
  Notification.requestPermission(function (permission) {
    if (permission === "granted") {
      showNotification();
    }
  });
}

function toggleBadge(newMsgCount) {
  if (newMsgCount > 0) {
    $("#cbot-count-badge").text(newMsgCount);
    $("#cbot-count-badge").css("display", "block");
  } else {
    $("#cbot-count-badge").css("display", "none");
  }
}

function clickToCloseLivechatButton() {
  if (getChannelValue(clients.close_widget_after_leave_livechat, CHANNEL)) {
    cbotCloseIcon();
  } else {
    closeLivechat(() => {
      showExitSurvey();
    })
  }
}

async function closeLivechat(next = () => { }) {
  if (LIVE_CHAT && isLive) {

    forceCloseJitsiMeet();
    toggleCloseChatButton("none")
    await socket_widget("Görüşme kullanıcı tarafından sonlandırıldı.", true);
    stopped_by_customer = true;
    socket.emit('chat_stop_by_customer', { client_id: cbotUserId, session_id: cbotSessionId });
    // setTimeout(function () {
    //     socket.emit('chat_stop_by_customer', { client_id: cbotUserId, session_id: cbotSessionId });
    // }, 1000);
    handleMessageArea();

    isLive = setIsLive(false);
    setisLiveTLS(isLive); // ekledim hataya sebep oluyordu

    appendMessageToDialogBox(lang_vars.LIVECHAT_CLOSE_MESSAGE, "cbot-other", "", {}, function () {
      next();
    });


    sendCustomPostMessage("CBOT_LIVECHAT_STOPPED", {});
  }
}

function toggleAttachmentIcon(display) {
  if (display == "block") {
    if (!bool_attachments) display = "none";
  }
  $("#cbot-attachment-area").css("display", display);
}

function toggleCloseChatButton(display) {
  if (display == "none") {
    $("#cbot-chat").css("height", "calc(100% - 155px);")
  } else {
    $("#cbot-chat").css("height", "calc(100% - 175px);")
    $(".cbot-livechat-started").css("display", "flex");
  }
  $(".cbot-livechat-close").css("display", display);
  if (video_conference) {
    $(".cbot-start-meeting").css("display", display);
  }
}

var user_timeout_for_bot = 30;
function chatEndNotifier() {

  var user_timeout = (clients.user_timeout || {})["DEFAULT"] || {
    "DEFAULT": {
      message: ""
    }
  }
  if (clients.user_timeout_minute) {
    user_timeout_for_bot = parseInt(clients.user_timeout_minute)
  }
  if (clients.user_timeout_notify_second) {
    timeoutNotifySecPeriod = parseInt(clients.user_timeout_notify_second)
  }
  setInterval(function () {
    if (cbotShowMessageArea == "show")
      $(".cbot-dialog-end-timer").css("bottom", "94px")
    else
      $(".cbot-dialog-end-timer").css("bottom", "0")
    if (!isLive && (new Date(lastMessageReceiveDate + user_timeout_for_bot * 1000 * 60 - (timeoutNotifySecPeriod * 1000)).getTime() < new Date().getTime() && new Date(lastMessageReceiveDate + user_timeout_for_bot * 1000 * 60).getTime() > new Date().getTime())) {
      var sn = parseInt((new Date(lastMessageReceiveDate + user_timeout_for_bot * 1000 * 60).getTime() - new Date().getTime()) / 1000);

      // if (new Date(lastMessageReceiveDate + 1000 * 3).getTime() < new Date().getTime() && new Date(lastMessageReceiveDate + 1000 * 123).getTime() > new Date().getTime()) {
      //     var sn = parseInt((new Date(lastMessageReceiveDate + 1000 * 123).getTime() - new Date().getTime()) / 1000);
      // console.log(sn, "saniye kaldı")
      if ($(".cbot-dialog-end-timer").css("display") != "block")
        $(".cbot-dialog-end-timer").css("display", "block")
      if (clients.user_timeout_banner_message) {
        $(".cbot-dialog-end-timer").html("<span>" + sn + `</span> ${clients.user_timeout_banner_message}`)
      } else {
        $(".cbot-dialog-end-timer").html("<span>" + sn + "</span> saniye içerisinde yazmazsanız oturumunuz sonlanacaktır.")
      }
      if (sn == 0)
        setTimeout(function () {
          if (user_timeout.message)
            appendMessageToDialogBox(user_timeout.message, "cbot-other", null, {}, function () { });
        }, 1000);
    } else if (!isLive && timeoutNotifySecPeriod === 0 &&
      new Date(lastMessageReceiveDate + user_timeout_for_bot * 1000 * 60).getTime() > new Date().getTime() &&
      parseInt((new Date(lastMessageReceiveDate + user_timeout_for_bot * 1000 * 60).getTime() - new Date().getTime()) / 1000) === 0
    ) {
      if (user_timeout.message) {
        appendMessageToDialogBox(user_timeout.message, "cbot-other", null, {}, function () { });
      }
    } else {
      if ($(".cbot-dialog-end-timer").css("display") != "none") {
        $(".cbot-dialog-end-timer").css("display", "none")
      }
    }
  }, 1000);
}

function checkURLs(urls) {
  if (!urls || urls.length == 0) return {};
  var s = document.createElement("script");
  s.type = "text/javascript";
  var i = 0;
  while (i < urls.length && window.location.href.indexOf(urls[i].url) < 0) i++;

  if (i < urls.length) {
    return urls[i];
  }
}

function appendLocalStorageIFrame(url, next) {
  $("body").append('<iframe src="' + url + '" id="cbot-localstorage"></iframe>');
  afterAppend();
  var iframe = document.getElementById('cbot-localstorage');
  if (iframe) {
    iframe.onload = next;
  }
}

function getXdLocalStorage() {
  var iframe = document.getElementById('cbot-localstorage');
  var win;
  if (iframe) {
    try {
      win = iframe.contentWindow;
    } catch (e) {
      try {
        win = iframe.contentWindow;
      } catch (err) {
        // console.log("getXdLocalStorage ERR", err);
      }
    }
  }


  return win;
}

var xdLocalStorage = {
  getItem: function (key) {
    var win = getXdLocalStorage();
    if (win) {
      win.postMessage({
        action: 'get',
        key: key
      }, getAddr());
    }

  },
  setItem: function (key, value) {
    var win = getXdLocalStorage();
    if (win) {
      win.postMessage({
        action: 'save',
        key: key,
        value: value
      }, getAddr());
    }
  },
  removeItem: function (key) {
    var win = getXdLocalStorage();
    if (win) {
      win.postMessage({
        action: 'remove',
        key: key
      }, getAddr());
    }
  },
  checkIFrameLocalStorage: function () {
    return getXdLocalStorage() != undefined;
  },
  clearAll: function () {
    var win = getXdLocalStorage();
    if (win) {
      win.postMessage({
        action: 'clearAll'
      }, getAddr());
    }
  }
}

window.addEventListener("message", messageHandler, false);
function messageHandler(event) {
  if (event.data.action == 'returnData' && event.data.value) {
    setToLocalStorage(event.data.key, event.data.value)
  } else {
    storageCount++;
  }
}

function getAddr() {
  return "*";
}

function setToLocalStorage(key, value) {
  localStorage[key] = value;
  storageCount++;
}

function getVarsFromLocalStorageIFrame(client) {
  xdLocalStorage.getItem(getDynamicLSName("userid"));
  xdLocalStorage.getItem(getDynamicLSName("sessionId"));
  xdLocalStorage.getItem(getDynamicLSName("userInfo"));
  xdLocalStorage.getItem(getDynamicLSName("isLive"));
  xdLocalStorage.getItem(getDynamicLSName("lastmessagedate"));
  xdLocalStorage.getItem(getDynamicLSName("firstmessagesent"));
  xdLocalStorage.getItem(getDynamicLSName("lastmessages"));
}



function getCustomPositionings() {
  var width = getParameterFromScript("data-pos-" + CHANNEL + "-width");
  var height = getParameterFromScript("data-pos-" + CHANNEL + "-height");
  var bottom = getParameterFromScript("data-pos-" + CHANNEL + "-bottom");
  var right = getParameterFromScript("data-pos-" + CHANNEL + "-right");
  var left = getParameterFromScript("data-pos-" + CHANNEL + "-left");

  return { width: width, height: height, bottom: bottom, right: right, left: left }

}


function cbotClearUserDialog(clear_dialog) {
  welcomeMessageSent = false;

  cbotUserId = null;
  setUserIdTLS(cbotUserId);

  cbotSessionId = null;
  isLive = setIsLive(false);
  setisLiveTLS(isLive);
  setSessionIdTLS(cbotSessionId);
  clearLastMessageSentDateTLS()


  if (clear_dialog) {
    enableUserMessageArea()
    $("#cbot-chat").find("li").each(function (index, item) {
      $(item).remove();
    })
    var elCbotWebArea = document.getElementById('cbot-web-area');
    if (elCbotWebArea) {
      $('.cbot-web-close').click();
    }

  }


}

function getQueryVariable(url) {
  if (url.indexOf("?") == -1) return {};
  var query = url.slice(url.indexOf("?") + 1);
  var vars = query.split('&');
  var obj = {}
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] && pair[1]) {
      obj[pair[0]] = decodeURIComponent(pair[1]);
    }
  }

  return obj;
}

function loadDataOwl() {
  var jqueryScript = document.createElement('script');
  jqueryScript.type = "text/javascript";
  jqueryScript.src = staticAddress + "/js/owl.carousel.js";
  jqueryScript.async = true;
  document.getElementsByTagName('head')[0].insertBefore(jqueryScript, document.getElementsByTagName('head')[0].firstChild);
}


function getCustomHeaders(replace) {

  clients.gateway_custom_headers = (clients.gateway_custom_headers || []).filter(function (header) {
    header.value = header.value.replace(/\$\{([a-zA-Z_ÇÖĞŞÜİçöğşüı\-]+)\}/g, function (fullmatch, match) {
      if (data_script_qs[match]) {
        return data_script_qs[match]
      } else if (document.getElementById(match)) {
        if (document.getElementById(match).value) {
          return document.getElementById(match).value;
        } else {
          return replace ? "" : fullmatch;
        }
      } else {
        return replace ? "" : fullmatch;
      }

    });
    if (replace) { checkAuthHeader(); }
    return !!header.value;
  })
}

function checkAuthHeader() {
  var cbotUserChanged = clients.gateway_custom_headers.find(function (header) {
    return header.key == "cbot-userchanged";
  }) || {};

  if (cbotUserChanged.value == true || cbotUserChanged.value == "true" || data_clear_session == "true") {
    setSessionIdTLS(null);
    setUserIdTLS(null);
    isLive = setIsLive(false);
    setisLiveTLS(isLive);
    // setAuthHeaderTLS(authHeader.value);
  }

  var authHeader = clients.gateway_custom_headers.find(function (header) {
    return (header.key || "").toLowerCase() == "authorization";
  }) || {};

  if (!authHeader || !(authHeader.value || "").trim()) {
    setLastMessageTLS([]);
  }


}

function getUrlTarget(url, channel) {
  channel = (channel == "WIDGET" ? "DEFAULT" : channel) || "DEFAULT";
  return ((clients.link_list || {})[channel] || []).find(function (x) {
    return url.includes(x);
  }) == null ? "_blank" : "_self";
}

function getChannelValue(value, channel) {
  channel = (channel == "WIDGET" ? "DEFAULT" : channel) || "DEFAULT";
  return (value || {})[channel];
}

function checkPageTransition() {
  if (previousURL !== currentURL) {
    return false;
  } else {
    return true;
  }
}


function hideMessageArea() {
  cbotShowMessageArea = "hide"
  $(".cbot-form-message-area").css("display", "none");
  $(".cbot-chat").css("height", "calc(100% - 75px)");
  scrollChatScreen(100);

}
function showMessageArea() {
  cbotShowMessageArea = "show"
  $(".cbot-form-message-area").css("display", "block");
  $(".cbot-chat").css({ height: '' });

  scrollChatScreen(100);
}

function handleMessageArea() {

  if (clients.button_mode) {
    hideMessageArea();

    if (isLive) {
      showMessageArea();
    }
  }
}

function renderPostMessageButton(urlData, title, component) {
  if (!component) component = ""
  var comp = "";
  if (/list/i.test(component)) {
    comp = "cbot-list-item-button"
  }
  let html = "";
  if (typeof urlData === "object") {
    html += `<a onclick="sendPostMessage(${JSON.stringify(urlData).replace(/'/g, '&apos;').replace(/"/g, '&quot;')})" style="cursor:pointer"><div class="cbot-button">${title}</div></a>`;
  } else if (typeof urlData === "string") {
    const target = getUrlTarget(urlData, CHANNEL)
    html += '<a ontouchstart="" href="' + urlData + '" target="' + target + '" class="cbot-button ' + comp + triple_button_class + text_button_class + '" style="' + suggestion_button_style + triple_button_css + '" onclick="clickTheURLs(this)">' + title + '</a>';
  }
  return html;
}

function sendPostMessage(urlData) {
  window.postMessage(JSON.stringify(urlData), getAddr());

  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify(urlData), getAddr());
  }
}

function scrollChatScreen(time) {
  // console.log("Scrolling is started")
  setTimeout(function () {

    $("#cbot-chat").stop().animate({ scrollTop: $('#cbot-chat').prop("scrollHeight") }, 1, function () {
      // console.log("Scrolling is DONE!");
    });
  }, time);
}

function scrollMessageBox(time) {
  // console.log("Scrolling is started")
  setTimeout(function () {
    $("#cbot-form-message").stop().animate({ scrollTop: $('#cbot-form-message').prop("scrollHeight") }, 1, function () {
    });
  }, time);
}

function cbotShowHelpTextMenu() {
  $(".cbot-dialog-head").fadeOut();
  $("#cbot-help").fadeIn(0, function () {
    // fadeIn animasyonu tamamlandığında çalışacak kod
    $(".cbot-dialog-sozlesme").fadeIn(0);
  })
  // slideIn(elCbotHelp);
  $(".cbot-form-message-area").css("display", "none");
}
function cbotHideHelpTextMenu() {

  $(".cbot-dialog-head").fadeIn(0);
  $("#cbot-help").fadeOut(100, function () {
    // fadeIn animasyonu tamamlandığında çalışacak kod
    $(".cbot-dialog-sozlesme").fadeOut(0);
  })
  // slideOut(elCbotHelp);
  if (cbotShowMessageArea == "show")
    $(".cbot-form-message-area").css("display", "block");
}


// #1510
function cbotHelpTextToDialog(message) {

  cbotHideHelpTextMenu();
  dialog(cbotUserId, message, function () { });
}




function getUserIDFLS() {
  var cbotUserId = localStorage[getDynamicLSName("userid")];

  return cbotUserId
}

function getUserIDName() {
  if (clients.is_dynamic_user_id) {
    return "cbot-" + CLIENT + '-' + CHANNEL + '-userid';
  }
  return "cbot-" + CLIENT + '-userid'
}

function getDynamicLSName(lsName) {
  if (clients.is_dynamic_user_id) {
    return "cbot-" + CLIENT + '-' + (cbot_dynamic_id || CHANNEL) + '-' + lsName;
  }
  return "cbot-" + CLIENT + '-' + lsName
}

function isJSON(data) {
  try {
    JSON.parse(data)
    return true;
  } catch (error) {
    return false;
  }
}

function socket_reconnect() {
  if (LIVE_CHAT) {
    var reconnectInterval = setInterval(function () {
      if (window.io && cbotSessionId && cbotUserId) {
        if (!socket.connected) {
          if (isLive) {
            if (is_liveagent_typed) {
              toggleCloseChatButton("block");
            }
          }
          socket = io.connect(soc_connect, {
            transports: ["websocket"], secure: true, upgrade: false, auth: {
              session_id: cbotSessionId,
              user_id: cbotUserId
            }
          });
        }
        socket.on('connect', function () {
          clearLostConnectionMsg();
          var reNewClientInterval = setInterval(function () {
            if (cbotUserId && cbotSessionId) {
              socket.emit('new_client', { userId: cbotUserId, sessionId: cbotSessionId });
              clearInterval(reNewClientInterval);
            }
          }, 500);

        });
        socket_connection_widget();
        soc_cli_data();
        soc_survey();
        soc_stop();
        soc_client_typing();
        socket_alert();
        socket_delete_message();
        soc_transfer_agent();
        soc_error();
        clearInterval(reconnectInterval);
        soc_queue_data();
      }
    }, 1000);
  }
}
function soc_error() {
  if (LIVE_CHAT) {
    socket.on('connect_error', function (error) {
      console.log('connect_error => ', error);
      if (error.data && error.data.type === "authentication_error") {
        if (isLive) {
          agentId = null;
          cbotClearUserDialog(true);
          clearSurveyTimeout();
          setTimeout(() => {
            var msg = "Bağlantınızda bir problem görünüyor. Sizi yeniden bağlamayı deniyoruz. Lütfen bekleyin veya daha sonra tekrar deneyin."
            showNotification(cbot_config.dialogTitle, msg);
            appendMessageToDialogBox(msg, "cbot-other", "", {}, function () { });
          }, 500);
          socket_reconnect();
        }
      }
    });
    socket.on('disconnect', function (reason) {
      sendCustomPostMessage("CBOT_WEBSOCKET_DISCONNECTED", {});
      console.log('disconnect=> ', reason);
      if (reason === "io server disconnect") {
        // the disconnection was initiated by the server, you need to reconnect manually
        socket.connect();
      } else if (reason === "ping timeout") {
        if (isLive) {
          triggerLostConnectionMsg();
          console.log('disconnect => ', "ping timeout");
        }
        //The server did not send a PING within the pingInterval + pingTimeout range
      } else if (reason === "transport close") {
        if (isLive) {
          console.log('disconnect => ', "transport close");
          triggerLostConnectionMsg();
        }
        // The connection was closed (example: the user has lost connection, or the network was changed from WiFi to 4G)
      } else if (reason === "transport error") {
        if (isLive) {
          console.log('disconnect => ', "transport error");
          triggerLostConnectionMsg();
        }
        // The connection has encountered an error (example: the server was killed during a HTTP long-polling cycle)
      }
      // else the socket will automatically try to reconnect
      //reasonlists ping timeout,transport close,transport error
      //
    })
  }
}
function socketHandshake() {
  if (LIVE_CHAT && socket) {
    if (!socket.connected && !isLive) {
      socket.auth = {
        session_id: cbotSessionId,
        user_id: cbotUserId
      }
      socket.io.opts.auth = {
        session_id: cbotSessionId,
        user_id: cbotUserId
      }
      socket.connect();
    }
  }
}


var connection_msg_id = null
window.addEventListener('online', function () {
  clearLostConnectionMsg();
  showMessageArea();
  stopLoading();
});
window.addEventListener('offline', function () {
  triggerLostConnectionMsg();
  hideMessageArea();
  startLoading();
});
function triggerLostConnectionMsg() {
  if (!connection_msg_id) {
    connection_msg_id = (new Date()).getTime();
  }
  if (!document.getElementById(connection_msg_id)) {
    var msg = "Bağlantınızda bir problem görünüyor. Sizi yeniden bağlamayı deniyoruz. Lütfen bekleyin veya daha sonra tekrar deneyin."
    showNotification(cbot_config.dialogTitle, msg);
    var msg_data = {
      message: msg,
      message_type: 'TEXT',
      message_id: connection_msg_id
    }
    appendMessageToDialogBox(msg_data, "cbot-other", "", {}, function () { });
  }
}

function clearLostConnectionMsg() {
  var connectionMsgElement = $(`[data-message-id="${connection_msg_id}"]`);
  if (connectionMsgElement.length > 0) {
    connectionMsgElement.remove();
  }
}

function startLoading() {
  $('.cbot-spinner-overlay').css('display', 'flex')
  $('.cbot-spinner').css('display', 'block')
}
function stopLoading() {
  $('.cbot-spinner-overlay').css('display', 'none')
  $('.cbot-spinner').css('display', 'none')
}


            function initRecorder() {}
            function startRecording() {}
            

            function webkitTTS() {}
            function cancelTTS() {}
            

function messageCleanerForSpeech(message) {
  if (botlanguage == 'ar') {
    return message.replace(/\//g, '');
  }
  return message;
}

// Interaktif bilgi toplayıcı
const interactive_class = {
  getWeekNumber: (date = new Date()) => {
    const d = new Date(date);
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const dayCount = Math.floor((d - yearStart) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((dayCount + yearStart.getDay() + 1) / 7);
    return weekNumber;
  },
  getDayOfMonth: (date = new Date()) => {
    const currentDate = new Date(date);
    const dayOfMonth = currentDate.getDate();
    return dayOfMonth;
  },
  getDayName: (date = new Date()) => {
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const currentDate = new Date(date);
    const day = currentDate.getDay();
    return days[day];
  },
  getDayIndexOfWeek: (date = new Date()) => {
    let daymap = [7, 1, 2, 3, 4, 5, 6]
    return daymap[new Date(date).getDay()];
  },
  getMonth: (date = new Date()) => {
    const currentDate = new Date(date);
    return currentDate.getMonth();
  },
  getMonthName: (date = new Date()) => {
    let days = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const currentDate = new Date(date);
    const dayOfMonth = currentDate.getMonth();
    return days[dayOfMonth];
  },
  isWeekday: (date = new Date()) => {
    const currentDate = new Date(date);
    const dayOfWeek = currentDate.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  },
  getTimeOfDay(date = new Date()) {
    const currentDate = new Date(date);
    const currentHour = currentDate.getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "afternoon";
    } else if (currentHour >= 17 && currentHour < 20) {
      return "evening";
    } else {
      return "night";
    }
  },
  generateStats: (date = new Date()) => {
    return {
      date: new Date(date).getTime(),
      monthNumber: interactive_class.getMonth() + 1,
      weekNumber: interactive_class.getWeekNumber(),
      dayNumber: interactive_class.getDayOfMonth(),
      dayIndexOfWeek: interactive_class.getDayIndexOfWeek(),
      month: interactive_class.getMonthName(),
      day: interactive_class.getDayName(),
      daylight: interactive_class.getTimeOfDay(),
      isWeekDay: interactive_class.isWeekday(),
    }
  },
  setStats: () => {
    localStorage.setItem(getDynamicLSName("interactive_stats"), JSON.stringify(interactive_class.generateStats()));
  },

  getStats: () => {
    return JSON.parse(localStorage.getItem(getDynamicLSName("interactive_stats")))
  },

  recommend: () => {
    let history = interactive_class.getStats();
    let current_stats = interactive_class.generateStats();
    let turnback = {
      first_time_in_this_month: true,
      first_time_in_this_week: true,
      first_time_in_this_day: true
    }
    if (history) {
      turnback.delta = {
        as_minutes: (current_stats.date - history.date) / (1000 * 60),
        as_hours: (current_stats.date - history.date) / (1000 * 60 * 60),
        as_days: (current_stats.date - history.date) / (1000 * 60 * 60 * 24),
        as_week: (current_stats.date - history.date) / (1000 * 60 * 60 * 24 * 7),
        as_month: (current_stats.date - history.date) / (1000 * 60 * 60 * 24 * 30),
      }
      turnback.diff_as_month = current_stats.monthNumber - history.monthNumber;
      turnback.diff_as_week = current_stats.weekNumber - history.weekNumber;
      turnback.diff_as_day = current_stats.dayNumber - history.dayNumber;
      turnback.is_same_month = current_stats.month == history.month;
      turnback.is_same_week = current_stats.weekNumber == history.weekNumber;
      turnback.is_same_day_of_month = current_stats.dayNumber == history.dayNumber;
      turnback.is_same_day_of_week = current_stats.day == history.day;
      turnback.is_same_daylight = current_stats.daylight == history.daylight;
      turnback.first_time_in_this_month = turnback.diff_as_month > 0
      turnback.first_time_in_this_week = turnback.diff_as_week > 0
      turnback.first_time_in_this_day = turnback.diff_as_day > 0
    }
    return {
      current_stats,
      recommends: turnback
    }
  }
}

const interactive_actions_executer = {
  checkOpenWidget: () => {
    let res = false;
    if (interactive_actions && interactive_actions.open_widget && Array.isArray(interactive_actions.open_widget) && interactive_actions.open_widget.length > 0) {
      for (let i = 0; i < interactive_actions.open_widget.length; i++) {
        const action = interactive_actions.open_widget[i];
        const state = interactive_recommends.recommends[action.behaviour];
        if (action.operator == 'equal') {
          res = `${state}` == action.equity
        } else if (action.operator == 'not_equal') {
          res = `${state}` != action.equity
        }
        if (res) break;
      }
    }
    return res;
  },
  checkDisplayPopup: () => {
    let res = false;
    let popup = {};
    if (interactive_actions) {
      if (interactive_actions.display_popup && Array.isArray(interactive_actions.display_popup) && interactive_actions.display_popup.length > 0) {
        for (let i = 0; i < interactive_actions.display_popup.length; i++) {
          const action = interactive_actions.display_popup[i];
          if (action.behaviour == "site_urls") {
            let current_site = window.location.href.split("?")[0];
            let signed_sites = action.equity.map(x => x.value);
            if (action.operator == "equal") {
              if (signed_sites.includes(current_site)) {
                res = true;
                popup = action.popup;
                break;
              }
            } else if (action.operator == "not_equal") {
              if (!signed_sites.includes(current_site)) {
                res = true;
                popup = action.popup;
                break;
              }
            }
          }
        }
      }
    }
    return { res, popup }
  },
  checkTakeAttention: () => {
    let status = false;
    let trigger_message;
    let delay;
    if (interactive_actions) {
      if (interactive_actions.take_attention && Array.isArray(interactive_actions.take_attention) && interactive_actions.take_attention.length > 0) {
        for (let i = 0; i < interactive_actions.take_attention.length; i++) {
          const action = interactive_actions.take_attention[i];
          if (action.behaviour == "site_urls") {
            let current_site = window.location.href.split("?")[0];
            let signed_sites = action.equity.map(x => x.value);
            if (action.operator == "equal") {
              if (signed_sites.includes(current_site)) {
                status = true;
                trigger_message = action.trigger_message;
                delay = action.delay;
                break;
              }
            } else if (action.operator == "not_equal") {
              if (!signed_sites.includes(current_site)) {
                status = true;
                trigger_message = action.trigger_message;
                delay = action.delay;
                break;
              }
            }
          }
        }
      }
    }
    return { status, trigger_message, delay };
  }
}

function disableUserMessageArea(chat_end_message = "Görüşme sonlandırılmıştır. 👋") {
  user_chat_input_state = user_chat_input_states.DISABLED;
  $(".cbot-form-message-area").addClass("disabled-background");
  $(".cbot-illusion-placeholder").addClass("disabled-illussion");
  $(".cbot-send-button").css("pointer-events", "none")
  disablePostbackButtons()
  $('.cbot-send-survey-button').css("display", "none");
  $('.cbot-send-button').css("display", "block");
  $("#cbot-attachment-area").css("display", "none");
  $("#cbot-send-button").css("display", "none")
  document.getElementById("cbot-form-message").disabled = true;
  document.getElementById("cbot-form-message").placeholder = "";
  document.getElementById("cbot-send-button").disabled = true;
  document.getElementById("cbot-illusion-placeholder").innerText = chat_end_message;
  $('#cbot-form-message').blur()
  sendCustomPostMessage("CBOT_CHAT_CAN_BE_POPPED", {});
}

function enableUserMessageArea() {
  if (user_chat_input_state == user_chat_input_states.DISABLED) {
    $(".cbot-send-button").css("pointer-events", "unset")
    $(".cbot-form-message-area").removeClass("disabled-background");
    $(".cbot-illusion-placeholder").removeClass("disabled-illussion");
    $('.cbot-send-survey-button').css("display", "none");
    $("#cbot-send-button").css("display", "block")
    document.getElementById("cbot-form-message").disabled = false;
    document.getElementById("cbot-send-button").disabled = false;
    $(".cbot-illusion-placeholder").html(clients.placeholder_message);
  }
}

function cbotCloseIcon() {


  if (isLive && getChannelValue(clients.leave_livechat_after_close_bot, CHANNEL)) {
    closeLivechat(() => {
      showExitSurvey();
    });
    if (isExitSurveyExists()) {
      setCloseIconPressed();
      return;
    }

  } else if (isExitSurveyExists()) {
    showExitSurvey();
    setCloseIconPressed();
    return;
  }

  isWidgetOpen = false;
  if (!data_full_page && elCbotDialogRegularButton) { // Full page açıldığı zaman kapama özelliği olmamalı
    fadeIn(elCbotDialogRegularButton);
    fadeOut(elCbotDialog);
  }
  $(".cbot-dialog-button-regular").removeClass("cbot-slide-right")
  $(".cbot-dialog-button-regular").removeClass("cbot-slide-left")

  if (clients.slide_from_left)
    $(".cbot-dialog-button-regular").css("left", "20px");



  if (getChannelValue(clients.clear_after_close_bot, CHANNEL)) {
    queryStringVars.cbot_repeat = false;
    sendToEndChat();
    reset(true);
    sendCustomPostMessage("CBOT_CHAT_CAN_BE_POPPED", {});
    $(".cbot-livechat-started").css("display", "none");
    if (clients.closing_popup_is_active && !hasSurveyShowAsPopUp) {
      $(".cbot-dialog-button-help-message").text(clients.closing_popup_text || "Güle Güle");
      if (!isWidgetOpen) {
        $(".cbot-dialog-button-help-message").css("display", "block");
        $(".cbot-dialog-button-help-message").stop().animate({ opacity: 1 }, 400, function () {

        });
        $(".cbot-dialog-button-help-message").fadeIn();
        closing_popup_is_showing = true

      }
      setTimeout(function () {
        $(".cbot-dialog-button-help-message").fadeOut(() => {
          closing_popup_is_showing = false
          var popup_msg = clients.popup_text || 'Ben kişisel asistanınız ' + clients.bot_name + ',  size nasıl yardımcı olabilirim?'
          $(".cbot-dialog-button-help-message").text(popup_msg);
        });
      }, parseInt((clients.closing_popup_show_time || 3) * 1000)); // POC-55 // POC-71
    }
  }

}

function detectBrowser() {
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    return 'Opera';
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    return 'Edge';
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return 'Chrome';
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return 'Safari';
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return 'Firefox';
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
    return 'IE';
  } else {
    return undefined;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  sendCustomPostMessage("CBOT_DOM_CONTENT_LOADED", {});
});

window.addEventListener('message', event => {
  if (event && event.data?.action == 'EXTERNAL_CBOT_CLOSE_ICON' || event.data?.eventName == 'CBOT_CLOSE_WIDGET') {
    cbotCloseIcon();
  }
}); 