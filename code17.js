gdjs.INFO_452Code = {};
gdjs.INFO_452Code.localVariables = [];
gdjs.INFO_452Code.idToCallbackMap = new Map();
gdjs.INFO_452Code.GDNewSpriteObjects1= [];
gdjs.INFO_452Code.GDNewSpriteObjects2= [];
gdjs.INFO_452Code.GDNewSprite2Objects1= [];
gdjs.INFO_452Code.GDNewSprite2Objects2= [];
gdjs.INFO_452Code.GDNewSprite3Objects1= [];
gdjs.INFO_452Code.GDNewSprite3Objects2= [];
gdjs.INFO_452Code.GDRedButtonWithShadowObjects1= [];
gdjs.INFO_452Code.GDRedButtonWithShadowObjects2= [];
gdjs.INFO_452Code.GDPlayer2Objects1= [];
gdjs.INFO_452Code.GDPlayer2Objects2= [];
gdjs.INFO_452Code.GDPlayer3Objects1= [];
gdjs.INFO_452Code.GDPlayer3Objects2= [];
gdjs.INFO_452Code.GDPlayer4Objects1= [];
gdjs.INFO_452Code.GDPlayer4Objects2= [];
gdjs.INFO_452Code.GDNewSprite27eObjects1= [];
gdjs.INFO_452Code.GDNewSprite27eObjects2= [];
gdjs.INFO_452Code.GDnnObjects1= [];
gdjs.INFO_452Code.GDnnObjects2= [];
gdjs.INFO_452Code.GDBlackDecoratedButtonObjects1= [];
gdjs.INFO_452Code.GDBlackDecoratedButtonObjects2= [];
gdjs.INFO_452Code.GDCoinsObjects1= [];
gdjs.INFO_452Code.GDCoinsObjects2= [];
gdjs.INFO_452Code.GDCoins2Objects1= [];
gdjs.INFO_452Code.GDCoins2Objects2= [];
gdjs.INFO_452Code.GDCoins3Objects1= [];
gdjs.INFO_452Code.GDCoins3Objects2= [];
gdjs.INFO_452Code.GDEmote_9595StarObjects1= [];
gdjs.INFO_452Code.GDEmote_9595StarObjects2= [];
gdjs.INFO_452Code.GDEmote_9595Star4Objects1= [];
gdjs.INFO_452Code.GDEmote_9595Star4Objects2= [];
gdjs.INFO_452Code.GDEmote_9595Star2Objects1= [];
gdjs.INFO_452Code.GDEmote_9595Star2Objects2= [];
gdjs.INFO_452Code.GDEmote_9595Star3Objects1= [];
gdjs.INFO_452Code.GDEmote_9595Star3Objects2= [];
gdjs.INFO_452Code.GDNewText5Objects1= [];
gdjs.INFO_452Code.GDNewText5Objects2= [];
gdjs.INFO_452Code.GDTIMEObjects1= [];
gdjs.INFO_452Code.GDTIMEObjects2= [];
gdjs.INFO_452Code.GDTrObjects1= [];
gdjs.INFO_452Code.GDTrObjects2= [];
gdjs.INFO_452Code.GDTranObjects1= [];
gdjs.INFO_452Code.GDTranObjects2= [];
gdjs.INFO_452Code.GDLeft_9595arrow_9595buttonObjects1= [];
gdjs.INFO_452Code.GDLeft_9595arrow_9595buttonObjects2= [];
gdjs.INFO_452Code.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.INFO_452Code.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.INFO_452Code.GDTop_9595arrow_9595buttonObjects1= [];
gdjs.INFO_452Code.GDTop_9595arrow_9595buttonObjects2= [];
gdjs.INFO_452Code.GDTIME2Objects1= [];
gdjs.INFO_452Code.GDTIME2Objects2= [];
gdjs.INFO_452Code.GDNewText6Objects1= [];
gdjs.INFO_452Code.GDNewText6Objects2= [];
gdjs.INFO_452Code.GDfwObjects1= [];
gdjs.INFO_452Code.GDfwObjects2= [];
gdjs.INFO_452Code.GDNewText242323Objects1= [];
gdjs.INFO_452Code.GDNewText242323Objects2= [];
gdjs.INFO_452Code.GDNewText35tyetrObjects1= [];
gdjs.INFO_452Code.GDNewText35tyetrObjects2= [];
gdjs.INFO_452Code.GDINFO2Objects1= [];
gdjs.INFO_452Code.GDINFO2Objects2= [];
gdjs.INFO_452Code.GDINFOObjects1= [];
gdjs.INFO_452Code.GDINFOObjects2= [];


