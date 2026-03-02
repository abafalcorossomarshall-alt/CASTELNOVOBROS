gdjs.WIN3Code = {};
gdjs.WIN3Code.localVariables = [];
gdjs.WIN3Code.idToCallbackMap = new Map();
gdjs.WIN3Code.GDNewSpriteObjects1= [];
gdjs.WIN3Code.GDNewSpriteObjects2= [];
gdjs.WIN3Code.GDNewTextObjects1= [];
gdjs.WIN3Code.GDNewTextObjects2= [];
gdjs.WIN3Code.GDRedButtonObjects1= [];
gdjs.WIN3Code.GDRedButtonObjects2= [];
gdjs.WIN3Code.GDNewText2Objects1= [];
gdjs.WIN3Code.GDNewText2Objects2= [];
gdjs.WIN3Code.GDTitoloObjects1= [];
gdjs.WIN3Code.GDTitoloObjects2= [];
gdjs.WIN3Code.GDNewText3Objects1= [];
gdjs.WIN3Code.GDNewText3Objects2= [];
gdjs.WIN3Code.GDNewText4Objects1= [];
gdjs.WIN3Code.GDNewText4Objects2= [];
gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.WIN3Code.GDNewText7Objects1= [];
gdjs.WIN3Code.GDNewText7Objects2= [];
gdjs.WIN3Code.GDPlayer2Objects1= [];
gdjs.WIN3Code.GDPlayer2Objects2= [];
gdjs.WIN3Code.GDPlayer3Objects1= [];
gdjs.WIN3Code.GDPlayer3Objects2= [];
gdjs.WIN3Code.GDPlayer4Objects1= [];
gdjs.WIN3Code.GDPlayer4Objects2= [];
gdjs.WIN3Code.GDNewSprite27eObjects1= [];
gdjs.WIN3Code.GDNewSprite27eObjects2= [];
gdjs.WIN3Code.GDnnObjects1= [];
gdjs.WIN3Code.GDnnObjects2= [];
gdjs.WIN3Code.GDBlackDecoratedButtonObjects1= [];
gdjs.WIN3Code.GDBlackDecoratedButtonObjects2= [];
gdjs.WIN3Code.GDCoinsObjects1= [];
gdjs.WIN3Code.GDCoinsObjects2= [];
gdjs.WIN3Code.GDCoins2Objects1= [];
gdjs.WIN3Code.GDCoins2Objects2= [];
gdjs.WIN3Code.GDCoins3Objects1= [];
gdjs.WIN3Code.GDCoins3Objects2= [];
gdjs.WIN3Code.GDEmote_9595StarObjects1= [];
gdjs.WIN3Code.GDEmote_9595StarObjects2= [];
gdjs.WIN3Code.GDEmote_9595Star4Objects1= [];
gdjs.WIN3Code.GDEmote_9595Star4Objects2= [];
gdjs.WIN3Code.GDEmote_9595Star2Objects1= [];
gdjs.WIN3Code.GDEmote_9595Star2Objects2= [];
gdjs.WIN3Code.GDEmote_9595Star3Objects1= [];
gdjs.WIN3Code.GDEmote_9595Star3Objects2= [];
gdjs.WIN3Code.GDNewText5Objects1= [];
gdjs.WIN3Code.GDNewText5Objects2= [];
gdjs.WIN3Code.GDTIMEObjects1= [];
gdjs.WIN3Code.GDTIMEObjects2= [];
gdjs.WIN3Code.GDTrObjects1= [];
gdjs.WIN3Code.GDTrObjects2= [];
gdjs.WIN3Code.GDTranObjects1= [];
gdjs.WIN3Code.GDTranObjects2= [];
gdjs.WIN3Code.GDLeft_9595arrow_9595buttonObjects1= [];
gdjs.WIN3Code.GDLeft_9595arrow_9595buttonObjects2= [];
gdjs.WIN3Code.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.WIN3Code.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.WIN3Code.GDTop_9595arrow_9595buttonObjects1= [];
gdjs.WIN3Code.GDTop_9595arrow_9595buttonObjects2= [];
gdjs.WIN3Code.GDTIME2Objects1= [];
gdjs.WIN3Code.GDTIME2Objects2= [];
gdjs.WIN3Code.GDNewText6Objects1= [];
gdjs.WIN3Code.GDNewText6Objects2= [];
gdjs.WIN3Code.GDfwObjects1= [];
gdjs.WIN3Code.GDfwObjects2= [];
gdjs.WIN3Code.GDNewText242323Objects1= [];
gdjs.WIN3Code.GDNewText242323Objects2= [];
gdjs.WIN3Code.GDNewText35tyetrObjects1= [];
gdjs.WIN3Code.GDNewText35tyetrObjects2= [];


