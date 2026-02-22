gdjs.donazioneCode = {};
gdjs.donazioneCode.localVariables = [];
gdjs.donazioneCode.idToCallbackMap = new Map();
gdjs.donazioneCode.GDNewSpriteObjects1= [];
gdjs.donazioneCode.GDNewSpriteObjects2= [];
gdjs.donazioneCode.GDNewTextObjects1= [];
gdjs.donazioneCode.GDNewTextObjects2= [];
gdjs.donazioneCode.GDNewText2Objects1= [];
gdjs.donazioneCode.GDNewText2Objects2= [];
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1= [];
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects2= [];
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1= [];
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects2= [];
gdjs.donazioneCode.GDNewText3Objects1= [];
gdjs.donazioneCode.GDNewText3Objects2= [];
gdjs.donazioneCode.GDRedButtonWithShadowObjects1= [];
gdjs.donazioneCode.GDRedButtonWithShadowObjects2= [];
gdjs.donazioneCode.GDPlayer2Objects1= [];
gdjs.donazioneCode.GDPlayer2Objects2= [];
gdjs.donazioneCode.GDPlayer3Objects1= [];
gdjs.donazioneCode.GDPlayer3Objects2= [];
gdjs.donazioneCode.GDPlayer4Objects1= [];
gdjs.donazioneCode.GDPlayer4Objects2= [];
gdjs.donazioneCode.GDNewSprite27eObjects1= [];
gdjs.donazioneCode.GDNewSprite27eObjects2= [];
gdjs.donazioneCode.GDnnObjects1= [];
gdjs.donazioneCode.GDnnObjects2= [];
gdjs.donazioneCode.GDBlackDecoratedButtonObjects1= [];
gdjs.donazioneCode.GDBlackDecoratedButtonObjects2= [];
gdjs.donazioneCode.GDCoinsObjects1= [];
gdjs.donazioneCode.GDCoinsObjects2= [];
gdjs.donazioneCode.GDCoins2Objects1= [];
gdjs.donazioneCode.GDCoins2Objects2= [];
gdjs.donazioneCode.GDCoins3Objects1= [];
gdjs.donazioneCode.GDCoins3Objects2= [];
gdjs.donazioneCode.GDEmote_9595StarObjects1= [];
gdjs.donazioneCode.GDEmote_9595StarObjects2= [];
gdjs.donazioneCode.GDEmote_9595Star4Objects1= [];
gdjs.donazioneCode.GDEmote_9595Star4Objects2= [];
gdjs.donazioneCode.GDEmote_9595Star2Objects1= [];
gdjs.donazioneCode.GDEmote_9595Star2Objects2= [];
gdjs.donazioneCode.GDEmote_9595Star3Objects1= [];
gdjs.donazioneCode.GDEmote_9595Star3Objects2= [];
gdjs.donazioneCode.GDNewText5Objects1= [];
gdjs.donazioneCode.GDNewText5Objects2= [];
gdjs.donazioneCode.GDTIMEObjects1= [];
gdjs.donazioneCode.GDTIMEObjects2= [];
gdjs.donazioneCode.GDTrObjects1= [];
gdjs.donazioneCode.GDTrObjects2= [];
gdjs.donazioneCode.GDTranObjects1= [];
gdjs.donazioneCode.GDTranObjects2= [];
gdjs.donazioneCode.GDLeft_9595arrow_9595buttonObjects1= [];
gdjs.donazioneCode.GDLeft_9595arrow_9595buttonObjects2= [];
gdjs.donazioneCode.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.donazioneCode.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.donazioneCode.GDTop_9595arrow_9595buttonObjects1= [];
gdjs.donazioneCode.GDTop_9595arrow_9595buttonObjects2= [];
gdjs.donazioneCode.GDTIME2Objects1= [];
gdjs.donazioneCode.GDTIME2Objects2= [];
gdjs.donazioneCode.GDNewText6Objects1= [];
gdjs.donazioneCode.GDNewText6Objects2= [];
gdjs.donazioneCode.GDfwObjects1= [];
gdjs.donazioneCode.GDfwObjects2= [];
gdjs.donazioneCode.GDNewText242323Objects1= [];
gdjs.donazioneCode.GDNewText242323Objects2= [];
gdjs.donazioneCode.GDNewText35tyetrObjects1= [];
gdjs.donazioneCode.GDNewText35tyetrObjects2= [];


