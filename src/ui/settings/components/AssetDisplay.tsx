import { Asset } from "@types";
import { ReactNative as RN, stylesheet, clipboard } from "@metro/common";
import { showToast } from "@ui/toasts";
import { getAssetIDByName } from "@ui/assets";
import { Forms } from "@ui/components";

interface AssetDisplayProps {
    asset: Asset;
}

const { FormRow } = Forms;

const styles = stylesheet.createThemedStyleSheet({
    asset: {
        width: 32,
        height: 32,
    }
});

export default function AssetDisplay({ asset }: AssetDisplayProps) {
    return (
        <FormRow
            label={`${asset.name} - ${asset.id}`}
            trailing={<RN.Image source={asset.id} style={styles.asset} />}
            onPress={() => {
                clipboard.setString(asset.name);
                showToast("Copied asset name to clipboard.", getAssetIDByName("toast_copy_link"));
            }}
        />
    )
}