gdjs.WINCode = {};
gdjs.WINCode.localVariables = [];
gdjs.WINCode.idToCallbackMap = new Map();
gdjs.WINCode.GDNewSpriteObjects1= [];
gdjs.WINCode.GDNewSpriteObjects2= [];
gdjs.WINCode.GDNewTextObjects1= [];
gdjs.WINCode.GDNewTextObjects2= [];
gdjs.WINCode.GDRedButtonObjects1= [];
gdjs.WINCode.GDRedButtonObjects2= [];
gdjs.WINCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.WINCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.WINCode.GDNewSprite2Objects1= [];
gdjs.WINCode.GDNewSprite2Objects2= [];
gdjs.WINCode.GDNewText4Objects1= [];
gdjs.WINCode.GDNewText4Objects2= [];
gdjs.WINCode.GDPlayer2Objects1= [];
gdjs.WINCode.GDPlayer2Objects2= [];
gdjs.WINCode.GDPlayer3Objects1= [];
gdjs.WINCode.GDPlayer3Objects2= [];
gdjs.WINCode.GDPlayer4Objects1= [];
gdjs.WINCode.GDPlayer4Objects2= [];
gdjs.WINCode.GDNewSprite27eObjects1= [];
gdjs.WINCode.GDNewSprite27eObjects2= [];
gdjs.WINCode.GDnnObjects1= [];
gdjs.WINCode.GDnnObjects2= [];
gdjs.WINCode.GDBlackDecoratedButtonObjects1= [];
gdjs.WINCode.GDBlackDecoratedButtonObjects2= [];
gdjs.WINCode.GDCoinsObjects1= [];
gdjs.WINCode.GDCoinsObjects2= [];
gdjs.WINCode.GDCoins2Objects1= [];
gdjs.WINCode.GDCoins2Objects2= [];
gdjs.WINCode.GDCoins3Objects1= [];
gdjs.WINCode.GDCoins3Objects2= [];
gdjs.WINCode.GDEmote_9595StarObjects1= [];
gdjs.WINCode.GDEmote_9595StarObjects2= [];
gdjs.WINCode.GDEmote_9595Star4Objects1= [];
gdjs.WINCode.GDEmote_9595Star4Objects2= [];
gdjs.WINCode.GDEmote_9595Star2Objects1= [];
gdjs.WINCode.GDEmote_9595Star2Objects2= [];
gdjs.WINCode.GDEmote_9595Star3Objects1= [];
gdjs.WINCode.GDEmote_9595Star3Objects2= [];
gdjs.WINCode.GDNewText5Objects1= [];
gdjs.WINCode.GDNewText5Objects2= [];
gdjs.WINCode.GDTIMEObjects1= [];
gdjs.WINCode.GDTIMEObjects2= [];
gdjs.WINCode.GDTrObjects1= [];
gdjs.WINCode.GDTrObjects2= [];
gdjs.WINCode.GDTranObjects1= [];
gdjs.WINCode.GDTranObjects2= [];
gdjs.WINCode.GDLeft_9595arrow_9595buttonObjects1= [];
gdjs.WINCode.GDLeft_9595arrow_9595buttonObjects2= [];
gdjs.WINCode.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.WINCode.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.WINCode.GDTop_9595arrow_9595buttonObjects1= [];
gdjs.WINCode.GDTop_9595arrow_9595buttonObjects2= [];
gdjs.WINCode.GDTIME2Objects1= [];
gdjs.WINCode.GDTIME2Objects2= [];
gdjs.WINCode.GDNewText6Objects1= [];
gdjs.WINCode.GDNewText6Objects2= [];
gdjs.WINCode.GDfwObjects1= [];
gdjs.WINCode.GDfwObjects2= [];
gdjs.WINCode.GDNewText242323Objects1= [];
gdjs.WINCode.GDNewText242323Objects2= [];
gdjs.WINCode.GDNewText35tyetrObjects1= [];
gdjs.WINCode.GDNewText35tyetrObjects2= [];
gdjs.WINCode.GDINFO2Objects1= [];
gdjs.WINCode.GDINFO2Objects2= [];
gdjs.WINCode.GDINFOObjects1= [];
gdjs.WINCode.GDINFOObjects2= [];


