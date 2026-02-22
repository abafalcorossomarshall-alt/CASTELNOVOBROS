gdjs.LIVELLICode = {};
gdjs.LIVELLICode.localVariables = [];
gdjs.LIVELLICode.idToCallbackMap = new Map();
gdjs.LIVELLICode.GDNewSpriteObjects1= [];
gdjs.LIVELLICode.GDNewSpriteObjects2= [];
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.LIVELLICode.GDRedButtonWithShadowObjects1= [];
gdjs.LIVELLICode.GDRedButtonWithShadowObjects2= [];
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame2Objects1= [];
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame2Objects2= [];
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame3Objects1= [];
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame3Objects2= [];
gdjs.LIVELLICode.GDNewSprite2Objects1= [];
gdjs.LIVELLICode.GDNewSprite2Objects2= [];
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1= [];
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects2= [];
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1= [];
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects2= [];
gdjs.LIVELLICode.GDPlayer2Objects1= [];
gdjs.LIVELLICode.GDPlayer2Objects2= [];
gdjs.LIVELLICode.GDPlayer3Objects1= [];
gdjs.LIVELLICode.GDPlayer3Objects2= [];
gdjs.LIVELLICode.GDPlayer4Objects1= [];
gdjs.LIVELLICode.GDPlayer4Objects2= [];
gdjs.LIVELLICode.GDNewSprite27eObjects1= [];
gdjs.LIVELLICode.GDNewSprite27eObjects2= [];
gdjs.LIVELLICode.GDnnObjects1= [];
gdjs.LIVELLICode.GDnnObjects2= [];
gdjs.LIVELLICode.GDBlackDecoratedButtonObjects1= [];
gdjs.LIVELLICode.GDBlackDecoratedButtonObjects2= [];
gdjs.LIVELLICode.GDCoinsObjects1= [];
gdjs.LIVELLICode.GDCoinsObjects2= [];
gdjs.LIVELLICode.GDCoins2Objects1= [];
gdjs.LIVELLICode.GDCoins2Objects2= [];
gdjs.LIVELLICode.GDCoins3Objects1= [];
gdjs.LIVELLICode.GDCoins3Objects2= [];
gdjs.LIVELLICode.GDEmote_9595StarObjects1= [];
gdjs.LIVELLICode.GDEmote_9595StarObjects2= [];
gdjs.LIVELLICode.GDEmote_9595Star4Objects1= [];
gdjs.LIVELLICode.GDEmote_9595Star4Objects2= [];
gdjs.LIVELLICode.GDEmote_9595Star2Objects1= [];
gdjs.LIVELLICode.GDEmote_9595Star2Objects2= [];
gdjs.LIVELLICode.GDEmote_9595Star3Objects1= [];
gdjs.LIVELLICode.GDEmote_9595Star3Objects2= [];
gdjs.LIVELLICode.GDNewText5Objects1= [];
gdjs.LIVELLICode.GDNewText5Objects2= [];
gdjs.LIVELLICode.GDTIMEObjects1= [];
gdjs.LIVELLICode.GDTIMEObjects2= [];
gdjs.LIVELLICode.GDTrObjects1= [];
gdjs.LIVELLICode.GDTrObjects2= [];
gdjs.LIVELLICode.GDTranObjects1= [];
gdjs.LIVELLICode.GDTranObjects2= [];
gdjs.LIVELLICode.GDLeft_9595arrow_9595buttonObjects1= [];
gdjs.LIVELLICode.GDLeft_9595arrow_9595buttonObjects2= [];
gdjs.LIVELLICode.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.LIVELLICode.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.LIVELLICode.GDTop_9595arrow_9595buttonObjects1= [];
gdjs.LIVELLICode.GDTop_9595arrow_9595buttonObjects2= [];
gdjs.LIVELLICode.GDTIME2Objects1= [];
gdjs.LIVELLICode.GDTIME2Objects2= [];
gdjs.LIVELLICode.GDNewText6Objects1= [];
gdjs.LIVELLICode.GDNewText6Objects2= [];
gdjs.LIVELLICode.GDfwObjects1= [];
gdjs.LIVELLICode.GDfwObjects2= [];
gdjs.LIVELLICode.GDNewText242323Objects1= [];
gdjs.LIVELLICode.GDNewText242323Objects2= [];
gdjs.LIVELLICode.GDNewText35tyetrObjects1= [];
gdjs.LIVELLICode.GDNewText35tyetrObjects2= [];