gdjs.donazioneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.donazioneCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.donazioneCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.donazioneCode.GDRedButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.donazioneCode.GDRedButtonWithShadowObjects1[k] = gdjs.donazioneCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.donazioneCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INIZIO", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.paypal.me/donazion2/2", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length;i<l;++i) {
    if ( gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[k] = gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i];
        ++k;
    }
}
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.paypal.me/donazion2/5", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder3"), gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length;i<l;++i) {
    if ( gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[k] = gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i];
        ++k;
    }
}
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.paypal.me/donazion2/10", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder4"), gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1.length;i<l;++i) {
    if ( gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1[k] = gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1[i];
        ++k;
    }
}
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.paypal.me/donazion2/20", runtimeScene);
}
}

}


};

gdjs.donazioneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.donazioneCode.GDNewSpriteObjects1.length = 0;
gdjs.donazioneCode.GDNewSpriteObjects2.length = 0;
gdjs.donazioneCode.GDNewTextObjects1.length = 0;
gdjs.donazioneCode.GDNewTextObjects2.length = 0;
gdjs.donazioneCode.GDNewText2Objects1.length = 0;
gdjs.donazioneCode.GDNewText2Objects2.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects2.length = 0;
gdjs.donazioneCode.GDNewText3Objects1.length = 0;
gdjs.donazioneCode.GDNewText3Objects2.length = 0;
gdjs.donazioneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.donazioneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.donazioneCode.GDPlayer2Objects1.length = 0;
gdjs.donazioneCode.GDPlayer2Objects2.length = 0;
gdjs.donazioneCode.GDPlayer3Objects1.length = 0;
gdjs.donazioneCode.GDPlayer3Objects2.length = 0;
gdjs.donazioneCode.GDPlayer4Objects1.length = 0;
gdjs.donazioneCode.GDPlayer4Objects2.length = 0;
gdjs.donazioneCode.GDNewSprite27eObjects1.length = 0;
gdjs.donazioneCode.GDNewSprite27eObjects2.length = 0;
gdjs.donazioneCode.GDnnObjects1.length = 0;
gdjs.donazioneCode.GDnnObjects2.length = 0;
gdjs.donazioneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.donazioneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.donazioneCode.GDCoinsObjects1.length = 0;
gdjs.donazioneCode.GDCoinsObjects2.length = 0;
gdjs.donazioneCode.GDCoins2Objects1.length = 0;
gdjs.donazioneCode.GDCoins2Objects2.length = 0;
gdjs.donazioneCode.GDCoins3Objects1.length = 0;
gdjs.donazioneCode.GDCoins3Objects2.length = 0;
gdjs.donazioneCode.GDEmote_9595StarObjects1.length = 0;
gdjs.donazioneCode.GDEmote_9595StarObjects2.length = 0;
gdjs.donazioneCode.GDEmote_9595Star4Objects1.length = 0;
gdjs.donazioneCode.GDEmote_9595Star4Objects2.length = 0;
gdjs.donazioneCode.GDEmote_9595Star2Objects1.length = 0;
gdjs.donazioneCode.GDEmote_9595Star2Objects2.length = 0;
gdjs.donazioneCode.GDEmote_9595Star3Objects1.length = 0;
gdjs.donazioneCode.GDEmote_9595Star3Objects2.length = 0;
gdjs.donazioneCode.GDNewText5Objects1.length = 0;
gdjs.donazioneCode.GDNewText5Objects2.length = 0;
gdjs.donazioneCode.GDTIMEObjects1.length = 0;
gdjs.donazioneCode.GDTIMEObjects2.length = 0;
gdjs.donazioneCode.GDTrObjects1.length = 0;
gdjs.donazioneCode.GDTrObjects2.length = 0;
gdjs.donazioneCode.GDTranObjects1.length = 0;
gdjs.donazioneCode.GDTranObjects2.length = 0;
gdjs.donazioneCode.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.donazioneCode.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.donazioneCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.donazioneCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.donazioneCode.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.donazioneCode.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.donazioneCode.GDTIME2Objects1.length = 0;
gdjs.donazioneCode.GDTIME2Objects2.length = 0;
gdjs.donazioneCode.GDNewText6Objects1.length = 0;
gdjs.donazioneCode.GDNewText6Objects2.length = 0;
gdjs.donazioneCode.GDfwObjects1.length = 0;
gdjs.donazioneCode.GDfwObjects2.length = 0;
gdjs.donazioneCode.GDNewText242323Objects1.length = 0;
gdjs.donazioneCode.GDNewText242323Objects2.length = 0;
gdjs.donazioneCode.GDNewText35tyetrObjects1.length = 0;
gdjs.donazioneCode.GDNewText35tyetrObjects2.length = 0;