gdjs.INFO_452Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.INFO_452Code.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INFO_452Code.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.INFO_452Code.GDRedButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.INFO_452Code.GDRedButtonWithShadowObjects1[k] = gdjs.INFO_452Code.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.INFO_452Code.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs.INFO_452Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INFO_452Code.GDNewSpriteObjects1.length = 0;
gdjs.INFO_452Code.GDNewSpriteObjects2.length = 0;
gdjs.INFO_452Code.GDNewSprite2Objects1.length = 0;
gdjs.INFO_452Code.GDNewSprite2Objects2.length = 0;
gdjs.INFO_452Code.GDNewSprite3Objects1.length = 0;
gdjs.INFO_452Code.GDNewSprite3Objects2.length = 0;
gdjs.INFO_452Code.GDRedButtonWithShadowObjects1.length = 0;
gdjs.INFO_452Code.GDRedButtonWithShadowObjects2.length = 0;
gdjs.INFO_452Code.GDPlayer2Objects1.length = 0;
gdjs.INFO_452Code.GDPlayer2Objects2.length = 0;
gdjs.INFO_452Code.GDPlayer3Objects1.length = 0;
gdjs.INFO_452Code.GDPlayer3Objects2.length = 0;
gdjs.INFO_452Code.GDPlayer4Objects1.length = 0;
gdjs.INFO_452Code.GDPlayer4Objects2.length = 0;
gdjs.INFO_452Code.GDNewSprite27eObjects1.length = 0;
gdjs.INFO_452Code.GDNewSprite27eObjects2.length = 0;
gdjs.INFO_452Code.GDnnObjects1.length = 0;
gdjs.INFO_452Code.GDnnObjects2.length = 0;
gdjs.INFO_452Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.INFO_452Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.INFO_452Code.GDCoinsObjects1.length = 0;
gdjs.INFO_452Code.GDCoinsObjects2.length = 0;
gdjs.INFO_452Code.GDCoins2Objects1.length = 0;
gdjs.INFO_452Code.GDCoins2Objects2.length = 0;
gdjs.INFO_452Code.GDCoins3Objects1.length = 0;
gdjs.INFO_452Code.GDCoins3Objects2.length = 0;
gdjs.INFO_452Code.GDEmote_9595StarObjects1.length = 0;
gdjs.INFO_452Code.GDEmote_9595StarObjects2.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star4Objects1.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star4Objects2.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star2Objects1.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star2Objects2.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star3Objects1.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star3Objects2.length = 0;
gdjs.INFO_452Code.GDNewText5Objects1.length = 0;
gdjs.INFO_452Code.GDNewText5Objects2.length = 0;
gdjs.INFO_452Code.GDTIMEObjects1.length = 0;
gdjs.INFO_452Code.GDTIMEObjects2.length = 0;
gdjs.INFO_452Code.GDTrObjects1.length = 0;
gdjs.INFO_452Code.GDTrObjects2.length = 0;
gdjs.INFO_452Code.GDTranObjects1.length = 0;
gdjs.INFO_452Code.GDTranObjects2.length = 0;
gdjs.INFO_452Code.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.INFO_452Code.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.INFO_452Code.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.INFO_452Code.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.INFO_452Code.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.INFO_452Code.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.INFO_452Code.GDTIME2Objects1.length = 0;
gdjs.INFO_452Code.GDTIME2Objects2.length = 0;
gdjs.INFO_452Code.GDNewText6Objects1.length = 0;
gdjs.INFO_452Code.GDNewText6Objects2.length = 0;
gdjs.INFO_452Code.GDfwObjects1.length = 0;
gdjs.INFO_452Code.GDfwObjects2.length = 0;
gdjs.INFO_452Code.GDNewText242323Objects1.length = 0;
gdjs.INFO_452Code.GDNewText242323Objects2.length = 0;
gdjs.INFO_452Code.GDNewText35tyetrObjects1.length = 0;
gdjs.INFO_452Code.GDNewText35tyetrObjects2.length = 0;
gdjs.INFO_452Code.GDINFO2Objects1.length = 0;
gdjs.INFO_452Code.GDINFO2Objects2.length = 0;
gdjs.INFO_452Code.GDINFOObjects1.length = 0;
gdjs.INFO_452Code.GDINFOObjects2.length = 0;