gdjs.LIVELLICode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.LIVELLICode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LIVELLICode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.LIVELLICode.GDRedButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LIVELLICode.GDRedButtonWithShadowObjects1[k] = gdjs.LIVELLICode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.LIVELLICode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INIZIO", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder2"), gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length;i<l;++i) {
    if ( gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1[k] = gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1[i];
        ++k;
    }
}
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder3"), gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length;i<l;++i) {
    if ( gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1[k] = gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1[i];
        ++k;
    }
}
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}
}

}


};

gdjs.LIVELLICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LIVELLICode.GDNewSpriteObjects1.length = 0;
gdjs.LIVELLICode.GDNewSpriteObjects2.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.LIVELLICode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.LIVELLICode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame2Objects1.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame2Objects2.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame3Objects1.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame3Objects2.length = 0;
gdjs.LIVELLICode.GDNewSprite2Objects1.length = 0;
gdjs.LIVELLICode.GDNewSprite2Objects2.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;
gdjs.LIVELLICode.GDPlayer2Objects1.length = 0;
gdjs.LIVELLICode.GDPlayer2Objects2.length = 0;
gdjs.LIVELLICode.GDPlayer3Objects1.length = 0;
gdjs.LIVELLICode.GDPlayer3Objects2.length = 0;
gdjs.LIVELLICode.GDPlayer4Objects1.length = 0;
gdjs.LIVELLICode.GDPlayer4Objects2.length = 0;
gdjs.LIVELLICode.GDNewSprite27eObjects1.length = 0;
gdjs.LIVELLICode.GDNewSprite27eObjects2.length = 0;
gdjs.LIVELLICode.GDnnObjects1.length = 0;
gdjs.LIVELLICode.GDnnObjects2.length = 0;
gdjs.LIVELLICode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.LIVELLICode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.LIVELLICode.GDCoinsObjects1.length = 0;
gdjs.LIVELLICode.GDCoinsObjects2.length = 0;
gdjs.LIVELLICode.GDCoins2Objects1.length = 0;
gdjs.LIVELLICode.GDCoins2Objects2.length = 0;
gdjs.LIVELLICode.GDCoins3Objects1.length = 0;
gdjs.LIVELLICode.GDCoins3Objects2.length = 0;
gdjs.LIVELLICode.GDEmote_9595StarObjects1.length = 0;
gdjs.LIVELLICode.GDEmote_9595StarObjects2.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star4Objects1.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star4Objects2.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star2Objects1.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star2Objects2.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star3Objects1.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star3Objects2.length = 0;
gdjs.LIVELLICode.GDNewText5Objects1.length = 0;
gdjs.LIVELLICode.GDNewText5Objects2.length = 0;
gdjs.LIVELLICode.GDTIMEObjects1.length = 0;
gdjs.LIVELLICode.GDTIMEObjects2.length = 0;
gdjs.LIVELLICode.GDTrObjects1.length = 0;
gdjs.LIVELLICode.GDTrObjects2.length = 0;
gdjs.LIVELLICode.GDTranObjects1.length = 0;
gdjs.LIVELLICode.GDTranObjects2.length = 0;
gdjs.LIVELLICode.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.LIVELLICode.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.LIVELLICode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.LIVELLICode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.LIVELLICode.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.LIVELLICode.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.LIVELLICode.GDTIME2Objects1.length = 0;
gdjs.LIVELLICode.GDTIME2Objects2.length = 0;
gdjs.LIVELLICode.GDNewText6Objects1.length = 0;
gdjs.LIVELLICode.GDNewText6Objects2.length = 0;
gdjs.LIVELLICode.GDfwObjects1.length = 0;
gdjs.LIVELLICode.GDfwObjects2.length = 0;
gdjs.LIVELLICode.GDNewText242323Objects1.length = 0;
gdjs.LIVELLICode.GDNewText242323Objects2.length = 0;
gdjs.LIVELLICode.GDNewText35tyetrObjects1.length = 0;
gdjs.LIVELLICode.GDNewText35tyetrObjects2.length = 0;

