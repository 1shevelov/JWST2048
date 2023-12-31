import { INinePatchConfig } from "@koreez/phaser3-ninepatch";
import { getSellCheckMarkIconBtnIconConfig } from "./IconConfig";
import { getSellBtnPatchesConfig } from "./NinePatchConfig";
import { getSellBtnTextConfig } from "./TextConfig";

const getSellBtnNinePatchConfig = (state: string): INinePatchConfig => {
    return {
        x: 0,
        y: 0,
        width: 540,
        height: 144,
        ...getSellBtnPatchesConfig(state),
    };
};

export function getSellButtonConfig(): NinePatchButtonConfig {
    const enabledText = getSellBtnTextConfig(true);
    const disabledText = getSellBtnTextConfig(false);
    const icon = getSellCheckMarkIconBtnIconConfig(-140);
    return {
        states: {
            up: {
                bkg: getSellBtnNinePatchConfig("up"),
                text: enabledText,
                icon,
            },
            over: {
                bkg: getSellBtnNinePatchConfig("over"),
                text: enabledText,
                icon,
            },
            down: {
                bkg: getSellBtnNinePatchConfig("down"),
                text: enabledText,
                icon,
            },
            disabled: {
                bkg: getSellBtnNinePatchConfig("disabled"),
                text: disabledText,
            },
        },
    };
}
