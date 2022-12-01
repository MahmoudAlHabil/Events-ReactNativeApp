import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components'

const CustomPackageScreen = () => {
    const { navigate, goBack } = useNavigation()
    return (
        <View>
            <View style={styles.buttons}>
                <Button title="إلغاء" onPress={goBack}
                    buttonStyle={styles.cancelButton}
                    titleStyle={styles.cancelButtonText} />
                <Button title="التالي" onPress={() => navigate('OrganizersScreen')}
                    titleStyle={styles.nextButtonText}
                    buttonStyle={styles.nextButton} />
            </View>
        </View>
    )
}

export default CustomPackageScreen

const styles = StyleSheet.create({})