gdjs.LIVELLICode.eventsList0(runtimeScene);
gdjs.LIVELLICode.GDNewSpriteObjects1.length = 0;
gdjs.LIVELLICode.GDNewSpriteObjects2.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.LIVELLICode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.LIVELLICode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame2Objects1.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame2Objects2.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame3Objects1.length = 0;
gdjs.LIVELLICode.GDPurpleButtonWithStoneFrame3Objects2.length = 0;
gdjs.LIVELLICode.GDNewSprite2Objects1.length = 0;
gdjs.LIVELLICode.GDNewSprite2Objects2.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects1.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder2Objects2.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects1.length = 0;
gdjs.LIVELLICode.GDTransparentButtonWithWhiteBlueBorder3Objects2.length = 0;
gdjs.LIVELLICode.GDPlayer2Objects1.length = 0;
gdjs.LIVELLICode.GDPlayer2Objects2.length = 0;
gdjs.LIVELLICode.GDPlayer3Objects1.length = 0;
gdjs.LIVELLICode.GDPlayer3Objects2.length = 0;
gdjs.LIVELLICode.GDPlayer4Objects1.length = 0;
gdjs.LIVELLICode.GDPlayer4Objects2.length = 0;
gdjs.LIVELLICode.GDNewSprite27eObjects1.length = 0;
gdjs.LIVELLICode.GDNewSprite27eObjects2.length = 0;
gdjs.LIVELLICode.GDnnObjects1.length = 0;
gdjs.LIVELLICode.GDnnObjects2.length = 0;
gdjs.LIVELLICode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.LIVELLICode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.LIVELLICode.GDCoinsObjects1.length = 0;
gdjs.LIVELLICode.GDCoinsObjects2.length = 0;
gdjs.LIVELLICode.GDCoins2Objects1.length = 0;
gdjs.LIVELLICode.GDCoins2Objects2.length = 0;
gdjs.LIVELLICode.GDCoins3Objects1.length = 0;
gdjs.LIVELLICode.GDCoins3Objects2.length = 0;
gdjs.LIVELLICode.GDEmote_9595StarObjects1.length = 0;
gdjs.LIVELLICode.GDEmote_9595StarObjects2.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star4Objects1.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star4Objects2.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star2Objects1.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star2Objects2.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star3Objects1.length = 0;
gdjs.LIVELLICode.GDEmote_9595Star3Objects2.length = 0;
gdjs.LIVELLICode.GDNewText5Objects1.length = 0;
gdjs.LIVELLICode.GDNewText5Objects2.length = 0;
gdjs.LIVELLICode.GDTIMEObjects1.length = 0;
gdjs.LIVELLICode.GDTIMEObjects2.length = 0;
gdjs.LIVELLICode.GDTrObjects1.length = 0;
gdjs.LIVELLICode.GDTrObjects2.length = 0;
gdjs.LIVELLICode.GDTranObjects1.length = 0;
gdjs.LIVELLICode.GDTranObjects2.length = 0;
gdjs.LIVELLICode.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.LIVELLICode.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.LIVELLICode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.LIVELLICode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.LIVELLICode.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.LIVELLICode.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.LIVELLICode.GDTIME2Objects1.length = 0;
gdjs.LIVELLICode.GDTIME2Objects2.length = 0;
gdjs.LIVELLICode.GDNewText6Objects1.length = 0;
gdjs.LIVELLICode.GDNewText6Objects2.length = 0;
gdjs.LIVELLICode.GDfwObjects1.length = 0;
gdjs.LIVELLICode.GDfwObjects2.length = 0;
gdjs.LIVELLICode.GDNewText242323Objects1.length = 0;
gdjs.LIVELLICode.GDNewText242323Objects2.length = 0;
gdjs.LIVELLICode.GDNewText35tyetrObjects1.length = 0;
gdjs.LIVELLICode.GDNewText35tyetrObjects2.length = 0;


return;

}

gdjs['LIVELLICode'] = gdjs.LIVELLICode;