gdjs.WIN3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.WIN3Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.WIN3Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), null));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.WIN3Code.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WIN3Code.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.WIN3Code.GDRedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WIN3Code.GDRedButtonObjects1[k] = gdjs.WIN3Code.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.WIN3Code.GDRedButtonObjects1.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WIN3Code.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WIN3Code.GDEmote_9595Star2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star3"), gdjs.WIN3Code.GDEmote_9595Star3Objects1);
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595Star3Objects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595Star3Objects1[i].getBehavior("Opacity").setOpacity(0);
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
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WIN3Code.GDEmote_9595StarObjects1);
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
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
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WIN3Code.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WIN3Code.GDEmote_9595Star2Objects1);
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(255);
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
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WIN3Code.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WIN3Code.GDEmote_9595Star2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star3"), gdjs.WIN3Code.GDEmote_9595Star3Objects1);
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595Star3Objects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595Star3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WIN3Code.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26880924);
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


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", "Left", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INIZIO", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText35tyetr"), gdjs.WIN3Code.GDNewText35tyetrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WIN3Code.GDNewText35tyetrObjects1.length;i<l;++i) {
    if ( !(gdjs.WIN3Code.GDNewText35tyetrObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.WIN3Code.GDNewText35tyetrObjects1[k] = gdjs.WIN3Code.GDNewText35tyetrObjects1[i];
        ++k;
    }
}
gdjs.WIN3Code.GDNewText35tyetrObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.WIN3Code.GDNewText35tyetrObjects1 */
{for(var i = 0, len = gdjs.WIN3Code.GDNewText35tyetrObjects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDNewText35tyetrObjects1[i].setBold(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText35tyetr"), gdjs.WIN3Code.GDNewText35tyetrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WIN3Code.GDNewText35tyetrObjects1.length;i<l;++i) {
    if ( gdjs.WIN3Code.GDNewText35tyetrObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.WIN3Code.GDNewText35tyetrObjects1[k] = gdjs.WIN3Code.GDNewText35tyetrObjects1[i];
        ++k;
    }
}
gdjs.WIN3Code.GDNewText35tyetrObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.WIN3Code.GDNewText35tyetrObjects1 */
{for(var i = 0, len = gdjs.WIN3Code.GDNewText35tyetrObjects1.length ;i < len;++i) {
    gdjs.WIN3Code.GDNewText35tyetrObjects1[i].setBold(false);
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

gdjs.copyArray(runtimeScene.getObjects("NewText35tyetr"), gdjs.WIN3Code.GDNewText35tyetrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WIN3Code.GDNewText35tyetrObjects1.length;i<l;++i) {
    if ( gdjs.WIN3Code.GDNewText35tyetrObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.WIN3Code.GDNewText35tyetrObjects1[k] = gdjs.WIN3Code.GDNewText35tyetrObjects1[i];
        ++k;
    }
}
gdjs.WIN3Code.GDNewText35tyetrObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/sprite_end_script/", runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.WIN3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WIN3Code.GDNewSpriteObjects1.length = 0;
gdjs.WIN3Code.GDNewSpriteObjects2.length = 0;
gdjs.WIN3Code.GDNewTextObjects1.length = 0;
gdjs.WIN3Code.GDNewTextObjects2.length = 0;
gdjs.WIN3Code.GDRedButtonObjects1.length = 0;
gdjs.WIN3Code.GDRedButtonObjects2.length = 0;
gdjs.WIN3Code.GDNewText2Objects1.length = 0;
gdjs.WIN3Code.GDNewText2Objects2.length = 0;
gdjs.WIN3Code.GDTitoloObjects1.length = 0;
gdjs.WIN3Code.GDTitoloObjects2.length = 0;
gdjs.WIN3Code.GDNewText3Objects1.length = 0;
gdjs.WIN3Code.GDNewText3Objects2.length = 0;
gdjs.WIN3Code.GDNewText4Objects1.length = 0;
gdjs.WIN3Code.GDNewText4Objects2.length = 0;
gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.WIN3Code.GDNewText7Objects1.length = 0;
gdjs.WIN3Code.GDNewText7Objects2.length = 0;
gdjs.WIN3Code.GDPlayer2Objects1.length = 0;
gdjs.WIN3Code.GDPlayer2Objects2.length = 0;
gdjs.WIN3Code.GDPlayer3Objects1.length = 0;
gdjs.WIN3Code.GDPlayer3Objects2.length = 0;
gdjs.WIN3Code.GDPlayer4Objects1.length = 0;
gdjs.WIN3Code.GDPlayer4Objects2.length = 0;
gdjs.WIN3Code.GDNewSprite27eObjects1.length = 0;
gdjs.WIN3Code.GDNewSprite27eObjects2.length = 0;
gdjs.WIN3Code.GDnnObjects1.length = 0;
gdjs.WIN3Code.GDnnObjects2.length = 0;
gdjs.WIN3Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.WIN3Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.WIN3Code.GDCoinsObjects1.length = 0;
gdjs.WIN3Code.GDCoinsObjects2.length = 0;
gdjs.WIN3Code.GDCoins2Objects1.length = 0;
gdjs.WIN3Code.GDCoins2Objects2.length = 0;
gdjs.WIN3Code.GDCoins3Objects1.length = 0;
gdjs.WIN3Code.GDCoins3Objects2.length = 0;
gdjs.WIN3Code.GDEmote_9595StarObjects1.length = 0;
gdjs.WIN3Code.GDEmote_9595StarObjects2.length = 0;
gdjs.WIN3Code.GDEmote_9595Star4Objects1.length = 0;
gdjs.WIN3Code.GDEmote_9595Star4Objects2.length = 0;
gdjs.WIN3Code.GDEmote_9595Star2Objects1.length = 0;
gdjs.WIN3Code.GDEmote_9595Star2Objects2.length = 0;
gdjs.WIN3Code.GDEmote_9595Star3Objects1.length = 0;
gdjs.WIN3Code.GDEmote_9595Star3Objects2.length = 0;
gdjs.WIN3Code.GDNewText5Objects1.length = 0;
gdjs.WIN3Code.GDNewText5Objects2.length = 0;
gdjs.WIN3Code.GDTIMEObjects1.length = 0;
gdjs.WIN3Code.GDTIMEObjects2.length = 0;
gdjs.WIN3Code.GDTrObjects1.length = 0;
gdjs.WIN3Code.GDTrObjects2.length = 0;
gdjs.WIN3Code.GDTranObjects1.length = 0;
gdjs.WIN3Code.GDTranObjects2.length = 0;
gdjs.WIN3Code.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.WIN3Code.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.WIN3Code.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.WIN3Code.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.WIN3Code.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.WIN3Code.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.WIN3Code.GDTIME2Objects1.length = 0;
gdjs.WIN3Code.GDTIME2Objects2.length = 0;
gdjs.WIN3Code.GDNewText6Objects1.length = 0;
gdjs.WIN3Code.GDNewText6Objects2.length = 0;
gdjs.WIN3Code.GDfwObjects1.length = 0;
gdjs.WIN3Code.GDfwObjects2.length = 0;
gdjs.WIN3Code.GDNewText242323Objects1.length = 0;
gdjs.WIN3Code.GDNewText242323Objects2.length = 0;
gdjs.WIN3Code.GDNewText35tyetrObjects1.length = 0;
gdjs.WIN3Code.GDNewText35tyetrObjects2.length = 0;

gdjs.WIN3Code.eventsList0(runtimeScene);
gdjs.WIN3Code.GDNewSpriteObjects1.length = 0;
gdjs.WIN3Code.GDNewSpriteObjects2.length = 0;
gdjs.WIN3Code.GDNewTextObjects1.length = 0;
gdjs.WIN3Code.GDNewTextObjects2.length = 0;
gdjs.WIN3Code.GDRedButtonObjects1.length = 0;
gdjs.WIN3Code.GDRedButtonObjects2.length = 0;
gdjs.WIN3Code.GDNewText2Objects1.length = 0;
gdjs.WIN3Code.GDNewText2Objects2.length = 0;
gdjs.WIN3Code.GDTitoloObjects1.length = 0;
gdjs.WIN3Code.GDTitoloObjects2.length = 0;
gdjs.WIN3Code.GDNewText3Objects1.length = 0;
gdjs.WIN3Code.GDNewText3Objects2.length = 0;
gdjs.WIN3Code.GDNewText4Objects1.length = 0;
gdjs.WIN3Code.GDNewText4Objects2.length = 0;
gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.WIN3Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.WIN3Code.GDNewText7Objects1.length = 0;
gdjs.WIN3Code.GDNewText7Objects2.length = 0;
gdjs.WIN3Code.GDPlayer2Objects1.length = 0;
gdjs.WIN3Code.GDPlayer2Objects2.length = 0;
gdjs.WIN3Code.GDPlayer3Objects1.length = 0;
gdjs.WIN3Code.GDPlayer3Objects2.length = 0;
gdjs.WIN3Code.GDPlayer4Objects1.length = 0;
gdjs.WIN3Code.GDPlayer4Objects2.length = 0;
gdjs.WIN3Code.GDNewSprite27eObjects1.length = 0;
gdjs.WIN3Code.GDNewSprite27eObjects2.length = 0;
gdjs.WIN3Code.GDnnObjects1.length = 0;
gdjs.WIN3Code.GDnnObjects2.length = 0;
gdjs.WIN3Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.WIN3Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.WIN3Code.GDCoinsObjects1.length = 0;
gdjs.WIN3Code.GDCoinsObjects2.length = 0;
gdjs.WIN3Code.GDCoins2Objects1.length = 0;
gdjs.WIN3Code.GDCoins2Objects2.length = 0;
gdjs.WIN3Code.GDCoins3Objects1.length = 0;
gdjs.WIN3Code.GDCoins3Objects2.length = 0;
gdjs.WIN3Code.GDEmote_9595StarObjects1.length = 0;
gdjs.WIN3Code.GDEmote_9595StarObjects2.length = 0;
gdjs.WIN3Code.GDEmote_9595Star4Objects1.length = 0;
gdjs.WIN3Code.GDEmote_9595Star4Objects2.length = 0;
gdjs.WIN3Code.GDEmote_9595Star2Objects1.length = 0;
gdjs.WIN3Code.GDEmote_9595Star2Objects2.length = 0;
gdjs.WIN3Code.GDEmote_9595Star3Objects1.length = 0;
gdjs.WIN3Code.GDEmote_9595Star3Objects2.length = 0;
gdjs.WIN3Code.GDNewText5Objects1.length = 0;
gdjs.WIN3Code.GDNewText5Objects2.length = 0;
gdjs.WIN3Code.GDTIMEObjects1.length = 0;
gdjs.WIN3Code.GDTIMEObjects2.length = 0;
gdjs.WIN3Code.GDTrObjects1.length = 0;
gdjs.WIN3Code.GDTrObjects2.length = 0;
gdjs.WIN3Code.GDTranObjects1.length = 0;
gdjs.WIN3Code.GDTranObjects2.length = 0;
gdjs.WIN3Code.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.WIN3Code.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.WIN3Code.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.WIN3Code.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.WIN3Code.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.WIN3Code.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.WIN3Code.GDTIME2Objects1.length = 0;
gdjs.WIN3Code.GDTIME2Objects2.length = 0;
gdjs.WIN3Code.GDNewText6Objects1.length = 0;
gdjs.WIN3Code.GDNewText6Objects2.length = 0;
gdjs.WIN3Code.GDfwObjects1.length = 0;
gdjs.WIN3Code.GDfwObjects2.length = 0;
gdjs.WIN3Code.GDNewText242323Objects1.length = 0;
gdjs.WIN3Code.GDNewText242323Objects2.length = 0;
gdjs.WIN3Code.GDNewText35tyetrObjects1.length = 0;
gdjs.WIN3Code.GDNewText35tyetrObjects2.length = 0;


return;

}

gdjs['WIN3Code'] = gdjs.WIN3Code;