gdjs.WINCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.WINCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.WINCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.WINCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), null));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.WINCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WINCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.WINCode.GDRedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WINCode.GDRedButtonObjects1[k] = gdjs.WINCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.WINCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INIZIO", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac", false, 10, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WINCode.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WINCode.GDEmote_9595Star2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star3"), gdjs.WINCode.GDEmote_9595Star3Objects1);
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595Star3Objects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595Star3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WINCode.GDEmote_9595StarObjects1);
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WINCode.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WINCode.GDEmote_9595Star2Objects1);
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WINCode.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WINCode.GDEmote_9595Star2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star3"), gdjs.WINCode.GDEmote_9595Star3Objects1);
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595Star3Objects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595Star3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WINCode.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WINCode.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26917124);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "just-relax-11157.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Music")), 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText35tyetr"), gdjs.WINCode.GDNewText35tyetrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WINCode.GDNewText35tyetrObjects1.length;i<l;++i) {
    if ( gdjs.WINCode.GDNewText35tyetrObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.WINCode.GDNewText35tyetrObjects1[k] = gdjs.WINCode.GDNewText35tyetrObjects1[i];
        ++k;
    }
}
gdjs.WINCode.GDNewText35tyetrObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.WINCode.GDNewText35tyetrObjects1 */
{for(var i = 0, len = gdjs.WINCode.GDNewText35tyetrObjects1.length ;i < len;++i) {
    gdjs.WINCode.GDNewText35tyetrObjects1[i].setBold(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText35tyetr"), gdjs.WINCode.GDNewText35tyetrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WINCode.GDNewText35tyetrObjects1.length;i<l;++i) {
    if ( !(gdjs.WINCode.GDNewText35tyetrObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.WINCode.GDNewText35tyetrObjects1[k] = gdjs.WINCode.GDNewText35tyetrObjects1[i];
        ++k;
    }
}
gdjs.WINCode.GDNewText35tyetrObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.WINCode.GDNewText35tyetrObjects1 */
{for(var i = 0, len = gdjs.WINCode.GDNewText35tyetrObjects1.length ;i < len;++i) {
    gdjs.WINCode.GDNewText35tyetrObjects1[i].setBold(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText35tyetr"), gdjs.WINCode.GDNewText35tyetrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WINCode.GDNewText35tyetrObjects1.length;i<l;++i) {
    if ( gdjs.WINCode.GDNewText35tyetrObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.WINCode.GDNewText35tyetrObjects1[k] = gdjs.WINCode.GDNewText35tyetrObjects1[i];
        ++k;
    }
}
gdjs.WINCode.GDNewText35tyetrObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/sprite_end_script/", runtimeScene);
}
}

}


};

gdjs.WINCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WINCode.GDNewSpriteObjects1.length = 0;
gdjs.WINCode.GDNewSpriteObjects2.length = 0;
gdjs.WINCode.GDNewTextObjects1.length = 0;
gdjs.WINCode.GDNewTextObjects2.length = 0;
gdjs.WINCode.GDRedButtonObjects1.length = 0;
gdjs.WINCode.GDRedButtonObjects2.length = 0;
gdjs.WINCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.WINCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.WINCode.GDNewSprite2Objects1.length = 0;
gdjs.WINCode.GDNewSprite2Objects2.length = 0;
gdjs.WINCode.GDNewText4Objects1.length = 0;
gdjs.WINCode.GDNewText4Objects2.length = 0;
gdjs.WINCode.GDPlayer2Objects1.length = 0;
gdjs.WINCode.GDPlayer2Objects2.length = 0;
gdjs.WINCode.GDPlayer3Objects1.length = 0;
gdjs.WINCode.GDPlayer3Objects2.length = 0;
gdjs.WINCode.GDPlayer4Objects1.length = 0;
gdjs.WINCode.GDPlayer4Objects2.length = 0;
gdjs.WINCode.GDNewSprite27eObjects1.length = 0;
gdjs.WINCode.GDNewSprite27eObjects2.length = 0;
gdjs.WINCode.GDnnObjects1.length = 0;
gdjs.WINCode.GDnnObjects2.length = 0;
gdjs.WINCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.WINCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.WINCode.GDCoinsObjects1.length = 0;
gdjs.WINCode.GDCoinsObjects2.length = 0;
gdjs.WINCode.GDCoins2Objects1.length = 0;
gdjs.WINCode.GDCoins2Objects2.length = 0;
gdjs.WINCode.GDCoins3Objects1.length = 0;
gdjs.WINCode.GDCoins3Objects2.length = 0;
gdjs.WINCode.GDEmote_9595StarObjects1.length = 0;
gdjs.WINCode.GDEmote_9595StarObjects2.length = 0;
gdjs.WINCode.GDEmote_9595Star4Objects1.length = 0;
gdjs.WINCode.GDEmote_9595Star4Objects2.length = 0;
gdjs.WINCode.GDEmote_9595Star2Objects1.length = 0;
gdjs.WINCode.GDEmote_9595Star2Objects2.length = 0;
gdjs.WINCode.GDEmote_9595Star3Objects1.length = 0;
gdjs.WINCode.GDEmote_9595Star3Objects2.length = 0;
gdjs.WINCode.GDNewText5Objects1.length = 0;
gdjs.WINCode.GDNewText5Objects2.length = 0;
gdjs.WINCode.GDTIMEObjects1.length = 0;
gdjs.WINCode.GDTIMEObjects2.length = 0;
gdjs.WINCode.GDTrObjects1.length = 0;
gdjs.WINCode.GDTrObjects2.length = 0;
gdjs.WINCode.GDTranObjects1.length = 0;
gdjs.WINCode.GDTranObjects2.length = 0;
gdjs.WINCode.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.WINCode.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.WINCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.WINCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.WINCode.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.WINCode.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.WINCode.GDTIME2Objects1.length = 0;
gdjs.WINCode.GDTIME2Objects2.length = 0;
gdjs.WINCode.GDNewText6Objects1.length = 0;
gdjs.WINCode.GDNewText6Objects2.length = 0;
gdjs.WINCode.GDfwObjects1.length = 0;
gdjs.WINCode.GDfwObjects2.length = 0;
gdjs.WINCode.GDNewText242323Objects1.length = 0;
gdjs.WINCode.GDNewText242323Objects2.length = 0;
gdjs.WINCode.GDNewText35tyetrObjects1.length = 0;
gdjs.WINCode.GDNewText35tyetrObjects2.length = 0;
gdjs.WINCode.GDINFO2Objects1.length = 0;
gdjs.WINCode.GDINFO2Objects2.length = 0;
gdjs.WINCode.GDINFOObjects1.length = 0;
gdjs.WINCode.GDINFOObjects2.length = 0;

gdjs.WINCode.eventsList0(runtimeScene);
gdjs.WINCode.GDNewSpriteObjects1.length = 0;
gdjs.WINCode.GDNewSpriteObjects2.length = 0;
gdjs.WINCode.GDNewTextObjects1.length = 0;
gdjs.WINCode.GDNewTextObjects2.length = 0;
gdjs.WINCode.GDRedButtonObjects1.length = 0;
gdjs.WINCode.GDRedButtonObjects2.length = 0;
gdjs.WINCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.WINCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.WINCode.GDNewSprite2Objects1.length = 0;
gdjs.WINCode.GDNewSprite2Objects2.length = 0;
gdjs.WINCode.GDNewText4Objects1.length = 0;
gdjs.WINCode.GDNewText4Objects2.length = 0;
gdjs.WINCode.GDPlayer2Objects1.length = 0;
gdjs.WINCode.GDPlayer2Objects2.length = 0;
gdjs.WINCode.GDPlayer3Objects1.length = 0;
gdjs.WINCode.GDPlayer3Objects2.length = 0;
gdjs.WINCode.GDPlayer4Objects1.length = 0;
gdjs.WINCode.GDPlayer4Objects2.length = 0;
gdjs.WINCode.GDNewSprite27eObjects1.length = 0;
gdjs.WINCode.GDNewSprite27eObjects2.length = 0;
gdjs.WINCode.GDnnObjects1.length = 0;
gdjs.WINCode.GDnnObjects2.length = 0;
gdjs.WINCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.WINCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.WINCode.GDCoinsObjects1.length = 0;
gdjs.WINCode.GDCoinsObjects2.length = 0;
gdjs.WINCode.GDCoins2Objects1.length = 0;
gdjs.WINCode.GDCoins2Objects2.length = 0;
gdjs.WINCode.GDCoins3Objects1.length = 0;
gdjs.WINCode.GDCoins3Objects2.length = 0;
gdjs.WINCode.GDEmote_9595StarObjects1.length = 0;
gdjs.WINCode.GDEmote_9595StarObjects2.length = 0;
gdjs.WINCode.GDEmote_9595Star4Objects1.length = 0;
gdjs.WINCode.GDEmote_9595Star4Objects2.length = 0;
gdjs.WINCode.GDEmote_9595Star2Objects1.length = 0;
gdjs.WINCode.GDEmote_9595Star2Objects2.length = 0;
gdjs.WINCode.GDEmote_9595Star3Objects1.length = 0;
gdjs.WINCode.GDEmote_9595Star3Objects2.length = 0;
gdjs.WINCode.GDNewText5Objects1.length = 0;
gdjs.WINCode.GDNewText5Objects2.length = 0;
gdjs.WINCode.GDTIMEObjects1.length = 0;
gdjs.WINCode.GDTIMEObjects2.length = 0;
gdjs.WINCode.GDTrObjects1.length = 0;
gdjs.WINCode.GDTrObjects2.length = 0;
gdjs.WINCode.GDTranObjects1.length = 0;
gdjs.WINCode.GDTranObjects2.length = 0;
gdjs.WINCode.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.WINCode.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.WINCode.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.WINCode.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.WINCode.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.WINCode.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.WINCode.GDTIME2Objects1.length = 0;
gdjs.WINCode.GDTIME2Objects2.length = 0;
gdjs.WINCode.GDNewText6Objects1.length = 0;
gdjs.WINCode.GDNewText6Objects2.length = 0;
gdjs.WINCode.GDfwObjects1.length = 0;
gdjs.WINCode.GDfwObjects2.length = 0;
gdjs.WINCode.GDNewText242323Objects1.length = 0;
gdjs.WINCode.GDNewText242323Objects2.length = 0;
gdjs.WINCode.GDNewText35tyetrObjects1.length = 0;
gdjs.WINCode.GDNewText35tyetrObjects2.length = 0;
gdjs.WINCode.GDINFO2Objects1.length = 0;
gdjs.WINCode.GDINFO2Objects2.length = 0;
gdjs.WINCode.GDINFOObjects1.length = 0;
gdjs.WINCode.GDINFOObjects2.length = 0;


return;

}

gdjs['WINCode'] = gdjs.WINCode;
