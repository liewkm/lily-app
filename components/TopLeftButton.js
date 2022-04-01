import { Text, View } from 'react-native';

function TopLeftButton({children}) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}

export default TopLeftButton;