gdjs.donazioneCode.eventsList0(runtimeScene);
gdjs.donazioneCode.GDNewSpriteObjects1.length = 0;
gdjs.donazioneCode.GDNewSpriteObjects2.length = 0;
gdjs.donazioneCode.GDNewTextObjects1.length = 0;
gdjs.donazioneCode.GDNewTextObjects2.length = 0;
gdjs.donazioneCode.GDNewText2Objects1.length = 0;
gdjs.donazioneCode.GDNewText2Objects2.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects1.length = 0;
gdjs.donazioneCode.GDTransparentButtonWithWhiteBlueBorder4Objects2.length = 0;
gdjs.donazioneCode.GDNewText3Objects1.length = 0;
gdjs.donazioneCode.GDNewText3Objects2.length = 0;
gdjs.donazioneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.donazioneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.donazioneCode.GDPlayer2Objects1.length = 0;
gdjs.donazioneCode.GDPlayer2Objects2.length = 0;
gdjs.donazioneCode.GDPlayer3Objects1.length = 0;
gdjs.donazioneCode.GDPlayer3Objects2.length = 0;
gdjs.donazioneCode.GDPlayer4Objects1.length = 0;
gdjs.donazioneCode.GDPlayer4Objects2.length = 0;
gdjs.donazioneCode.GDNewSprite27eObjects1.length = 0;
gdjs.donazioneCode.GDNewSprite27eObjects2.length = 0;
gdjs.donazioneCode.GDnnObjects1.length = 0;
gdjs.donazioneCode.GDnnObjects2.length = 0;
gdjs.donazioneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.donazioneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.donazioneCode.GDCoinsObjects1.length = 0;
gdjs.donazioneCode.GDCoinsObjects2.length = 0;
gdjs.donazioneCode.GDCoins2Objects1.length = 0;
gdjs.donazioneCode.GDCoins2Objects2.length = 0;
gdjs.donazioneCode.GDCoins3Objects1.length = 0;
gdjs.donazioneCode.GDCoins3Objects2.length = 0;
gdjs.donazioneCode.GDEmote_9595StarObjects1.length = 0;
gdjs.donazioneCode.GDEmote_9595StarObjects2.length = 0;
gdjs.donazioneCode.GDEmote_9595Star4Objects1.length = 0;
gdjs.donazioneCode.GDEmote_9595Star4Objects2.length = 0;
gdjs.donazioneCode.GDEmote_9595Star2Objects1.length = 0;
gdjs.donazioneCode.GDEmote_9595Star2Objects2.length = 0;
gdjs.donazioneCode.GDEmote_9595Star3Objects1.length = 0;
gdjs.donazioneCode.GDEmote_9595Star3Objects2.length = 0;
gdjs.donazioneCode.GDNewText5Objects1.length = 0;
gdjs.donazioneCode.GDNewText5Objects2.length = 0;
gdjs.donazioneCode.GDTIMEObjects1.length = 0;
gdjs.donazioneCode.GDTIMEObjects2.length = 0;
gdjs.donazioneCode.GDTrObjects1.length = 0;
gdjs.donazioneCode.GDTrObjects2.length = 0;
gdjs.donazioneCode.GDTranObjects1.length = 0;
gdjs.donazioneCode.GDTranObjects2.length = 0;
gdjs.donazioneCode.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.donazioneCode.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.donazioneCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.donazioneCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.donazioneCode.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.donazioneCode.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.donazioneCode.GDTIME2Objects1.length = 0;
gdjs.donazioneCode.GDTIME2Objects2.length = 0;
gdjs.donazioneCode.GDNewText6Objects1.length = 0;
gdjs.donazioneCode.GDNewText6Objects2.length = 0;
gdjs.donazioneCode.GDfwObjects1.length = 0;
gdjs.donazioneCode.GDfwObjects2.length = 0;
gdjs.donazioneCode.GDNewText242323Objects1.length = 0;
gdjs.donazioneCode.GDNewText242323Objects2.length = 0;
gdjs.donazioneCode.GDNewText35tyetrObjects1.length = 0;
gdjs.donazioneCode.GDNewText35tyetrObjects2.length = 0;


return;

}

gdjs['donazioneCode'] = gdjs.donazioneCode;
