import * as React from 'react';
import {Text, View} from 'react-native';
import {FC} from 'react';

const ListTab: FC = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>There will be list of todos</Text>
        </View>
    );
}

export default ListTab;
