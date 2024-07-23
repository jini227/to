import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

const ActionSheet = props => {
    const { actionItems } = props;
    const actionSheetItems = [...actionItems];

    return (
        <View style={styles.modalContent}>
            <Text style={styles.title}>이미지 업로드</Text>
            <View>
                {actionSheetItems.map((actionItem, index) => {
                    return (
                        <TouchableWithoutFeedback key={index} onPress={actionItem.onPress}>
                            <View style={styles.itemWrap}>
                                <Text style={styles.itemText}>{actionItem.label}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        ...ifIphoneX(
            {
                paddingBottom: 20 + getBottomSpace(),
            },
            {
                paddingBottom: 40,
            },
        ),
    },
    title: {
        paddingTop: 20,
        paddingBottom: 16,
        fontSize: 12,
        lineHeight: 15,

        color: '#AFAFB5',
        textAlign: 'center',
    },
    itemWrap: {
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 1,
        paddingVertical: 20,
    },
    itemText: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 16,
        lineHeight: 19,
    },
});

export default ActionSheet;
