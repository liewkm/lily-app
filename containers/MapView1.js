import { View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import TopLeftButton from '../components/TopLeftButton';

function MapView1() {
    return (
    <View>
        <TopLeftButton>Back</TopLeftButton>
        <PrimaryButton>Start</PrimaryButton>
    </View>
    );
}

export default MapView1;