gdjs.INFO_452Code.eventsList0(runtimeScene);
gdjs.INFO_452Code.GDNewSpriteObjects1.length = 0;
gdjs.INFO_452Code.GDNewSpriteObjects2.length = 0;
gdjs.INFO_452Code.GDNewSprite2Objects1.length = 0;
gdjs.INFO_452Code.GDNewSprite2Objects2.length = 0;
gdjs.INFO_452Code.GDNewSprite3Objects1.length = 0;
gdjs.INFO_452Code.GDNewSprite3Objects2.length = 0;
gdjs.INFO_452Code.GDRedButtonWithShadowObjects1.length = 0;
gdjs.INFO_452Code.GDRedButtonWithShadowObjects2.length = 0;
gdjs.INFO_452Code.GDPlayer2Objects1.length = 0;
gdjs.INFO_452Code.GDPlayer2Objects2.length = 0;
gdjs.INFO_452Code.GDPlayer3Objects1.length = 0;
gdjs.INFO_452Code.GDPlayer3Objects2.length = 0;
gdjs.INFO_452Code.GDPlayer4Objects1.length = 0;
gdjs.INFO_452Code.GDPlayer4Objects2.length = 0;
gdjs.INFO_452Code.GDNewSprite27eObjects1.length = 0;
gdjs.INFO_452Code.GDNewSprite27eObjects2.length = 0;
gdjs.INFO_452Code.GDnnObjects1.length = 0;
gdjs.INFO_452Code.GDnnObjects2.length = 0;
gdjs.INFO_452Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.INFO_452Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.INFO_452Code.GDCoinsObjects1.length = 0;
gdjs.INFO_452Code.GDCoinsObjects2.length = 0;
gdjs.INFO_452Code.GDCoins2Objects1.length = 0;
gdjs.INFO_452Code.GDCoins2Objects2.length = 0;
gdjs.INFO_452Code.GDCoins3Objects1.length = 0;
gdjs.INFO_452Code.GDCoins3Objects2.length = 0;
gdjs.INFO_452Code.GDEmote_9595StarObjects1.length = 0;
gdjs.INFO_452Code.GDEmote_9595StarObjects2.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star4Objects1.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star4Objects2.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star2Objects1.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star2Objects2.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star3Objects1.length = 0;
gdjs.INFO_452Code.GDEmote_9595Star3Objects2.length = 0;
gdjs.INFO_452Code.GDNewText5Objects1.length = 0;
gdjs.INFO_452Code.GDNewText5Objects2.length = 0;
gdjs.INFO_452Code.GDTIMEObjects1.length = 0;
gdjs.INFO_452Code.GDTIMEObjects2.length = 0;
gdjs.INFO_452Code.GDTrObjects1.length = 0;
gdjs.INFO_452Code.GDTrObjects2.length = 0;
gdjs.INFO_452Code.GDTranObjects1.length = 0;
gdjs.INFO_452Code.GDTranObjects2.length = 0;
gdjs.INFO_452Code.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.INFO_452Code.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.INFO_452Code.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.INFO_452Code.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.INFO_452Code.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.INFO_452Code.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.INFO_452Code.GDTIME2Objects1.length = 0;
gdjs.INFO_452Code.GDTIME2Objects2.length = 0;
gdjs.INFO_452Code.GDNewText6Objects1.length = 0;
gdjs.INFO_452Code.GDNewText6Objects2.length = 0;
gdjs.INFO_452Code.GDfwObjects1.length = 0;
gdjs.INFO_452Code.GDfwObjects2.length = 0;
gdjs.INFO_452Code.GDNewText242323Objects1.length = 0;
gdjs.INFO_452Code.GDNewText242323Objects2.length = 0;
gdjs.INFO_452Code.GDNewText35tyetrObjects1.length = 0;
gdjs.INFO_452Code.GDNewText35tyetrObjects2.length = 0;
gdjs.INFO_452Code.GDINFO2Objects1.length = 0;
gdjs.INFO_452Code.GDINFO2Objects2.length = 0;
gdjs.INFO_452Code.GDINFOObjects1.length = 0;
gdjs.INFO_452Code.GDINFOObjects2.length = 0;


return;

}

gdjs['INFO_452Code'] = gdjs.INFO_452Code;
